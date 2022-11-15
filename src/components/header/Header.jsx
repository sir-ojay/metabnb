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
import "./header.scss";

const Header = ({ toggle ,modal}) => {
  return (
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
      <ButtonContainer  onClick={modal}>
        <Buttn>
          <Text>Connect wallet</Text>
        </Buttn>
      </ButtonContainer>
    </NavContainer>
  );
};

export default Header;
