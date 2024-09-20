import { Copy, CopyAccent, TopText, Wrapper } from "../constants";
import { NameWrapper, TitleWrapper, Dedicated, Creative, TopWrapper, TextWrapper, ImageWrapper, TextBacking, TopImage } from "./styles";

function TopDisplay() {
  return (
    <TopWrapper>
              <TextBacking>

        <TextWrapper>

          <NameWrapper><TopText align="left">WHIRL</TopText></NameWrapper>
          <CopyAccent align="left">
            Releationship Based Networking
          </CopyAccent>
          <TitleWrapper>
          <TopText align="left">Women In Real Life</TopText>
          </TitleWrapper>
        </TextWrapper>
        </TextBacking>
        <TopImage />

    </TopWrapper>
  );
}

export default TopDisplay;
