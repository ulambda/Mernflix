import React from 'react'

import { NavLink } from 'react-router-dom';

import SideNavCSS from 'components/nav/SideNav.module.css';


export default function SideNav() {
  return <>
    <nav className={SideNavCSS.sidenav}>
      <div className={SideNavCSS.header}>
        <button>close menu</button>
        <p>logo</p>
      </div>

      <div className={SideNavCSS.links}>
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>

      </div>

    </nav>
    
  </>
}
