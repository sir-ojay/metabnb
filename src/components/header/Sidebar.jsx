import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu

} from "./NavbarStyles";

const sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/PlaceToStay" onClick={toggle}>
            Place to stay
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            NFTs
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Community
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Connect wallet
          </SidebarLink>

        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default sidebar