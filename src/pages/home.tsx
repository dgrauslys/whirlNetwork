import React from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import { ContactContext } from "../hooks/contexts";
import SiteSection from "../components/SiteBlock/SiteBlock";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import DesktopHome from "./desktop/home";

function Home() {
  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <SiteSection isSmall={true}>
          <NavBar />
        </SiteSection>
        <Banner></Banner>
        <DesktopHome />
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Home;
