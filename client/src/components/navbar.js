import React from 'react';
import './navbar.css';


const Navbar = () => {
  return(
    <div className="navbar">
      <span style={{marginRight: '20px'}} className="home">Home </span>
      <span style={{marginRight: '20px'}} className="about">About </span>
      <span style={{marginRight: '20px'}} className="content">Content </span>
      <span style={{marginRight: '20px'}} className="blog">Blog </span>
      <span style={{marginRight: '20px'}} className="instagram">Instagram </span>
    </div>
  )
};

export default Navbar;
