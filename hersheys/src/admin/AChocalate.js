import React from 'react'
import Update from './Update'
import { Link } from 'react-router-dom'
import ChocoUpdate from './ChocoUpdate'

const AChocalate = () => {
  return (
    <div>
        <Link to='Chocoupload' className='btn btn-primary'>Add on</Link>
        <ChocoUpdate/>
    </div>
  )
}

export default AChocalate