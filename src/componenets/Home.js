import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { changeFavIcon, changeSiteName } from '../utils/siteSettings';

import Fav from '../assets/images/generator-logo.png';
import EmsLogo from '../assets/images/ems/logo.png';
import WeazelLogo from '../assets/images/weazel/logo.png';
import CabLogo from '../assets/images/cab/logo.png';
import { Button } from '@mui/material';
import { PostAdd } from '@mui/icons-material';

const Home = () => {
  useEffect(() => {
    changeFavIcon(Fav);
    changeSiteName('Vital RP Generator');
  }, []);

  return (
    <div className='generator-page'>
      <div className='home-page d-flex justify-content-center align-items-center flex-column'>
        <div className='d-flex'>
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
        <div>
          <Link to='text'>
            <Button variant='text'>
              <PostAdd fontSize='large' className='mr-3' /> Templates
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
