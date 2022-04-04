import React, { useState, useEffect, useRef } from 'react';
import { useSelector, connect } from 'react-redux';

import { BT_BRIK } from '../../utils/fontTypes';

import HeaderImg from '../../assets/images/ems/header.png';
import HeaderCanvas from '../shared/HeaderCanvas';
import generateCanvas from '../../utils/generateCanvas';

import { loadLayoutSettings } from '../../actions/settingsWidget';
import { EMS_LAYOUT_SETTINGS } from '../../actions/types';

const LsemsHeader = ({ loadLayoutSettings }) => {
  const canvas = useRef();
  const canvasImage = useRef();
  const [canvasInputOne, setCanvasInputOne] = useState('');
  const [canvasInputTwo, setCanvasInputTwo] = useState('');

  const { header } = useSelector((state) => state.ems.layout);

  const { inputOne, inputTwo } = header;

  const setLayout = () =>
    loadLayoutSettings(EMS_LAYOUT_SETTINGS, `ems.header`, {
      height: canvasImage.current.naturalHeight,
      width: canvasImage.current.naturalWidth,
    });

  const renderCanvas = () => {
    generateCanvas({
      canvas: canvas.current,
      canvasImage: canvasImage.current,
      textAlign: 'center',
      fillStyle: 'white',
      fontFamily: BT_BRIK,
      inputOne: {
        fontSize: inputOne.fontSize,
        value: canvasInputOne,
        xAxis: inputOne.xAxis,
        yAxis: inputOne.yAxis,
      },
      inputTwo: {
        fontSize: inputTwo.fontSize,
        value: canvasInputTwo,
        xAxis: inputTwo.xAxis,
        yAxis: inputTwo.yAxis,
      },
    });
  };

  useEffect(() => {
    renderCanvas();
  }, [canvasInputOne, canvasInputTwo, header]);

  return (
    <div className='container'>
      <HeaderCanvas
        img={HeaderImg}
        canvas={canvas}
        canvasImage={canvasImage}
        renderCanvas={renderCanvas}
        setLayout={setLayout}
      />
      <div className='inputs my-4 form-group d-flex justify-content-center align-content-center flex-column text-center'>
        <label>Header 1</label>
        <input
          type='text'
          className='form-control'
          spellCheck='false'
          value={canvasInputOne}
          onChange={(ev) => setCanvasInputOne(ev.target.value)}
        />
        <label>Header 2 (Optional)</label>
        <input
          type='text'
          className='form-control'
          spellCheck='false'
          value={canvasInputTwo}
          onChange={(ev) => setCanvasInputTwo(ev.target.value)}
        />
      </div>
    </div>
  );
};

export default connect(null, { loadLayoutSettings })(LsemsHeader);
