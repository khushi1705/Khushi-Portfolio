import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navBar'>
        <h1 className= 'logo'>SK    </h1>

        <div className= 'navBar-list'>
<Link to="/"> Home </Link>
<Link to="/contact"> contact </Link>
<Link to="/about">about</Link>
<Link to="/project"> Project </Link>
<Link to="/Login"> Login </Link>
<Link to="/product"> Product </Link>

            
        

        </div>
            <button>LOG IN</button>
    
    </div>
  )
}

export default Navbar