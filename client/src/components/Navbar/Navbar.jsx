import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'contact', 'work', 'skills'].map((e) => {
          return (
            <li className='app__flex p-text' key={`link-${e}`}>
              <div />
              <a href={`${e}`}> {e}</a>
            </li>
          );
        })}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'contact', 'work', 'skills'].map((e) => {
                return (
                  <li key={e}>
                    <a href={`#${e}`} onClick={() => setToggle(true)}>
                      {' '}
                      {e}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
