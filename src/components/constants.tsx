import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { white, black, accent } from "../constants";


export const Wrapper = styled.div<{ $isDesktop?: boolean; }>`
width: 100%;
min-height: 40px;
padding-top: 40px;
padding-right: ${props => props.$isDesktop ? "25px" : "0px"};
padding-left: ${props => props.$isDesktop ? "25px" : "0px"};
`;

export const Copy = styled(Typography)({
  "&.MuiTypography-root": {
    color: `${black}`,
    fontFamily: "Helvetica",
    fontSize: "16px",
  },
});

export const CopyAccent = styled(Copy)({
  "&.MuiTypography-root": {
    color: `${white}`,
  },
});

export const BigNoodle = styled(Typography)({
  "&.MuiTypography-root": {
    color: `${black}`,
    fontFamily: "BigNoodle",
  },
});

export const TopText = styled(CopyAccent)({
  "&.MuiTypography-root": {
    fontSize: "60px",
    lineHeight: 1,
  },
});

export const HeaderText2 = styled(BigNoodle)({
  "&.MuiTypography-root": {
    fontSize: "25px",
  },
});

export const HeaderText = styled(BigNoodle)`
  &.MuiTypography-root {
    font-size: 25px;
  }`;
  
  export const SubHeaderText = styled(BigNoodle)`
  &.MuiTypography-root {
    font-size: 18px;
  }`;

export const workFluff = [
  {
    id: 1,
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 2,
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 3,
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 4,
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 5,
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 6,
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 7,
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 8,
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
];

export const clientsFluff = [
  {
    id: 1,
    name: "SiteSpect",
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 2,
    name: "FiveStars",
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 3,
    name: "Wayfair",
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 4,
    name: "Wayfair",
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 5,
    name: "Wayfair",
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 6,
    name: "Wayfair",
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 7,
    name: "Wayfair",
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
  {
    id: 8,
    name: "Wayfair",
    imageFile: "test.jpg",
    tags: ["php", "react"],
  },
];
