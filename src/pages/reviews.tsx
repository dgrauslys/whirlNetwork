import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import { ContactContext } from "../hooks/contexts";
import {
  Copy,
  HeaderText,
  SmallCopy,
  SubHeaderText,
  SuperHeaderText,
  Wrapper,
} from "../components/constants";
import { black, accent, main, cream, baseUrl } from "../constants";
import SiteSection from "../components/SiteBlock/SiteBlock";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import { Button } from "../components/Button";
import {
  CardContentWrapper,
  ColumnCenterContainer,
  ImageContainer,
  OneContainer,
  OrganizeSection,
  ImageContainerWrapper,
  Image,
} from "./styles/home";
import Footer from "../components/Footer/Footer";
import CardContainer from "../components/CardContainer/CardContainer";
import { SideBySideContainer } from "./styles/main";
import PageHeader from "../components/PageHeader/PageHeader";
import HoverImage from "../components/HoverImage/HoverImage";
import { InnerBlock, SideBySideContainerReviews } from "./styles/reviews";
import { List, ListItem, ListItemText } from "@mui/material";
import DesktopReviews from "./desktop/reviews";

function Reviews() {
  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <SiteSection isSmall={true}>
          <NavBar />
        </SiteSection>
        <PageHeader title="Reviews" />
        <DesktopReviews/>
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Reviews;
