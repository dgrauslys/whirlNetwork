import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ContactContext } from "../hooks/contexts";
import UserBlock from "../components/userBlock/userBlock";
import TextField from "@mui/material/TextField";
import UserBlockSpacer from "../components/userBlock/userBlockSpacer";
import { allMembers } from "../data/members";

function Members() {
  const eventRef = useRef<HTMLDivElement | null>(null);
  const skillsetRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);

  const [members, setMembers] = useState(allMembers);
  const handleChange = (event) => {
    console.log(event.target.value); // Update the state with the current value of the input
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
        <NavBar skillset={skillsetRef} work={eventRef} clients={clientsRef} />
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
        {members.map((item, index) => (
          <UserBlockSpacer><UserBlock user={item} counter={index+1}></UserBlock></UserBlockSpacer>
        ))}
        <Footer />
      </ContactContext.Provider>
    </BodyWrapper>
  );
}

export default Members;
