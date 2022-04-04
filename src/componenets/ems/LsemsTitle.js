import React, { useState, useEffect, useRef } from 'react';
import { useSelector, connect } from 'react-redux';

import { BT_BRIK } from '../../utils/fontTypes';
import { EMS_LAYOUT_SETTINGS } from '../../actions/types';

import TitleImg from '../../assets/images/ems/title.png';
import HeaderCanvas from '../shared/HeaderCanvas';
import generateCanvas from '../../utils/generateCanvas';

import { loadLayoutSettings } from '../../actions/settingsWidget';

const LsemsTitle = ({ loadLayoutSettings }) => {
  const canvas = useRef();
  const canvasImage = useRef();
  const [canvasInputOne, setCanvasInputOne] = useState('');

  const { title } = useSelector((state) => state.ems.layout);

  const { inputOne } = title;

  const setLayout = () =>
    loadLayoutSettings(EMS_LAYOUT_SETTINGS, `ems.title`, {
      height: canvasImage.current.naturalHeight,
      width: canvasImage.current.naturalWidth,
    });

  const renderCanvas = () => {
    generateCanvas({
      canvas: canvas.current,
      canvasImage: canvasImage.current,
      textAlign: 'start',
      fillStyle: 'white',
      fontFamily: BT_BRIK,
      inputOne: {
        fontSize: inputOne.fontSize,
        value: canvasInputOne,
        xAxis: inputOne.xAxis,
        yAxis: inputOne.yAxis,
      },
    });
  };

  useEffect(() => {
    renderCanvas();
  }, [canvasInputOne, title]);

  return (
    <div className='container'>
      <HeaderCanvas
        img={TitleImg}
        canvas={canvas}
        canvasImage={canvasImage}
        renderCanvas={renderCanvas}
        setLayout={setLayout}
      />
      <div className='inputs mb-5 form-group d-flex justify-content-center align-content-center flex-column text-center'>
        <label>Title/Separator</label>
        <input
          type='text'
          className='form-control'
          spellCheck='false'
          value={canvasInputOne}
          onChange={(ev) => setCanvasInputOne(ev.target.value)}
        />
      </div>
    </div>
  );
};

export default connect(null, { loadLayoutSettings })(LsemsTitle);
