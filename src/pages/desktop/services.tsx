import React, { useContext } from "react";
import { services } from "../constants";

import {
  BottomSection,
  CardContentWrapper,
  CenteredContent,
  ImageContainer,
  TopSection,
  SideBySideContainerServices,
} from "../styles/services";
import CardContainer from "../../components/CardContainer/CardContainer";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Button } from "../../components/Button";
import SiteSection from "../../components/SiteBlock/SiteBlock";
import { SmallCopy, SuperHeaderText } from "../../components/constants";
import { DesktopContext } from "../../hooks/contexts";
import MobileServices from "../mobile/services";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants";

function DesktopServices() {
  const isDesktop = useContext(DesktopContext);
  const navigate = useNavigate();
  const goToLocation = (location: string) => {
    navigate(location);
  };
  return (
    <>
      {isDesktop ? (
        <SiteSection>
          <SideBySideContainerServices>
            {services.map((service) => (
              <CardContainer>
                <CardContentWrapper>
                  <CenteredContent>
                    <TopSection>
                      <SuperHeaderText>{service.title}</SuperHeaderText>
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
                        <Divider />
                      </List>
                    </TopSection>
                    <BottomSection>
                      <Button size="large" variant="contained" onClick={() => {goToLocation(`${baseUrl}${service.serviceUrl}`)}} fullWidth>
                        {service.buttonTitle}
                      </Button>
                      <ImageContainer
                        imageName={service.imageUrl}
                      ></ImageContainer>
                    </BottomSection>
                  </CenteredContent>
                </CardContentWrapper>
              </CardContainer>
            ))}
          </SideBySideContainerServices>
        </SiteSection>
      ) : (
        <MobileServices/>
      )}
    </>
  );
}

export default DesktopServices;
