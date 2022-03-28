import React, { useState } from 'react';
import { Settings } from '@mui/icons-material';

const SettingsWidget = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`settings-widget ${isActive ? 'active' : ''}`}>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='icon' onClick={() => setIsActive(!isActive)}>
          <Settings fontSize='large' />
        </div>
        <div className={`settings-form ${isActive ? 'active' : ''}`}>
          <div className='form-group mb-3'>
            <label htmlFor=''></label>
            <input type='text' name='' id='' className='form-control' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsWidget;
