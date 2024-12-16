import React, { useEffect, useRef, useState } from "react";
import { BannerContainer, BannerText, ImageContainer } from "./styles";
import { HeaderText } from "../constants";

function Banner() {
  return (
    <BannerContainer>
      <ImageContainer>
        <BannerText>"Simplify, Organize, Thrive."</BannerText>
      </ImageContainer>
    </BannerContainer>
  );
}

export default Banner;
