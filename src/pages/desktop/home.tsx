import React, { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { homePageSections } from "../constants";
import SiteSection from "../../components/SiteBlock/SiteBlock";
import { SideBySideContainer } from "../styles/main";
import { CardContentWrapper, ColumnCenterContainer, ImageContainer, OneContainer } from "../styles/home";
import CardContainer from "../../components/CardContainer/CardContainer";
import { Copy, SuperHeaderText } from "../../components/constants";
import { Button } from "../../components/Button";
import MobileHome from "../mobile/home";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants";

function DesktopHome() {
  const isDesktop = useContext(DesktopContext);
  const firstSection = homePageSections.firstSection;
  const secondSection = homePageSections.secondSection;
  const thirdSection = homePageSections.thirdSection;
  const navigate = useNavigate();
  const goToLocation = (location: string) => {
    navigate(location);
  };

  return (<>
        {isDesktop ? (
          <>
            <SiteSection>
              <SideBySideContainer>
                <OneContainer>
                  <ImageContainer imageName={firstSection.img}></ImageContainer>
                </OneContainer>
                <ColumnCenterContainer>
                  <CardContainer>
                    <CardContentWrapper>
                      <SuperHeaderText>{firstSection.title}</SuperHeaderText>
                      <Copy>{firstSection.copy}</Copy>{" "}
                      <Button size="large" variant="contained" >
                        {firstSection.buttonTitle}
                      </Button>
                    </CardContentWrapper>
                  </CardContainer>
                </ColumnCenterContainer>
              </SideBySideContainer>
            </SiteSection>
            <SiteSection isSmall={true}>
              <SideBySideContainer>
                <ColumnCenterContainer>
                  <CardContainer>
                    <CardContentWrapper>
                      <SuperHeaderText>{secondSection.title}</SuperHeaderText>
                      <Copy>{secondSection.copy}</Copy>{" "}
                      <Button variant="contained">
                        {secondSection.buttonTitle}
                      </Button>
                    </CardContentWrapper>
                  </CardContainer>
                </ColumnCenterContainer>
                <OneContainer>
                  <ImageContainer
                    imageName={secondSection.img}
                  ></ImageContainer>
                </OneContainer>
              </SideBySideContainer>
            </SiteSection>
            <SiteSection>
              <SideBySideContainer>
                <OneContainer>
                  <ImageContainer imageName={thirdSection.img}></ImageContainer>
                </OneContainer>
                <ColumnCenterContainer>
                  <CardContainer>
                    <CardContentWrapper>
                      <SuperHeaderText>{thirdSection.title}</SuperHeaderText>
                      <Copy>{thirdSection.copy}</Copy>
                      <Button variant="contained">
                        {thirdSection.buttonTitle}
                      </Button>
                    </CardContentWrapper>
                  </CardContainer>
                </ColumnCenterContainer>
              </SideBySideContainer>
            </SiteSection>
          </>
        ) : (
          <MobileHome/>
        )}
</>
  );
}

export default DesktopHome;
