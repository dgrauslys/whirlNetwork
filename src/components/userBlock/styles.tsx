import styled from "styled-components";
import { Copy, HeaderText, Wrapper } from "../constants";
import { accent, black, borderSize } from "../../constants";
import { Typography } from "@mui/material";

interface ImageWrapperProps {
  imageUrl: string;
}

interface ContentWrapperProps {
  paddingAmount: string;
}

export const UserWrapper = styled(Wrapper)`
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  //flex: 1;
  //min-height: 200px;
  height: 200px;
  width: 200px;
  background-image: url("${(props) => props.imageUrl}");
  background-size: cover; /* Ensure the image covers the whole container */
  background-position: center; /* Center the image */
  //border-radius: 15px;
  border-radius: 50%;
  border: solid ${black} ${borderSize};
  cursor: pointer;
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  flex: 2;
  padding-left: ${(props) => `${props.paddingAmount}px`};
  & > ${HeaderText} {
    cursor: pointer;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
`;

export const MCopy = styled(Copy)`
padding-right: 30px;
`;

export const UserSpacer = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
`;
