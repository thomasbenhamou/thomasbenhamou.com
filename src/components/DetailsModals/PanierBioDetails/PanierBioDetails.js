import React from 'react';
import classes from './PanierBioDetails.css';

const PanierBioDetails = () => (
  <div className={classes.container}>
    <div className={classes.projectTitle}>Mon p'tit panier</div>
    <div className={classes.content}>
      <div className={classes.screenContainer}>screenshots</div>
      <div className={classes.infoContainer}>
        <h3>infos</h3>
        <ul>
          <li>built with React</li>
          <li>state managed with Redux</li>
          <li>no css library used</li>
          <li>backend Firebase REST API</li>
          <li>authentication Firebase REST API</li>
          <li>payment with Stripe API</li>
          <li>progressive web app: it can be installed on your phone's desktop screen</li>
        </ul>
      </div>
    </div>
    <p>Link to the project</p>
    <a href="https://le-panier-bio.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
      Mon p'tit panier
    </a>
    <p>Link to the Github repository</p>
    <a
      href="https://github.com/thomasbenhamou/basket-builder"
      target="_blank"
      rel="noopener noreferrer"
    >
      Check repository
    </a>
  </div>
);

export default PanierBioDetails;
