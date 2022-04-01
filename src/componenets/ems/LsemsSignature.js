import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import SignatureImg from '../../assets/images/ems/signature.png';
import HeaderCanvas from '../shared/HeaderCanvas';
import SignatureItem from '../shared/SignatureItem';
import generateCanvas from '../../utils/generateCanvas';
import { SANS_PRO } from '../../utils/fontTypes';

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
    generateCanvas({
      canvas: canvas.current,
      canvasImage: canvasImage.current,
      textAlign: 'left',
      fillStyle: 'white',
      fontFamily: SANS_PRO,
      fullname: {
        fontSize: 60,
        value: fullname,
        xAxis: 700,
        yAxis: 130,
      },
      badge: {
        fontSize: 46,
        value: badge,
        xAxis: 700,
        yAxis: 190,
      },
      rankImg: selectedRankImg && {
        img: rankImg.current,
        xAxis: 465,
        yAxis: 105,
      },
      firstInput: {
        fontSize: 34,
        value: canvasInputOne,
        xAxis: 700,
        yAxis: 260,
      },
      secondInput: {
        fontSize: 34,
        value: canvasInputTwo,
        xAxis: 700,
        yAxis: 310,
      },
    });
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
