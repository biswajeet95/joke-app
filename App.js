import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [joke, setJoke] = useState("loading")
  const [fname, setFN] = useState("jhon")
  const [sname, setSN] = useState("deo")
  const newjoke = (first, second) => {
    fetch(`https://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`)
      .then(res => res.json())
      .then(res2 => {
        console.log(res2)
        setJoke(res2.value.joke)
      })
  }
  useEffect(() => {
    newjoke(fname, sname)
  }, [fname, sname])
  return (
    <div className="App">
      <input type="text" value={fname} onChange={(e)=>setFN(e.target.value)} />
      <input type="text" value={sname} onChange={(e)=>setSN(e.target.value)}/>
      <button onClick={()=>newjoke(fname,sname)}>Next Another Joke</button>

      <div className="joke-box">
        <h2>{joke}</h2>
      </div>
    </div>
  
  );
}

export default App;
