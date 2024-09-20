import {
  IconButton,
  PaginationItem,
} from "@mui/material";
import { StyledPagination } from "./styles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

function Paginator({numberOfCol, numberPerPage, count, paginator}) {
  let [page, setPage] = useState(1);

  const handleChange = (e, p) => {
    setPage(p);
    paginator.jump(p);
  };

  return (
          <StyledPagination
            count={count}
            page={page}
            onChange={handleChange}
            renderItem={(pageItem) => (
              <PaginationItem
                components={{
                  next: (props) => <IconButton aria-label="next"><ArrowForwardIosIcon /></IconButton>,
                  previous: (props) => <IconButton aria-label="previous"><ArrowBackIosIcon /></IconButton>,
                }}
                {...pageItem}
              />
            )}
          />
  );
}

export default Paginator;