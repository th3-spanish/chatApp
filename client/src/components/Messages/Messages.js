import React from 'react';
import './Messages.css';
import Message from '../Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({messages, username}) =>{
    return(
    
    <ScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i}><Message message={message} username={username} /></div>)}
    </ScrollToBottom>
    );

}

export default Messages;