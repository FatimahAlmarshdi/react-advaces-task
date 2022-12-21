// import React from 'react'
// import './navbar.css'

// export default function navbar() {
//   return (
//     <div>
//          <div className='nav'>
//     <a href='/' className='site-title'>site name</a>

//     <ul>
//         <li><a href='/User'>User</a></li>
//         <li><a href='/Admin'>Admin</a></li>
//         <li><a href='/CheckBox'>CheckBox</a></li>
//     </ul>
//     </div>
//     </div>
//   )
// }

import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Student  DevOps
      </Link>
      <ul>
        <CustomLink to="/User">User</CustomLink>
        <CustomLink to="/Admin">Admin</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}