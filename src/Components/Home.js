import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const Navigate = useNavigate()
  const handleBtnClick = () => {
      Navigate("/ola")
  }
  return (
    <div className='Home'>
        Home
        <ul>
            <li>ola</li>
            <li>ola2</li>
            <li>ola3</li>
        </ul>
        <button  onClick={handleBtnClick}>Add user</button>
    </div>
  )
}

export default Home