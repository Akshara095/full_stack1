import '../FunctionalComponents/navbar.css'
import React from 'react';
import {Link} from 'react-router-dom';
var NavBar = () =>{
    return (
        <header>
            <nav>
                <ul>
                    
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/useeffect'>UseEffect</Link>
                    </li>
                    <li>
                    <Link to='/useeffect1'>UseEffect1</Link>
                    </li>
                    <li>
                    <Link to='/useref'>UseRef</Link>
                    </li>
                    <li>
                        <Link to='/usecontext'>UseContext</Link>
                    </li>
                    <li>
                        <Link to='/useref1'>UseRef1</Link>
                    </li>
                    <li>
                        <Link to='/usememo'>UseMemo</Link>
                    </li>
                    <li>
                        <Link to='/image'>Image</Link>
                    </li>
                    <li>
                        <Link to='/mongodb'>Mongodb</Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;