import React from 'react';
import Header from './pages/Header'
import AboutMe from './pages/AboutMe'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Landing from './pages/Landing'

const Layout = () => {
    return (
        <div>
            <Header />
            <Landing />
            <AboutMe />
            <Work />
            <Contact />
        </div>
    );
};

export default Layout;