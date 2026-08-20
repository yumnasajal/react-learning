import { useEffect, useState } from "react"

export const Unmounting = () => {
    const [show, setShow] = useState(true);
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                Show / Hide
            </button>
            {show && <Child/>}
        </div>
    )
}

// detect unmonting 
const Child = () => {
    const [decrement, setDecrement] = useState(10);
    useEffect(() => {
        console.log('Decrement happens')
    }, [decrement])

    useEffect(() => {
        console.log('Child mounted');
        return () => {
            console.log('Child unmounted'); // runs before the effect runs again
        }
        // this will cleanup everytime decrement happens because no empty dependency array is added
    })
    return (
        <div>
            <h2 className="text-xl">Hi there. Im child component</h2>
            <h2>Decrement: {decrement}</h2>
            <button onClick={() => setDecrement(decrement - 1)}>Decrease</button>
        </div>
    )
}

// mount + unmount + update

export const ShowCounter = () => {
    const [showCounter, setShowCounter] = useState(true);
    return (
        <div>
            <button onClick={() => setShowCounter(!showCounter)}>Show/Hide Counter</button>
            {showCounter && <Count/>}
        </div>
    )
}

const Count = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // setup
        console.log('Counter mounted');
        return () => {
            // cleanup
            console.log('Counter unmounted');
        }
    }, [])
    useEffect(() => {
        console.log('Count Updated' , count);
        return (() => {
            console.log('Count claeanup', count)
        })
    }, [count])
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count +1)}>Increase +</button>
        </div>
    )
}

