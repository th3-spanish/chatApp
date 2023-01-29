import React from 'react';
import './Header.css';

const Header = ({code}) =>{
    return(
    <div className="Header" >
        <div className="chatContainer">
            <h3>{code}</h3>
        </div>
        <div className="infoContainer">
            
        </div>
    </div>
    );

}

export default Header;