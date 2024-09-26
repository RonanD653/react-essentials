import { useReducer, useState } from 'react';
import './App.css';

function App({authorized}) {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  )

  return (
    <>
    <input type="checkbox" value={checked} onChange={toggle}></input>
    <p>{checked ? "checked" : "Not checked"}</p>
    </>
  )
}


export default App;