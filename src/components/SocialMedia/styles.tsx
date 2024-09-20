import styled from "styled-components";
import { Wrapper } from "../constants";
import { desktopWidth } from "../../constants";

export const SocialMediaWrapper = styled(Wrapper)`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex; /* Enable flexbox layout */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
`;

export const IconsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Three equal-width columns */
  gap: 20px;
  padding-left: 20px;
  width: ${desktopWidth}; /* Ensure the content spans the full width of its container */
  max-width: 1200px; /* Optional: maximum width for the content */
`;