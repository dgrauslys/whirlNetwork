import React, { useState } from "react";
import {
  BigNoodle,
  SubHeaderText,
  TopDisplayText,
  Wrapper,
} from "../../constants";
import { FirstName, MenuBox, MenuContainer, WhiteMenu } from "./styles";
import { MenuItem, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { accent } from "../../../constants";
import ConsultationModal from "../../ConsultationModal/ConsultationModal";
//import Woof from './path4.svg';
import Woof from "../../../assets/images/path4.svg";
import { navItems } from "../constants";
import Logo from "../../Logo/Logo";

function NavBarMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const handleMenuClick = (location) => {
    setOpen(false);
    goToLocation(location);
  };

  const goToLocation = (location: string) => {
    console.log('woof', location);
    navigate(location);
  };
  return (
    <MenuContainer>
      <Logo/>
      <MenuBox>
        <ConsultationModal buttonTitle="Book Consult" title="Book a Consultation Call" />
        <WhiteMenu
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
            setOpen(!isOpen);
          }}
        />
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={isOpen}
          onClose={handleClose}
          onClick={handleClose}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: `${accent}`,
            },
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              onClick={() => {
                handleMenuClick(item.url);
              }}
            >
              <Typography>{item.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </MenuBox>
    </MenuContainer>
  );
}

export default NavBarMobile;
