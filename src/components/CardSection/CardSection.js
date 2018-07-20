import React from 'react';
import classes from './CardSection.css';
import Card from '../Card/Card';
import PanierBio from '../../assets/img/panierbio-screen-compressor.png';
import WinterJobs from '../../assets/img/winterjobs-screen-compressor.png';
import RGBMaster from '../../assets/img/rgbmaster-dualscreen-compressor.png';
import LargeCard from '../LargeCard/LargeCard';
import Classeur1 from '../../assets/img/classeur-screen1.png';
import Classeur2 from '../../assets/img/classeur-screen2.png';

const cardSection = ({ openModal }) => (
  <div className={classes.container}>
    <Card
      title="Mon p'tit panier"
      technos={['js', 'react']}
      screenshot={PanierBio}
      description="Customize and order a basket of organic products."
      openModal={openModal}
      projectId="panierbio"
      projectLink="https://le-panier-bio.firebaseapp.com/"
      githubLink="https://github.com/thomasbenhamou/basket-builder"
    />
    <Card
      title="WinterJobs"
      technos={['php', 'symfony']}
      screenshot={WinterJobs}
      description="A job portal specialized in ski resorts."
      openModal={openModal}
      projectId="winterjobs"
      projectLink="https://winterjobs.herokuapp.com/"
      githubLink="https://github.com/thomasbenhamou/job-portal-with-symfony-4"
    />
    <Card
      title="RGB Master"
      technos={['react-native', 'firebase']}
      screenshot={RGBMaster}
      description="An Android game to master the RGB colors."
      openModal={openModal}
      projectId="rgbmaster"
      projectLink="https://play.google.com/store/apps/details?id=com.rgbmaster"
      githubLink="https://github.com/thomasbenhamou/rgb-master"
    />
    <LargeCard
      title="classeur_"
      technos={['js', 'react']}
      description="A web app to easily manage your company. Create, edit and customize clients, bills and quotes."
      openModal={openModal}
      screenshot1={Classeur1}
      screenshot2={Classeur2}
      projectId="classeur"
      projectLink="https://class-r.firebaseapp.com/"
      githubLink="https://github.com/thomasbenhamou/class-r"
    />
  </div>
);

export default cardSection;
