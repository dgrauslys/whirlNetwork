import styled from "styled-components";
import { Wrapper } from "../constants";
import { accent } from "../../constants";

export const TextBacking = styled.div`
  height: 100%;
  width: 45%;
  background-color: ${accent};
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  margin-left: 30px;
`;

export const TopImage = styled(Wrapper)`
  //background-image: url("src/assets/images/womenForest.jpg");
  //background-size: cover; /* Ensure the image covers the whole container */
  //background-position: center; /* Center the image */
  //border-radius: 15px;
`;

export const TopWrapper = styled(Wrapper)`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  background-image: url("src/assets/images/womenForest.jpg");
  background-size: cover; /* Ensure the image covers the whole container */
  background-position: center; /* Center the image */
  border-radius: 15px;
`;

export const TextWrapper = styled.div`
  padding: 10px;
`;

export const ImageWrapper = styled.img`
  width: 100px; /* Set the width */
  height: 100px; /* Set the height equal to the width */
  border-radius: 50%; /* Make the corners rounded to form a circle */
  background-color: ${accent}; /* Optional: Set a background color */
  display: flex; /* Optional: Center content inside the circle */
  align-items: center; /* Optional: Center content vertically */
  justify-content: center;
  border: 2px solid ${accent};
`;

export const NameWrapper = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;

export const Dedicated = styled.span`
  font-family: ADL;
`;

export const Creative = styled.span`
  font-family: SendFlowers;
  font-size: 22px;
`;
