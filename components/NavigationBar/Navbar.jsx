import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import s from './NavBar.module.scss'
import {data} from "../../navbarData";
import {Link} from "react-scroll";

const Navbar = () => {
  const [element, setElement] = useState(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    setElement(document.getElementById("portal"))
  }, [])

  return element ? ReactDOM.createPortal(
      <nav id='right-menu' className={s.rightMenu}>
        <ul className={s.menuList}>
          {data.map(({id, name, link}) => (
              <li key={id} className={s.menuItem}>
                <Link className={active === id ? s.activeLink : s.menuLink} onClick={() => setActive(id)} to={link} smooth={true} duration={600}>
                  {name}
                </Link>
              </li>
          ))}
        </ul>
      </nav>,
      element
  ) : null
};

export default Navbar;