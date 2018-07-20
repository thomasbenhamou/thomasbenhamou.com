import React from 'react';
import classes from './LargeCard.css';
import OpenSign from 'react-icons/lib/io/android-open';
import Code from 'react-icons/lib/io/code';

const largeCard = ({
  title,
  technos,
  screenshot1,
  screenshot2,
  description,
  openModal,
  projectId,
  projectLink,
  githubLink
}) => {
  const technoList = technos.map((e, i) => {
    return (
      <div className={classes.techno} key={i}>
        {e}
      </div>
    );
  });

  return (
    <div className={classes.card}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>{title}</h2>
      </div>
      <div className={classes.technoIcons}>{technoList}</div>
      <div className={classes.content}>
        <div
          className={classes.screenShot}
          style={{
            background: `url(${screenshot1}`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        <div
          className={classes.screenShot2}
          style={{
            background: `url(${screenshot2}`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        <div className={classes.description}>{description}</div>
      </div>
      <div className={classes.buttonContainer}>
        <a href={githubLink} className={classes.button} target="_blank" rel="noopener noreferrer">
          <Code size={38} color="#1FBFC4" />
        </a>
        <a href={projectLink} className={classes.button} target="_blank" rel="noopener noreferrer">
          <OpenSign size={38} color="#1FBFC4" />
        </a>
      </div>
    </div>
  );
};

largeCard.defaultProps = {
  title: 'Project',
  technos: [''],
  description: '...'
};
export default largeCard;
