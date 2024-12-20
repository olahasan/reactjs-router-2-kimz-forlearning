import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <ul style={{display:'flex' , listStyle:'none'}}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="About">About</Link>
            </li>
            <li>
                <Link to="Contact">Contact</Link>
            </li>
            <li>
                <Link to="Books">Books</Link>
            </li> 
            <li>
                <Link to="Ola">OLAlolo</Link>
            </li> 
        </ul> 
    </div>
  )
}

export default Header