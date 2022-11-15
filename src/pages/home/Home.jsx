import React from 'react';
import Adventure from '../../components/adventure/Adventure';
import Landing from '../../components/landing/Landing';
import Nfts from '../../components/nfts/Nfts';
import Partnership from '../../components/partnership/Partnership';


const Home = () => {
    
  return (
    <div className="home__container">
      <Landing />
      <Partnership />
      <Adventure />
      <Nfts  />

    </div>
  );
}

export default Home