import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect, useSelector } from 'react-redux';

import { SANS_PRO } from '../../utils/fontTypes';

import SignatureImg from '../../assets/images/cab/signature.png';
import HeaderCanvas from '../shared/HeaderCanvas';
import SignatureItem from '../shared/SignatureItem';
import generateCanvas from '../../utils/generateCanvas';

import { loadLayoutSettings } from '../../actions/settingsWidget';
import { CAB_LAYOUT_SETTINGS } from '../../actions/types';

const CabSignature = ({ loadLayoutSettings }) => {
  const canvas = useRef();
  const canvasImage = useRef();
  const [signatureData, setSignatureData] = useState({
    fullname: '',
    badge: '',
    canvasInputOne: '',
    canvasInputTwo: '',
  });
  const [selectedRank, setSelectedRank] = useState(null);

  const { ranks } = useSelector((state) => state.cab);

  const { signature } = useSelector((state) => state.cab.layout);

  const setLayout = () =>
    loadLayoutSettings(CAB_LAYOUT_SETTINGS, 'cab.signature', {
      height: canvasImage.current.naturalHeight,
      width: canvasImage.current.naturalWidth,
    });

  const { fullname, badge, canvasInputOne, canvasInputTwo } = signatureData;

  const renderCanvas = () => {
    generateCanvas({
      canvas: canvas.current,
      canvasImage: canvasImage.current,
      textAlign: 'left',
      fillStyle: 'white',
      fontFamily: SANS_PRO,
      fullname: {
        fontSize: signature.fullname.fontSize,
        value: fullname,
        xAxis: signature.fullname.xAxis,
        yAxis: signature.fullname.yAxis,
      },
      badge: {
        fontSize: signature.badge.fontSize,
        value: badge,
        xAxis: signature.badge.xAxis,
        yAxis: signature.badge.yAxis,
      },
      rankText: selectedRank && {
        fontSize: signature.rankText.fontSize,
        value: selectedRank,
        xAxis: signature.rankText.xAxis,
        yAxis: signature.rankText.yAxis,
      },
      inputOne: {
        fontSize: signature.inputOne.fontSize,
        value: canvasInputOne,
        xAxis: signature.inputOne.xAxis,
        yAxis: signature.inputOne.yAxis,
      },
      inputTwo: {
        fontSize: signature.inputTwo.fontSize,
        value: canvasInputTwo,
        xAxis: signature.inputTwo.xAxis,
        yAxis: signature.inputTwo.yAxis,
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
    signature,
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
            key={uuidv4()}
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
        setLayout={setLayout}
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

export default connect(null, { loadLayoutSettings })(CabSignature);
