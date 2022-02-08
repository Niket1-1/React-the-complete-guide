import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"

const AddUser =()=>{

    const adduserhandler =(event)=>{
        event.preventDefault();
    }

    return (
        <Card className={classes.input}>
    <form onSubmit={adduserhandler}>
        <label htmlFor="username">Username</label>
        <input type="text"  id="username"/>
        <label htmlFor="age">Age(years)</label>
        <input type="number" id="age" />
     <Button type="submit">Add User</Button>
    </form>
    </Card>
    )
}

export default AddUser