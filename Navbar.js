import './Navbar.css'
import { useTheme } from './useTheme';
import * as React from 'react';
import { useTheme } from './useTheme';

const Navbar = () => {
    const { color, changeColor } = useTheme()
    return ( 
        <div className="navbar" style={{ background: color }}>
        <nav onClick={() => changeColor('pink')}>
            <h1>Cooking Ninja</h1>
        </nav>
      </div>
     );
}
 
export default Navbar;