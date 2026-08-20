import { useState } from "react";

let states = [];
let currentIndex = 0;

export const Counter = () => {
    const [count, setCount] = useState(() => {
        console.log('initial state');
        return 0;
    }); 
    console.log('Counter clicked with count value:' , count )
    const handle_click = () => {
        setCount(count + 1)
    }
    return <button onClick={handle_click}>Count: {count}</button>
}

export const LoginCard = () => {
    const [message, setMessage] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handle_login = ()=> {
        setIsLoggedIn(!isLoggedIn)
    }
    const handle_change = (e) => {
        setMessage(e.target.value);
    }
    return (
        <>
        <div>
            <input type="text" placeholder="Type a message"  value = {message} onChange={handle_change}/>
        </div>
        <p>{message}</p>
        <button onClick={handle_login}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </> 
    )
}

export const SearchBox = () => {
    const [input, setInput] = useState('');
    const handle_change = (e) => {
        const value = e.target.value;
        setInput(value)
    }
    return (
        <div>
            
        <input className="bg-fuchsia-950 text-white" type="text" onChange={handle_change}/>
        <p>Searching for: {input}</p>
        </div>
    )
}