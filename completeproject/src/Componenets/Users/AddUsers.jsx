import React,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"

const AddUser =(props)=>{
    const [enteredUsername,setEnteredUsername]=useState("")
    const [enteredAge,setEnteredAge]=useState("")
    

    const adduserhandler =(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
                 return;
        }
        if(+enteredAge<1){
            return;
        }
      
       props.onAddUser(enteredUsername,enteredAge);
        
        setEnteredAge("")
        setEnteredUsername("")
    };

    const agechange=(event)=>{
             setEnteredAge(event.target.value)
    }

    const usernamechange=(event)=>{
        setEnteredUsername(event.target.value)
}
    return (
        <Card className={classes.input}>
    <form onSubmit={adduserhandler}>
        <label htmlFor="username">Username</label>
        <input type="text"  id="username" value={enteredUsername} onChange={usernamechange} />
        <label htmlFor="age" >Age(years)</label>
        <input type="number" id="age" value={enteredAge} onChange={agechange} />
     <Button type="submit">Add User</Button>
    </form>
   
    </Card>
    )
}

export default AddUser