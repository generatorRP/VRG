import React, { useState, useEffect, useRef } from 'react';
import HeaderImg from '../../assets/images/cab/header.png';
import HeaderCanvas from '../shared/HeaderCanvas';

const CabHeader = () => {
  const canvas = useRef();
  const canvasImage = useRef();
  const [canvasInputOne, setCanvasInputOne] = useState('');
  const [canvasInputTwo, setCanvasInputTwo] = useState('');

  const renderCanvas = () => {
    const ctx = canvas.current.getContext('2d');
    canvas.current.width = canvasImage.current.naturalWidth;
    canvas.current.height = canvasImage.current.naturalHeight;
    ctx.drawImage(canvasImage.current, 0, 0);
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    // Draw cached Text
    ctx.shadowOffsetY = 5;
    ctx.shadowColor = 'rgba(0,0,0, 1)';
    ctx.shadowBlur = 5;
    // Text starts centered at 1190
    ctx.font = '72px BTBrikRegular';
    ctx.fillText(canvasInputOne.toUpperCase().trim(), 1100, 140);
    ctx.font = '52px BTBrikRegular';
    ctx.fillText(canvasInputTwo.toUpperCase().trim(), 1100, 200);
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

export default CabHeader;
