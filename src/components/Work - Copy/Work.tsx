import { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { HeaderText, Wrapper, workFluff } from "../constants";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { usePagination } from "../Pagination/logic";
import { WorkWrapper } from "./styles";
import Paginator from "../Pagination/Pagination";
import { PaginationWrapper } from "../Pagination/styles";

function Work({innerRef}) {
  const isDesktop = useContext(DesktopContext);
  const numberOfCol = isDesktop ? 3 : 2;
  const numberPerPage = isDesktop ? 6 : 4;

  const count = Math.ceil(workFluff.length / numberPerPage);
  const paginator = usePagination(workFluff, numberPerPage);

  return (
    <Wrapper ref={innerRef} isDesktop={isDesktop}>
      <>
        <HeaderText isDesktop={isDesktop}>Work</HeaderText>
        <WorkWrapper>
          <ImageList cols={numberOfCol}>
            {paginator.currentData().map((item) => (
              <ImageListItem key={item.id}>
                <img
                  srcSet={`${item.imageFile}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`src/components/Work/test.jpg?w=248&fit=crop&auto=format`}
                  alt={item.imageFile}
                  loading="lazy"
                />
                <ImageListItemBar title={item.id} subtitle={item.imageFile} />
              </ImageListItem>
            ))}
          </ImageList>
        </WorkWrapper>
        <PaginationWrapper>
          <Paginator
            numberOfCol={numberOfCol}
            numberPerPage={numberPerPage}
            count={count}
            paginator={paginator}
          />
        </PaginationWrapper>
      </>
    </Wrapper>
  );
}

export default Work;
