import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { changeFavIcon, changeSiteName } from '../utils/siteSettings';

import Fav from '../assets/images/generator-logo.png';
import EmsLogo from '../assets/images/ems/logo.png';
import WeazelLogo from '../assets/images/weazel/logo.png';
import CabLogo from '../assets/images/cab/logo.png';

const Home = () => {
  useEffect(() => {
    changeFavIcon(Fav);
    changeSiteName('Vital RP Generator');
  }, []);
  return (
    <div className='home-page d-flex justify-content-center align-items-center'>
      <div className='logo'>
        <Link to='ems'>
          <img src={EmsLogo} className='logo-item' alt='Los Santos EMS' />
        </Link>
      </div>
      <div className='logo'>
        <Link to='weazel'>
          <img src={WeazelLogo} className='logo-item' alt='Weazel' />
        </Link>
      </div>
      <div className='logo'>
        <Link to='cab'>
          <img src={CabLogo} className='logo-item' alt='Downtown Cab Co.' />
        </Link>
      </div>
    </div>
  );
};

export default Home;
