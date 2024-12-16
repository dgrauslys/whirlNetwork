import styled from "styled-components";
import { wood } from "../../constants";
import { Copy, SuperHeaderText } from "../constants";
import { Paper } from "@mui/material";

export const Card = styled(Paper)`
  position: relative;
  width: 100%; /* Adjust width as needed */
  height: 100%; /* Adjust height as needed */
  background-color: #fff; /* Card background */
  padding: 40px; /* Adjust padding for content */
  box-sizing: border-box;
  overflow: hidden; /* Ensure content doesn't overflow */
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const NestedCard = styled.div`
  position: relative;
  width: 100%; /* Adjust width as needed */
  height: 100%; /* Adjust height as needed */
  background-color: #fff; /* Card background */
  padding: 20px; /* Adjust padding for content */
  box-sizing: border-box;
  overflow: hidden; /* Ensure content doesn't overflow */
  flex: 1;
  border: 2px solid ${wood};
`;