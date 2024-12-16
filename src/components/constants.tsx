import styled, { createGlobalStyle } from "styled-components";
import Typography from "@mui/material/Typography";
import { white, black, accent, chocolate } from "../constants";
import { basePadding } from "../constants";

export const Wrapper = styled.div<{ $isDesktop?: boolean; }>`
width: 100%;
min-height: 40px;
padding-top: 40px;
padding-right: ${props => props.$isDesktop ? "25px" : "0px"};
padding-left: ${props => props.$isDesktop ? "25px" : "0px"};
`;

export const ResponsiveWrapper = styled.div<{ $isDesktop?: boolean; }>`
padding-right: ${props => props.$isDesktop ? "0px" : "15px"};
padding-left: ${props => props.$isDesktop ? "0px" : "15px"};
`;

export const Copy = styled(Typography)(({ padding = '0px' }) => ({
  "&.MuiTypography-root": {
    fontSize: "18px",
    fontFamily: "Quicksand",
    paddingLeft: `${padding}`,
    paddingRight: `${padding}`,
    lineHeight: "35px",
  },
}));

export const Label = styled(Copy)(({ padding = '0px' }) => ({
  "&.MuiTypography-root": {
    fontWeight: 600,
  },
}));

export const SmallCopy = styled(Copy)(({ padding = '0px' }) => ({
  "&.MuiTypography-root": {
    fontSize: "16px",
    fontFamily: "Quicksand",
    paddingLeft: `${padding}`,
    paddingRight: `${padding}`,
    lineHeight: "25px",
  },
}));

export const CopyAccent = styled(Copy)({
  "&.MuiTypography-root": {
    color: `${white}`,
  },
});

export const BigNoodle = styled(Typography)({
  "&.MuiTypography-root": {
    fontFamily: "BigNoodle",
  },
});

export const Montserrat = styled(Typography)({
  "&.MuiTypography-root": {
    fontFamily: "Montserrat",
  },
});

export const Quicksand = styled(Typography)({
  "&.MuiTypography-root": {
    fontFamily: "Quicksand",
  },
});

export const Playfair = styled(Typography)({
  "&.MuiTypography-root": {
    fontFamily: "Playfair",
  },
});

export const GreatVibes = styled(Typography)({
  "&.MuiTypography-root": {
    fontFamily: "GreatVibes",
  },
});

export const TopDisplayText = styled(Typography)({
  "&.MuiTypography-root": {
    color: `${black}`,
    fontFamily: "Nanum Myeongjo",
  },
});

export const TopText = styled(CopyAccent)({
  "&.MuiTypography-root": {
    fontSize: "60px",
    lineHeight: 1,
  },
});

export const HeaderText2 = styled(Montserrat)({
  "&.MuiTypography-root": {
    fontSize: "25px",
  },
});

export const VibesHeaderExtraLarge = styled(GreatVibes)`
  &.MuiTypography-root {
    font-size: 45px;
    color: ${chocolate};
    letter-spacing: 1px;
}`;

export const VibesHeaderLarge = styled(GreatVibes)`
  &.MuiTypography-root {
    font-size: 35px;
    color: ${chocolate};
    letter-spacing: 1px;
}`;

export const VibesHeaderSmall = styled(GreatVibes)`
  &.MuiTypography-root {
    font-size: 18px;
}`;

export const SuperHeaderText = styled(Playfair)`
  &.MuiTypography-root {
    font-size: 35px;
    color: ${chocolate};
    letter-spacing: 1px;
  }`;

export const HeaderText = styled(SuperHeaderText)`
  &.MuiTypography-root {
    font-size: 25px;
  }`;

  export const SmallHeaderText = styled(HeaderText)`
  &.MuiTypography-root {
    font-size: 18px;
  }`;
  
  export const SubHeaderText = styled(Playfair)`
  &.MuiTypography-root {
    font-size: 18px;
  }`;

  export const MainSection = styled.div<{ $color?: string; }>`
  width: 100%;
  padding-top: ${basePadding};
  padding-bottom: ${basePadding};
  background-color: ${props => props.$color === '' ? "#ffffff" : props.$color}
  `;
