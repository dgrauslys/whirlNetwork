import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import { ContactContext } from "../hooks/contexts";
import {
  Copy,
  HeaderText,
  SuperHeaderText,
  Wrapper,
} from "../components/constants";
import { black } from "../constants";
import SiteSection from "../components/SiteBlock/SiteBlock";
import NavBar from "../components/NavBar/NavBar";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import {
  CardContentWrapper,
  ColumnCenterContainer,
  ImageContainer,
  OneContainer,
} from "./styles/home";
import CardContainer from "../components/CardContainer/CardContainer";
import { SideBySideContainer } from "./styles/main";
import PageHeader from "../components/PageHeader/PageHeader";
import AboutTab from "./AboutTabs/about";
import FAQ from "./AboutTabs/faq";
import Contact from "./AboutTabs/contact";


function About() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <SiteSection isSmall={true}>
          <NavBar />
        </SiteSection>
        <PageHeader title="Learn About Zugy"/>
        <SiteSection isSmall={true}>
          <Tabs value={value} onChange={handleChange} aria-label="About Tabs">
            <Tab label="Zugy" />
            <Tab label="FAQ" />
            <Tab label="Contact" />
          </Tabs>
        </SiteSection>
        <SiteSection isSmall={true}>
          {" "}
          <TabPanel value={value} index={0}>
            <AboutTab/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FAQ/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Contact/>
          </TabPanel>
        </SiteSection>
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default About;
