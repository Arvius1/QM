import React from 'react'
import { Link } from 'react-router-dom';
import { menuData } from './menuData';
import styles from './Navbar.module.css';

const Navbar = () => {  

  return (
    <nav className={styles.NavBar}>
      <ul className={styles.UnOrderedList}>
      {menuData.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
            {/* {item.submenu && (
              <ul>
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link to={subItem.link}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}        
      </ul>
    </nav>
  );
};

export default Navbar;
