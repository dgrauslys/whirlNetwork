import React, { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { HeaderText, TopDisplayText, Wrapper } from "../constants";
import { Links } from "./styles";
import NavBarMobile from "./mobile/NavBarMobile";
import { useNavigate } from "react-router-dom";
import { MenuContainer } from "./mobile/styles";

function NavBar() {
  const isDesktop = useContext(DesktopContext);
  const navigate = useNavigate();
  const goToLocation = (location: string) => {
    navigate(location);
  };

  return (
    <Wrapper>
      {isDesktop ? (
        <MenuContainer>
          <TopDisplayText>WHIRL</TopDisplayText>
          <Links>
            <HeaderText
              onClick={() => {
                goToLocation("/whirlNetwork/");
              }}
            >
              Home
            </HeaderText>
            <HeaderText
              onClick={() => {
                goToLocation("/whirlNetwork/members");
              }}
            >
              Members
            </HeaderText>
            <HeaderText
              onClick={() => {
                goToLocation("/whirlNetwork/aboutus");
              }}
            >
              {" "}
              About Us
            </HeaderText>
            <HeaderText
              onClick={() => {
                goToLocation("/whirlNetwork/events");
              }}
            >
              {" "}
              Events
            </HeaderText>
          </Links>
        </MenuContainer>
      ) : (
        <NavBarMobile />
      )}
    </Wrapper>
  );
}

export default NavBar;
