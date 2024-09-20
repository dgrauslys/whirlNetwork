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

function Leadership({ innerRef }) {
  const isDesktop = useContext(DesktopContext);
  const numberOfCol = isDesktop ? 3 : 2;
  const numberPerPage = isDesktop ? 6 : 4;

  const count = Math.ceil(clientsFluff.length / numberPerPage);
  const paginator = usePagination(clientsFluff, numberPerPage);

  const leaders = [
    {
      id: 1,
      name: "Amy Armstrong",
      imageUrl: "src/assets/images/amy.jpg",
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 2,
      name: "Britany Brightwater",
      imageUrl: "src/assets/images/britany.jpg",
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
    {
      id: 3,
      name: "Clare Clarkson",
      imageUrl: "src/assets/images/clare.jpg",
      shortCopy:
        "Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros. Aliquam erat volutpat. Mauris semper libero rutrum, suscipit eros et, blandit felis. Duis vel finibus elit. Donec commodo, sem ut pellentesque consequat, metus nibh molestie libero, ut rutrum ante eros ut eros.",
    },
  ];
  return (
    <Wrapper ref={innerRef}>
      <HeaderText>Leadership</HeaderText>
        {leaders.map((item, index) => (
          <UserBlockSpacer><UserBlock user={item} counter={index + 1}></UserBlock></UserBlockSpacer>
        ))}
    </Wrapper>
  );
}

export default Leadership;
