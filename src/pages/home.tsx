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
import { black, controllersBaseUrl, main } from "../constants";
import SiteSection from "../components/SiteBlock/SiteBlock";

function Home() {
  const PaddingBlock = styled.div`
    width: 100%;
    height: 740px;
  `;
  //getUpcommingEvents.php
  const [events, setEvents] = useState([]);

  useEffect(() => {
      fetch(`${controllersBaseUrl}getUpcommingEvent.php`)
          .then(response => response.json())
          .then(data => {
            setEvents(data);
          })
          .catch(error => console.error('Error fetching leadership data:', error));
  }, []);

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

          {events.map((event, index) => (
              <Event
              isPast={false}
              title={event.name}
              copy={event.description}
              image={event.image}
              fbLink={event.fbLink}
              meetupLink={event.meetupLink}
              signupLink={event.signupLink}
              isCancled={event.isCancled}
              location={event.location}
              date={event.date}
              time={event.time}
              isWhite={true}
            ></Event>
        ))}
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
