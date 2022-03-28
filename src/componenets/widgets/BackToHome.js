import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowCircleLeftOutlined } from '@mui/icons-material';

const BackToHome = ({ color = 'inherit' }) => {
  return (
    <Link
      to='/'
      style={{ color }}
      className='navbar-brand lead fw-bold return-home'
    >
      <ArrowCircleLeftOutlined fontSize='large' className='me-2' />
      <span>Home</span>
    </Link>
  );
};

export default BackToHome;
