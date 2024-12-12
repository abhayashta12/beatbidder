import { useEffect } from 'react';
import socket, { onEvent, emitEvent } from '../websocket/socketClient';

const useSocket = (event, callback) => {
  useEffect(() => {
    onEvent(event, callback);

    return () => {
      socket.off(event);
    };
  }, [event, callback]);

  return { emit: emitEvent };
};

export default useSocket;
