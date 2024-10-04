import React, { useState } from "react";
import { BigNoodle, SubHeaderText, TopDisplayText, Wrapper } from "../../constants";
import { FirstName, Logo, MenuContainer, WhiteMenu } from "./styles";
import { MenuItem, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { accent } from "../../../constants";
//import Woof from './path4.svg';
import Woof from '../../../assets/images/path4.svg';




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
    navigate(location);
  };
  return (
    <MenuContainer>
      <TopDisplayText>WHIRL</TopDisplayText>
      <>
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
          <MenuItem
            onClick={() => {
              handleMenuClick("/whirlNetwork");
            }}
          >
            <SubHeaderText>Home</SubHeaderText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClick("/whirlNetwork/members");
            }}
          >
            <SubHeaderText>Members</SubHeaderText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClick("/whirlNetwork/aboutus");
            }}
          >
            <SubHeaderText>About Us</SubHeaderText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClick("/whirlNetwork/events");
            }}
          >
            <SubHeaderText>Events</SubHeaderText>
          </MenuItem>
        </Menu>
      </>
    </MenuContainer>
  );
}

export default NavBarMobile;
