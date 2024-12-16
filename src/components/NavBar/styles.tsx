import styled from "styled-components";
import { HeaderText } from "../constants";

export const FirstName = styled.div`
  float: left;
`;

export const Links = styled.div`
  float: right;
  display: flex;

  & > button {
    margin-left: 15px; /* Adjust padding as needed */
    cursor: pointer;
  }

    & > div {
    margin-left: 25px; /* Adjust padding as needed */
  }
`;
