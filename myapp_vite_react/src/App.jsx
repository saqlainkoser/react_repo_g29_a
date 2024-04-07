import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 7;

function App() {
  // const [count, setCount] = useState(0)
  //Hook
  //useState()

   let [counter,setCount]=useState(7)



  let addOne = () => {
    counter=counter+1;
    console.log(counter); 
    setCount(counter)
  }

  let subOne = () => {
    counter=counter-1;
    console.log(counter); 
    setCount(counter)
  }

  return (
    <>
      <h1>This is my react app from vite. {counter}</h1>
      <h1>Count : {counter}</h1>
      <button onClick={addOne} >Add {counter}</button>
      <br />
      <br />
      <button onClick={subOne}>Minus {counter}</button>
    </>
  )
}

export default App
npm