import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state -1;
        case 'reset':
            return 0;
        case 'incrementByFive':
            return state + 5;
        default: 
            throw new Error('Unknown Action');
    }
}
export const UseReducerCounter = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    return(
        <div className="p-6">
            <h1>Use Reducer Counter</h1>
            <p>Count: {count}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => dispatch({type: 'increment'})}>+1</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded"onClick={() => dispatch({type: 'decrement'})}>-1</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded"onClick={() => dispatch({type: 'incrementByFive'})}>+5</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded"onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}