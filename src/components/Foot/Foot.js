import React from 'react';
import classes from './Foot.css';
import GitHub from 'react-icons/lib/io/social-github';
import LinkedIn from 'react-icons/lib/io/social-linkedin';
import Email from 'react-icons/lib/io/at';

const Foot = () => (
  <div className={classes.container}>
    <div className={classes.title}>Thomas Benhamou</div>
    <div className={classes.subtitle}>Junior Web Developper</div>
    <div className={classes.iconsContainer}>
      <a href="https://github.com/thomasbenhamou">
        <GitHub
          size={42}
          style={{ margin: '0px 20px' }}
          color="#eee"
          target="_blank"
          rel="noopener noreferrer"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/thomas-benhamou-936bb3a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn
          size={42}
          style={{ margin: '0px 20px' }}
          color="#eee"
          target="_blank"
          rel="noopener noreferrer"
        />
      </a>
      <Email size={42} style={{ margin: '0px 20px' }} color="#eee" />
    </div>
  </div>
);

export default Foot;
