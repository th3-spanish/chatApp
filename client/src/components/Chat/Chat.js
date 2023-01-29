import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import io from'socket.io-client';
import './Chat.css';
import TextContainer from '../TextContainer/TextContainer';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Typography from '@material-ui/core/Typography';

let socket;

const Chat = ({location}) =>{
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const ENDPOINT = '127.0.0.1:5000';
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() =>{


        const {username, code} = queryString.parse(location.search);
        
        socket = io(ENDPOINT);
        socket.emit('login', {username, code}, (error)=>{
            if(error){
                alert(error);
            }
        });

        setUsername(username);
        setCode(code);

    }, [ENDPOINT,location.search]);

    useEffect(() => {
        
        socket.on('message', (message) =>{
            setMessages(messages=>[...messages, message]);
        });
    }, []);

    const sendMessage = e => {
        e.preventDefault();
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    console.log(message,messages);
    return(
        <>
        <TextContainer />
    <div className="outerContainer">
        
      <div className="container">
       <Header code={code} />   
       <Messages messages ={messages} username={username} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      
      
    </div>
    <Typography style={{textAlign:"center"}} color="textSecondary"> &copy; All rights reserved to Amine BACHANE, 2022.</Typography>
        </>
    );
}
export default Chat;