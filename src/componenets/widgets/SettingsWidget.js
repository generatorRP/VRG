import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Divider,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Settings, TextFields } from '@mui/icons-material';

const SettingsWidget = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      {!open && (
        <div className='settings-widget'>
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
            <Typography variant='h6' className='mb-3'>
              Generator Settings
            </Typography>
            <Box className='wrapper' component='div'>
              <div className='px-2 py-3'>
                <TextField
                  label='Header 1'
                  variant='outlined'
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <TextFields />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className='px-2 py-3'>
                <TextField
                  label='Header 2'
                  variant='outlined'
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <TextFields />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingsWidget;
