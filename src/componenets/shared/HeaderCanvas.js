import React from 'react';

const HeaderCanvas = ({ renderCanvas, canvas, canvasImage, img }) => {
  return (
    <div>
      <canvas
        className='canvas my-5'
        ref={canvas}
        style={{ height: '0' }}
      ></canvas>
      <img
        className='canvas-image'
        ref={canvasImage}
        src={img}
        alt=''
        onLoad={() => {
          renderCanvas();
          canvas.current.style.height = 'auto';
        }}
      />
    </div>
  );
};

export default HeaderCanvas;
