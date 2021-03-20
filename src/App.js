import Taskbar from "./components/taskbar.component"
import mouseclick from "./assets/mouseclick.mp3"
import door from "./assets/door.mp3"
import{BrowserRouter as Router , Route, Switch, Link} from "react-router-dom"
import Home from "./components/home.component"
function App() {
  
  const mouseclickAud = new Audio(mouseclick)
  const doorAud = new Audio(door)
  mouseclickAud.volume = 0.5
  doorAud.volume = 0.5

  return (
    <div className="App">
      <Router>
      <Taskbar mouseclick={mouseclickAud} door={doorAud}/>
      <Switch>
        <Route path="/" component={()=><Home/>}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
