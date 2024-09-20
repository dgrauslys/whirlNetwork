import styled from "styled-components";
import { Pagination } from "@mui/material";

export const StyledPagination = styled(Pagination)({
  "&.MuiPagination-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "& .MuiPaginationItem-page": {
    color: "grey",
    backgroundColor: "grey",
    minWidth: "15px",
    height: "15px",
    margin: '5px',

    "&:hover": {
      color: "blue",
      backgroundColor: "blue",
    },

    "&.Mui-selected": {
      backgroundColor: "white",
      color: "white",

      "&:hover": {
        color: "blue",
        backgroundColor: "blue",
      },
    },
  },

  "& .MuiSvgIcon-root": {
    fill: "white",
    position: 'relative',
    top: '1px',

    "&:hover": {
      fill: "blue",
    },
  },
});

export const PaginationWrapper = styled.div`
  width: 100%;
  min-height: 40px;
`;