import { ExpandMoreOutlined } from "@mui/icons-material";
import CardContainer from "../../components/CardContainer/CardContainer";
import {
  Copy,
  Label,
  SmallCopy,
  SubHeaderText,
  SuperHeaderText,
} from "../../components/constants";
import HoverImage from "../../components/HoverImage/HoverImage";
import { FullWidthColumn, HoverImageWrapper } from "./styles";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";

function MobileReviews() {
  return (
    <FullWidthColumn>
      <CardContainer>
        <SuperHeaderText>Smith Family</SuperHeaderText>
        <HoverImageWrapper>
        <HoverImage originalImage={`dog.jpg`} hoverImage={`jars.jpg`} />
        </HoverImageWrapper>
        <Accordion key="1">
          <AccordionSummary
            expandIcon={<ExpandMoreOutlined />}
            aria-controls={`panel1-content`}
            id={`panel1-header`}
          >
            <Label>Testimony</Label>
          </AccordionSummary>
          <AccordionDetails>
            <Copy>
              "We can't say enough about the amazing experience we had with
              Zugy! As a busy family of four, our home was bursting at the seams
              with toys, clothes, and items we hadn't touched in years. Zugy
              came in with such kindness, professionalism, and a clear plan to
              help us get our lives back on track. The process was smooth,
              stress-free, and even enjoyable! Zugy truly transformed our
              chaotic home into a calm, organized, and functional space. We now
              have systems in place that even our kids can follow, and our home
              has never felt so peaceful. Thank you, Zugy, for helping us
              reclaim our home and sanity!" - John Smith
            </Copy>
          </AccordionDetails>
        </Accordion>
        <Accordion key="2">
          <AccordionSummary
            expandIcon={<ExpandMoreOutlined />}
            aria-controls={`panel2-content`}
            id={`panel2-header`}
          >
            <Label>Wins</Label>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText>
                  <SmallCopy>
                    <strong>Decluttered the Entire Home:</strong> Tackled
                    overflowing closets, toy bins, and storage areas with ease.
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
                    <strong>Simplified Our Routines:</strong> Designed systems
                    for easier morning routines, making school days and workdays
                    stress-free.
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
                    <strong>Introduced Sustainable Solutions:</strong> Tackled
                    overflowing closets, toy bins, and storage areas with ease.
                  </SmallCopy>
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </CardContainer>
    </FullWidthColumn>
  );
}

export default MobileReviews;
