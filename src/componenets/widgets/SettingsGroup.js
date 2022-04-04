import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import SettingsItem from './SettingsItem';

const SettingsGroup = ({ entry }) => {
  const title = entry[0].revertCamelCase().toCapitalCase();
  const parent = entry[0];

  const genState = entry[1];

  const dispatch = useDispatch();
  const { actionType, layoutAction, canvas } = useSelector(
    (state) => state.settingsWidget
  );

  const updateState = (name, value) => {
    if (name.toLowerCase() == 'xaxis') {
      if (value > canvas.width) {
        value = canvas.width;
      } else if (value < 0) {
        value = 0;
      }
    }
    if (name.toLowerCase() == 'yaxis') {
      if (value > canvas.height) {
        value = canvas.height;
      } else if (value < 0) {
        value = 0;
      }
    }
    dispatch({
      type: actionType,
      payload: {
        layoutAction,
        layoutValue: {
          [parent]: {
            [name]: value,
          },
        },
      },
    });
  };

  return (
    <Box className='wrapper' component={'div'}>
      <Typography className='text-capitalize layout-label' variant='h6'>
        {title}
      </Typography>
      <div className='mt-3 mb-2'>
        {Object.entries(genState).map((el) => (
          <SettingsItem
            key={`${parent}-${el[0]}`}
            label={el[0]}
            value={el[1]}
            updateState={updateState}
          />
        ))}
      </div>
    </Box>
  );
};

export default SettingsGroup;
