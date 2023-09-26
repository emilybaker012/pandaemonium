import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Message.module.scss';
import useSocket from './useSocket';
import useAuthContext from '../../auth/hooks/useAuthContext';

const Message = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { socket } = useSocket();
  const { auth } = useAuthContext();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket?.emit('send-message', { username: auth.username, message });
      setMessage('');
    }
  };

  useEffect(() => {
    console.log(`Connecting ${auth.username} to chat`);
    socket?.emit('connect-user', auth.username);
    socket?.on('recieve-message', (data) => {
      setMessages((prev) => {
        return [
          ...prev,
          data,
        ];
      });
    });
  }, [socket]);

  return (
    <Container className={styles.messageContainer}>
      <Stack>
        {messages.map((item) => { return <li>{item}</li>; })}
        <Form>
          <Form.Control
            className={styles.textInput}
            value={message}
            placeholder="message"
            onChange={(e) => { return setMessage(e.target.value); }}
          />
          <Button
            style={{
              marginTop: '12px',
              width: '100%',
            }}
            onClick={handleOnSubmit}
          > Send
          </Button>
        </Form>
      </Stack>
    </Container>
  );
};

export default Message;
