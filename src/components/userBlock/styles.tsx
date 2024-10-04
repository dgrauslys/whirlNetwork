import styled from "styled-components";
import { Copy, HeaderText, Wrapper } from "../constants";
import { accent, black, borderSize } from "../../constants";
import { Typography } from "@mui/material";
import { mobileMargin } from "../../constants";
import { secondary } from "../../constants";

interface ImageWrapperProps {
  $imageUrl: string;
  $isEven: boolean;
}

interface ContentWrapperProps {
  $paddingAmount?: number;
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
  background-image: url("${(props) => props.$imageUrl}");
  background-size: cover; /* Ensure the image covers the whole container */
  background-position: center; /* Center the image */
  //border-radius: 15px;
  border-radius: 50%;
  border: solid ${secondary} ${borderSize};
  cursor: pointer;
  margin-left: ${(props) => (props.$isEven ? '20px' : '0px')};
`;

export const ImageMobileWrapper = styled(ImageWrapper)`
  margin: auto;
  margin-bottom: 20px;
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  flex: 2;
  padding-left: ${(props) => `${props.$paddingAmount}px`};
  & > ${HeaderText} {
    cursor: pointer;
  }
`;

export const UserMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > ${HeaderText} {
    cursor: pointer;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
`;

export const TextMobileWrapper = styled(TextWrapper)`
  //padding-left: ${mobileMargin};
  //padding-right: ${mobileMargin};
  margin-bottom: 20px;

`;

export const MCopy = styled(Copy)`
padding-right: 30px;
`;

export const UserSpacer = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
`;
