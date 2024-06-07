import { Counter} from "./components/increment_decrement"
import { CounterByInput} from "./components/increment_input_decrement"
import { CounterByInputAndSomeLogic} from "./components/increment_decrement_logic"

function App() {
  return (
    <div>
      <Counter />
      <hr /> 
      <CounterByInput />
      <hr />
      <CounterByInputAndSomeLogic />
    </div>
  )
}

export default App
