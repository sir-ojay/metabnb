import React from "react";
import "./modal.scss";
const Modal = () => {
  return (
    <div className="wallet__wrapper">
      <div className="wallet__container">
        <h4>Connect Wallet</h4>
      </div>
      <p>Choose your preferred wallet:</p>
      <div className="meta__wrapper">
        <p>Metamask</p>
      </div>
      <div className="meta__wrapper">
        <p>WalletConnect</p>
      </div>
    </div>
  );
};

export default Modal;
