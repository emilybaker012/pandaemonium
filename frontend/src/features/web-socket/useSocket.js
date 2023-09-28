import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useSocket = () => {
  const [socket, setSocket] = useState();
  useEffect(() => {
    const newSocket = io.connect(import.meta.env.VITE_WS_URL || 'http://localhost:3600');
    if (newSocket) {
      setSocket(newSocket);
    }
    return () => { newSocket.close(); };
  }, []);

  const emit = ({ key, message }) => {
    socket.emit(key, message);
  };

  const on = ({ key, func }) => {
    socket.on(key, (data) => { return func(data); });
  };

  return { socket, emit, on };
};

export default useSocket;
