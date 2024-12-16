import styled from "styled-components";
import { accent, black, cream, desktopWidth, main } from "../../constants";
import { Typography } from "@mui/material";
import { SmallHeaderText } from "../constants";

export const FooterWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%; /* 100% of the viewport width */
  height: 200px; /* Fixed height (adjust as needed) */
  background-color: ${main}; /* Background color (optional) */
  z-index: 1000; /* Ensures it stays above other elements if needed */
  display: flex; /* Enable flexbox layout */
  justify-content: space-between; /* Space between Left and Right components */
  align-items: center; /* Center content vertically */
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const MobileFooterWrapper = styled(FooterWrapper)`
  & > svg:first-child {
    margin-left: 25px;
  }

    & > svg:last-child {
    margin-right: 25px;
  }
`;

export const Left = styled.div`
  display: flex;
  gap: 10px; /* Adds space between the children */
  margin-left: 140px;
`;

export const Right = styled.div`
  display: flex;
  max-width: 350px;
  justify-content: flex-end; /* Ensures alignment within this container */
    margin-right: 140px;
`;



export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Three equal-width columns */
  gap: 20px;
  //padding-left: 20px;
  width: ${desktopWidth}; /* Ensure the content spans the full width of its container */
  max-width: 1200px; /* Optional: maximum width for the content */
`;


export const FooterMobileSocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Three equal-width columns */
  gap: 75px;
  //padding-left: 20px;
  margin-top: 25px;
`;

export const FooterMobileContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Three equal-width columns */
  gap: 20px;
  padding-left: 20px;
  width: 98%; /* Ensure the content spans the full width of its container */
  max-width: 1200px; /* Optional: maximum width for the content */
  //margin-left: 45px;
`;

export const FooterLinks = styled(SmallHeaderText)`
  margin-bottom: 10px !important;
  color: ${cream};
`;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column; /* Stacks items vertically */
  gap: 10px; /* Optional: adds space between items */
  `;
