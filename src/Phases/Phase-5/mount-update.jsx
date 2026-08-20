import { useEffect, useState } from "react"

// mounting
export const Welcome=()=>{
    // for things that should happen when a component first appears
    useEffect(() => {
        console.log('Component Mounted')
    }, [])
    return (
        <h2>Welcome Yumna!</h2>
    )
}

// updating
export const Counter= () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Count changed: ', count)
    }, [count])
    return (
        <div>
            <h2 className="text-xl font-semibold">Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
