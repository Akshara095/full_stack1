import '../FunctionalComponents/navbar1.css'
import React from 'react';
import {Link} from 'react-router-dom';
var NavBar1 = () =>{
    return (
        <header>
            <nav>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    
            </nav>
        </header>
    )
}
export default NavBar1;