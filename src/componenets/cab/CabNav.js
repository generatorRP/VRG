import React from 'react';
import { NavLink } from 'react-router-dom';
import BackToHome from '../widgets/BackToHome';

const CabNav = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-custom'>
      <div className='container'>
        <BackToHome color='rgb(246, 237, 185)' />
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink
              end
              to=''
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Header
            </NavLink>
            <NavLink
              end
              to='title'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Title
            </NavLink>
            <NavLink
              end
              to='signature'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Signature
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CabNav;
