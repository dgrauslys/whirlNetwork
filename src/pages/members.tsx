import React, { useContext, useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ContactContext, DesktopContext } from "../hooks/contexts";
import UserBlock from "../components/userBlock/userBlock";
import TextField from "@mui/material/TextField";
import UserBlockSpacer from "../components/userBlock/userBlockSpacer";
import { allMembers } from "../data/members";
import { ResponsiveWrapper } from "../components/constants";
import SiteSection from "../components/SiteBlock/SiteBlock";

function Members() {
  const eventRef = useRef<HTMLDivElement | null>(null);
  const skillsetRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useContext(DesktopContext);

  const [members, setMembers] = useState(allMembers);
  const handleChange = (event) => {
    const target = event.target.value;

    let matchingTargets = [];
    allMembers.map(person => {
      const name_lowercase = person.name.toLowerCase();
      const target_lowercase = target.toLowerCase();
      if (name_lowercase.includes(target_lowercase)) {
        matchingTargets = [...matchingTargets, person];
      }
    });
    setMembers(matchingTargets);
  };

  const handleTagsChange = (event) => {
    const target = event.target.value;

    let matchingTargets = [];
    allMembers.map(person => {
      const tags_lowercase = person.tags.join(' ').toLowerCase();
      const target_lowercase = target.toLowerCase();
      if (tags_lowercase.includes(target_lowercase)) {
        matchingTargets = [...matchingTargets, person];
      }
    });
    setMembers(matchingTargets);
  }

  return (
    <BodyWrapper>
      <ContactContext.Provider value={true}>
      <SiteSection isSmall={true}>
      <NavBar/>
      </SiteSection>
      <SiteSection isSmall={true}>
      <ResponsiveWrapper $isDesktop={isDesktop}>
        <TextField
          label="Search members by name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Search members by industry"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleTagsChange}
        />
        </ResponsiveWrapper>
      </SiteSection>
      <SiteSection isSmall={true}>
      {members.map((item, index) => (
          <UserBlockSpacer><UserBlock user={item} counter={index+1}></UserBlock></UserBlockSpacer>
        ))}
      </SiteSection>
      <Footer />

        

      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Members;
