import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout;
