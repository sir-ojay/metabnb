import React from 'react'
import './partnership.scss'
import opensea from '../../assets/opensea.svg'
import meta from '../../assets/meta.svg'
import mbtoken from '../../assets/nbt.svg'
const Partnership = () => {
  return (
    <div className="partnership__container">
      <div>
        <img src={mbtoken} alt="" className="icon" />
      </div>
      <div>
        <img src={meta} alt="" className="icon" />
      </div>
      <div>
        <img src={opensea} alt="" className="icon" />
      </div>
    </div>
  );
}

export default Partnership