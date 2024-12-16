import React, { useContext } from "react";
import styled from "styled-components";
import { baseUrl, imgUrl } from "../../constants";
import { DesktopContext } from "../../hooks/contexts";

const ImageContainer = styled.div`
  position: relative;
  width: 100%; /* Adjust width as needed */
  height: 250px; /* Adjust height as needed */
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.isHover ? 0 : 1)};
`;

const HoverNote = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  z-index: 10;
  pointer-events: none; /* Prevents interference with hover events */
`;

const HoverImage = ({ originalImage, hoverImage }) => {
  const [isHover, setIsHover] = React.useState(false);
  const originalUrl = `${imgUrl}${originalImage}`;
  const hoverUrl = `${imgUrl}${hoverImage}`;
  const isDesktop = useContext(DesktopContext)
  const actionWord = isDesktop ? 'Hover' : 'Tap';


  return (
    <ImageContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <HoverNote>{actionWord} to see before</HoverNote>
      <Image src={originalUrl} alt="Original" isHover={isHover} />
      <Image src={hoverUrl} alt="Hover" isHover={!isHover} />
    </ImageContainer>
  );
};

export default HoverImage;
