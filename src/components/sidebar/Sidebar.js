import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import logo from '../../assets/images/logo.png';

const Sidebar = () => {
    return (
        <>
        <div className="sidenavbar">
            <div className="header_logo">
                <img src={logo} alt="site-logo" />
            </div>
            <div className="sidenav-links">
                <ul>
                    <li>
                        <NavLink to="/feature" activeClassName='active'>
							Feature
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user" activeClassName='active'>
							User
                        </NavLink>
                    </li>
 
                </ul>
            </div>
            
        </div>
        </>
    )
}

export default Sidebar;
