import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import SignatureImg from '../../assets/images/ems/signature.png';
import HeaderCanvas from '../shared/HeaderCanvas';
import SignatureItem from '../shared/SignatureItem';

const LsemsSignature = () => {
  const canvas = useRef();
  const rankImg = useRef();
  const canvasImage = useRef();
  const [signatureData, setSignatureData] = useState({
    fullname: '',
    badge: '',
    canvasInputOne: '',
    canvasInputTwo: '',
  });
  const [selectedRank, setSelectedRank] = useState(null);
  const [selectedRankImg, setSelectedRankImg] = useState(null);

  const { ranks } = useSelector((state) => state.config.ems);

  const { fullname, badge, canvasInputOne, canvasInputTwo } = signatureData;

  const renderCanvas = () => {
    const ctx = canvas.current.getContext('2d');
    canvas.current.width = canvasImage.current.naturalWidth;
    canvas.current.height = canvasImage.current.naturalHeight;
    ctx.textAlign = 'left';
    ctx.fillStyle = 'white';
    ctx.drawImage(canvasImage.current, 0, 0);
    if (selectedRankImg) {
      ctx.drawImage(rankImg.current, 465, 105);
    }
    // Set text properties
    ctx.shadowOffsetY = 5;
    ctx.shadowOffsetx = 4;
    ctx.shadowColor = 'rgb(0,0,0)';
    ctx.shadowBlur = 4;

    ctx.font = '60px Source Sans Pro';
    ctx.fillText(fullname.toUpperCase().trim(), 700, 130);
    ctx.font = '46px Source Sans Pro';
    ctx.fillText(badge.toUpperCase().trim(), 700, 190);
    ctx.shadowOffsetY = 3;
    ctx.shadowOffsetx = 3;
    ctx.shadowBlur = 1;
    ctx.font = '34px Source Sans Pro';
    ctx.fontWeight = 'bold';
    ctx.fillText(canvasInputOne.toUpperCase().trim(), 700, 260);
    ctx.fillText(canvasInputTwo.toUpperCase().trim(), 700, 310);
  };

  useEffect(() => {
    renderCanvas();
  }, [
    fullname,
    badge,
    canvasInputOne,
    canvasInputTwo,
    selectedRank,
    selectedRankImg,
  ]);

  const onChange = (e) => {
    setSignatureData({
      ...signatureData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='container'>
      <div className='row justify-content-between mt-3 px-2 ranks'>
        {ranks.map((rank) => (
          <SignatureItem
            key={`${rank}-${Math.floor(Math.random() * 10)}`}
            value={rank}
            selected={rank === selectedRank}
            setSelectedRank={setSelectedRank}
            setSelectedRankImg={setSelectedRankImg}
          />
        ))}
      </div>

      <HeaderCanvas
        img={SignatureImg}
        canvas={canvas}
        canvasImage={canvasImage}
        renderCanvas={renderCanvas}
      />

      <img
        src={selectedRankImg}
        onLoad={renderCanvas}
        ref={rankImg}
        className='d-none'
        alt=''
      />

      <form className='inputs my-4 form-group d-flex justify-content-center align-content-center flex-column text-sm-left'>
        <div className='row'>
          <div className='col-6 '>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              spellCheck='false'
              name='fullname'
              value={fullname}
              onChange={(ev) => onChange(ev)}
            />
          </div>
          <div className='col-6'>
            <label>Badge Number</label>
            <input
              type='text'
              className='form-control'
              spellCheck='false'
              name='badge'
              value={badge}
              onChange={(ev) => onChange(ev)}
            />
          </div>
        </div>
        <label>Position/Office</label>
        <input
          type='text'
          className='form-control'
          spellCheck='false'
          name='canvasInputOne'
          value={canvasInputOne}
          onChange={(ev) => onChange(ev)}
        />
        <label>Position/Office</label>
        <input
          type='text'
          className='form-control'
          spellCheck='false'
          name='canvasInputTwo'
          value={canvasInputTwo}
          onChange={(ev) => onChange(ev)}
        />
      </form>
    </div>
  );
};

export default LsemsSignature;
