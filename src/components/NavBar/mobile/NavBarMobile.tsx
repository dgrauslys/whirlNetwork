import React, { useState } from "react";
import { BigNoodle, Wrapper } from "../../constants";
import { FirstName, Menu, WhiteMenu } from "./styles";
import { MenuItem } from "@mui/material";


function NavBarMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setOpen] = useState(
    false
  );
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
          <WhiteMenu onClick={() => {console.log('woot'); setOpen(!isOpen);}}/>
          <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={isOpen}
                    onClose={handleClose}
                    onClick={handleClose}
          >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Members</MenuItem>
        <MenuItem onClick={handleClose}>About Us</MenuItem>
        <MenuItem onClick={handleClose}>Events</MenuItem>
      </Menu>
      </>
  )
}

export default NavBarMobile
