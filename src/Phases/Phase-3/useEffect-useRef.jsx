import { useEffect, useState, useRef } from "react"

export const Count = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [switching, setSwitching] = useState(false);
    const renders = useRef(0);
    renders.current += 1;
    const handle_click = () => {
        setCount(count + 1);
        setToggle(!toggle)
    }
    const handle_switch = () => {
        setSwitching(!switching)
    }
    useEffect(() => {
        console.log('ran', count)
    }, [count, switching, toggle])
    return (
        <div>
            <p>Renders: {renders.current}</p>
            <button className={`p-2 ${toggle ? 'bg-gray-500' : 'bg-gray-200'}`} onClick={handle_click}>Count: {count}</button>
            <button className={`rounded-md p-2 ${!switching ? 'bg-gray-400 text-gray-800' : 'bg-cyan-950 text-white'}`} onClick={handle_switch}>{switching ? 'Off' : 'On'}</button>
        </div>
    )
}

export const SearchInput = () => {
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
        document.title = search ? `Searching for ${search}` : 'hello-world';
    }, [search])
    const handle_focus = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <h2>Product Search</h2>
            <input type="text" ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Product" className="border p-2" />
            <button onClick={handle_focus} className="ml-2 bg-blue-900 text-white p-2">Focus Input</button>
            <p>You are searching for: <span className="font-bold">{search}</span> </p>
        </div>
    )
}

export const UserForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div>
            <input className="border"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <p>Your name is: {formData.username}</p>
            <input className="border"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </div>
    )
}

export function Countering() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count + 1);
    }, []);
    return <p>{count}</p>;
}

export function AddSubCounter() {
    const [count, setCount] = useState(0);
    const handle_increment = () => {
        setCount(count + 1)
        // setCount((prev) => {
        //     prev = prev + 1;
        //     return prev
        // })
    }
    const handle_decrement = () => {
        setCount(count - 1)
        // setCount((prev) => {
        //     prev = prev - 1;
        //     return prev;
        // })
    }
    return (
        <div>
            <button onClick={handle_increment} >+</button>
            <input className="border" readOnly
                name="username"
                value={count}
            />
            <button onClick={handle_decrement}>-</button>
        </div>
    );
}