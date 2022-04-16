import React, { useState, useEffect, Fragment } from 'react';
import {
  TextField,
  Divider,
  Typography,
  Button,
  Box,
  Icon,
} from '@mui/material';

import { Edit, RemoveRedEye } from '@mui/icons-material';

const Test = () => {
  const [text, setText] = useState(
    'Dear {{name}}, \nWe are happy to offer you a full-time job as a {{role}}\nthanks {{sir}}'
  );
  const [isEdit, setIsEdit] = useState(true);
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
    <div
      className='d-flex w-100 justify-content-center align-items-center bg-light flex-column'
      style={{ minHeight: '100vh' }}
    >
      <Button
        className='mb-3'
        color='secondary'
        variant='contained'
        onClick={() => setIsEdit(!isEdit)}
      >
        {isEdit ? <Edit /> : <RemoveRedEye />}
      </Button>
      {isEdit ? (
        <TextField
          variant='outlined'
          label='Input Text'
          value={text}
          multiline
          rows={8}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <Typography
          variant='body1'
          className='border'
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {generatedText}
        </Typography>
      )}
      {textVariables && (
        <Fragment>
          <Divider className='w-50 my-3' />
          <Box component='div'>
            {!isError &&
              Object.entries(textVariables).map((el, index) => (
                <TextField
                  key={index}
                  name={el[0]}
                  label={el[0]}
                  value={el[1]}
                  onChange={onChangeHandler}
                />
              ))}
            <Button
              variant='contained'
              color='primary'
              onClick={() => generateText()}
              disabled={isError}
            >
              Generate
            </Button>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Test;
