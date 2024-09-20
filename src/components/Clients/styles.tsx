import styled from "styled-components";
import { Wrapper } from "../constants";
import { ImageListItem } from "@mui/material";

export const ClientsWrapper = styled(Wrapper)`
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 500px;
`;

export const ClientImageWrapper = styled(ImageListItem)({
    "img": {
      borderRadius: '50%',
    },
});