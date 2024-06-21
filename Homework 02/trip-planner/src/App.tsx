import Greetings from "./components/welcome_user"
import { Trips } from "./components/trip_destination"
import { AboutMe } from "./components/aboutMe"

function App() {

  return (
    <div>
      <Greetings /> 
      <hr />
      <Trips />
      <hr />
      <AboutMe fullName={"Don Carlo"} from={"Italy"} favoriteMovies={["The Hobbit", "Lord of the Rings", "Marvel"]} />
      <hr />
    </div>
  )
}

export default App 
