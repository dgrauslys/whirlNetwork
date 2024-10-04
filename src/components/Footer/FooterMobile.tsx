import { Typography } from "@mui/material";
import { Wrapper } from "../constants";
import { FooterContent, FooterWrapper, FooterLinks, IconContent, FooterMobileContent, FooterMobileSocialLinks } from "./styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { accent, secondary } from "../../constants";
import { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";

function FooterMobile() {
  const sxValue = {color: secondary};
  const isDesktop = useContext(DesktopContext);

  return (
          <FooterWrapper>
          <FooterMobileContent>
            <div>
              <FooterLinks>Newsletter</FooterLinks>
              <FooterLinks>Resources</FooterLinks>
              <FooterLinks>FAQ</FooterLinks>
              <FooterLinks>Blog</FooterLinks>
            </div>
            <div>
              <FooterLinks>Privacy Policy</FooterLinks>
              <FooterLinks>Accessibility Statement</FooterLinks>
              <FooterLinks>Sitemap</FooterLinks>
            </div>
          </FooterMobileContent>
          <FooterMobileSocialLinks>
          <FacebookIcon sx={sxValue} fontSize="large"/>
              <InstagramIcon  sx={sxValue} fontSize="large"/>
              <XIcon  sx={sxValue} fontSize="large"/>
              <YouTubeIcon  sx={sxValue} fontSize="large"/>
          </FooterMobileSocialLinks>
        </FooterWrapper>

  );
}

export default FooterMobile;
