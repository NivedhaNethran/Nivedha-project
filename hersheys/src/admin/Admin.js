import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import Update from './Update'


const Admin = () => {
  return (
    <div className='add'>
        <Link to="/upload" className='btn btn-primary cl'>Add on</Link>
        <Update/>        
    </div>
  
  )
}

export default Admin