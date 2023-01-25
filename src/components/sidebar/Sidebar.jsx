import React, { useState } from 'react';
import Logo from '../../imgs/logo.png';
import './Sidebar.css';
import { motion } from 'framer-motion';
import { SidebarData } from '../../Data/Data';
import { UilBars, UilSignOutAlt } from '@iconscout/react-unicons';

const Sidebar = () => {
  const [selected, setSelected] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const sidebarVariants = {
    true: {
      left: 0,
    },
    false: {
      left: '-60%',
    },
  };
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: '60%' } : { left: '5%' }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>p
          </span>
        </div>
        {/* Menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? 'menuItem active' : 'menuItem'}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
