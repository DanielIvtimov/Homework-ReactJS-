import { useState } from "react"

export const CounterByInput = () => {
    
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (prop) => {
        setInputValue(prop.target.value);
    };

    const incrementLogic = () => {
        if(inputValue === ""){
            setCount(count + 1);
        }else{
            console.log("We cannot increment by +1 because we have a value in the input")
        }
    };

    const decrementLogic = () => {
        if(inputValue === ""){
            setCount(count - 1);
        }else{
            console.log("We cannot decrement by -1 because we have a value in the input")
        }
    };
    
    return (
        <div>
            <h2>Counter: {count}</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={incrementLogic}>Increment</button>
            <button onClick={decrementLogic}>Decrement</button>
        </div>
    )
}

//Imam edno prasanje decki do vas 
//Na linija 8 ovoj del (prop) mi pokazuva dolna crvena linija na nego 
//Izgleda bara data tip kako string ili number no i taka dobivam error posleto
//Voedno ako pretisnam na Quick fix... ke ja dobiam ovaa linija na kod sto ke go resi toa 
//const handleChange = (prop: { target: { value: SetStateAction<string>; }; }) => { 
// Ova ne znam sto e ( SetStateAction ) pa zatoa ke go ostavam bez toa da znaete :D 

