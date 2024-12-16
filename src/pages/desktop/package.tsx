import React, { useContext, useEffect, useRef, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { DesktopContext } from "../../hooks/contexts";
import SiteSection from "../../components/SiteBlock/SiteBlock";
import CardContainer from "../../components/CardContainer/CardContainer";
import {
  Copy,
  SmallCopy,
  SmallHeaderText,
  SubHeaderText,
  SuperHeaderText,
} from "../../components/constants";
import HoverImage from "../../components/HoverImage/HoverImage";
import { ColumnCenterContainerBase, SideBySideContainer } from "../styles/main";
import { InnerBlock, SideBySideContainerReviews } from "../styles/reviews";
import MobileReviews from "../mobile/reviews";
import MobilePackage from "../mobile/package";
import { useLocation } from "react-router-dom";
import { services } from "../constants";
import { Button } from "../../components/Button";
import styled from "styled-components";
import { imgUrl } from "../../constants";
import ConsultationModal from "../../components/ConsultationModal/ConsultationModal";

const Image = styled.img`
  background-image: url(${(props) => `${imgUrl}${props.imageName}`});
  background-size: cover; /* Cover entire container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  min-height: 650px;
`;

export const SideBySideContainer2 = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute space between children */
  align-items: start; /* Center align items vertically */
  padding: 20px;
  gap: 20px;
`;

function DesktopPackage() {
  const isDesktop = useContext(DesktopContext);

  const useQuery = () => {
    const { search } = useLocation();
    return new URLSearchParams(search);
  };
  const query = useQuery();
  const packageValue = query.get('version') ? query.get('version') : 0;
  const service = services[packageValue];
  const modalButtonTitle = `Book Service: ${service.price}`;
  const modalTitle = `Book ${service.title}: ${service.buttonTitle}`;

  return (
    <>
      {isDesktop ? (
        <>
          <SiteSection>
            <CardContainer>
              <SideBySideContainer2>
                <ColumnCenterContainerBase>
                  <SuperHeaderText>{service.buttonTitle}</SuperHeaderText>
                  <Image imageName={service.imageUrl} />
                  <ConsultationModal buttonTitle={modalButtonTitle} title={modalTitle} isFullWidth={true} />
                </ColumnCenterContainerBase>
                <ColumnCenterContainerBase>
                  <List>
                    {service.propertiesElaborated.map((property, index) => (
                      <ListItem>
                        <ListItemText>
                          <SmallHeaderText sx={{ marginBottom: "5px" }}>
                            {service.properties[index]}
                          </SmallHeaderText>
                          <SmallCopy>{property}</SmallCopy>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </ColumnCenterContainerBase>
              </SideBySideContainer2>
            </CardContainer>
          </SiteSection>
        </>
      ) : (
        <MobilePackage />
      )}
    </>
  );
}

export default DesktopPackage;
