import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import s from "./NavBar.module.scss";
import { data } from "../../navbarData";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import classnames from "classnames";

const Navbar = () => {
  const [element, setElement] = useState(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    setElement(document.getElementById("portal"));
  }, []);

  return element
    ? ReactDOM.createPortal(
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              // overflowX: 'hidden',
              transition: {
                delay: 0.2,
                duration: 0.5,
              },
            },
          }}
        >
          <nav id="right-menu" className={s.rightMenu}>
            <ul className={s.menuList}>
              {data.map(({ id, name, link }) => (
                <li key={id} className={s.menuItem}>
                  <Link
                    activeClass={s.active}
                    className={
                      active === id
                        ? classnames(s.menuLink, s.active)
                        : s.menuLink
                    }
                    onClick={() => setActive(id)}
                    to={link}
                    smooth={true}
                    spy={true}
                    duration={600}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>,
        element
      )
    : null;
};

export default Navbar;
