import React, { useState } from "react";

const App = () => {

    const [name, setName ] = useState();
    const [fullName, setFullName ] = useState();
    const [lastName, setLastName] = useState();
    const [lastNamenew, setLastNameNew] = useState();

    const inputEvent = (event) => {
        console.log(event.target.value);
         setName(event.target.value);
    }
    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    }
    const onsubmit = (event) => {
        event.preventDefault();
        setFullName(name);
        setLastNameNew(lastName);
    }
    return (
 <>
<form onSubmit={onsubmit}> 
    <div>
        <h1>Hello {fullName} {lastNamenew} </h1>
        <input type='text' placeholder="Enter your name" onChange={inputEvent} value={name} />
        <br />
        <input type='text' placeholder="Enter your password" onChange={inputEventTwo} value={lastName} />
        <button type="submit"  >Submit Me</button> 
    </div>
</form>
 </>
    );
}
export default App;