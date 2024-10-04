import styled from "styled-components";
import { basePadding, white, desktopWidth, mobileWidth, baseSmallPadding } from "../../constants";

export const MainSection = styled.div<{ $color?: string; $isSmall?: boolean }>`
width: 100%;
padding-top: ${props => props.$isSmall ? baseSmallPadding : basePadding};
padding-bottom: ${props => props.$isSmall ? baseSmallPadding : basePadding};
background-color: ${props => props.$color === '' ? `${white}` : props.$color};
`;

export const BodySection = styled.div<{ $isDesktop?: boolean; }>`
width: ${props => props.$isDesktop ? '80%' : '98%'};
margin: 0 auto;
`;