import React, { useState } from "react";

const App = () => {

    const [fullName, setFullName ] = useState( {
        fname:'',
        lname:'',
        email:'',
        phone:'',
        qua:'',
    }
    );
    

    const inputEvent = (event) => {
        console.log(event.target.value);
         
        const { name, value } = event.target;
        
        setFullName((preValue) => {
            console.log(preValue);
            return {
                ...preValue,
                [name] : value,
            }
        });
    }
    
    const onsubmit = (event) => {
        event.preventDefault();
        alert('form submitted')
    }
    return (
 <>
<form onSubmit={onsubmit}> 
    <div>
        <h1>Hello {fullName.fname} {fullName.lname} </h1>
        <p> {fullName.email} </p> <p> {fullName.phone} </p> <p> {fullName.qua} </p>
        <input type='text' placeholder="Enter your name"  name="fname" onChange={inputEvent} value={fullName.fname} />
        <br />
        <input type='text' placeholder="Enter your password" name="lname" onChange={inputEvent} value={fullName.lName} />

        <input type='email' placeholder="Enter your email" name="email" onChange={inputEvent} value={fullName.email} autoComplete='off' />
        <input type='number' placeholder="Enter your mobile number" name="phone" onChange={inputEvent} value={fullName.phone} />
        <input type='text' placeholder="Enter your qualification" name="qua" onChange={inputEvent} value={fullName.qua} />
        <button type="submit"  >Submit Me</button> 
    </div>
</form>
 </>
    );
}
export default App;