import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ContactContext } from "../hooks/contexts";
import Event from "../components/Event/Event";
import { HeaderText } from "../components/constants";
import SiteSection from "../components/SiteBlock/SiteBlock";
import { baseSmallPadding } from "../constants";
import styled from "styled-components";

function Events() {
  const EventsWrapper = styled.div`
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

  const commingUpEvents = [
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
  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <SiteSection isSmall={true}>
          <NavBar />
        </SiteSection>
        <SiteSection isSmall={true}>
          <HeaderText>Upcoming Events!</HeaderText>

          <EventsWrapper>
            {commingUpEvents.map((item, index) => (
              <Event isPast={false} title={item.title}></Event>
            ))}
          </EventsWrapper>
        </SiteSection>
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Events;
