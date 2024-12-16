import { useNavigate } from "react-router-dom";
import { FullWidthColumn, VibesHeaderLogo } from "./styles";
import { baseUrl } from "../../constants";

function Logo() {
    const navigate = useNavigate();
    const goToLocation = (location: string) => {
      navigate(location);
    };
  return (
    <FullWidthColumn                 onClick={() => {
        goToLocation(`${baseUrl}`);
      }}>
      <VibesHeaderLogo>Zugy</VibesHeaderLogo>
      <VibesHeaderLogo>Organizer</VibesHeaderLogo>
    </FullWidthColumn>
  );
}

export default Logo;
