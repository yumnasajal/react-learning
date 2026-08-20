import { useEffect, useRef, useState } from "react"

// controlled 
export const Controlled = () => {
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('name ran');
    }, [name])
    return (
        <div>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Your name is {name}</p>
        </div>
    )
}

// uncontrolled 
export const Uncontrolled = () => {
    const nameRef = useRef();
    const handle_submit = () => {
        console.log(nameRef.current.value);
    }
    return (
        <div>
            <input type="text" ref={nameRef} defaultValue={'yumna'} />
            <button onClick={handle_submit}>Submit</button>
        </div>
    )
}