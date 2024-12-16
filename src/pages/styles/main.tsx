import styled from "styled-components";
import { SuperHeaderText } from "../../components/constants";
import { baseUrl, imgUrl } from "../../constants";

export const SideBySideContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute space between children */
  align-items: center; /* Center align items vertically */
  padding: 20px;
`;

export const CardContentWrapperBase = styled.div`
  & > ${SuperHeaderText} {
    margin-bottom: 45px;
  }
`;

export const ColumnCenterContainerBase = styled.div`
  width: 60%;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const ImageContainerBase = styled.div`
  width: 100%;
  background-image: url(${(props) => `${imgUrl}${props.imageName}`});
  background-size: cover; /* Cover entire container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  display: flex;
  border-radius: 5px;
`;