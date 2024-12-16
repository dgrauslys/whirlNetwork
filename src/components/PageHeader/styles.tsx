import styled from "styled-components";
import { main, white } from "../../constants";
import {
  VibesHeaderExtraLarge,
} from "../constants";

export const PageHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${main};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageHeaderText = styled(VibesHeaderExtraLarge)`
  &.MuiTypography-root {
    color: ${white};
    font-weight: 100;
  }
`;
