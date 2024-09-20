import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import TopDisplay from "../components/TopDisplay/TopDisplay";
import Event from "../components/Event/Event";
import { ContactContext } from "../hooks/contexts";
import Leadership from "../components/Leadership/Leadership";
import { Wrapper } from "../components/constants";


function Home() {
  const eventRef = useRef<HTMLDivElement | null>(null);
  const skillsetRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);
  const leadershipRef = useRef<HTMLDivElement | null>(null);

  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <NavBar skillset={skillsetRef} work={eventRef} clients={clientsRef}/>
        <Wrapper><TopDisplay /></Wrapper>
        <Event innerRef={eventRef} title="Flowing Connections: Women's River Walk"/>
        <Leadership innerRef={leadershipRef} />
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Home;
