import React, { useState } from '../../../node_modules/react';
import { Link } from '../../../node_modules/react-router-dom';
import Container from '../../../node_modules/@material-ui/core/Container';
import { TextField, Button, Typography } from '../../../node_modules/@material-ui/core';
import styles from './login.module.css';
import logo from './logo.png';
const Login = () => {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');

    return (
       <div> 
        <Container style={{fontFamily:"helvetica", padding:"120px 150px 120px" }} maxWidth="sm">
        
            
            
            <div className={styles.form} >
            
                <form >
                <img src={logo} alt="" className="test" />
                    
                    
                    
                    <TextField id="standard-basic" label="Username" onChange={e => setUsername(e.target.value)}  />
                    <TextField id="standard-basic" style={{marginTop:"10px"}} label="Room Code" onChange={e => setCode(e.target.value)} />
                    <Link onClick={e =>{(!username || !code)&& e.preventDefault();  }} to={`/chat?username=${username}&code=${code}`}>
                    <Button style={{marginTop:"40px", width:"75%", marginBottom:"20px"}} color="primary" variant="contained" type="submit" >Login</Button>
                    </Link>                
                </form>
            </div>
        </Container>
        <Typography className={styles.rights} color="textSecondary"> &copy; All rights reserved to Amine BACHANE, 2022.</Typography>
        </div>
    );
}

export default Login;
