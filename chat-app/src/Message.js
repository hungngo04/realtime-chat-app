import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Message.css';


function Message(props) {
  return (
    <Card className='message_card'>
    <Card.Body>
        <Card.Title>abc</Card.Title>
        <Card.Text>
            {props.username} : {props.text}
        </Card.Text>
    </Card.Body>
    </Card>
  )
}

export default Message