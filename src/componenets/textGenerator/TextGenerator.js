import React, { useState, useEffect, Fragment } from 'react';
import { TextField, Divider, Button, Box } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material';

import { Edit, RemoveRedEye } from '@mui/icons-material';

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

const TextGenerator = () => {
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
		const variables = text.match(/[^{}]+(?=})/g);
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
			<div className='background-dark'>
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
							/>
						)}
						<div className='d-flex flex-column align-items-stretch ms-3'>
							<Button
								className='mb-3'
								color={isEdit ? 'primary' : 'secondary'}
								variant='contained'
								startIcon={isEdit ? <Edit /> : <RemoveRedEye />}
								onClick={() => setIsEdit(!isEdit)}
							>
								{isEdit ? 'Editing' : 'Showing'}
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
			</div>
		</ThemeProvider>
	);
};

export default TextGenerator;
