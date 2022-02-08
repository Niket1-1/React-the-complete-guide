import logo from './logo.svg';
import './App.css';
import AddUser from './Componenets/Users/AddUsers';
import UsersList from './Componenets/Users/UseraList';
import { useState } from 'react';
function App() {

  const [userslist,setuserlist]=useState([]);


  const addUserHnadler=(uname,uage)=>{
    setuserlist((prevuserlist)=>{
      return [...prevuserlist,{name:uname,age:uage,id:Math.random().toString()}];
    })
  }
  return (
    <div>
    <AddUser  onAddUser={addUserHnadler}/>
    <UsersList users={userslist} />
    </div>
  );
}

export default App;
