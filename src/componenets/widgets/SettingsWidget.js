import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Box, Drawer, Divider, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';

import SettingsGroup from './SettingsGroup';

const SettingsWidget = ({ color = '#000' }) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const layout = useSelector((state) => {
    let { layoutName, layoutAction } = state.settingsWidget;
    return layoutName ? { ...state[layoutName].layout[layoutAction] } : {};
  });

  return (
    <>
      {!open && (
        <div className='settings-widget' style={{ backgroundColor: color }}>
          <div className='icon' onClick={toggleSidebar}>
            <Settings fontSize='large' />
          </div>
        </div>
      )}
      <Drawer open={open} anchor='right' onClose={toggleSidebar}>
        <Box className='panel' component={'div'}>
          <button
            type='button'
            className='btn-close'
            onClick={toggleSidebar}
          ></button>
          <Box component='div'>
            <Typography variant='h5' className='mb-1'>
              Generator Configuration
            </Typography>
            <Divider className='mb-3' />
            <Box component='div'>
              {Object.entries(layout).map((entry) => (
                <SettingsGroup entry={entry} key={`${entry[0]}`} />
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingsWidget;
