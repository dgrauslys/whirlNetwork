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
            <HeaderText onClick={() => {goToLocation('/')}}>Home</HeaderText>
            <HeaderText onClick={() => {goToLocation('/members')}}>Members</HeaderText>
            <HeaderText onClick={() => {goToLocation('/aboutus')}}> About Us</HeaderText>
            <HeaderText onClick={() => {goToLocation('/events')}}> Events</HeaderText>

          </Links>
        </>
      ) : (
        <NavBarMobile />
      )}
    </Wrapper>
  );
}

export default NavBar;
