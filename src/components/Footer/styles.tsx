import styled from "styled-components";
import { accent, desktopWidth } from "../../constants";
import { Typography } from "@mui/material";

export const FooterWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%; /* 100% of the viewport width */
  height: 200px; /* Fixed height (adjust as needed) */
  background-color: ${accent}; /* Background color (optional) */
  z-index: 1000; /* Ensures it stays above other elements if needed */
  margin-top: 50px;
  display: flex; /* Enable flexbox layout */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Three equal-width columns */
  gap: 20px;
  padding-left: 20px;
  width: ${desktopWidth}; /* Ensure the content spans the full width of its container */
  max-width: 1200px; /* Optional: maximum width for the content */
`;

export const FooterLinks = styled(Typography)`
  margin-bottom: 10px !important;
`;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column; /* Stacks items vertically */
  gap: 10px; /* Optional: adds space between items */
  `;
