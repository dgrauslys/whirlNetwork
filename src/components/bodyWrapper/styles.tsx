import styled from "styled-components";
import { desktopWidth, mobileWidth } from "../../constants";

export const DesktopBody = styled.div`
    width: ${desktopWidth};
    height: 100%;
    margin: 0 auto;
`;

export const MobileBody = styled.div`
    width: ${mobileWidth};
    height: 100%;
`;