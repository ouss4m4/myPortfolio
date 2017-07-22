import React from 'react';
import NavDrawer from '../components/NavDrawer'


const Header = () => {
    const navItems= ['About','Work','Contact']
    return (
        <section id='header'>
            <NavDrawer items={navItems}/>
        </section>
    );
};

export default Header;