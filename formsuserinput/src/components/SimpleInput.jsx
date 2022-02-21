import { useRef } from "react";
import { useState } from "react";

const SimpleInput = (props) => {
   const [Enteredname,setEnterdename]=useState("")
   const enterValue=useRef()
   const nameInputChangeHandler=(e)=>{
       const val=e.target.value;
       setEnterdename(val)
   }
   const formSubmissionHandler=(e)=>{
       e.preventDefault()
          
       console.log(Enteredname)
          // const va=enterValue.current.value;
         
       setEnterdename("")
   }

    return (
      <form onSubmit={formSubmissionHandler}>
        <div className='form-control'>
          <label htmlFor='name'>Your Name</label>
          <input ref={enterValue} type='text' id='name' onChange={nameInputChangeHandler}/>
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;
  