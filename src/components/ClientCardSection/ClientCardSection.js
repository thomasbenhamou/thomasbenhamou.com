import React from 'react';
import classes from './ClientCardSection.css';
import Card from '../Card/Card';
import HorticultureChouvet from '../../assets/img/horticulturechouvet-screen1.png';
import TraducteurMalgache from '../../assets/img/traducteurmalgache-screen1.png';

const clientCardSection = ({ openModal }) => (
  <div className={classes.container}>
    <Card
      title="Horticulture Chouvet"
      technos={['wordpress', 'custom theme']}
      screenshot={HorticultureChouvet}
      description="A custom wordpress theme created from scratch."
      projectId="horticulturechouvet"
      openModal={openModal}
      projectLink="https://www.horticulture-chouvet.fr/"
      noCode={true}
    />
    <Card
      title="traducteurmalgache.fr"
      technos={['wordpress']}
      screenshot={TraducteurMalgache}
      description="A custom wordpress site."
      projectId="traducteurmalgache"
      openModal={openModal}
      projectLink="http://traducteurmalgache.fr/"
      noCode={true}
    />
  </div>
);

export default clientCardSection;
