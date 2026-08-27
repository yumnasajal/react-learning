import { useCallback, useState, memo } from "react"

export const Parent = () =>{
    const [count, setCount] = useState(0);
    // const handle_click = useCallback(() => {
    //     console.log('child button clicked');
    // }, [])
    const handle_click = () => {
        console.log('child button clicked')
    }
    
    console.log('Parent rendered');
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <ExpensiveChild onClick={handle_click}/>
        </div>
    )
}

const ExpensiveChild = memo(({onClick}) => {
    console.log('Expensive child rendered');
    return (
        <div>
            <h2 className="text-pink-800">Hello i'm expensive child</h2>
            <button onClick={onClick}>Click Child</button>
        </div>
    )
})