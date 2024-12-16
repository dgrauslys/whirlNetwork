import React from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import { ContactContext } from "../hooks/contexts";
import SiteSection from "../components/SiteBlock/SiteBlock";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/PageHeader/PageHeader";
import DesktopPackage from "./desktop/package";
import { useLocation } from "react-router-dom";
import { services } from "./constants";

function Package() {

  const useQuery = () => {
    const { search } = useLocation();
    return new URLSearchParams(search);
  }
  const query = useQuery();
  const packageValue = query.get('version') ? query.get('version') : 0;
  const service = services[packageValue];

  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <SiteSection isSmall={true}>
          <NavBar />
        </SiteSection>
        <PageHeader title={service.title}/>
        <DesktopPackage />
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Package;
