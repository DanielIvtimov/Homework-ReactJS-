import { useState } from "react"

export const Counter = () => {
    
    const [count, setCount] = useState(0);

    const incrementLogic = () => {
        setCount(count + 1);
    };

    const decrementLogic = () => {
        setCount(count - 1);
    };
    
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={incrementLogic}>Increment</button>
            <button onClick={decrementLogic}>Decrement</button>
        </div>
    )
}

