// utils/socket.js
import io from 'socket.io-client';

const socket = io("http://127.0.0.1:5000/", {
    transports: ["websocket"],
    cors: {
      origin: "http://localhost:3000",
    } // Use the correct host and port for your Flask server
})
socket.on('host_response', (data) => {
  console.log(data);

});
socket.emit('from react',{"hello":"hello from react "})

export default socket;