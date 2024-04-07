import React from 'react'
import { CardOne } from './Card';


// let names=["Rahul","Shaan","Suraj","Rehan","Ayan"];
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
}]



export default function All_cards() {

    return (
    <>
    {
       Object.map((e)=>{
        // console.log(e.address)
        <CardOne username={e.name}/>
       }) 
    }
    </>
  )
}

