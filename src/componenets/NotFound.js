import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <h2>NotFound</h2>
      <h2>{pathname}</h2>
    </div>
  );
};

export default NotFound;
