import Taskbar from "./components/taskbar.component"
import mouseclick from "./assets/mouseclick.mp3"
import door from "./assets/door.mp3"
import{BrowserRouter as Router , Route, Switch, Link} from "react-router-dom"
import Home from "./components/home.component"
import Search from "./components/search.component"
import Edit from "./components/edit.component"
import React,{useEffect,useState} from "react"
import axios from "axios"

function App() {

      const [data,setData] = useState([]);
      useEffect(() => {
          axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then(res=>setData(res.data))
      }, [])
  
  const mouseclickAud = new Audio(mouseclick)
  const doorAud = new Audio(door)
  mouseclickAud.volume = 0.5
  doorAud.volume = 0.5

  return (
    <div className="App">
      <Router>
      <Taskbar mouseclick={mouseclickAud} door={doorAud}/>
      <Switch>
        <Route exact path="/" component={()=><Home data={data}/>}/>
        <Route path="/search" component={()=><Search data={data}/>}/>
        <Route path="/edit" component={()=><Edit data={data}/>}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
