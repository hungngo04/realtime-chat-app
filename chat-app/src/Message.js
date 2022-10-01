import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Message.css';

function Message({message, username}) {
    const isUser = username === message.username;

    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <Card.Body>
                    <Card.Text>
                        <p>{message.username} : {message.text}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Message