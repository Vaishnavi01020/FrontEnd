import React from 'react';
//import ReactDOM from 'react-dom/client';

import{Outlet,Link} from "react-router-dom";
//import Home from './Home.js';
const Layout=()=>{
    return(
        <>
        <nav>
            <h1>hhii</h1>
                
                <li>
                    <Link to="/Classcomp">Classcomp</Link>
                </li>
                <li>
                    <Link to="/Classcomp1">Classcomp1</Link>
                </li>
                
            
        </nav>
        <Outlet/>
        </>
    )
};
export default Layout;