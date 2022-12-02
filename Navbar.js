import './Navbar.css'
import { useTheme } from './useTheme';
import * as React from 'react';

const Navbar = () => {
    const {color} = useTheme()
    return ( 
        <div className="navbar" style={{ background: color }}>
        <nav>
            <h1>Cooking Ninja</h1>
        </nav>
      </div>
     );
}
 
export default Navbar;