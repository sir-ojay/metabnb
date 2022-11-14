import React from 'react';
import Adventure from '../../components/adventure/Adventure';
import Landing from '../../components/landing/Landing';
import Modal from '../../components/modal/Modal';
import Nfts from '../../components/nfts/Nfts';
import Partnership from '../../components/partnership/Partnership';
import './home.scss'

const Home = () => {
  return (
    <div className="home__container">
      <Landing />
      <Partnership />
      <Modal />
      <Adventure />
      <Nfts />
    </div>
  );
}

export default Home