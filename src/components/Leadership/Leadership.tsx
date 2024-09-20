import { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { HeaderText, Wrapper, clientsFluff } from "../constants";
import { ClientImageWrapper, ClientsWrapper } from "./styles";
import { ImageList } from "@mui/material";
import { usePagination } from "../Pagination/logic";
import Paginator from "../Pagination/Pagination";
import { PaginationWrapper } from "../Pagination/styles";
import UserBlock from "../userBlock/userBlock";
import UserBlockSpacer from "../userBlock/userBlockSpacer";
import { leadership } from "../../data/members";

function Leadership({ innerRef }) {
  const isDesktop = useContext(DesktopContext);
  const numberOfCol = isDesktop ? 3 : 2;
  const numberPerPage = isDesktop ? 6 : 4;

  const count = Math.ceil(clientsFluff.length / numberPerPage);
  const paginator = usePagination(clientsFluff, numberPerPage);

  return (
    <Wrapper ref={innerRef}>
      <HeaderText>Leadership</HeaderText>
        {leadership.map((item, index) => (
          <UserBlockSpacer><UserBlock user={item} counter={index + 1}></UserBlock></UserBlockSpacer>
        ))}
    </Wrapper>
  );
}

export default Leadership;
