import React, { useContext } from "react";
import { services } from "../constants";

import {
  BottomSection,
  CardContentWrapper,
  CenteredContent,
  TopSection,
  SideBySideContainerServices,
} from "../styles/services";
import CardContainer from "../../components/CardContainer/CardContainer";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Button } from "../../components/Button";
import SiteSection from "../../components/SiteBlock/SiteBlock";
import { Copy, SmallCopy, SmallHeaderText, SuperHeaderText } from "../../components/constants";
import { DesktopContext } from "../../hooks/contexts";
import { FullWidthColumn, ImageContainer } from "./styles";
import { ExpandMoreOutlined, Label } from "@mui/icons-material";
import { baseUrl } from "../../constants";
import { useNavigate } from "react-router-dom";

function MobileServices() {
  const isDesktop = useContext(DesktopContext);
  
  const navigate = useNavigate();
  const goToLocation = (location: string) => {
    navigate(location);
  };
  return (
    <SiteSection>
      <FullWidthColumn>
        {services.map((service, index) => (
          <CardContainer>
            <CardContentWrapper>
              <SuperHeaderText>{service.title}</SuperHeaderText>
              <ImageContainer
                        imageName={service.imageUrl}
                      ></ImageContainer>
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <SmallHeaderText>{service.buttonTitle} - {service.price}</SmallHeaderText>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {service.properties.map((property) => (
                      <ListItem>
                        <ListItemText>
                          <SmallCopy>{property}</SmallCopy>
                        </ListItemText>
                      </ListItem>
                    ))}
                    <Divider
                      sx={{
                        marginTop: "15px",
                      }}
                    />
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <ListItemText>
                        <SmallCopy>{service.price}</SmallCopy>
                      </ListItemText>
                    </ListItem>
                  </List>
                  <Button size="large" variant="contained" onClick={() => {goToLocation(`${baseUrl}${service.serviceUrl}`)}} fullWidth>
                    {service.buttonTitle}
                  </Button>
                </AccordionDetails>
              </Accordion>
            </CardContentWrapper>
          </CardContainer>
        ))}
      </FullWidthColumn>
    </SiteSection>
  );
}

export default MobileServices;
