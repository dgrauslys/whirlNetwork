import styled from "styled-components";
import { ImageContainerBase } from "../../styles/main";

export const FullWidthColumn = styled.div`
  margin-top: 45px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
  justify-content: flex-start;
  gap: 45px;
`;

export const ImageContainer = styled(ImageContainerBase)`
  height: 350px;
  margin-bottom: 30px;
`;