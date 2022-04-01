import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import SignatureImg from '../../assets/images/cab/signature.png';
import HeaderCanvas from '../shared/HeaderCanvas';
import SignatureItem from '../shared/SignatureItem';
import generateCanvas from '../../utils/generateCanvas';
import { SANS_PRO } from '../../utils/fontTypes';

const CabSignature = () => {
  const canvas = useRef();
  const canvasImage = useRef();
  const [signatureData, setSignatureData] = useState({
    fullname: '',
    badge: '',
    canvasInputOne: '',
    canvasInputTwo: '',
  });
  const [selectedRank, setSelectedRank] = useState(null);

  const { ranks } = useSelector((state) => state.config.cab);

  const { fullname, badge, canvasInputOne, canvasInputTwo } = signatureData;

  const renderCanvas = () => {
    generateCanvas({
      canvas: canvas.current,
      canvasImage: canvasImage.current,
      textAlign: 'left',
      fillStyle: 'white',
      fullname: {
        fontSize: 68,
        value: fullname,
        xAxis: 500,
        yAxis: 130,
      },
      badge: {
        fontSize: 46,
        value: badge,
        xAxis: 500,
        yAxis: 190,
      },
      rankText: selectedRank && {
        fontSize: 34,
        value: selectedRank,
        xAxis: 500,
        yAxis: 255,
      },
      firstInput: {
        fontSize: 34,
        value: canvasInputOne,
        xAxis: 500,
        yAxis: 305,
      },
      secondInput: {
        fontSize: 34,
        value: canvasInputTwo,
        xAxis: 500,
        yAxis: 350,
      },
    });
  };

  useEffect(() => {
    renderCanvas();
  }, [fullname, badge, canvasInputOne, canvasInputTwo, selectedRank]);

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
          />
        ))}
      </div>

      <HeaderCanvas
        img={SignatureImg}
        canvas={canvas}
        canvasImage={canvasImage}
        renderCanvas={renderCanvas}
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

export default CabSignature;
