import styled from "styled-components";
import {
  basePadding,
  white,
  desktopWidth,
  mobileWidth,
  baseSmallPadding,
  baseUrl,
  imgUrl,
} from "../../constants";

export const MainSection = styled.div<{ $color?: string; $isSmall?: boolean }>`
  width: 100%;
  padding-top: ${(props) => (props.$isSmall ? baseSmallPadding : basePadding)};
  padding-bottom: ${(props) =>
    props.$isSmall ? baseSmallPadding : basePadding};
  background-color: ${(props) =>
    props.$color === "" ? `${white}` : props.$color};
`;

export const BodySection = styled.div<{ $isDesktop?: boolean }>`
  position: relative;
  width: ${(props) => (props.$isDesktop ? "80%" : "98%")};
  margin: 0 auto;
  z-index: 2; /* Place it behind the content */
`;

export const MainSectionWithImage = styled(MainSection)`
  position: relative;

  /* ::before pseudo-element for the background image */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("${imgUrl}${(props) =>
      props.$imgUrl}"); /* Replace with your image URL */
    background-size: cover;
    background-position: center;
    opacity: 0.5; /* Adjust opacity here */
    z-index: 1; /* Place it behind the content */
  }
`;
