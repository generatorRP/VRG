import React, { useState, useEffect, Fragment, useMemo } from 'react';
import {
  TextField,
  Divider,
  Typography,
  Button,
  Box,
  Icon,
} from '@mui/material';

import { Edit, RemoveRedEye } from '@mui/icons-material';
import { useTheme, ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';

const TextGenerator = () => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
        },
      }),
    []
  );
  const [text, setText] = useState(
    'Dear {{name}}, \nWe are happy to offer you a full-time job as a {{role}}\nthanks {{sir}}'
  );
  const [isEdit, setIsEdit] = useState(false);
  const [generatedText, setGeneratedText] = useState(
    'Generated text will appear here...'
  );
  const [textVariables, setTextVariables] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const variables = text.match(/[^{\}]+(?=})/g);
    if (variables.length !== new Set(variables).size) {
      setIsError(true);
      return;
    } else {
      setIsError(false);
    }

    if (variables) {
      setTextVariables(
        variables.reduce((a, v) => {
          if (textVariables[v]) {
            return {
              ...a,
              [v]: textVariables[v],
            };
          } else {
            return { ...a, [v]: '' };
          }
        }, {})
      );
    } else {
      setTextVariables({});
    }
  }, [text]);

  const onChangeHandler = (e) => {
    setTextVariables({
      ...textVariables,
      [e.target.name]: e.target.value,
    });
  };

  const generateText = () => {
    let temp = text;
    Object.keys(textVariables).forEach((v) => {
      temp = temp.replace(`{{${v}}}`, textVariables[v]);
    });

    setGeneratedText(temp);
    setIsEdit(!isEdit);
  };
  return (
    <ThemeProvider theme={theme}>
      <div
        className='container d-flex w-100 justify-content-start align-items-stretch flex-column'
        style={{ minHeight: '100vh' }}
      >
        <div className='d-flex justify-content-between align-items-center mt-5'>
          {isEdit ? (
            <TextField
              variant='outlined'
              label='Text'
              value={text}
              multiline
              rows={14}
              fullWidth
              onChange={(e) => setText(e.target.value)}
              sx={{
                color: 'text.primary',
              }}
            />
          ) : (
            <TextField
              variant='outlined'
              label='Visual'
              value={generatedText}
              multiline
              rows={14}
              fullWidth
              inputProps={{
                readOnly: true,
              }}
              sx={{
                color: 'text.primary',
              }}
            />
          )}
          <div className='d-flex flex-column align-items-stretch ms-3'>
            <Button
              className='mb-3'
              color={isEdit ? 'primary' : 'secondary'}
              variant='contained'
              onClick={() => setIsEdit(!isEdit)}
            >
              {isEdit ? <Edit /> : <RemoveRedEye />}
            </Button>
            <Button className='mb-3' color='success' variant='contained'>
              Save
            </Button>
            <Button
              className='mb-3'
              color='info'
              variant='contained'
              onClick={() => generateText()}
              disabled={isError}
            >
              Generate
            </Button>
          </div>
        </div>
        {textVariables && (
          <Fragment>
            <Divider className='mx-auto w-50 mt-3 mb-2' />
            <Box component='div'>
              {!isError &&
                Object.entries(textVariables).map((el, index) => (
                  <TextField
                    className='m-2'
                    key={index}
                    name={el[0]}
                    label={el[0]}
                    value={el[1]}
                    onChange={onChangeHandler}
                  />
                ))}
            </Box>
          </Fragment>
        )}
      </div>
    </ThemeProvider>
  );
};

export default TextGenerator;
