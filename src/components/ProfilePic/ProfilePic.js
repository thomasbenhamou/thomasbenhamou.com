import React from 'react';
import classes from './ProfilePic.css';
import thomasPic from '../../assets/img/photo thomas.jpg';

const profilePic = () => (
  <div className={classes.container}>
    <img src={thomasPic} alt="Thomas Benhamou" className={classes.profilePic} />
  </div>
);

export default profilePic;
