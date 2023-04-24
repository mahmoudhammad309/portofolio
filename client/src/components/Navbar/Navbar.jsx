import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <svg
          width='364'
          height='50'
          viewBox='0 0 370 89.57056150845955'
          class='css-1j8o68f'
        >
          <defs id='SvgjsDefs2292'></defs>
          <g
            featurekey='symbolFeature-0'
            transform='matrix(1.2269938650306749,0,0,1.2269938650306749,-6.134969325153374,-8.466258955879445)'
            fill='#506084'
          >
            <g xmlns='http://www.w3.org/2000/svg'>
              <path d='M38.6,56.8h15.6V41.2H38.6V56.8z M41.7,44.3h9.4v9.4h-9.4V44.3z'></path>
              <path d='M82.1,44.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4s4.4-2,4.4-4.4S84.5,44.6,82.1,44.6z M82.1,50.3c-0.7,0-1.3-0.6-1.3-1.3   s0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3S82.8,50.3,82.1,50.3z'></path>
              <path d='M62.1,23.7h6.8c0.6,1.7,2.2,2.8,4.1,2.8c2.4,0,4.4-2,4.4-4.4s-2-4.4-4.4-4.4c-1.9,0-3.5,1.2-4.1,2.8h-6.8   c-0.5-0.7-1.3-1.2-2.3-1.2c-1.5,0-2.8,1.2-2.8,2.8c0,1,0.5,1.8,1.2,2.3v4.9h-9.8v-4.9c0.7-0.5,1.2-1.3,1.2-2.3   c0-1.5-1.2-2.8-2.8-2.8S44,20.6,44,22.1c0,1,0.5,1.8,1.2,2.3v4.9h-9.8v-4.9c0.7-0.5,1.2-1.3,1.2-2.3c0-1-0.5-1.8-1.2-2.3v-4.4   c1.7-0.6,2.8-2.2,2.8-4.1c0-2.4-2-4.4-4.4-4.4s-4.4,2-4.4,4.4c0,1.9,1.2,3.5,2.8,4.1v4.4c-0.7,0.5-1.2,1.3-1.2,2.3   c0,1,0.5,1.8,1.2,2.3v4.9h-5.7v5.2h-4.5c-0.5-0.7-1.3-1.2-2.3-1.2c-1,0-1.8,0.5-2.3,1.2H7.9v5.4C6.2,40.5,5,42.1,5,44   c0,2.4,2,4.4,4.4,4.4s4.4-2,4.4-4.4c0-1.9-1.2-3.5-2.8-4.1v-2.2h6.5c0.5,0.7,1.3,1.2,2.3,1.2c1,0,1.8-0.5,2.3-1.2h4.5v9.8h-4.5   c-0.5-0.7-1.3-1.2-2.3-1.2c-1.5,0-2.8,1.2-2.8,2.8s1.2,2.8,2.8,2.8c1,0,1.8-0.5,2.3-1.2h4.5v9.8h-4.5c-0.5-0.7-1.3-1.2-2.3-1.2   c-1,0-1.8,0.5-2.3,1.2h-4c-0.6-1.7-2.2-2.8-4.1-2.8C7,57.6,5,59.5,5,62s2,4.4,4.4,4.4c1.9,0,3.5-1.2,4.1-2.8h4   c0.5,0.7,1.3,1.2,2.3,1.2c1,0,1.8-0.5,2.3-1.2h4.5v5h5.7v4.9c-0.2,0.1-0.3,0.2-0.4,0.4h-8c-0.6-1.7-2.2-2.8-4.1-2.8   c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c1.9,0,3.5-1.2,4.1-2.8h7.5c0.4,0.9,1.4,1.6,2.5,1.6c1.5,0,2.8-1.2,2.8-2.8   c0-1-0.5-1.8-1.2-2.3v-4.9h9.8v4.9c-0.7,0.5-1.2,1.3-1.2,2.3c0,1.5,1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8c0-1-0.5-1.8-1.2-2.3v-4.9h9.8   v4.9c-0.7,0.5-1.2,1.3-1.2,2.3c0,1.5,1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8c0-1-0.5-1.8-1.2-2.3v-4.9c2.7,0,4.8-2.2,4.8-4.9v-0.1h4.5   c0.2,0.3,0.4,0.5,0.7,0.7v7c-1.7,0.6-2.8,2.2-2.8,4.1c0,2.4,2,4.4,4.4,4.4s4.4-2,4.4-4.4c0-1.9-1.2-3.5-2.8-4.1v-7   c0.7-0.5,1.2-1.3,1.2-2.3c0-1.5-1.2-2.8-2.8-2.8c-1,0-1.8,0.5-2.3,1.2h-4.5v-9.8h4.5c0.5,0.7,1.3,1.2,2.3,1.2   c1.5,0,2.8-1.2,2.8-2.8s-1.2-2.8-2.8-2.8c-1,0-1.8,0.5-2.3,1.2h-4.5v-9.8h4.5c0.5,0.7,1.3,1.2,2.3,1.2c1.5,0,2.8-1.2,2.8-2.8   s-1.2-2.8-2.8-2.8c-1,0-1.8,0.5-2.3,1.2h-4.5v-5.2h-4.8v-4.9C61.6,24.2,61.9,24,62.1,23.7z M33.9,10.1c0.7,0,1.3,0.6,1.3,1.3   c0,0.4-0.2,0.8-0.5,1c-0.2-0.1-0.5-0.2-0.7-0.2c-0.3,0-0.5,0.1-0.7,0.2c-0.3-0.2-0.5-0.6-0.5-1C32.6,10.7,33.2,10.1,33.9,10.1z    M9.4,45.2c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3C10.7,44.7,10.1,45.2,9.4,45.2z M9.4,63.2   c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3S10.1,63.2,9.4,63.2z M19.8,76.6c-0.7,0-1.3-0.6-1.3-1.3   c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3C21.1,76.1,20.5,76.6,19.8,76.6z M73,76.6c-0.7,0-1.3-0.6-1.3-1.3   c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3C74.2,76.1,73.7,76.6,73,76.6z M63,63.6c0,1-0.8,1.8-1.8,1.8H29.8V32.4H63V63.6z    M73,20.8c0.7,0,1.3,0.6,1.3,1.3s-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3S72.2,20.8,73,20.8z'></path>
            </g>
          </g>
          <g
            id='SvgjsG2294'
            featurekey='nameFeature-0'
            transform='matrix(1.4230418300818224,0,0,1.4230418300818224,114.64936069678586,7.158926495425099)'
            fill='#4d5fc7'
          >
            <path d='M25.84 13.600000000000001 c0.2 0 0.36 0.16 0.36 0.36 l0 25.68 c0 0.2 -0.16 0.36 -0.36 0.36 l-4.36 0 c-0.12 0 -0.32 -0.16 -0.32 -0.36 l0 -14.8 l-4.4 14.92 c-0.08 0.16 -0.16 0.24 -0.32 0.24 l-3.16 0 c-0.12 0 -0.28 -0.08 -0.32 -0.24 l-4.12 -15.2 l0 15.08 c0 0.2 -0.16 0.36 -0.36 0.36 l-4.44 0 c-0.16 0 -0.28 -0.16 -0.28 -0.36 l0 -25.68 c0 -0.2 0.12 -0.36 0.28 -0.36 l5.6 0 c0.16 0 0.32 0.12 0.36 0.24 l4.84 16.2 l5.32 -16.2 c0 -0.12 0.12 -0.24 0.28 -0.24 l5.4 0 z M23.36 37.56 c0 0.28 0.52 0.36 0.52 0 l0 -21.56 c0 -0.08 -0.12 -0.2 -0.24 -0.2 l-1.88 0 c-0.16 0 -0.2 0.12 -0.28 0.2 l-6.64 19.8 l-6.6 -19.84 c0 -0.12 -0.08 -0.16 -0.2 -0.16 l-1.96 0 c-0.12 0 -0.24 0.12 -0.24 0.24 l0 21.52 c0 0.28 0.52 0.36 0.52 0 l0 -21.24 l1.48 0 l6.76 20.32 c0.16 0.28 0.28 0.2 0.48 0 l6.8 -20.32 l1.48 0 l0 21.24 z M38.72 13.84 c0.04 -0.12 0.12 -0.24 0.28 -0.24 l4.96 0 c0.16 0 0.24 0.12 0.28 0.24 l6.92 25.72 c0.04 0.24 -0.12 0.44 -0.36 0.44 l-4.56 0 c-0.12 0 -0.24 -0.08 -0.28 -0.24 l-1.56 -5.6 l-5.84 0 l-1.52 5.6 c-0.04 0.16 -0.12 0.24 -0.28 0.24 l-4.6 0 c-0.24 0 -0.4 -0.2 -0.36 -0.44 z M39.84 29.2 l3.32 0 l-1.72 -6.04 z M46 31.560000000000002 l1.84 6 c0.08 0.24 0.52 0.2 0.4 -0.12 l-6.4 -21.28 c-0.12 -0.52 -0.8 -0.56 -0.92 0 l-6.2 21.28 c-0.12 0.28 0.32 0.4 0.44 0.16 l1.76 -6.04 l9.08 0 z M37.04 31.04 l4.36 -14.72 l4.44 14.72 l-8.8 0 z M68.48 24 l0 -10.04 c0 -0.2 0.16 -0.36 0.36 -0.36 l4.56 0 c0.2 0 0.36 0.16 0.36 0.36 l0 25.68 c0 0.2 -0.16 0.36 -0.36 0.36 l-4.56 0 c-0.2 0 -0.36 -0.16 -0.36 -0.36 l0 -10.64 l-6.48 0 l0 10.64 c0 0.2 -0.16 0.36 -0.36 0.36 l-4.56 0 c-0.2 0 -0.32 -0.16 -0.32 -0.36 l0 -25.68 c0 -0.2 0.12 -0.36 0.32 -0.36 l4.56 0 c0.2 0 0.36 0.16 0.36 0.36 l0 10.04 l6.48 0 z M59.08 37.52 c0 0.32 0.52 0.28 0.52 0 l0 -10.72 l11.24 0 l0 10.72 c0 0.28 0.44 0.32 0.44 0 l0 -21.52 c0 -0.28 -0.44 -0.36 -0.44 0 l0 10.24 l-11.24 0 l0 -10.24 c0 -0.28 -0.52 -0.28 -0.52 0 l0 21.52 z M103.32000000000001 13.600000000000001 c0.2 0 0.36 0.16 0.36 0.36 l0 25.68 c0 0.2 -0.16 0.36 -0.36 0.36 l-4.36 0 c-0.12 0 -0.32 -0.16 -0.32 -0.36 l0 -14.8 l-4.4 14.92 c-0.08 0.16 -0.16 0.24 -0.32 0.24 l-3.16 0 c-0.12 0 -0.28 -0.08 -0.32 -0.24 l-4.12 -15.2 l0 15.08 c0 0.2 -0.16 0.36 -0.36 0.36 l-4.44 0 c-0.16 0 -0.28 -0.16 -0.28 -0.36 l0 -25.68 c0 -0.2 0.12 -0.36 0.28 -0.36 l5.6 0 c0.16 0 0.32 0.12 0.36 0.24 l4.84 16.2 l5.32 -16.2 c0 -0.12 0.12 -0.24 0.28 -0.24 l5.4 0 z M100.84 37.56 c0 0.28 0.52 0.36 0.52 0 l0 -21.56 c0 -0.08 -0.12 -0.2 -0.24 -0.2 l-1.88 0 c-0.16 0 -0.2 0.12 -0.28 0.2 l-6.64 19.8 l-6.6 -19.84 c0 -0.12 -0.08 -0.16 -0.2 -0.16 l-1.96 0 c-0.12 0 -0.24 0.12 -0.24 0.24 l0 21.52 c0 0.28 0.52 0.36 0.52 0 l0 -21.24 l1.48 0 l6.76 20.32 c0.16 0.28 0.28 0.2 0.48 0 l6.8 -20.32 l1.48 0 l0 21.24 z M119.88 13.239999999999998 c3.44 0 5.84 0.76 7.36 2.4 c1.2 1.32 1.76 3.2 1.76 5.88 l0 10.52 c0 2.76 -0.56 4.68 -1.76 5.96 c-1.56 1.6 -3.92 2.4 -7.36 2.4 c-3.56 0 -5.88 -0.8 -7.4 -2.4 c-1.16 -1.28 -1.8 -3.2 -1.8 -5.96 l0 -10.52 c0 -2.68 0.64 -4.56 1.8 -5.92 c1.56 -1.6 3.92 -2.36 7.4 -2.36 z M123.67999999999999 30.84 l0 -8 c0 -3.52 -1.88 -4.24 -3.6 -4.24 l-0.48 0 c-2.56 0 -3.56 1.64 -3.56 4.24 l0 8 c0 3.52 1.88 4.28 3.56 4.28 l0.48 0 c2.56 0 3.56 -1.72 3.6 -4.28 z M113.2 21.8 l0 9.92 c0 1.88 0.48 3.44 1.6 4.6 c1.04 1.04 2.64 1.6 4.6 1.6 l1.04 0 c3.76 0 6.2 -2.4 6.2 -6.2 l0 -9.92 c0 -4.08 -2.16 -6.28 -6.2 -6.28 l-1.04 0 c-4.08 0 -6.2 2.2 -6.2 6.28 z M120.44 37.4 l-1.04 0 c-1.88 0 -3.28 -0.48 -4.28 -1.48 s-1.52 -2.4 -1.52 -4.2 l0 -9.92 c0 -3.8 2.04 -5.8 5.8 -5.8 l1.04 0 c3.8 0 5.68 1.96 5.68 5.8 l0 9.92 c0 1.68 -0.52 3.2 -1.6 4.24 c-1.04 0.88 -2.44 1.44 -4.08 1.44 z M148.72 30.759999999999998 l0 -16.8 c0 -0.2 0.16 -0.36 0.36 -0.36 l4.56 0 c0.2 0 0.36 0.16 0.36 0.36 l0 18.08 c0 5.76 -3.16 8.36 -9.12 8.36 c-5.64 0 -9.16 -2.24 -9.16 -8.36 l0 -18.08 c0 -0.2 0.16 -0.36 0.36 -0.36 l4.6 0 c0.2 0 0.36 0.16 0.36 0.36 l0 16.8 c0 3.48 1.96 4.24 3.6 4.24 l0.48 0 c2.48 0 3.6 -1.68 3.6 -4.24 z M138.20000000000002 16.16 l0 15.56 c0 3.6 2.44 6.2 6.24 6.2 l1 0 c3.8 0 6.28 -2.72 6.28 -6.2 l0 -15.56 c0 -0.36 -0.48 -0.4 -0.48 0 l0 15.56 c0 3.28 -2.36 5.68 -5.8 5.68 l-1 0 c-3.36 0 -5.76 -2.16 -5.76 -5.68 l0 -15.56 c0 -0.36 -0.48 -0.36 -0.48 0 z M171.52 13.600000000000001 c2.72 0 4.76 0.76 6.12 2.24 c1.2 1.32 1.8 3.28 1.8 5.68 l0 10.6 c0 4.84 -2.8 7.88 -7.92 7.88 l-10 0 c-0.2 0 -0.32 -0.16 -0.32 -0.36 l0 -25.68 c0 -0.2 0.12 -0.36 0.32 -0.36 l10 0 z M174.2 30.92 l0 -8.2 c0 -2.52 -1.32 -4.12 -4.12 -4.12 l-3.6 0 l0 16.4 l3.6 0 c2.4 0 4.12 -1.56 4.12 -4.08 z M163.64 16.04 l0 21.52 c0 0.16 0.16 0.2 0.24 0.2 l6.52 0 c4.6 0 6.68 -2.76 6.68 -5.32 l0 -10.24 c0 -4.24 -2.24 -6.4 -6.8 -6.4 l-6.4 0 c-0.08 0 -0.24 0.04 -0.24 0.24 z M176.6 22.2 l0 10.24 c0 3.2 -3.2 4.88 -6.2 4.88 l-6.28 0 l0 -21 l6.16 0 c4.2 0 6.32 1.88 6.32 5.88 z'></path>
          </g>
        </svg>
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
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
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
