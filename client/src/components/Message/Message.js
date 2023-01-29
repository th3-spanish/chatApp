import React from 'react';
import './Message.css';

const Message = ({message:{user, text}, username}) =>{
    let isSentByCurrentUser = false;
    
    const trimmedUsername = username.trim().toLowerCase();
    if(user ===trimmedUsername){
        isSentByCurrentUser = true;
    }
    return(
        isSentByCurrentUser?(
        <div className="messageBox current">
                <p className="sent pr-10">{username}</p>
            <div className="messageBubble b">
                <p className="messageText w">{text} </p>
            </div>
        </div>
        ):(
        <div className="messageBox other">
            
                
            
            <div className="messageBubble other">
                <p className="messageText d">{text} </p>
            </div>
            <p className="sent pl-10">{user}</p>
        </div>
        )
            
        
    
    );

}

export default Message;