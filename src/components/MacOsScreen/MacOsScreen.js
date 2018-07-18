import React from 'react';
import classes from './MacOsScreen.css';

const macOsScreen = ({ image }) => (
  <div className={classes.window}>
    <div className={classes.windowBar} />
    <div className={classes.windowContentFrame}>
      <div className={classes.windowContent} />
    </div>
  </div>
);

export default macOsScreen;
