import React from 'react';
import classes from './Banner.css';
import RotatingText from '../RotatingText/RotatingText';
import GitHub from 'react-icons/lib/io/social-github';
import LinkedIn from 'react-icons/lib/io/social-linkedin';
import Email from 'react-icons/lib/io/at';

const banner = () => (
  <div className={classes.banner}>
    <div className={classes.container}>
      <div className={classes.name}>Thomas Benhamou</div>
      <div className={classes.mainTitle}>
        <span className={classes.attribute}>junior</span> web developper
      </div>
      <RotatingText
        items={['javascript', 'php', 'react', 'react native', 'symfony', 'wordpress']}
      />
    </div>
    <div className={classes.iconsContainer}>
      <a href="https://github.com/thomasbenhamou">
        <GitHub
          size={42}
          style={{ margin: '0px 20px' }}
          color="#222"
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
          color="#222"
          target="_blank"
          rel="noopener noreferrer"
        />
      </a>
      <Email size={42} style={{ margin: '0px 20px' }} color="#222" />
    </div>
  </div>
);

export default banner;
