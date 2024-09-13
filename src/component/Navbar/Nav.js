import React, { useState } from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'
import Courses from '../Courses'
function Nav() {
 
  return (
    <nav className='nav'>
        <ul>
            <li><NavLink to="/course/sql">SQL</NavLink></li>
            <li><NavLink to="/course/html">HTML</NavLink></li>
            <li><NavLink to="/course/css">CSS</NavLink></li>
            <li><NavLink to="/course/javascript">JS</NavLink></li>
        </ul>
        {/* <Courses/> */}
    </nav>
  )
}

export default Nav