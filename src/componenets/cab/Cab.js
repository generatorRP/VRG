import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import CabNav from './CabNav';
import CabHeader from './CabHeader';
import CabTitle from './CabTitle';
import CabFav from '../../assets/images/cab/logo.png';
import SettingsWidget from '../widgets/SettingsWidget';

import { changeFavIcon, changeSiteName } from '../../utils/siteSettings';
import CabSignature from './CabSignature';

const Cab = () => {
  useEffect(() => {
    changeFavIcon(CabFav);
    changeSiteName('DownTown Cab Co.');
  }, []);
  return (
    <>
      <div className='cab'>
        <CabNav />
        <SettingsWidget />
        <Routes>
          <Route index element={<CabHeader />} />
          <Route path='title' element={<CabTitle />} />
          <Route path='signature' element={<CabSignature />} />
          <Route path='*' element={<h2>NOT FOUND</h2>} />
        </Routes>
      </div>
      <Outlet />
    </>
  );
};

export default Cab;
