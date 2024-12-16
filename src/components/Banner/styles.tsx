import styled from "styled-components";
import { baseUrl, cream, imgUrl, main, white } from "../../constants";
import { Montserrat, VibesHeaderLarge } from "../constants";

export const BannerContainer = styled.div`
  width: 100%;
  height: 260px;
  background-color: ${main};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${imgUrl}demoBanner.jpg');
  background-size: cover;            /* Cover entire container */
  background-position: center;       /* Center the image */
  background-repeat: no-repeat;      /* Prevent the image from repeating */
  display: flex;
  align-items: center;
  justify-content: center;
  //opacity: .4;
`;

export const BannerText = styled(VibesHeaderLarge)`
  position: relative;
  top: -50px;
  left: -50px;
  border-radius: 5px;
  &.MuiTypography-root {
    font-size: 35px;
    color: ${white};
    opacity: .9;
    font-weight: 100;
    background-color: ${main};
    padding-right: 50px;
    padding-left: 50px;
  }`;


