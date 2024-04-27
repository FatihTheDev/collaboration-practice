import "./Main.css"
import { useState } from "react";

export default function Main() {

    const[name, setName] = useState("");
    const[user, setUser] = useState("");
    const[email, setEmail] = useState("");

    function handleNameChange(e:any){
        setName(e.target.value);
    }

    function handleUserChange(e:any){
        setUser(e.target.value);
    }

    function handleEmailChange(e:any){
        setEmail(e.target.value);
    }

    return(
            <form action="submit.php" >
            <div className="inputFields">
            <h1>Create an account for Golden Fitness</h1>

            <label htmlFor="name">Enter your full name:</label>
            <input type="text" value={name} onChange={handleNameChange}/>

            <label htmlFor="user">Enter your username:</label>
            <input type="text"  value={user} onChange={handleUserChange} />

            <label htmlFor="email">Enter your email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />

            <p style={{color: '#2466f8', fontSize: '1.5em'}}>Your full name is <span style={{color: 'green'}}>{name}</span>, your username is <span style={{color: 'green'}}>{user}</span>, and your email address is <span style={{color: 'green'}}>{email}</span>. Is that correct?</p>

            <button type="submit">Submit</button>
            </div>
            </form>
    )
}