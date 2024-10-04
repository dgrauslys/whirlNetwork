import { useContext, useEffect, useState } from "react";
import {
  Copy,
  CopyAccent,
  HeaderText,
  TopDisplayText,
  TopText,
  Wrapper,
} from "../constants";
import {
  NameWrapper,
  TitleWrapper,
  Dedicated,
  Creative,
  TopWrapper,
  TextWrapper,
  ImageWrapper,
  TextBacking,
  TopImage,
  TopWrapperMobile,
  DisplayTextWrapper,
} from "./styles";
import { DesktopContext } from "../../hooks/contexts";

function TopDisplay() {
  const isDesktop = useContext(DesktopContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(window.innerWidth);
  const [isSmallTablet, setIsSmallTablet] = useState(false);

  const calcOffset = (width: number) => {
    console.log(width);
    if (width < 1020) {
      const value = (width * (168/1536)) - 100;
      setOffset(value);
      setIsSmallTablet(true);
    } else {
      const value = width * (168/1536);
      setOffset(value);
      setIsSmallTablet(false);
    }

    
  };

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
          calcOffset(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
  return (
    <>
      {isDesktop ? (
        <TopWrapper>
          {!isSmallTablet && (
          <DisplayTextWrapper offset={offset}>
          <TopDisplayText>WHIRL</TopDisplayText>
          <HeaderText>Women helping in real life</HeaderText>
          </DisplayTextWrapper>
          )}
        </TopWrapper>
      ) : (
        <TopWrapperMobile />
      )}
    </>
  );
}

export default TopDisplay;
