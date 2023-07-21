import React, { useState, useEffect } from 'react';
import axios from 'axios'

const URL = 'https://swapi.dev/api/people/'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ data, setData ] = useState()
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    function fetchCharacters() {
        axios.get(URL)
        .then(res => {
          setData(res.data)
        })
        .catch(err=>{
          console.log(err.message)
        })

    }
   fetchCharacters()
  }, [])
  if( !data ) return 'Fetching list of Characters...'
  return (
  <section>
     <div className="App">
      <h1 className="Header"> Galaxy Warriors </h1>

      
    </div>
  </section>
   
  );
}

export default App;
