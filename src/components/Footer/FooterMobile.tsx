import { black } from "../../constants";
import { FooterContent, MobileFooterWrapper, FooterLinks, IconContent, Left, Right } from "./styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function FooterMobile() {
  const sxValue = {color: black};

  return (
<MobileFooterWrapper>
<FacebookIcon sx={sxValue} fontSize="large"/>
              <InstagramIcon  sx={sxValue} fontSize="large"/>
              <XIcon  sx={sxValue} fontSize="large"/>
              <YouTubeIcon  sx={sxValue} fontSize="large"/>
</MobileFooterWrapper>

  );
}

export default FooterMobile;
