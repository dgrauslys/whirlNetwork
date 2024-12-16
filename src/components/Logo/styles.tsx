import styled from "@emotion/styled";
import { chocolate } from "../../constants";
import { GreatVibes } from "../constants";

export const FullWidthColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const VibesHeaderLogo = styled(GreatVibes)`
  &.MuiTypography-root {
    font-size: 25px;
    color: ${chocolate};
    letter-spacing: 1px;
    line-height: .95;
    cursor: pointer;
}`;