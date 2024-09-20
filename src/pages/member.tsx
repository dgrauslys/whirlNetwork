import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ContactContext } from "../hooks/contexts";
import UserBlock from "../components/userBlock/userBlock";
import TextSection from "../components/TextSection/TextSection";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import { SectionSpacerWrapper } from "../components/SectionSpacer/styles";

function Member() {
  const eventRef = useRef<HTMLDivElement | null>(null);
  const skillsetRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);
  const member = {
    id: 1,
    name: "Amy Armstrong",
    imageUrl: "src/assets/images/amy.jpg",
    shortCopy:
      "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
  };
  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <NavBar skillset={skillsetRef} work={eventRef} clients={clientsRef} />
        

        <UserBlock user={member} counter={1}></UserBlock>

        <SectionSpacerWrapper>
        <TextSection title="What I Do" content={member.shortCopy}></TextSection>
          </SectionSpacerWrapper>
          <SectionSpacerWrapper>
          <TextSection title="What I am Looking for" content={member.shortCopy}></TextSection>
          </SectionSpacerWrapper>
          <SectionSpacerWrapper>
          <SocialMedia/>
          </SectionSpacerWrapper>
        
        

        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Member;
