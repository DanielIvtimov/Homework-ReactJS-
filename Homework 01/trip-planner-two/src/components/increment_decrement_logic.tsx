import { useState } from "react"

export const CounterByInputAndSomeLogic = () => {
    
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [someMessage, setSomeMessage] = useState("");

    const handleChange = (prop) => {
        setInputValue(prop.target.value);
        setSomeMessage("");
    };

    const incrementLogic = () => {
        if(inputValue === ""){
            setSomeMessage("The input is empty please enter some value")
        } else if (isNaN(Number(inputValue))){
            setSomeMessage("The input value is not a number, please change it")
        } else {
            setCount(count + Number(inputValue));
        }
    };

    const decrementLogic = () => {
        if(inputValue === ""){
            setSomeMessage("The input is emty please enter some value")
        } else if (isNaN(Number(inputValue))){
            setSomeMessage("The input value is not a number, please change it")
        } else {
            setCount(count - Number(inputValue));
        }
    };
    
    return (
        <div>
            <h2>Counter: {count}</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
            {someMessage && (
                <div style={{ backgroundColor: 'red', color: 'white', padding: '5px' }}>
                    {someMessage}
                </div>
            )}
            <button onClick={incrementLogic}>Increment</button>
            <button onClick={decrementLogic}>Decrement</button>
        </div>
    );
}



