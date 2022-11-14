import React from "react";
import {
  NavContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  FaIcon,
  NavLinks,
  Buttn,Text, ButtonContainer
} from "./NavbarStyles";
import logo from "../../assets/headerlogo.svg";

// import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ toggle }) => {
  return (
    // <div className="header__wrapper">
    //   <div className="logo__warapper">
    //     <img src={logo} alt="" className="header__logo" />
    //   </div>

    //   <ul>
    //     <Link to="/" style={{ textDecoration: "none" }}>
    //       <li>Home</li>
    //     </Link>
    //     <Link to="/PlaceToStay" style={{ textDecoration: "none" }}>
    //       <li>Place to stay</li>
    //     </Link>
    //     <Link to="/" style={{ textDecoration: "none" }}>
    //       <li>NFTs</li>
    //     </Link>
    //     <Link to="/" style={{ textDecoration: "none" }}>
    //       <li>Community</li>
    //     </Link>
    //   </ul>

    //   <div className="header__wallet">
    //     <button>
    //       {" "}
    //       <p>Connect wallet</p>
    //     </button>
    //   </div>
    // </div>
    <NavContainer className="header__wrapper">
      <NavLinks
        to="/"
        spy={true}
        smooth={true}
        duration={500}
        className="logo__warapper"
      >
        {" "}
        <img src={logo} alt="" className="header__logo" />
      </NavLinks>
      <MobileIcon onClick={toggle}>
        <FaIcon />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to="/" spy={true} smooth={true} duration={500}>
            {" "}
            Home
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/PlaceToStay" spy={true} smooth={true} duration={500}>
            {" "}
            Place to stay
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/" spy={true} smooth={true} duration={500}>
            {" "}
            NFTs
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/" spy={true} smooth={true} duration={500}>
            {" "}
            Community
          </NavLinks>
        </NavItem>
      </NavMenu>
      <ButtonContainer>
        <Buttn>
          <Text>Connect wallet</Text>
        </Buttn>
      </ButtonContainer>
    </NavContainer>
  );
};

export default Header;
