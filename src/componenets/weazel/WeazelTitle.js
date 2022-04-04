import React, { useState, useEffect, useRef } from 'react';
import { useSelector, connect } from 'react-redux';

import TitleImg from '../../assets/images/weazel/title.png';
import HeaderCanvas from '../shared/HeaderCanvas';
import generateCanvas from '../../utils/generateCanvas';

import { BT_BRIK } from '../../utils/fontTypes';
import { loadLayoutSettings } from '../../actions/settingsWidget';
import { WEAZEL_LAYOUT_SETTINGS } from '../../actions/types';

const WeazelTitle = ({ loadLayoutSettings }) => {
  const canvas = useRef();
  const canvasImage = useRef();
  const [canvasInputOne, setCanvasInputOne] = useState('');

  const { title } = useSelector((state) => state.weazel.layout);

  const { inputOne } = title;

  const setLayout = () =>
    loadLayoutSettings(WEAZEL_LAYOUT_SETTINGS, `weazel.title`, {
      height: canvasImage.current.naturalHeight,
      width: canvasImage.current.naturalWidth,
    });

  const renderCanvas = () => {
    generateCanvas({
      canvas: canvas.current,
      canvasImage: canvasImage.current,
      textAlign: 'start',
      fillStyle: '#2a2a2a',
      shadowColor: '#696969',
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

export default connect(null, { loadLayoutSettings })(WeazelTitle);
