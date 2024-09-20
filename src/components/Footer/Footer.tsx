import { Typography } from "@mui/material";
import { Wrapper } from "../constants";
import { FooterContent, FooterWrapper, FooterLinks, IconContent } from "./styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { accent, secondary } from "../../constants";

function Footer() {
  const sxValue = {color: secondary};
  return (
    <FooterWrapper>
      <FooterContent>
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
        <IconContent>
          <FacebookIcon sx={sxValue} fontSize="large"/>
          <InstagramIcon  sx={sxValue} fontSize="large"/>
          <XIcon  sx={sxValue} fontSize="large"/>
          <YouTubeIcon  sx={sxValue} fontSize="large"/>
        </IconContent>
        <div>
          <FooterLinks>Community Impact Award</FooterLinks>
          <FooterLinks>Excellence in Member Engagement</FooterLinks>
          <FooterLinks>Innovation in Networking</FooterLinks>
          <FooterLinks>Leadership Development Award</FooterLinks>
        </div>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
