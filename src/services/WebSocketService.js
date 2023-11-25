// services/WebSocketService.js
import { useEffect, useState } from 'react';
import socket from '../utils/socket' 

const useWebSocket = (channel) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleData = (newData) => {
      setData(newData);
    };

    socket.emit('host_event', { data: 'Hello from React' });

    socket.on(channel, handleData);
  

    return () => {
      socket.off(channel, handleData);
    };
  }, [channel]);

  return data;
};

export default useWebSocket;
