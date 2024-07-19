import React from 'react'

import { NavLink } from 'react-router-dom';

import DimOverlay from 'components/nav/DimOverlay';

import SideNavCSS from 'components/nav/SideNav.module.css';
import TopNavCSS from 'components/nav/TopNav.module.css';

import navStateStore from 'store/navState';
import titleStore from 'store/title';

export default function SideNav() {

  const { sideNavOpen, toggleSideNav } = navStateStore();
  const { websiteName } = titleStore();

  const [ sideBavExiting, setSideNavExiting ] = React.useState(false);

  const handleClose = () => {

    //add slideout keyframe animation to sidenav
    setSideNavExiting(true);
    //wait 0.2 seconds before closing the sidenav
    setTimeout(() => {
      toggleSideNav();
      setSideNavExiting(false);
    }, 200);
  }

  return <>
    {sideNavOpen && <>
      <nav className={`${SideNavCSS.sidenav} ${sideBavExiting ? SideNavCSS.exiting : ''}`} >

        <div className={SideNavCSS.header}>
          <button className={TopNavCSS.hamburgerBtn} onClick={() => handleClose()}>
              <span className="material-symbols-outlined">menu</span>
          </button>

          <NavLink to="/" className={TopNavCSS.logo}>
              <p>{websiteName}</p>
          </NavLink>
        </div>



        <div className={SideNavCSS.links} onClick={() => handleClose()}>
          
          <NavLink to="/">
            <button className={SideNavCSS.sideNavLinkBtn}>
              <i className="material-symbols-outlined">home</i>
              <p>Home</p>
            </button>
          </NavLink>

          <NavLink to="/search">
            <button className={SideNavCSS.sideNavLinkBtn}>
              <i className="material-symbols-outlined">search</i>
              <p>Search</p>
            </button>
          </NavLink>

          <NavLink to="/login">
            <button className={SideNavCSS.sideNavLinkBtn}>
              <i className="material-symbols-outlined">login</i>
              <p>login</p>
            </button>
          </NavLink>

          <NavLink to="/register">
            <button className={SideNavCSS.sideNavLinkBtn}>
              <i className="material-symbols-outlined">person_add</i>
              <p>register</p>
            </button>
          </NavLink>

        </div>

      </nav>
      <DimOverlay zIndex={1} onClick={() => handleClose()}/>
    </>}
  </>;
}
