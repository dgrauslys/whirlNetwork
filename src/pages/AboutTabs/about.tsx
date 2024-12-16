import React, { useContext, useEffect, useRef, useState } from "react";
import {
  CardContentWrapper,
  ColumnCenterContainer,
  ImageContainer,
  OneContainer,
} from "../styles/home";
import { SideBySideContainer } from "../styles/main";
import CardContainer from "../../components/CardContainer/CardContainer";
import { Copy, SuperHeaderText } from "../../components/constants";
import MobileAboutTab from "./mobile/about";
import { DesktopContext } from "../../hooks/contexts";

function AboutTab() {
  const isDesktop = useContext(DesktopContext);

  return (
    <>
      {isDesktop ? (
        <>
          <SideBySideContainer>
            <OneContainer>
              <ImageContainer imageName="woman1.jpg"></ImageContainer>
            </OneContainer>
            <ColumnCenterContainer>
              <CardContainer>
                <CardContentWrapper>
                  <SuperHeaderText>Meet Zugy</SuperHeaderText>
                  <Copy>
                    Zugy is a dedicated and compassionate Professional Organizer
                    with a mission to transform homes and lives through tailored
                    organizational solutions. With a personalized approach, Zugy
                    understands that every client and space is unique, actively
                    listening to your goals and concerns to craft systems that
                    truly work for your lifestyle.
                  </Copy>
                </CardContentWrapper>
              </CardContainer>
            </ColumnCenterContainer>
          </SideBySideContainer>
          <SideBySideContainer>
            <ColumnCenterContainer>
              <CardContainer>
                <CardContentWrapper>
                  <SuperHeaderText>
                    Transforming Spaces with Care and Expertise
                  </SuperHeaderText>
                  <Copy>
                    Known for a gentle, non-judgmental process, Zugy brings
                    respect, confidentiality, and kindness to every project,
                    meeting clients where they are and fostering positive,
                    lasting change. Whether you’re seeking to reclaim precious
                    free time, restore peace and serenity in your home, or learn
                    sustainable organizing techniques, Zugy provides expert
                    guidance and efficient systems to make your vision a
                    reality.
                  </Copy>
                </CardContentWrapper>
              </CardContainer>
            </ColumnCenterContainer>
            <OneContainer>
              <ImageContainer imageName="woman2.jpg"></ImageContainer>
            </OneContainer>
          </SideBySideContainer>
          <SideBySideContainer>
            <OneContainer>
              <ImageContainer imageName="woman3.jpg"></ImageContainer>
            </OneContainer>
            <ColumnCenterContainer>
              <CardContainer>
                <CardContentWrapper>
                  <SuperHeaderText>Creating a Harmonious Home</SuperHeaderText>
                  <Copy>
                    From decluttering and categorizing to creating customized
                    labels and taking donation loads, Zugy is committed to
                    delivering results-driven organization that saves time and
                    energy while ensuring lasting impact. With services ranging
                    from foundational packages to premium solutions, Zugy offers
                    support at every level, empowering clients to create
                    harmonious, organized spaces where they can unwind,
                    recharge, and focus on what truly matters.
                  </Copy>
                </CardContentWrapper>
              </CardContainer>
            </ColumnCenterContainer>
          </SideBySideContainer>
        </>
      ) : (
        <MobileAboutTab />
      )}
    </>
  );
}

export default AboutTab;
