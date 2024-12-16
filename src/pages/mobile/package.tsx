import { ExpandMoreOutlined } from "@mui/icons-material";
import CardContainer from "../../components/CardContainer/CardContainer";
import {
  Copy,
  Label,
  SmallCopy,
  SmallHeaderText,
  SubHeaderText,
  SuperHeaderText,
} from "../../components/constants";
import HoverImage from "../../components/HoverImage/HoverImage";
import { FullWidthColumn, HoverImageWrapper } from "./styles";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import { services } from "../constants";
import { useLocation } from "react-router-dom";
import SiteSection from "../../components/SiteBlock/SiteBlock";
import ConsultationModal from "../../components/ConsultationModal/ConsultationModal";
import { ColumnCenterContainerBase } from "../styles/main";
import { Button } from "../../components/Button";

function MobilePackage() {
  const useQuery = () => {
    const { search } = useLocation();
    return new URLSearchParams(search);
  };
  const query = useQuery();
  const packageValue = query.get("version");
  const service = services[packageValue];
  const modalButtonTitle = `Book Service: ${service.price}`;
  const modalTitle = `Book ${service.title}: ${service.buttonTitle}`;
  return (
    <SiteSection>
      <CardContainer>
        <SuperHeaderText>{service.buttonTitle}</SuperHeaderText>

        <List>
          {service.propertiesElaborated.map((property, index) => (
            <ListItem>
              <ListItemText>
                <SmallHeaderText sx={{ marginBottom: "5px" }}>
                  {service.properties[index]}
                </SmallHeaderText>
                <SmallCopy>{property}</SmallCopy>
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <ConsultationModal buttonTitle={modalButtonTitle} title={modalTitle} isFullWidth={true} />
      </CardContainer>
    </SiteSection>
  );
}

export default MobilePackage;
