import styled from "styled-components";
import { HeaderText, Wrapper } from "../constants";
import { black, borderSize } from "../../constants";

export const WorkWrapper = styled(Wrapper)`
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 200px;
      display: flex;
    justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  background-image: url("src/assets/images/womenForest.jpg");
  background-size: cover; /* Ensure the image covers the whole container */
  background-position: center; /* Center the image */
  border-radius: 15px;
  border: solid ${black} ${borderSize};
`;

export const ContentWrapper = styled.div`
  flex: 2;

    & > ${HeaderText} {
    padding-left: 30px; /* Adjust padding as needed */
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding-left: 30px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
    padding-left: 30px;

`;
