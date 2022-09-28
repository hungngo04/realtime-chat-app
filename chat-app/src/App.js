import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Form>
          <Form.Group className="message-form">
            <Form.Control value={input} onChange={event => setInput(event.target.value)} placeholder="Enter a message.."/>
          </Form.Group>
          <Button disabled={!input} variant='primary' type='submit' onClick={sendMessage}>Send message</Button>
        </Form>
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

