import { useState } from "react";
import { BigNoodle, Wrapper } from "../../constants";
import { FirstName, Menu, WhiteMenu } from "./styles";
import { MenuItem } from "@mui/material";


function NavBarMobile() {
  const [open, setOpen] = useState(
    false
  );
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
          <WhiteMenu onClick={() => {setOpen(true)}}/>
          <Menu
            open={true}

      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </>
  )
}

export default NavBarMobile
