import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import WeazelNav from './WeazelNav';
import WeazelHeader from './WeazelHeader';
import WeazelTitle from './WeazelTitle';
import WeazelFav from '../../assets/images/weazel/logo.png';

import { changeFavIcon, changeSiteName } from '../../utils/siteSettings';

const Weazel = () => {
  useEffect(() => {
    changeFavIcon(WeazelFav);
    changeSiteName('Weazel News');
  }, []);
  return (
    <>
      <div className='generator-page weazel'>
        <WeazelNav />
        <Routes>
          <Route index element={<WeazelHeader />} />
          <Route path='title' element={<WeazelTitle />} />
          <Route path='signature' element={<h2>Signature</h2>} />
          <Route path='*' element={<h2>NOT FOUND</h2>} />
        </Routes>
      </div>
      <Outlet />
    </>
  );
};

export default Weazel;
