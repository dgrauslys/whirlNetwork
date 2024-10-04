import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ContactContext } from "../hooks/contexts";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";
import { HeaderText } from "../components/constants";
import Event from "../components/Event/Event";
import TextSection from "../components/TextSection/TextSection";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import SiteSection from "../components/SiteBlock/SiteBlock";
import styled from "styled-components";

function AboutUs() {
  const ItemsWrapper = styled.div`
    & > div {
      padding-top: 80px;
    }

    & > div:last-child {
      padding-bottom: 80px;
    }

    & > div:first-child {
      padding-top: 40px;
    }
  `;

  const TextSpacingWrapper = styled.div`
  & > p:nth-child(odd) {
    padding-top: 40px;
  }

  & > p:last-child {
    padding-bottom: 80px;
  }

  & > p:first-child {
    padding-top: 0px;
  }
`;

  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    const isMatch = value == index;

    return (
      <div
        role="tabpanel"
        hidden={!isMatch}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {isMatch && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const pastEvents = [
    {
      ref: useRef<HTMLDivElement | null>(null),
      title: "Event One - MM/DD/YYYY",
    },
    {
      ref: useRef<HTMLDivElement | null>(null),
      title: "Event Two - MM/DD/YYYY",
    },
    {
      ref: useRef<HTMLDivElement | null>(null),
      title: "Event Three - MM/DD/YYYY",
    },
  ];

  const aboutText =
    "Welcome to our vibrant and supportive women's networking group, where relationships are at the heart of everything we do! We are dedicated to empowering women by fostering connections that inspire, uplift, and create lasting friendships. Our community is all about building each other up, sharing experiences, and growing together. Below, you'll find a glimpse of the exciting and meaningful events we've hosted in the past—each one a testament to the power of women coming together to support and celebrate one another!";
  const faq = [
    {
      title: "What is the purpose of this networking group?",
      copy: "Our networking group is designed to empower women by providing a supportive community where members can connect, share knowledge, and collaborate professionally. We aim to foster meaningful relationships, encourage personal and professional growth, and offer resources that support our members' success.",
    },
    {
      title: "Who can join the group?",
      copy: "The group is open to women from various industries and professions who are interested in building a network of like-minded individuals. Whether you're an entrepreneur, corporate professional, freelancer, or aspiring leader, you are welcome to join.",
    },
    {
      title: "What kinds of events does the group offer?",
      copy: "We host a variety of events, including networking meetups, skill-building workshops, guest speaker sessions, and social gatherings. Some events are industry-specific, while others are focused on personal development and leadership skills.",
    },
    {
      title: "How can I contribute to the group?",
      copy: "Members are encouraged to contribute by sharing their expertise, offering support to fellow members, and participating in events and discussions. You can also volunteer to lead events, facilitate workshops, or mentor other members.",
    },
    {
      title: "Can I promote my business or services to other members?",
      copy: "While promoting your business or services is not the primary goal of the group, there are opportunities to share what you do through natural networking and relationship-building. We encourage members to focus on forming authentic connections before promoting their services.",
    },
  ];
  const rules = [
    {
      title: "Respect and Inclusivity",
      copy: "All members are expected to maintain a respectful, supportive, and inclusive environment. Harassment, discrimination, or exclusion of any kind will not be tolerated. Everyone's voice is valued, and differing opinions should be respected.",
    },
    {
      title: "Active Participation",
      copy: "Members are encouraged to actively participate in group activities, discussions, and events. Regular attendance at meetings and engagement with fellow members fosters a collaborative and thriving network.",
    },
    {
      title: "Support and Collaboration",
      copy: "The group is founded on the principle of mutual support. Members should seek to uplift and assist one another, whether through advice, referrals, or sharing resources. Collaboration over competition is key.",
    },
    {
      title: "Professionalism",
      copy: "Members are expected to act professionally during all group interactions, whether in-person or online. This includes being punctual, respectful, and courteous in all communications and meetings.",
    },
    {
      title: "No Solicitation",
      copy: "While networking and business collaboration are encouraged, direct solicitation or hard-selling to other members is discouraged. Building relationships should come before pitching products or services.",
    },
    {
      title: "Continuous Learning and Growth",
      copy: "The group values personal and professional development. Members should be open to sharing knowledge, attending workshops, and contributing to the growth of others while committing to their own ongoing learning.",
    },
  ];
  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <SiteSection isSmall={true}>
          <NavBar />
        </SiteSection>
        <SiteSection isSmall={true}>
          <Tabs value={value} onChange={handleChange}>
            <Tab value="0" label="About Us" color="primary" />
            <Tab value="1" label="Rules" />
            <Tab value="2" label="FAQ" />
            <Tab value="3" label="Contact Us" />
          </Tabs>
        </SiteSection>

        <SiteSection isSmall={true}>
          <TabPanel value={value} index={0}>
            <TextSection
              title="Empowering women, one step at a time"
              content={aboutText}
            ></TextSection>
            <HeaderText style={{ marginTop: "20px" }}>
              Check out our past events!
            </HeaderText>

            <ItemsWrapper>
              {pastEvents.map((item, index) => (
                <Event
                  innerRef={item.ref}
                  isPast={true}
                  title={item.title}
                ></Event>
              ))}
            </ItemsWrapper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TextSpacingWrapper>
              {rules.map((item, index) => (
                <TextSection
                  title={item.title}
                  content={item.copy}
                ></TextSection>
              ))}
            </TextSpacingWrapper>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TextSpacingWrapper>
              {faq.map((item, index) => (
                <><TextSection
                  title={item.title}
                  content={item.copy}
                ></TextSection></>
              ))}
            </TextSpacingWrapper>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <ContactUsForm />
          </TabPanel>
        </SiteSection>

        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default AboutUs;
