import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Service = () => {
  return (
    <div>
      <h1> Formation Languages</h1>
      <div>
        <Link to="form-react">React Js</Link>
        <Link to="form-cake">CakePhp</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Service
