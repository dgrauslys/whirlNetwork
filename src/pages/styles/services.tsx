import styled from "styled-components";
import { CardContentWrapperBase, ColumnCenterContainerBase, ImageContainerBase, SideBySideContainer } from "./main";

export const SideBySideContainerServices = styled(SideBySideContainer)`
    gap: 8px;
    align-items: start;
`;

export const CenteredTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardContentWrapper = styled(CardContentWrapperBase)`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 1350px;
  border: soild red 2px;

  & > .MuiList-root {
    margin-top: 30px;
  }

  & > .MuiButtonBase-root {
    margin-bottom: 40px;
    margin-top: 30px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Spacing between top items */
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px; /* Spacing between bottom items */
  width: 100%;
`;

export const ImageContainer = styled(ImageContainerBase)`
  min-height: 514px;
  width: 100%;
`;

export const ColumnCenterContainer = styled(ColumnCenterContainerBase)`
  width: 80%;
`;
