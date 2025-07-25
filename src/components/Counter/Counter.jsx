import React,{useState} from 'react'

const Counter = () => {

    const [increase , setIncrease, ]= useState(0) //syntax
    

    //function to handle increasebutton
    const handleIncrease = () =>{
        setIncrease(increase+1)
       
    }
    const handleDecrease = () =>{
        setIncrease(increase-1)
    }

  return (
    <div> Let's count
        <h1> {increase}</h1>
        <button onClick={handleIncrease}>  Increase</button><br/>
        <button onClick = {handleDecrease}>  Decrease</button>
       
    </div>
  )
}

export default Counter
