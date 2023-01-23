import React from 'react';
import Logo from '../../imgs/logo.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>p
        </span>
      </div>
      {/* Menu */}
      <div className="menu">
        <div className="menuItem">
          <div>
            Icon
            <span>Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
