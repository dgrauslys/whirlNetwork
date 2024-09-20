import React, { useContext } from "react";
import { ContactContext, DesktopContext } from "../../hooks/contexts";
import { HeaderText, Wrapper } from "../constants";
import { Links } from "./styles";
import NavBarMobile from "./mobile/NavBarMobile";
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const isDesktop = useContext(DesktopContext);
  const navigate = useNavigate();

  const goToLocation = (location) => {
    navigate(location);
  };

  return (
    <Wrapper>
      {isDesktop ? (
        <>
          <Links>
            <HeaderText onClick={() => {goToLocation('/whirlNetwork/')}}>Home</HeaderText>
            <HeaderText onClick={() => {goToLocation('/whirlNetwork/members')}}>Members</HeaderText>
            <HeaderText onClick={() => {goToLocation('/whirlNetwork/aboutus')}}> About Us</HeaderText>
            <HeaderText onClick={() => {goToLocation('/whirlNetwork/events')}}> Events</HeaderText>

          </Links>
        </>
      ) : (
        <NavBarMobile />
      )}
    </Wrapper>
  );
}

export default NavBar;
