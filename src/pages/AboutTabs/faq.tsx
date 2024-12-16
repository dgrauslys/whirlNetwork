import React, { useContext, useEffect, useRef, useState } from "react";
import {
  CardContentWrapper,
  OneContainer,
} from "../styles/home";
import { SideBySideContainer } from "../styles/main";
import { ImageContainer, ColumnCenterContainer } from "../styles/about";
import CardContainer from "../../components/CardContainer/CardContainer";
import { Copy, SuperHeaderText, Label } from "../../components/constants";
import { services_offered, process, policies } from "../../data/faq";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { DesktopContext } from "../../hooks/contexts";
import MobileFAQ from "./mobile/faq";

function FAQ() {
  const isDesktop = useContext(DesktopContext);
  return (
    <>
    {isDesktop ? (
      <>
      <SideBySideContainer>
          <ImageContainer imageName="dog.jpg"></ImageContainer>
        <ColumnCenterContainer>
          <CardContainer>
            <CardContentWrapper>
              <SuperHeaderText>Services Offered</SuperHeaderText>
              {services_offered.map((item, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreOutlined />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Label>{item.question}</Label>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Copy>{item.answer}</Copy>
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContentWrapper>
          </CardContainer>
        </ColumnCenterContainer>
      </SideBySideContainer>
      <SideBySideContainer>
        <ColumnCenterContainer>
          <CardContainer>
            <CardContentWrapper>
              <SuperHeaderText>Process and Timeline</SuperHeaderText>
              {process.map((item, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreOutlined />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Label>{item.question}</Label>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Copy>{item.answer}</Copy>
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContentWrapper>
          </CardContainer>
        </ColumnCenterContainer>
          <ImageContainer imageName="jars.jpg"></ImageContainer>
      </SideBySideContainer>
      <SideBySideContainer>
          <ImageContainer imageName="nightstand.jpg"></ImageContainer>
        <ColumnCenterContainer>
          <CardContainer>
            <CardContentWrapper>
              <SuperHeaderText>Policies and Pricing</SuperHeaderText>
              {policies.map((item, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreOutlined />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Label>{item.question}</Label>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Copy>{item.answer}</Copy>
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContentWrapper>
          </CardContainer>
        </ColumnCenterContainer>
      </SideBySideContainer>
      </>
            ) : (
              <MobileFAQ />
            )}
            </>
    
  );
}

export default FAQ;
