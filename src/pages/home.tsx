import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import TopDisplay from "../components/TopDisplay/TopDisplay";
import Event from "../components/Event/Event";
import { ContactContext } from "../hooks/contexts";
import Leadership from "../components/Leadership/Leadership";
import { MainSection, Wrapper } from "../components/constants";
import { NavBarWrapper } from "../components/bodyWrapper/styles";
import styled from "styled-components";
import { black, main } from "../constants";
import SiteSection from "../components/SiteBlock/SiteBlock";

function Home() {
  const PaddingBlock = styled.div`
    width: 100%;
    height: 740px;
  `;

  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <Wrapper>
          <TopDisplay />
        </Wrapper>
        <NavBarWrapper>
          <NavBar />
        </NavBarWrapper>
        <PaddingBlock />
        <SiteSection color={black}>
          <Event isWhite={true}
            title="Flowing Connections: Women's River Walk"
            isPast={false}
          />
        </SiteSection>
        <SiteSection>
          <Leadership />
        </SiteSection>
        <Footer/>
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Home;
