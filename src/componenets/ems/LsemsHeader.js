import React, { useState, useEffect, useRef } from 'react';
import HeaderImg from '../../assets/images/ems/header.png';
import HeaderCanvas from '../shared/HeaderCanvas';
import generateCanvas from '../../utils/generateCanvas';
import { BT_BRIK } from '../../utils/fontTypes';

const LsemsHeader = () => {
  const canvas = useRef();
  const canvasImage = useRef();
  const [canvasInputOne, setCanvasInputOne] = useState('');
  const [canvasInputTwo, setCanvasInputTwo] = useState('');

  const renderCanvas = () => {
    generateCanvas({
      canvas: canvas.current,
      canvasImage: canvasImage.current,
      textAlign: 'center',
      fillStyle: 'white',
      fontFamily: BT_BRIK,
      firstInput: {
        fontSize: 72,
        value: canvasInputOne,
        xAxis: 1190,
        yAxis: 140,
      },
      secondInput: {
        fontSize: 52,
        value: canvasInputTwo,
        xAxis: 1190,
        yAxis: 190,
      },
    });
  };

  useEffect(() => {
    renderCanvas();
  }, [canvasInputOne, canvasInputTwo]);

  return (
    <div className='container'>
      <HeaderCanvas
        img={HeaderImg}
        canvas={canvas}
        canvasImage={canvasImage}
        renderCanvas={renderCanvas}
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

export default LsemsHeader;
