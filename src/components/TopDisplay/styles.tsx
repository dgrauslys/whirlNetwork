import styled from "styled-components";
import { HeaderText, TopDisplayText, Wrapper } from "../constants";
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
  //background-image: url("/assets/images/womenForest.jpg");
  //background-size: cover; /* Ensure the image covers the whole container */
  //background-position: center; /* Center the image */
  //border-radius: 15px;
`;

export const DisplayTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > ${TopDisplayText} {
    font-size: 130px;
  }

  & > ${HeaderText} {
    position: relative;
    top: -53px;
    left: 40px;
  }
`;

export const TopWrapper = styled(Wrapper)`
  position: absolute; /* or fixed, depending on your needs */
  top: 105px; /* Position it at the top */
  left: 0; /* Align it to the left */
  width: 100%; /* Take full width */
  height: 700px; /* Set a specific height */
  background-image: url("growth.jpg");
  background-size: cover; /* Adjusts the image to cover the element */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-position: center;

  & > ${DisplayTextWrapper} {
    position: relative;
    top: 85px;
    width: 500px;
    left: ${({ offset }) => offset || '168px'};
  }
`;

export const TopWrapperMobile = styled(TopWrapper)`
  background-position: right;
  top: 20px;
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
