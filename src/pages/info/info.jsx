import React from 'react'
import { Outlet } from 'react-router-dom'

const Info = () => {
  return (
    <div>
        <h1>info</h1>
        <Outlet />
        <h1>footer</h1>
    </div>
  )
}

export default Info