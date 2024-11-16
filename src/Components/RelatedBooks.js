import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function RelatedBooks() {
  return (
    <div className='RelatedBooks'>
        RelatedBooks
        <nav>
            <Link to='Ola'>Ola</Link>
            <Link to='Ali'>Ali</Link>
            <Link to='Mona'>Mona</Link>
        </nav>
        <Outlet/>
        <ul>
            <li>hfgsgfkj</li>
            <li>hfgsgfkj</li>
            <li>hfgsgfkj</li>
            <li>hfgsgfkj</li>
            <li>hfgsgfkj</li>
            <li>hfgsgfkj</li>
            <li>hfgsgfkj</li>
        </ul>
    </div>
  )
}

export default RelatedBooks
