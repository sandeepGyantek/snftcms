import React from 'react';
import Topbar from './header/Topbar';
import Sidebar from './sidebar/Sidebar';

const Layout = (props) => {
    return (
        <div style={{marginLeft: '260px'}}>
            <Topbar />
            <Sidebar />
            {props.children}
        </div>
    )
}

export default Layout;
