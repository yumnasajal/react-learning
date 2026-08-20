import { useState } from "react";

export const Parent = () => {
    const [msg, setMsg] = useState('');
    const child_to_parent = (message) => {
        setMsg(message);
    }
    const [name, setName] =useState('Yumna');
    const set_name =(new_name) =>{
        setName(new_name);
    }
    return (
        <div>
            <Child name={name} send_msg={child_to_parent}/>
        {
            msg !== '' && (
                <p>Your Message is {msg}</p>
            )
        }
        <ChildB set_name={setName} />
        </div>
    )
}

const Child = ({name, send_msg}) => {
    return (
        <>
            <p>My name is {name}</p>
            <button onClick={() => send_msg('hello')}>Send Message</button>
        </>
    )
}

const ChildB = ({set_name}) => {
    const [newName, setNewName] = useState('');
    const handle_name = () => {
        set_name(newName);
    }
    return (
        <>
        <label htmlFor="name">Enter your name</label>
        <input type="text" defaultValue={name} onChange={(e) => setNewName(e.target.value)}/>
        <button onClick={handle_name}>Change name</button>
        </>
    )
}

