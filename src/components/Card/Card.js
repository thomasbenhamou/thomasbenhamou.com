import React from 'react';
import classes from './Card.css';
import OpenSign from 'react-icons/lib/io/android-open';
import Code from 'react-icons/lib/io/code';

const card = ({ title, technos, screenshot, description, openModal, projectId }) => {
  const technoList = technos.map((e, i) => {
    return <div className={classes.techno}>{e}</div>;
  });

  return (
    <div className={classes.card} onClick={() => openModal(projectId)}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>{title}</h2>
      </div>
      <div className={classes.technoIcons}>{technoList}</div>
      <div
        className={classes.screenShot}
        style={{
          background: `url(${screenshot}`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
      <div className={classes.description}>{description}</div>
      <div className={classes.buttonContainer}>
        <Code size={30} color="#ccc" />
        <OpenSign size={30} color="#ccc" onClick={() => openModal(projectId)} />
      </div>
    </div>
  );
};

card.defaultProps = {
  title: 'Project',
  technos: [''],
  description: '...'
};
export default card;
