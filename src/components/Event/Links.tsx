import { Button } from "@mui/material";
import {InlineContainer, MeetupWrapper, TextWrapper } from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";

function Links({ isPast, fbLink, meetupLink, signupLink, isCancled, sxValue}) {

    if (isPast) {
      return (
        <TextWrapper>Ended! Check out our <Button>Event</Button> page for upcoming action!</TextWrapper>
      );
    }

    if (isCancled) {
      return (
        <TextWrapper>Sorry! This event has been cancled.</TextWrapper>
      );
    }
    //{fbLink && <FacebookIcon sx={sxValue} fontSize="large" />}
    //{meetupLink && <MeetupWrapper/>}
    //{signupLink && <Button variant="contained">Attend</Button>}
    return (
      <TextWrapper>
      <InlineContainer>
        <FacebookIcon sx={sxValue} fontSize="large" />
        <MeetupWrapper/>
        <Button variant="contained">Attend</Button>
      </InlineContainer>
      </TextWrapper>

    );
}

export default Links;