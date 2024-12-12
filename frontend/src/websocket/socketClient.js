import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000');

export const emitEvent = (event, data) => {
  socket.emit(event, data);
};

export const onEvent = (event, callback) => {
  socket.on(event, callback);
};

export default socket;
