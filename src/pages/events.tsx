import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ContactContext } from "../hooks/contexts";
import Event from "../components/Event/Event";
import { HeaderText } from "../components/constants";
import SiteSection from "../components/SiteBlock/SiteBlock";
import { baseSmallPadding, controllersBaseUrl } from "../constants";
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

  const [events, setEvents] = useState([]);

  useEffect(() => {
      fetch(`${controllersBaseUrl}getUpcommingEvents.php`)
          .then(response => response.json())
          .then(data => {
            setEvents(data);
          })
          .catch(error => console.error('Error fetching leadership data:', error));
  }, []);

  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <SiteSection isSmall={true}>
          <NavBar />
        </SiteSection>
        <SiteSection isSmall={true}>
          <HeaderText>Upcoming Events!</HeaderText>

          <EventsWrapper>
            {events.map((item, index) => (
              <Event
                isPast={false}
                title={item.name}
                copy={item.description}
                image={item.image}
                fbLink={item.fbLink}
                meetupLink={item.meetupLink}
                signupLink={item.signupLink}
                isCancled={item.isCancled}
                location={item.location}
                date={item.date}
                time={item.time}
              ></Event>
            ))}
          </EventsWrapper>
        </SiteSection>
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Events;
