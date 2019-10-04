import React from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css';

const NavBar = (props) => (
    <nav className='NavBar'>
        <h2>Title</h2>
        <Link to='' className='NavBar-link'>Link 1</Link>
        <Link to='' className='NavBar-link'>Link 2</Link>
    </nav>

);

export default NavBar;