import './App.css';
import SearchBox from './components/searchbox/SearchBox';
import CardList from './components/cardlist/CardList';
import {useState,useEffect} from 'react';

function App() {
  const [monster,setMonster] = useState([]);
  const [searchfield,SetSearchField] = useState('');
  const [filterRobot,SetFilterRobot] = useState(monster);

  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(user=>setMonster(user))
  },[]) 

  useEffect(()=>{
    const filterRobots = monster.filter((robot)=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      if(filterRobots.length>0){
        SetFilterRobot(filterRobots);
      }
      else {
        SetFilterRobot([])
      }
      
  },[searchfield,monster])


  const searchEvent =(event)=>{
    SetSearchField(event.target.value);
    }

  return (
    <div className="App">
      <h1>Monster Search</h1>
      <SearchBox onSearchHandler={searchEvent}/>
      <CardList monster={filterRobot} />
    </div>
  );
}

export default App;
