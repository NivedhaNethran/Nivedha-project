import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'


const Admin = () => {
  return (
    <div className='add'>
        <div className="abc">
         <ul>
          <li><Link className="lin" to="/chocoupdate">Chocalates</Link></li>
          <li><Link className="lin" to="/cakeupdate">Cakes</Link></li>
          <li><Link className="lin" to="/giftupdate">Gifts</Link></li>
          <li><Link className='lin' to="/sweetupdate">Sweets</Link></li>
         </ul>
        </div>
    </div>
  
  )
}

export default Admin