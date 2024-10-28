import { useContext, useEffect, useState } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { HeaderText, Wrapper } from "../constants";
import { ClientImageWrapper, ClientsWrapper } from "./styles";
import { ImageList } from "@mui/material";
import { usePagination } from "../Pagination/logic";
import Paginator from "../Pagination/Pagination";
import { PaginationWrapper } from "../Pagination/styles";
import UserBlock from "../userBlock/userBlock";
import UserBlockSpacer from "../userBlock/userBlockSpacer";
import { controllersBaseUrl } from "../../constants";

function Leadership() {
  const isDesktop = useContext(DesktopContext);
  const numberOfCol = isDesktop ? 3 : 2;
  const numberPerPage = isDesktop ? 6 : 4;

  const [leadership, setLeadership] = useState([]);

  useEffect(() => {
      fetch(`${controllersBaseUrl}getLeadership.php`)
          .then(response => response.json())
          .then(data => {
              setLeadership(data);
          })
          .catch(error => console.error('Error fetching leadership data:', error));
  }, []);

  return (
    <Wrapper>
      <HeaderText>Leadership</HeaderText>
        {leadership.map((item, index) => (
          <UserBlockSpacer><UserBlock user={item} counter={index + 1}></UserBlock></UserBlockSpacer>
        ))}
    </Wrapper>
  );
}

export default Leadership;
