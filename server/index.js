const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const {addUser, removeUser, getUser, getUserInRoom} = require('./manager');
const cors = require('cors'); 
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server); 

io.on('connect', (socket) => {
    socket.on('login',({username, code}, callback) =>{
        
        const {error, user} = addUser({id: socket.id, username, code});
        if(error) return callback(error);
        socket.join(user.code);
        socket.emit('message', {user:'system',text : `Welcome to ${user.code}, ${user.username}`});
        socket.broadcast.to(user.code).emit('message', {user:'system', text: `${user.username} has joined`});

        
        callback && callback();
        });
    
    socket.on('sendMessage',(message, callback) =>{
        
        const user = getUser(socket.id);
        
        io.to(user.code).emit('message', {user: user.username, text: message});
        callback();

    } );
    socket.on('disconnect', () =>{
        const user = removeUser(socket.id);

        
        io.to(user.code).emit('message', { user: 'Admin', text: `${user.username} has left.` });

    });
});
app.use(cors());
app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`) );