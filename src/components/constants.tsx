import styled, { createGlobalStyle } from "styled-components";
import Typography from "@mui/material/Typography";
import { white, black, accent } from "../constants";
import { basePadding } from "../constants";

export const Nanum = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
`;

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
    fontSize: "16px",
    fontFamily: "Helvetica",
    paddingLeft: `${padding}`,
    paddingRight: `${padding}`,
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

  export const MainSection = styled.div<{ $color?: string; }>`
  width: 100%;
  padding-top: ${basePadding};
  padding-bottom: ${basePadding};
  background-color: ${props => props.$color === '' ? "#ffffff" : props.$color}
  `;
