import React from 'react';
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider,NavLink,Outlet,Link, Routes} from 'react-router-dom';
import titleStore from 'store/title';

import TopNav from 'components/nav/TopNav';
import SideNav from 'components/nav/SideNav';
import DimOverlay from 'components/nav/DimOverlay';


import HomePage from 'pages/HomePage';
import SearchPage from 'pages/SearchPage';
import WatchPage from 'pages/WatchPage';
import SignInPage from 'pages/SignInPage';
import RegisterPage from 'pages/RegisterPage';


function RootLayout() {
  
  const { websiteName, pageTitle, setPageTitle } = titleStore();

  return <>
    {pageTitle !== "" ? <title>{pageTitle} - {websiteName}</title> : <title>{websiteName}</title>}
    <TopNav/>
    <SideNav/>
    <main>
      <Outlet/>
    </main>
  </> 
}


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path="/search" element={<SearchPage/>}/>
    <Route path="/search/:query" element={<SearchPage/>}/>
    <Route path="/watch/:title/:ep" element={<WatchPage/>}/>
    <Route path="/login" element={<SignInPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="*" element={<h1>404</h1>}/>
  </Route>
));

export default function App() {
  return <RouterProvider router={router}/>;
}