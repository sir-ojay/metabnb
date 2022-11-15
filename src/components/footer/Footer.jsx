import React from "react";
import logo from "../../assets/footerlogo.svg";
import copy from "../../assets/copyright.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer__wrapper">
        <div className="footer__container">
          <div className="footer__flex1">
            <div className="footer__logo__wrapper">
              {" "}
              <img src={logo} alt="" className="logo" />
            </div>

            <div className="footer__icons">
              <img src={facebook} alt="" className="footer__facebook" />
              <img src={instagram} alt="" className="footer__instagram" />

              <img src={twitter} alt="" className="footer__twitter" />
            </div>
            <div className="copy__mobile">
              {" "}
              <img src={copy} alt="" />
              <p> 2022 Metabnb</p>
            </div>
          </div>
          <div className="footer__flex">
            <h4>Community</h4>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
          </div>
          <div className="footer__flex">
            <h4>Places</h4>
            <p>Castle</p>
            <p>Farms </p>
            <p>Beach</p>
            <p>Learn more</p>
          </div>
          <div className="footer__flex">
            <h4>About us</h4>
            <p>Road map</p>
            <p>Creators </p>
            <p>Career</p>
            <p>Contact us</p>
          </div>
        </div>

        <div className="footer__copy">
          {" "}
          <img src={copy} alt="" />
          <p> 2022 Metabnb</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
