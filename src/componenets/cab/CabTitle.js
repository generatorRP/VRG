import React, { useState, useEffect, useRef } from 'react';
import TitleImg from '../../assets/images/cab/title.png';
import HeaderCanvas from '../shared/HeaderCanvas';
import generateCanvas from '../../utils/generateCanvas';
import { BT_BRIK } from '../../utils/fontTypes';

const CabTitle = () => {
  const canvas = useRef();
  const canvasImage = useRef();
  const [canvasInputOne, setCanvasInputOne] = useState('');

  const renderCanvas = () => {
    generateCanvas({
      canvas: canvas.current,
      canvasImage: canvasImage.current,
      textAlign: 'start',
      fillStyle: 'white',
      fontFamily: BT_BRIK,
      firstInput: {
        fontSize: 52,
        value: canvasInputOne,
        xAxis: 50,
        yAxis: 50,
      },
    });
  };

  useEffect(() => {
    renderCanvas();
  }, [canvasInputOne]);

  return (
    <div className='container'>
      <HeaderCanvas
        img={TitleImg}
        canvas={canvas}
        canvasImage={canvasImage}
        renderCanvas={renderCanvas}
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

export default CabTitle;
