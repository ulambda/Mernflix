import { useEffect, useState } from 'react';
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider,NavLink,Outlet,Link, Routes, useLocation, useNavigate} from 'react-router-dom';

import TopNavCSS from 'components/nav/TopNav.module.css';

import SolidBtn from 'components/ui/SolidBtn';
import ClearBtn from 'components/ui/ClearBtn';

import titleStore from 'store/title';
import searchStore from 'store/search';
import { queryAllByRole } from '@testing-library/react';

    export default function TopNav() {

        const location = useLocation();

        const path = location.pathname;

        const navigate = useNavigate();

        const { websiteName } = titleStore();

        const [atPageTop, setAtPageTop] = useState(true);

        useEffect(() => {
            const updatePageTop = () => { setAtPageTop(document.documentElement.scrollTop === 0) };
            window.addEventListener('scroll', updatePageTop);
            return () => window.removeEventListener('scroll', updatePageTop);
        }, []);

        const { query, setQuery } = searchStore();
        
        const handleSearch = (query: string) => {
            if(query === '' || query === null) return;
            navigate(`/search/${query}`);
        }

        return (
            <>
                <nav className={`${TopNavCSS.topnav} ${!atPageTop ? TopNavCSS.scrolled : ''}`}>
                    <div className={TopNavCSS.left}>
                        <button className={TopNavCSS.hamburgerBtn}>
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <NavLink to="/" className={TopNavCSS.logo}>
                            <p>{websiteName}</p>
                        </NavLink>

                        {/* <div className={TopNavCSS.breadcrumbs}>
                            {Array.from(path.split('/')).map((crumb, i) => {
                                if(crumb === '') return null;
                                return 
                                    <NavLink key={i} to={`/${crumb}`} className={TopNavCSS.crumb}>
                                        <p>{crumb}</p>
                                    </NavLink>
                            })}
                        </div> */}

                    </div>
                    
                    <div className={TopNavCSS.middle}>
                        <div className={TopNavCSS.searchContainer}>
                            <input 
                                className={TopNavCSS.searchBar} 
                                type="text" 
                                placeholder="Search..." 
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' ? handleSearch(query) : null}

                            />
                            <button className={TopNavCSS.searchBtn} 
                                onClick={() => handleSearch(query)}
                            >
                                <span className="material-symbols-outlined">search</span>
                            </button>
                        </div>
                    </div>
                    <div className={TopNavCSS.right}>
                        <NavLink to="/login"><ClearBtn>Login</ClearBtn></NavLink>
                        <NavLink to="/register"><ClearBtn>Register</ClearBtn></NavLink>
                    </div>
                </nav>
            </>
        );
    }
  

