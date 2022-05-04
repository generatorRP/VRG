import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material';

import TextGenerator from './TextGenerator';
import TextGeneratorApp from './TextGeneratorApp';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#212121',
      paper: '#424242',
    },
    divider: 'rgba(255,255,255,0.85)',
  },
});

const TextGeneratorConfig = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='background-dark'>
        <Routes>
          <Route index element={<TextGenerator />} />
          <Route path='generator' element={<TextGeneratorApp />} />
        </Routes>
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default TextGeneratorConfig;
