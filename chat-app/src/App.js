import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  //testing
  console.log(input);
  console.log(messages);

  //send the messages
  const sendMessage = (event) => {
    //prevent refreshing after submit form
    event.preventDefault();
    //store the previous messages after a new message appear
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Chat app</h1>

      <form>
        {/* Input field */}
        <input value={input} onChange={event => setInput(event.target.value)}/>
        {/* Button */}
        <button type='submit' onClick={sendMessage}>Send message</button>
        {/* Input */}
      </form>
      
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
