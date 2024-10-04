import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ContactContext } from "../hooks/contexts";
import UserBlock from "../components/userBlock/userBlock";
import TextSection from "../components/TextSection/TextSection";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import { SectionSpacerWrapper } from "../components/SectionSpacer/styles";
import { allMembers } from "../data/members";
import { useParams } from "react-router-dom";
import SiteSection from "../components/SiteBlock/SiteBlock";

function Member() {
  const eventRef = useRef<HTMLDivElement | null>(null);
  const skillsetRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);
  const { id } = useParams();
  const members = allMembers;
  const member = members.find((person) => person.id == id);
  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
        <SiteSection isSmall={true}>
          <NavBar skillset={skillsetRef} work={eventRef} clients={clientsRef} />
        </SiteSection>
        <SiteSection isSmall={true}>
          <UserBlock user={member} counter={1}></UserBlock>
        </SiteSection>

        <SiteSection isSmall={true}>
          <TextSection
            title="What I Do"
            content={member.shortCopy}
          ></TextSection>
        </SiteSection>
        <SiteSection isSmall={true}>
          <TextSection
            title="What I am Looking for"
            content={member.shortCopy}
          ></TextSection>
        </SiteSection>
        <SiteSection isSmall={true}>
          <SocialMedia />
        </SiteSection>

        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Member;
