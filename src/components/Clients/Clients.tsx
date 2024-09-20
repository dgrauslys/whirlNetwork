import { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { HeaderText, Wrapper, clientsFluff } from "../constants";
import { ClientImageWrapper, ClientsWrapper } from "./styles";
import { ImageList } from "@mui/material";
import { usePagination } from "../Pagination/logic";
import Paginator from "../Pagination/Pagination";
import { PaginationWrapper } from "../Pagination/styles";

function Clients({innerRef}) {
  const isDesktop = useContext(DesktopContext);
  const numberOfCol = isDesktop ? 3 : 2;
  const numberPerPage = isDesktop ? 6 : 4;

  const count = Math.ceil(clientsFluff.length / numberPerPage);
  const paginator = usePagination(clientsFluff, numberPerPage);
  return (
    <Wrapper ref={innerRef}>
      <HeaderText>Clients</HeaderText>
      <ClientsWrapper>
        <ImageList cols={numberOfCol} gap={30}>
          {paginator.currentData().map((item) => (
            <ClientImageWrapper key={item.id}>
              <img
                srcSet={`${item.imageFile}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`src/components/Clients/test.jpg?w=248&fit=crop&auto=format`}
                alt={item.imageFile}
                loading="lazy"
              />
            </ClientImageWrapper>
          ))}
        </ImageList>
      </ClientsWrapper>
      <PaginationWrapper>
        <Paginator
          numberOfCol={numberOfCol}
          numberPerPage={numberPerPage}
          count={count}
          paginator={paginator}
        />
      </PaginationWrapper>
    </Wrapper>
  );
}

export default Clients;
