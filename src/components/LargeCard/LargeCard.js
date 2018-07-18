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
  projectId
}) => {
  const technoList = technos.map((e, i) => {
    return <div className={classes.techno}>{e}</div>;
  });

  return (
    <div className={classes.card} onClick={() => openModal(projectId)}>
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
          className={classes.screenShot}
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
        <Code size={30} color="#ccc" />
        <OpenSign size={30} color="#ccc" onClick={() => openModal(projectId)} />
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
