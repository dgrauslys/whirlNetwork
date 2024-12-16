import React, { useContext, useEffect, useRef, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { DesktopContext } from "../../hooks/contexts";
import SiteSection from "../../components/SiteBlock/SiteBlock";
import CardContainer from "../../components/CardContainer/CardContainer";
import { Copy, SmallCopy, SubHeaderText, SuperHeaderText } from "../../components/constants";
import HoverImage from "../../components/HoverImage/HoverImage";
import { SideBySideContainer } from "../styles/main";
import { InnerBlock, SideBySideContainerReviews } from "../styles/reviews";
import MobileReviews from "../mobile/reviews";

function DesktopReviews() {
    const isDesktop = useContext(DesktopContext);
  return (
    <>
    {isDesktop ? (
        <>
        <SiteSection>
          <CardContainer>
            <SuperHeaderText>Smith Family</SuperHeaderText>
            <SideBySideContainerReviews>
              <HoverImage originalImage={`dog.jpg`} hoverImage={`jars.jpg`} />
              <HoverImage
                originalImage={`jars.jpg`}
                hoverImage={`nightstand.jpg`}
              />
              <HoverImage
                originalImage={`nightstand.jpg`}
                hoverImage={`dog.jpg`}
              />
            </SideBySideContainerReviews>
            <SideBySideContainer>
              <InnerBlock>
                <Copy>
                  "We can't say enough about the amazing experience we had with
                  Zugy! As a busy family of four, our home was bursting at the
                  seams with toys, clothes, and items we hadn't touched in
                  years. Zugy came in with such kindness, professionalism, and a
                  clear plan to help us get our lives back on track. The process
                  was smooth, stress-free, and even enjoyable! Zugy truly
                  transformed our chaotic home into a calm, organized, and
                  functional space. We now have systems in place that even our
                  kids can follow, and our home has never felt so peaceful.
                  Thank you, Zugy, for helping us reclaim our home and sanity!"
                  - John Smith
                </Copy>
              </InnerBlock>
              <InnerBlock>
                <List>
                  <ListItem>
                    <ListItemText>
                      <SmallCopy>
                        <strong>Decluttered the Entire Home:</strong> Tackled
                        overflowing closets, toy bins, and storage areas with
                        ease.
                      </SmallCopy>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <SmallCopy>
                        <strong>Created Functional Zones:</strong> Established
                        specific zones for toys, work, and relaxation that the
                        entire family can maintain.
                      </SmallCopy>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <SmallCopy>
                        <strong>Simplified Our Routines:</strong> Designed
                        systems for easier morning routines, making school days
                        and workdays stress-free.
                      </SmallCopy>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <SmallCopy>
                        <strong>Increased Usable Space:</strong> Taught us
                        decluttering and organizing techniques to maintain order
                        long-term.
                      </SmallCopy>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <SmallCopy>
                        <strong>Introduced Sustainable Solutions:</strong>{" "}
                        Tackled overflowing closets, toy bins, and storage areas
                        with ease.
                      </SmallCopy>
                    </ListItemText>
                  </ListItem>
                </List>
              </InnerBlock>
            </SideBySideContainer>
          </CardContainer>
        </SiteSection>
        <SiteSection isSmall={true}>
          <CardContainer>
            <SuperHeaderText>Robin Family</SuperHeaderText>
            <SideBySideContainerReviews>
              <HoverImage originalImage={`dog.jpg`} hoverImage={`jars.jpg`} />
              <HoverImage
                originalImage={`jars.jpg`}
                hoverImage={`nightstand.jpg`}
              />
              <HoverImage
                originalImage={`nightstand.jpg`}
                hoverImage={`dog.jpg`}
              />
            </SideBySideContainerReviews>
            <SideBySideContainer>
              <InnerBlock>
                <Copy>
                  "Working with Zugy was one of the best decisions we’ve ever
                  made for our home! With a growing family and years of
                  accumulated clutter, we felt completely overwhelmed. Zugy not
                  only brought organization to our chaos but also a sense of
                  calm and relief we didn’t know we needed. Zugy’s approach was
                  kind, non-judgmental, and highly effective. Our house now
                  feels like a home again, and we can find everything we need
                  with ease. We’re so grateful for Zugy’s expertise and care!"
                  - Jane Robin
                </Copy>
              </InnerBlock>
              <InnerBlock>
                <List>
                  <ListItem>
                    <ListItemText>
                      <SmallCopy>
                        <strong>Decluttered the Entire Home:</strong> Tackled
                        overflowing closets, toy bins, and storage areas with
                        ease.
                      </SmallCopy>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <SmallCopy>
                        <strong>Created Functional Zones:</strong> Established
                        specific zones for toys, work, and relaxation that the
                        entire family can maintain.
                      </SmallCopy>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <SmallCopy>
                        <strong>Simplified Our Routines:</strong> Designed
                        systems for easier morning routines, making school days
                        and workdays stress-free.
                      </SmallCopy>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <SmallCopy>
                        <strong>Increased Usable Space:</strong> Taught us
                        decluttering and organizing techniques to maintain order
                        long-term.
                      </SmallCopy>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <SmallCopy>
                        <strong>Introduced Sustainable Solutions:</strong>{" "}
                        Tackled overflowing closets, toy bins, and storage areas
                        with ease.
                      </SmallCopy>
                    </ListItemText>
                  </ListItem>
                </List>
              </InnerBlock>
            </SideBySideContainer>
          </CardContainer>
        </SiteSection>
        </>
                      ) : (
                        <MobileReviews/>
                      )}
        </>
  );
}

export default DesktopReviews;
