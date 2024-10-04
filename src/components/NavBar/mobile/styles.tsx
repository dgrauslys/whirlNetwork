import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import { white } from "../../../constants";
import { accent } from "../../../constants";
import { black } from "../../../constants";
import { mobileMargin } from "../../../constants";
import { TopDisplayText } from "../../constants";

export const Logo = styled.img`
    width: 50px;
    position: relative;
    top: -8px;
`;

export const FirstName = styled.div`
    float: left;
`;

export const Menu = styled.div`
    float: right;
    margin-right: 15px;
`;

export const WhiteMenu = styled(MenuIcon)({
    '&.MuiSvgIcon-root': {
    color: `${black}`,
    }
  })

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: ${mobileMargin};
  padding-left: ${mobileMargin};

    & > ${TopDisplayText} {
    font-size: 24px;
  }
`;

