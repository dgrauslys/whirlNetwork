import { Typography } from "@mui/material";
import { Copy, SuperHeaderText, Wrapper } from "../constants";
import { FooterContent, FooterWrapper, FooterLinks, IconContent, Left, Right } from "./styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { accent, black, cream, secondary } from "../../constants";
import { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import FooterMobile from "./FooterMobile";

function Footer() {
  const sxValue = {color: black};
  const isDesktop = useContext(DesktopContext);

  return (
    <>
    {isDesktop ? (
          <FooterWrapper>
          <Left>
              <FacebookIcon sx={sxValue} fontSize="large"/>
              <InstagramIcon  sx={sxValue} fontSize="large"/>
              <XIcon  sx={sxValue} fontSize="large"/>
              <YouTubeIcon  sx={sxValue} fontSize="large"/>
            </Left>

            <Right>
              <Copy>"An organized home allows you to focus on the life you’re meant to live, not the mess you’re meant to clean." - Unkown</Copy>
            </Right>
        </FooterWrapper>
              ) : (
                <FooterMobile/>
              )}
    </>

  );
}

export default Footer;
