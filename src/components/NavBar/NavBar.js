import React from 'react';
import classes from './NavBar.css';
import ProfilePic from '../ProfilePic/ProfilePic';

const navBar = () => (
  <nav className={classes.topNav}>
    <ProfilePic />
  </nav>
);

export default navBar;
