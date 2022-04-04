import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import LsemsNav from './LsemsNav';
import LsemsHeader from './LsemsHeader';
import LsemsTitle from './LsemsTitle';
import LsemsFav from '../../assets/images/ems/favicon.png';
import SettingsWidget from '../widgets/SettingsWidget';

import { changeFavIcon, changeSiteName } from '../../utils/siteSettings';
import LsemsSignature from './LsemsSignature';

const Lsems = () => {
  useEffect(() => {
    changeFavIcon(LsemsFav);
    changeSiteName('Los Santos Emeregency Medical Services');
  }, []);
  return (
    <>
      <div className='generator-page ems'>
        <LsemsNav />
        <SettingsWidget color={'rgb(103, 5, 0)'} />
        <Routes>
          <Route index element={<LsemsHeader />} />
          <Route path='title' element={<LsemsTitle />} />
          <Route path='signature' element={<LsemsSignature />} />
          <Route path='*' element={<h2>NOT FOUND</h2>} />
        </Routes>
      </div>
      <Outlet />
    </>
  );
};

export default Lsems;
