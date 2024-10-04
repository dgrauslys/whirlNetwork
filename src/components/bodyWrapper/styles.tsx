import styled from "styled-components";
import { desktopWidth, mobileWidth } from "../../constants";
import NavBar from "../NavBar/NavBar";

export const DesktopBody = styled.div`
    width: ${desktopWidth};
    height: 100%;
    margin: 0 auto;
`;

export const NavBarWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3000;
    width: 80%;
`;

export const MobileBody = styled.div`
    width: ${mobileWidth};
    height: 100%;
`;