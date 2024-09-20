import React from "react";
import { ContentWrapper, IconsContent, ImageWrapper, SocialMediaWrapper, TextWrapper, UserWrapper } from "./styles";
import { Copy, HeaderText } from "../constants";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { accent } from "../../constants";

function SocialMedia() {

    const sxValue = {color: accent};
  return (
<>
<HeaderText>Connect With Me!</HeaderText>
<SocialMediaWrapper>
            
            <IconsContent>
            <FacebookIcon sx={sxValue} fontSize="large"/>
        <InstagramIcon  sx={sxValue} fontSize="large"/>
        <XIcon  sx={sxValue} fontSize="large"/>
        <LinkedInIcon  sx={sxValue} fontSize="large"/>
        <YouTubeIcon  sx={sxValue} fontSize="large"/>
            </IconsContent>

        </SocialMediaWrapper>
</>



  );
}

export default SocialMedia;