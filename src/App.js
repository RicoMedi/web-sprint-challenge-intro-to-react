import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from './components/Character';
const URL = 'https://swapi.dev/api/people/'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters ] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
        axios.get(URL)
        .then(res => {
          setCharacters(res.data)
          
        })
        .catch(err=>{
          console.log(err.message)
        })
  }, [])
 
  return (
  <section>
     <div className="App">
      <h1 className="Header"> Galaxy Warriors </h1>
      <Character data= {characters}/>
      
    </div>
  </section>
   
  );
}

export default App;
