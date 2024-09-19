import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import Update from './Update'
import AChocalate from './AChocalate'

const Admin = () => {
  return (
    <div className='add'>
        {/* <Link to="/upload" className='btn btn-primary cl'>Add on</Link>
        <Update/>         */}
        <div className="abc">
         <ul>
          <li>Chocalates</li>
          <li>Cakes</li>
          <li>Gifts</li>
          <li>Sweets</li>
         </ul>
        </div>
    </div>
  
  )
}

export default Admin