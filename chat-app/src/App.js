import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from './Message';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: 'hung'}, {text: 'hello'}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Enter username: '))
  }, [])

  //testing
  console.log(input);
  console.log(messages);

  //send the messages
  const sendMessage = (event) => {
    //prevent refreshing after submit form
    event.preventDefault();
    //store the previous messages after a new message appear
    setMessages(
      [...messages, {username: username, text: input}]
    );
    setInput('');
  }

  return (
    <div className="App">
      <h1>Chat app</h1>
      <h2>Welcome {username}</h2>
      {/* Input field */}
      <form>
        <Form>
          <Form.Group className="message-form">
            <Form.Control value={input} onChange={event => setInput(event.target.value)} placeholder="Enter a message.."/>
          </Form.Group>
          <Button disabled={!input} variant='primary' type='submit' onClick={sendMessage}>Send message</Button>
        </Form>
      </form>
      {/* Input */}

      {
        messages.map(message => (
            <Message username={username} message={message} />
        ))
      }

    </div>
  );
}

export default App;

