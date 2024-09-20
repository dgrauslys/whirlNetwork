import styled from "styled-components";
import { accent, desktopWidth } from "../../constants";
import { Wrapper } from "../constants";

export const ContactUsWrapper = styled.div`
  width: 100%; /* 100% of the viewport width */
  z-index: 1000; /* Ensures it stays above other elements if needed */
  display: flex; /* Enable flexbox layout */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
`;

export const ContactUsContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 3fr;
  gap: 20px;
  padding-left: 20px;
  max-width: 1200px; /* Optional: maximum width for the content */
`;

export const ImageWrapper = styled(Wrapper)`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  background-image: url("src/assets/images/connect.jpg");
  background-size: cover; /* Ensure the image covers the whole container */
  background-position: center; /* Center the image */
  border-radius: 15px;
  min-height: 150px;
  margin-bottom: 30px;
`;
