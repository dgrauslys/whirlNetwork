import CardContainer from "../../../components/CardContainer/CardContainer";
import { Copy, SuperHeaderText } from "../../../components/constants";
import { CardContentWrapper } from "../../styles/home";
import { FullWidthColumn, ImageContainer } from "./styles";

function MobileAboutTab() {
  return (
    <FullWidthColumn>
        
                      <CardContainer>
                <CardContentWrapper>
                  <SuperHeaderText>Meet Zugy</SuperHeaderText>
                  <ImageContainer imageName="woman1.jpg"></ImageContainer>
                  <Copy>
                    Zugy is a dedicated and compassionate Professional Organizer
                    with a mission to transform homes and lives through tailored
                    organizational solutions. With a personalized approach, Zugy
                    understands that every client and space is unique, actively
                    listening to your goals and concerns to craft systems that
                    truly work for your lifestyle.
                  </Copy>
                </CardContentWrapper>
              </CardContainer>
              

              <CardContainer>
                <CardContentWrapper>
                  <SuperHeaderText>
                    Transforming Spaces with Care and Expertise
                  </SuperHeaderText>
                  <ImageContainer imageName="woman2.jpg"></ImageContainer>
                  <Copy>
                    Known for a gentle, non-judgmental process, Zugy brings
                    respect, confidentiality, and kindness to every project,
                    meeting clients where they are and fostering positive,
                    lasting change. Whether you’re seeking to reclaim precious
                    free time, restore peace and serenity in your home, or learn
                    sustainable organizing techniques, Zugy provides expert
                    guidance and efficient systems to make your vision a
                    reality.
                  </Copy>
                </CardContentWrapper>
              </CardContainer>
              

              <CardContainer>
                <CardContentWrapper>
                  <SuperHeaderText>Creating a Harmonious Home</SuperHeaderText>
                  <ImageContainer imageName="woman3.jpg"></ImageContainer>
                  <Copy>
                    From decluttering and categorizing to creating customized
                    labels and taking donation loads, Zugy is committed to
                    delivering results-driven organization that saves time and
                    energy while ensuring lasting impact. With services ranging
                    from foundational packages to premium solutions, Zugy offers
                    support at every level, empowering clients to create
                    harmonious, organized spaces where they can unwind,
                    recharge, and focus on what truly matters.
                  </Copy>
                </CardContentWrapper>
              </CardContainer>
    </FullWidthColumn>
  );
}

export default MobileAboutTab;
