import React from "react";
import "./nfts.scss";
import one from "../../assets/nfts.svg";


const Nfts = () => {
  return (
    <div className="nft__container">
      <div className="nft__desc">
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button>
          <p>Learn more</p>
        </button>
      </div>
      <div className="nft__images">
        <img src={one} alt="" className="image__one" />
       
      </div>
    </div>
  );
};

export default Nfts;
