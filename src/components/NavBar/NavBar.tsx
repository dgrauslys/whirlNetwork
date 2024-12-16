import React, { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import {
  HeaderText,
  TopDisplayText,
  VibesHeaderSmall,
  Wrapper,
} from "../constants";
import { Links } from "./styles";
import NavBarMobile from "./mobile/NavBarMobile";
import { useNavigate } from "react-router-dom";
import { MenuContainer } from "./mobile/styles";
import { Button } from "../Button";
import ConsultationModal from "../ConsultationModal/ConsultationModal";
import { navItems } from "./constants";
import Logo from "../Logo/Logo";

function NavBar() {
  const isDesktop = useContext(DesktopContext);
  const navigate = useNavigate();
  const goToLocation = (location: string) => {
    console.log(location);
    navigate(location);
  };

  return (
    <Wrapper>
      {isDesktop ? (
        <MenuContainer>
          <Logo />
          <Links>
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => {
                  goToLocation(item.url);
                }}
              >
                {item.name}
              </Button>
            ))}
            <ConsultationModal buttonTitle="Book Consult" title="Book a Consultation Call" />
          </Links>
        </MenuContainer>
      ) : (
        <NavBarMobile />
      )}
    </Wrapper>
  );
}

export default NavBar;
