const users = [];

const addUser = ({id, username, code}) => {
    username = username.trim().toLowerCase();
    code = code.trim().toLowerCase();

    const existingUser =  users.find((user) => {user.username === username && user.code === code});

    if(existingUser) return{error : 'User already exists in this room'};
    
     const user = {id, username, code};
        users.push(user);
        return{user};
    
}

const removeUser = (id) => {
    const index = users.findIndex((user) => {user.id === id});
    if(index !== -1){
        return (users.splice(index, 1)[0]);
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (code) => users.find((user) => user.code === code );

module.exports = {addUser, removeUser, getUser, getUsersInRoom};