import React from 'react'
import adone from "../../../assets/adone.png";
import adtwo from "../../../assets/adtwo.png";
import adthree from "../../../assets/adthree.png";
import adfour from "../../../assets/adfour.png";
import adfive from "../../../assets/adfive.png";
import adsix from "../../../assets/adsix.png";
import adseven from "../../../assets/adseven.png";
import adeight from "../../../assets/adeight.png";
import cardone from "../../../assets/cardone.jpg";
import cardtwo from "../../../assets/cardtwo.png";
import cardthree from "../../../assets/cardthree.png";
import cardfour from "../../../assets/cardfour.png";
import cardfive from "../../../assets/cardfive.png";
import cardsix from "../../../assets/cardsix.png";
import cardseven from "../../../assets/cardseven.png";
import cardeight from "../../../assets/cardeight.png";
import star from "../../../assets/Star.svg";
import './placecards.scss'



const Placecards = () => {
     const cards = [
       {
         id: 111,
         image: adfive,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 112,
         image: adsix,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 113,
         image: adseven,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 114,
         image: adeight,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 115,
         image: adone,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 116,
         image: adtwo,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },

       {
         id: 117,
         image: adthree,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 118,
         image: adfour,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 211,
         image: cardone,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 212,
         image: cardtwo,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 213,
         image: cardthree,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 214,
         image: cardfour,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 215,
         image: cardfive,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 216,
         image: cardsix,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },

       {
         id: 217,
         image: cardseven,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
       {
         id: 218,
         image: cardeight,
         title: "Desert king",
         distance: "2345km away",
         duration: "available for 2weeks stay",
         offer: "1MBT per night",
       },
     ];
  return (
    <div className="placecards__comp">
      <div className="addventure__body">
        {cards.map((card) => (
          <div key={card.id} className="add__wrapper">
            <div className="image__ad">
              <img src={card.image} alt="" />
            </div>

            <div className="add__conatiner">
              <div className="add_description">
                <p> {card.title}</p>
                <p>{card.distance}</p>
                <p>
                  <img src={star} alt="" className="icon" />
                  <img src={star} alt="" className="icon" />
                  <img src={star} alt="" className="icon" />
                  <img src={star} alt="" className="icon" />
                  <img src={star} alt="" className="icon" />
                </p>
              </div>
              <div>
                <p className="offer">{card.offer}</p>
                <p className="duration">{card.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Placecards