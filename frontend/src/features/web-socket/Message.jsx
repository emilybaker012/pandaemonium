import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { BiSend } from 'react-icons/bi';
import styles from './Message.module.scss';
import useSocket from './useSocket';
import useAuthContext from '../../auth/hooks/useAuthContext';
import MessageBubble from './MessageBubble';

const Message = () => {
  const [message, setMessage] = useState('');
  const [events, setEvents] = useState([]);
  const { socket } = useSocket();
  const { auth } = useAuthContext();

  const textRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket?.emit('send-message', { username: auth.username, message, timestamp: new Date().toLocaleTimeString() });
      setMessage('');
    }
  };

  useEffect(() => {
    socket?.emit('connect-user', auth.username);
    socket?.on('new-user', (data) => {
      setEvents((prev) => {
        return [
          ...prev,
          <div className={styles.chatInfo}>{data}</div>,
        ];
      });
    });
    socket?.on('remove-user', (data) => {
      setEvents((prev) => {
        return [
          ...prev,
          <div className={styles.chatInfo}>{data}</div>,
        ];
      });
    });
    socket?.on('recieve-message', (data) => {
      const sent = data.username === auth.username;

      setEvents((prev) => {
        return [
          ...prev,
          <MessageBubble {...data} sent={sent} />,
        ];
      });
    });
  }, [socket]);

  const onKeyPressed = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      // Don't do anything
    } else if (e.key === 'Enter') {
      handleOnSubmit(e);
    }
  };

  return (
    <Container className={styles.messageContainer}>
      <Form onSubmit={handleOnSubmit} className={styles.form}>
        <Form.Control
          as="textarea"
          className={styles.textInput}
          value={message}
          placeholder="Type a message..."
          ref={textRef}
          onChange={(e) => { return setMessage(e.target.value); }}
          onKeyDown={onKeyPressed}
          spellCheck="false"
        />
        <BiSend
          className={styles.send}
          onClick={handleOnSubmit}
        />
      </Form>
      <div className={styles.messages}>
        {events}
      </div>

    </Container>
  );
};

export default Message;
