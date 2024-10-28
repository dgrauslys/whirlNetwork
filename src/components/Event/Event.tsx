import { useContext, useEffect, useState } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { HeaderText, SubHeaderText, Wrapper, workFluff, Copy, HeaderText2 } from "../constants";
import { Button, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { usePagination } from "../Pagination/logic";
import { ButtonWrapper, ContentWrapper, ImageWrapper, InlineContainer, MeetupWrapper, TextWrapper, WorkWrapper } from "./styles";
import Paginator from "../Pagination/Pagination";
import { PaginationWrapper } from "../Pagination/styles";
import EventMobile from "./EventMobile";
import { controllersBaseUrl, secondary } from "../../constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import { formatDate, convertToStandardTime } from "./logic";
import Links from "./links";

function Work({ isPast, title, location, date, time, copy, image, fbLink, meetupLink, signupLink, isCancled, isWhite = false}) {
  const isDesktop = useContext(DesktopContext);
  const stylesObject = isWhite ? { color: '#D3D3D3' } : {};
  const sxValue = { color: secondary };

  return (
      <>
        {isDesktop ? (
        <WorkWrapper>
          <ImageWrapper imgUrl={image}/>
          <ContentWrapper>
            <HeaderText style={{...stylesObject}}>{title}</HeaderText>
            <TextWrapper><Copy style={{...stylesObject}}>
              {copy} {fbLink}
            </Copy></TextWrapper>
            <TextWrapper><Copy style={{...stylesObject}}><b>Location:</b> {location}</Copy></TextWrapper>
            <TextWrapper><Copy style={{...stylesObject}}><b>When:</b> {formatDate(date)} {convertToStandardTime(time)}</Copy></TextWrapper>
            <Links isPast={isPast} fbLink={fbLink} meetupLink={meetupLink} signupLink={signupLink} isCancled={isCancled} sxValue={sxValue}/>
          </ContentWrapper>
        </WorkWrapper>
        ) : (
          <EventMobile isPast={isPast} title={title} location={location} date={date} time={time} copy={copy} image={image} fbLink={fbLink} meetupLink={meetupLink} signupLink={signupLink} isCancled={isCancled} isWhite={isWhite}/>
        )}
      </>
  );
}

export default Work;
