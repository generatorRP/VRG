import React, { useState, useEffect, useRef } from 'react';
import TitleImg from '../../assets/images/weazel/title.png';
import HeaderCanvas from '../shared/HeaderCanvas';

const WeazelTitle = () => {
  const canvas = useRef();
  const canvasImage = useRef();
  const [canvasInputOne, setCanvasInputOne] = useState('');

  const renderCanvas = () => {
    const ctx = canvas.current.getContext('2d');
    canvas.current.width = canvasImage.current.naturalWidth;
    canvas.current.height = canvasImage.current.naturalHeight;
    ctx.drawImage(canvasImage.current, 0, 0);
    ctx.textAlign = 'start';
    ctx.fillStyle = '#2a2a2a';
    ctx.shadowOffsetY = 5;
    ctx.shadowColor = '#696969';
    ctx.shadowBlur = 5;
    ctx.font = '52px BTBrikRegular';
    ctx.fillText(canvasInputOne.toUpperCase().trim(), 50, 50);
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

export default WeazelTitle;
