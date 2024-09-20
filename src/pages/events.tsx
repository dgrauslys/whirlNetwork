import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ContactContext } from "../hooks/contexts";
import Event from "../components/Event/Event";
import { HeaderText } from "../components/constants";


function Events() {
  const eventRef = useRef<HTMLDivElement | null>(null);
  const skillsetRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);

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
        <NavBar skillset={skillsetRef} work={eventRef} clients={clientsRef} />
        {commingUpEvents.map((item, index) => (
            <Event innerRef={item.ref} isPast={false} title={item.title}></Event>
          ))}
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Events;
