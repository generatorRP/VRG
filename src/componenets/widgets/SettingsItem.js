import React from 'react';
import { TextField } from '@mui/material';

const SettingsItem = ({ label, value, updateState }) => {
  return (
    <div className='mx-2 py-2'>
      <TextField
        label={label.revertCamelCase().toCapitalCase()}
        value={value}
        size='small'
        name={label}
        onChange={(ev) => {
          updateState(ev.target.name, ev.target.value);
        }}
        onWheel={(ev) => {
          if (ev.deltaY < 0) {
            updateState(ev.target.name, ev.target.value * 1 + 1);
          } else if (ev.deltaY > 0) {
            updateState(ev.target.name, ev.target.value * 1 - 1);
          }
        }}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case 'ArrowUp':
              updateState(ev.target.name, ev.target.value * 1 + 1);
              break;
            case 'ArrowDown':
              updateState(ev.target.name, ev.target.value * 1 - 1);
              break;
            default:
              return;
          }
        }}
        fullWidth
      />
    </div>
  );
};

export default SettingsItem;
