import React, { useEffect, useRef, useState } from "react";
import { BodyWrapper } from "../components/bodyWrapper/bodyWrapper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ContactContext } from "../hooks/contexts";
import UserBlock from "../components/userBlock/userBlock";
import TextField from "@mui/material/TextField";
import UserBlockSpacer from "../components/userBlock/userBlockSpacer";

function Members() {
  const eventRef = useRef<HTMLDivElement | null>(null);
  const skillsetRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);

  const allMembers = [
    {
      id: 1,
      name: "Amy Armstrong",
      imageUrl: "src/assets/images/amy.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 2,
      name: "Britany Brightwater",
      imageUrl: "src/assets/images/britany.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 3,
      name: "Clare Clarkson",
      imageUrl: "src/assets/images/clare.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 4,
      name: "Amy Armstrong",
      imageUrl: "src/assets/images/amy.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 5,
      name: "Britany Brightwater",
      imageUrl: "src/assets/images/britany.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 6,
      name: "Clare Clarkson",
      imageUrl: "src/assets/images/clare.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 7,
      name: "Amy Armstrong",
      imageUrl: "src/assets/images/amy.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 8,
      name: "Britany Brightwater",
      imageUrl: "src/assets/images/britany.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 9,
      name: "Clare Clarkson",
      imageUrl: "src/assets/images/clare.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 10,
      name: "Amy Armstrong",
      imageUrl: "src/assets/images/amy.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 11,
      name: "Britany Brightwater",
      imageUrl: "src/assets/images/britany.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 12,
      name: "Clare Clarkson",
      imageUrl: "src/assets/images/clare.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 13,
      name: "Amy Armstrong",
      imageUrl: "src/assets/images/amy.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 14,
      name: "Britany Brightwater",
      imageUrl: "src/assets/images/britany.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 15,
      name: "Clare Clarkson",
      imageUrl: "src/assets/images/clare.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 16,
      name: "Amy Armstrong",
      imageUrl: "src/assets/images/amy.jpg",
      tags: ['dog', 'cat', 'fish'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 17,
      name: "Britany Brightwater",
      imageUrl: "src/assets/images/britany.jpg",
      tags: ['snake', 'cat', 'bug'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 18,
      name: "Clare Clarkson",
      imageUrl: "src/assets/images/clare.jpg",
      tags: ['snake', 'cat', 'bird'],
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
  ];
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
