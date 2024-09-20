import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import { white } from "../../../constants";

export const FirstName = styled.div`
    float: left;
`;

export const Menu = styled.div`
    float: right;
    margin-right: 15px;
`;

export const WhiteMenu = styled(MenuIcon)({
    '&.MuiSvgIcon-root': {
    color: `${white}`,
    }
  })

