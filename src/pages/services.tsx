import React from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import { ContactContext } from "../hooks/contexts";
import SiteSection from "../components/SiteBlock/SiteBlock";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/PageHeader/PageHeader";
import DesktopServices from "./desktop/services";

function Services() {
  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <SiteSection isSmall={true}>
          <NavBar />
        </SiteSection>
        <PageHeader title="Services Guide"/>
        <DesktopServices/>
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Services;
