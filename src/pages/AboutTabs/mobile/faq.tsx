import CardContainer from "../../../components/CardContainer/CardContainer";
import { SuperHeaderText, Label, Copy } from "../../../components/constants";
import { CardContentWrapper } from "../../styles/home";
import { FullWidthColumn } from "./styles";
import { services_offered, policies, process } from "../../../data/faq";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

function MobileFAQ() {
  return (
    <FullWidthColumn>
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
    </FullWidthColumn>
  );
}

export default MobileFAQ;
