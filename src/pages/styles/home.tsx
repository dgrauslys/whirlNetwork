import styled from "styled-components";
import { baseUrl, imgUrl } from "../../constants";
import { Copy, HeaderText, SuperHeaderText } from "../../components/constants";
import SiteSection from "../../components/SiteBlock/SiteBlock";
import { CardContentWrapperBase, ColumnCenterContainerBase, ImageContainerBase } from "./main";

const minHeight = "510px";

export const OneContainer = styled.div`
  width: 40%;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.color || "none"};

  & > ${HeaderText} {
    margin-bottom: 15px;
  }
`;

export const ColumnCenterContainer = styled(ColumnCenterContainerBase)`
  min-height: ${minHeight};
  width: 60%;
`;

export const CardContentWrapper = styled(CardContentWrapperBase)`
  & > ${Copy} {
    margin-bottom: 60px;
  }
`;

export const ImageContainer = styled(ImageContainerBase)`
  height: ${minHeight};
`;

export const Image = styled.img`
  background-image: url(${(props) => `${imgUrl}${props.imageName}`});
  background-size: cover; /* Cover entire container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
`;

export const ImageContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Ensures even spacing between images */
  gap: 20px; /* Sets a 20px gap between images */
  width: 100%; /* Makes the container full width */
  padding: 0; /* Removes any internal spacing */
  margin: 0; /* Ensures no external spacing */
  margin-top: 20px;
      min-height: 420px;
  
  img {
    flex: 1; /* Ensures images are equal in width */
    width: calc(33.333% - 13.33px); /* Adjusts width to fit 3 images with gaps */
    object-fit: cover; /* Ensures images maintain aspect ratio */
  }
`;

export const OrganizeSection = styled(SiteSection)`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("${imgUrl}demoBanner.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.5; /* Adjust opacity here */
    z-index: -1; /* Place it behind the content */
  }
`;
