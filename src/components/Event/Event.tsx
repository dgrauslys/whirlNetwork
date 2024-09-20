import { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { HeaderText, SubHeaderText, Wrapper, workFluff, Copy } from "../constants";
import { Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { usePagination } from "../Pagination/logic";
import { ButtonWrapper, ContentWrapper, ImageWrapper, TextWrapper, WorkWrapper } from "./styles";
import Paginator from "../Pagination/Pagination";
import { PaginationWrapper } from "../Pagination/styles";


function Work({innerRef, isPast, title}) {
  const isDesktop = useContext(DesktopContext);

  return (
    <Wrapper ref={innerRef} isDesktop={isDesktop}>
      <>
        {!isPast && <HeaderText isDesktop={isDesktop}>Upcoming Event</HeaderText>}
        <WorkWrapper>
          <ImageWrapper/>
          <ContentWrapper>
            <HeaderText>{title}</HeaderText>
            <TextWrapper><Copy>
            Nunc et orci in ipsum aliquam cursus eu at mi. Sed rutrum at ex id malesuada. Aliquam erat volutpat.
            Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem
            ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Nulla a suscipit metus,
            sed ornare nulla. Praesent mollis arcu congue eros rutrum, at tempus enim sagittis. Duis id blandit tortor.
            Aliquam enim risus, pellentesque ut venenatis id, congue id erat.
            </Copy></TextWrapper>
            <ButtonWrapper>
              {!isPast && <Button>Join Us!</Button>}
              {isPast && <>Ended! Check out our <Button>Event</Button> page for upcoming action!</>}
            </ButtonWrapper>
          </ContentWrapper>
        </WorkWrapper>
      </>
    </Wrapper>
  );
}

export default Work;
