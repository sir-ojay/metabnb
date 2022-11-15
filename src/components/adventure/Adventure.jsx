import React from "react";
import "./adventure.scss";
import adone from "../../assets/adone.png";
import adtwo from "../../assets/adtwo.png";
import adthree from "../../assets/adthree.png";
import adfour from "../../assets/adfour.png";
import adfive from "../../assets/adfive.png";
import adsix from "../../assets/adsix.png";
import adseven from "../../assets/adseven.png";
import adeight from "../../assets/adeight.png";
import star from "../../assets/Star.svg";

const Adventure = () => {
  const ads = [
    {
      id: 11,
      image: adone,
      title: "Desert king",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      offer: "1MBT per night",
    },
    {
      id: 12,
      image: adtwo,
      title: "Desert king",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      offer: "1MBT per night",
    },

    {
      id: 13,
      image: adthree,
      title: "Desert king",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      offer: "1MBT per night",
    },
    {
      id: 14,
      image: adfour,
      title: "Desert king",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      offer: "1MBT per night",
    },
    {
      id: 15,
      image: adfive,
      title: "Desert king",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      offer: "1MBT per night",
    },
    {
      id: 16,
      image: adsix,
      title: "Desert king",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      offer: "1MBT per night",
    },
    {
      id: 17,
      image: adseven,
      title: "Desert king",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      offer: "1MBT per night",
    },
    {
      id: 18,
      image: adeight,
      title: "Desert king",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      offer: "1MBT per night",
    },
  ];
  return (
    <div className="addventure__comp">
      <h2>Inspiration for your next adventure</h2>
      <div className="addventure__body">
        {ads.map((ad) => (
          <div key={ad.id} className="add__wrapper">
            <div className="image__ad">
              <img src={ad.image} alt="" />
            </div>

            <div className="add__conatiner">
              <div className="add_description">
                <p> {ad.title}</p>
                <p>{ad.distance}</p>
                <p>
                  <img src={star} alt="" className="icon" />
                  <img src={star} alt="" className="icon" />
                  <img src={star} alt="" className="icon" />
                  <img src={star} alt="" className="icon" />
                  <img src={star} alt="" className="icon" />
                </p>
              </div>
              <div>
                <p className="offer">{ad.offer}</p>
                <p className="duration">{ad.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adventure;
