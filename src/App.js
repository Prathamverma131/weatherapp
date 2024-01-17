import SearchBox from './SearchBox';
import Weekly from './Weekly';
import './App.css'
import { useState } from 'react';

function App() {

  var [location,setLocation] = useState("Pune, Maharashtra");

  return (
    <div className="App container">
      <SearchBox location={location} setLocation={setLocation}/>
      <Weekly location={location}/>
    </div>
  );
}

export default App;
