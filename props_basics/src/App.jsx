import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import All_cards from './components/Process'
import { CardOne } from './components/Card'
// import All_cards from './components/Process'

let Object=[{
  name:"Shaan",
  rollNum:30,
  address:"Jabalpur"
},{
  name:"Rehan",
  rollNum:88,
  address:"Delhi" 
},{
  name:"Rahul",
  rollNum:88,
  address:"Delhi" 
}];

let Data =["Shaan","Rehan","Rahul"]




function App() {
  const [count, setCount] = useState(0)

  return (  
    <>
      <h1 className="text-red-600 bg-black">This is my reacty app.</h1>
      <CardOne username="Shaan"/>
      {
       Object.map((e)=> <CardOne className="mt-3" key={Math.random()}  username={e.name}/>)
      }
    </>
  )
}

export default App
