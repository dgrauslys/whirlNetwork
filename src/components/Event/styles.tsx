import styled from "styled-components";
import { HeaderText, Wrapper } from "../constants";
import { black, borderSize } from "../../constants";
import { mobileMargin } from "../../constants";

export const WorkWrapper = styled(Wrapper)`
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const EventMobileWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  background-image: url("womenForest.jpg");
  background-size: cover; /* Ensure the image covers the whole container */
  background-position: center; /* Center the image */
`;

export const ImageMobileWrapper = styled.div`
  flex: 1;
  min-height: 200px;
  background-image: url("womenForest.jpg");
  background-size: cover; /* Ensure the image covers the whole container */
  background-position: center; /* Center the image */
  margin-left: ${mobileMargin};
  margin-right: ${mobileMargin};
  margin-bottom: ${mobileMargin};
`;

export const TextWrapper = styled.div`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  flex: 2;
  width: 100%;

  & > ${HeaderText} {
    padding-left: 30px; /* Adjust padding as needed */
  }

  & > ${TextWrapper} {
    padding-left: 30px; /* Adjust padding as needed */
  }

  & > ${ButtonWrapper} {
    padding-left: 30px; /* Adjust padding as needed */
  }
`;

export const ContentMobileWrapper = styled.div`
  flex: 2;
  width: 90%;

  & > ${HeaderText} {
    padding-left: 15px; /* Adjust padding as needed */
  }

  & > ${TextWrapper} {
    padding-left: 15px; /* Adjust padding as needed */
  }

  & > ${ButtonWrapper} {
    padding-left: 15px; /* Adjust padding as needed */
  }
`;
