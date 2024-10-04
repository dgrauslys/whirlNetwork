import React, { useContext } from "react";
import { MainSection, BodySection } from "./styles";
import { DesktopContext } from "../../hooks/contexts";
import { white } from "../../constants";

const SiteSection = ({ children, color = `${white}`, isSmall = false }) => {
    const isDesktop = useContext(DesktopContext);
  return (
    <MainSection $color={color} $isSmall={isSmall}>
      <BodySection $isDesktop={isDesktop}>{children}</BodySection>
    </MainSection>
  );
};

export default SiteSection;
