import React, { Component } from 'react';
import classes from './App.css';
import CardSection from './components/CardSection/CardSection';
import Banner from './components/Banner/Banner';
import SectionTitle from './components/SectionTitle/SectionTitle';
import ClientCardSection from './components/ClientCardSection/ClientCardSection';
import Modal from './components/Modal/Modal';
import Foot from './components/Foot/Foot';

class App extends Component {
  state = {
    showModal: false,
    projectComponent: null
  };

  // componentDidMount = () => {
  //   alert(
  //     'Website under construction and active development. Responsivity is yet to be added. Be mindful of bugs ;)'
  //   );
  // };

  openModal = projectId => {
    switch (projectId) {
      case 'panierbio':
        import('./components/DetailsModals/PanierBioDetails/PanierBioDetails').then(module => {
          this.setState({ projectComponent: module.default, showModal: true });
        });
        break;
      case 'winterjobs':
        import('./components/DetailsModals/WinterJobsDetails/WinterJobsDetails').then(module => {
          this.setState({ projectComponent: module.default, showModal: true });
        });
        break;
      case 'rgbmaster':
        import('./components/DetailsModals/RGBMasterDetails/RGBMasterDetails').then(module => {
          this.setState({ projectComponent: module.default, showModal: true });
        });
        break;
      case 'classeur':
        import('./components/DetailsModals/ClasseurDetails/ClasseurDetails').then(module => {
          this.setState({ projectComponent: module.default, showModal: true });
        });
        break;
      case 'horticulturechouvet':
        import('./components/DetailsModals/HorticultureChouvetDetails/HorticultureChouvetDetails').then(
          module => {
            this.setState({ projectComponent: module.default, showModal: true });
          }
        );
        break;
      case 'traducteurmalgache':
        import('./components/DetailsModals/TraducteurMalgacheDetails/TraducteurMalgacheDetails').then(
          module => {
            this.setState({ projectComponent: module.default, showModal: true });
          }
        );
        break;
      default:
        return null;
    }
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      projectShown: null,
      projectComponent: null
    });
  };

  render() {
    let detailsComponent = this.state.projectComponent ? <this.state.projectComponent /> : null;
    return (
      <div className={classes.mainContainer}>
        <Modal show={this.state.showModal} modalClosed={this.closeModal}>
          {detailsComponent}
        </Modal>
        <Banner />
        <SectionTitle title="latest projects" />
        <CardSection openModal={this.openModal} />
        <div>
          <SectionTitle title="custom wordpress themes and websites for clients" />
          <ClientCardSection openModal={this.openModal} />
        </div>
        <div>
          <SectionTitle title="current learning focus" />
          <div className={classes.container}>
            <h2>nodeJs</h2>
            <h2>Angular</h2>
          </div>
        </div>
        <Foot />
      </div>
    );
  }
}

export default App;
