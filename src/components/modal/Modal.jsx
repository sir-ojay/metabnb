import React from "react";
import cancel from "../../assets/x.svg";
import fox from "../../assets/fox.svg";
import wallet from "../../assets/w.svg";
import direction from "../../assets/angle.svg";

import "./modal.scss";
const Modal = ({isModal, modal}) => {
  return (
    <div
      className="modal__wrapper"
      style={{
        display: isModal ? "none" : "",
      }}
    >
      <div className="wallet__wrapper">
        <div className="wallet__container">
          <div className="connect__cont">
            <h4>Connect Wallet</h4>
          </div>

          <div className="cancel__wrapper" onClick={modal}>
            <img src={cancel} alt="" className="icon__cancel" />
          </div>
        </div>
        <hr className="wallet__rule" />
        <div className="wallet__wrapper_bottom">
          <p>Choose your preferred wallet:</p>
          <div className="meta__wrapper">
            <div className="fox__wrapper">
              <div>
                {" "}
                <img src={fox} alt="" className="icon" />
              </div>

              <p>Metamask</p>
            </div>
            <div className="arrow_container">
              <img src={direction} alt="" className="dir__icon" />
            </div>
          </div>
          <div className="meta__wrapper">
            <div className="fox__wrapper">
              <div>
                {" "}
                <img src={wallet} alt="" className="icon" />
              </div>

              <p>WalletConnect</p>
            </div>
            <div className="arrow_container">
              <img src={direction} alt="" className="dir__icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
