import { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { HeaderText, SubHeaderText, Wrapper, workFluff, Copy } from "../constants";
import { Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { usePagination } from "../Pagination/logic";
import { ButtonWrapper, ContentMobileWrapper, ContentWrapper, EventMobileWrapper, ImageMobileWrapper, ImageWrapper, TextWrapper, WorkWrapper } from "./styles";
import Paginator from "../Pagination/Pagination";
import { PaginationWrapper } from "../Pagination/styles";
import { formatDate, convertToStandardTime } from "./logic";
import Links from "./links";
import { secondary } from "../../constants";


function EventMobile({ isPast, title, location, date, time, copy, image, fbLink, meetupLink, signupLink, isCancled, isWhite = false}) {
  const isDesktop = useContext(DesktopContext);
  const stylesObject = isWhite ? { color: '#D3D3D3' } : {};
  const sxValue = { color: secondary };

  return (

        <EventMobileWrapper>
          <ImageMobileWrapper imgUrl={image}/>
          <ContentMobileWrapper>
            <HeaderText style={{...stylesObject}}>{title}</HeaderText>
            <TextWrapper><Copy style={{...stylesObject}}>
            {copy}
            </Copy></TextWrapper>
            <TextWrapper><Copy style={{...stylesObject}}><b>Location:</b> {location}</Copy></TextWrapper>
            <TextWrapper><Copy style={{...stylesObject}}><b>When:</b> {formatDate(date)} {convertToStandardTime(time)}</Copy></TextWrapper>
            <Links isPast={isPast} fbLink={fbLink} meetupLink={meetupLink} signupLink={signupLink} isCancled={isCancled} sxValue={sxValue}/>
          </ContentMobileWrapper>
        </EventMobileWrapper>
  );
}

export default EventMobile;
