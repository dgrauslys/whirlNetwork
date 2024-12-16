import React, { useContext } from "react";
import { MainSection, BodySection, MainSectionWithImage } from "./styles";
import { DesktopContext } from "../../hooks/contexts";
import { white } from "../../constants";

const SiteSection = ({ children, color = `${white}`, isSmall = false, imgUrl = '' }) => {
    const isDesktop = useContext(DesktopContext);

    if (imgUrl === '') {
      return (
        <MainSection $color={color} $isSmall={isSmall}>
          <BodySection $isDesktop={isDesktop}>{children}</BodySection>
        </MainSection>
      );
    }

    return (
      <MainSectionWithImage $color={color} $isSmall={isSmall} $imgUrl={imgUrl}>
        <BodySection $isDesktop={isDesktop}>{children}</BodySection>
      </MainSectionWithImage>
    );

};

export default SiteSection;
