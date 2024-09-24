import { useEffect, useState } from 'react';
import './App.css';

function App({authorized}) {
  const [emotion, setEmotion] = useState("happy")
  const [secondary, setSecondary] = useState("tired")


  useEffect(() => {
    console.log(`It's ${emotion} around here`)
  }, [emotion])

  useEffect(() => {
    console.log(`It's ${secondary} around here`)
  }, [secondary])

  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("Frustrated")}>Frustrated</button>
      <button onClick={() => setSecondary("crabby")}>crabby</button>
    </>
  )
}


export default App;