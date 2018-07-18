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
      <GitHub size={42} style={{ margin: '0px 20px' }} color="#222" />
      <LinkedIn size={42} style={{ margin: '0px 20px' }} color="#222" />
      <Email size={42} style={{ margin: '0px 20px' }} color="#222" />
    </div>
  </div>
);

export default banner;
