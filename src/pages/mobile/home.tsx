import React from "react";
import { homePageSections } from "../constants";
import { FullWidthColumn } from "./styles";
import CardContainer from "../../components/CardContainer/CardContainer";
import { CardContentWrapper } from "../styles/home";
import { Copy, SuperHeaderText } from "../../components/constants";
import { Button } from "../../components/Button";

function MobileHome() {
  return (
    <FullWidthColumn>
      {Object.keys(homePageSections).map((section) => (
        <CardContainer>
          <CardContentWrapper>
            <SuperHeaderText>{homePageSections[section].title}</SuperHeaderText>
            <Copy>{homePageSections[section].copy}</Copy>
            <Button variant="contained">{homePageSections[section].buttonTitle}</Button>
          </CardContentWrapper>
        </CardContainer>
      ))}
    </FullWidthColumn>
  );
}

export default MobileHome;
