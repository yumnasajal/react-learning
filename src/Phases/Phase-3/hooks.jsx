import { useState } from "react";

export const UserDashboard = ({ isPremium }) => {
    // msut be at the top level of funtion 
    const [credits, setCredits] = useState(100);
    if (!isPremium) {
        return <div>Upgrade to Premium to see credits</div>
    }
    return <div>
        <h3>Dashboard</h3>
        <p>You have credits: {credits}</p>
        <button onClick={() => setCredits(0)}>Spend All Credits</button>
    </div>
}

export const SimpleCounter = () => {
    const [count, setCount] = useState(0);
    console.log('SimpleCounter clicked and render phase: ', count);
    const handle_click = () => {
        console.log('Before click (before trigger): ', count);
        setCount(count + 1)
        console.log('SimpleCounter of inc 1: ', count); 
        setCount(count + 10)
        console.log('SimpleCounter of inc 10: ', count);
        setTimeout(() => {
            console.log('After 2 seconds: ' , count)
        }, 2000)
        // they only queue updates
    }
    return (
        <>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={handle_click}>Increment</button>
            </div>
            {console.log('this is commit ig: ', count)}
        </>
    )
}

// updating UI:
// 1. trigger phase : setCase
// 2. render phase: call function again
// 3. commit phase : takes changes and apply them to dom

// setstate using previous state 
export const PrevStateCounter = () => {
    const [count, setCount] = useState(0);
    const handle_click = () => {
        setCount((prev) => {
            console.log('Prev 1: ' ,prev);
            prev = prev + 1;
            console.log('Prev 1 after: ' ,prev);
            return prev;
        });
        console.log('1: ', count);
        setCount((prev) => {
            console.log('Prev 10: ', prev);
            return prev + 10;
        });
        console.log('10:' , count);
    }
    return (
        <>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={handle_click}>Increment</button>
            </div>
        </>
    )
}

export const BachingCounter = () => {
    const [state, setState] = useState(0);
    const [name, setName] = useState('');
    const [isActive, setIsActive] = useState(false);
    console.log('Component rendering: ', state, name, isActive);
    // react updates all handleclick events in 1 render
    
    const handle_click = () => {
        setState(prev => {
            return prev + 1;
        })
        setState(prev => {
            return prev + 10;
        })
        setName('Updated');
        setIsActive(!isActive)
    }
    return(
        <div>
            <h2>Count here: {state}</h2>
            <p>Name: {name}</p>
            <p>Active: {isActive ? 'Yes' : 'No'}</p>
            <button onClick={handle_click}>Update all three</button>
        </div>
    )
}

export const Toggle = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="bg-red-700 text-white" onClick={handleClick}>
                Toggle
            </button>

            {isOpen && (
                <div>
                    This is the panel!
                </div>
            )}
        </div>
    );
}