import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
const socket = io.connect('http://localhost:3003');

function App() {

  const [backMessage, setBackMessage] = useState('');

  useEffect(() => {
    socket.on('server:message', (message) => {
      console.log(message);
      setBackMessage(message.message);
    });
  },[socket]) 

  const sendMessage = () => {
    console.log('Message sent')
    socket.emit('client:message', {message: 'Im from react'})
  }

  return (
    <div className="App">
      <h1>Send a message</h1>
      <button onClick={sendMessage}>Send</button>

      <p>The message from the back will be displayed here:</p>
      <p>{backMessage}</p>
    </div>
  );
}

export default App;
