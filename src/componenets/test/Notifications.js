import React, { useState, useEffect, useRef, Fragment } from 'react';
// import { io } from 'socket.io-client';
import { createConsumer } from '@rails/actioncable';
import axios from 'axios';
import { Paper, Box, TextField, Button, Typography } from '@mui/material';

const Notifications = () => {
  const accessToken = useRef();
  const [token, setToken] = useState('');
  const [tokenValue, setTokenValue] = useState('');
  const [cable, setCable] = useState(null);

  const initCable = () => {
    setCable(
      createConsumer(`http://localhost:3000/cable?access_token=${token}`)
    );
  };

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!token) return;

    (async () => {
      const res = await axios.get('http://localhost:3000/api/notifications', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotifications(res.data);
    })();

    initCable();
  }, [token]);

  useEffect(() => {
    if (!cable) return;
    cable.subscriptions.create(
      {
        channel: 'NotificationsChannel',
      },
      {
        connected: () => console.log('connected'),
        disconnected: () => console.log('disconnected'),
        received: (notification) => {
          setNotifications((prev) => [...prev, notification]);
        },
      }
    );
  }, [cable]);

  return (
    <Fragment>
      <TextField
        value={tokenValue}
        onChange={(e) => setTokenValue(e.target.value)}
      />
      <Button variant='outlined' onClick={() => setToken(tokenValue)}>
        UPDATE TOKEN
      </Button>
      <Typography variant='h5'>{token}</Typography>
      <Paper variant='elevation'>
        {notifications.length > 0 &&
          notifications.map((el) => (
            <Box key={el.id} component='div'>
              <h4>{el.title}</h4>
              <p>{el.content}</p>
            </Box>
          ))}
      </Paper>
    </Fragment>
  );
};

export default Notifications;
// KQVMlSbfo-jjUft7qWFZLoltVI0EtRv52cfPSrQHZ6M
// Mi2XwWm96MaC5QQbOdbFYLEExKUppnzUFPrzEmkdMyc
