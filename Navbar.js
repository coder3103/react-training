import './Navbar.css'
import { useTheme } from './useTheme';
import * as React from 'react';
import { useTheme } from './useTheme';

const Navbar = () => {
    const {color} = useTheme()
    return ( 
        <div className="navbar">
            <nav>
                    <h1>Cooking Ninja</h1>
            </nav>
        </div>
     );
}
 
export default Navbar;