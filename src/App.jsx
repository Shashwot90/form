import React, { useState } from "react";

const App = () => {

    const [fullName, setFullName ] = useState( {
        fname:'',
        lname:'',
        email:'',
        phone:'',
    }
    );
    

    const inputEvent = (event) => {
        console.log(event.target.value);
         
        const { value, name } = event.target;
        
        setFullName((preValue) => {
            console.log(preValue);
            if (name === 'fName'){
                return {
                fname: value,
                lname:preValue.lname,
                email:preValue.email,
                phone:preValue.phone,
            };
            }
            else if (name === 'lName'){
                return {
                fname: preValue.fname ,
                lname: value,
                email:preValue.email,
                phone:preValue.phone,
                };
            }
            else if (name === 'email'){
                return {
                fname: preValue.fname ,
                lname: preValue.lname,
                email: value,
                phone:preValue.phone,
                };
            }
            else if (name === 'phone'){
                return {
                fname: preValue.fname ,
                lname: preValue.lname,
                email:preValue.email,
                phone:value,
                };
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
        <p> {fullName.email} </p> <p> {fullName.phone} </p>
        <input type='text' placeholder="Enter your name"  name="fName" onChange={inputEvent} value={fullName.fname} />
        <br />
        <input type='text' placeholder="Enter your password" name="lName" onChange={inputEvent} value={fullName.lName} />

        <input type='email' placeholder="Enter your email" name="email" onChange={inputEvent} value={fullName.email} autoComplete='off' />
        <input type='number' placeholder="Enter your mobile number" name="phone" onChange={inputEvent} value={fullName.phone} />
        <button type="submit"  >Submit Me</button> 
    </div>
</form>
 </>
    );
}
export default App;