
import { Fragment } from 'react';
import './App.css';
import CartIcon from './foodDeliveryComponenets/Cart/CartIcon';


import Header from './foodDeliveryComponenets/Layout/Header';
import Meals from './foodDeliveryComponenets/Meals/Meals';







// import AddUser from './Componenets/Users/AddUsers';
// import UsersList from './Componenets/Users/UseraList';
// import { useState } from 'react';



function App() {

  // const [userslist,setuserlist]=useState([]);


  // const addUserHnadler=(uname,uage)=>{
  //   setuserlist((prevuserlist)=>{
  //     return [...prevuserlist,{name:uname,age:uage,id:Math.random().toString()}];
  //   })
  // }



  return (
  <>
    {/* <AddUser  onAddUser={addUserHnadler}/>
    <UsersList users={userslist} /> */}

  <Header />
  <main>
    <Meals/>
  </main>

 </>
  );
}

export default App;
