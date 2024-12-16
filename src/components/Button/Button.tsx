import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';

function MuiButton(props) {
  const buttonColor = props.buttonColor || 'secondary';
  return (
    <Button {...props} sx={{fontFamily: 'Montserrat, sans-serif', borderRadius: '0px', fontWeight: '500',}} color={buttonColor}/>
  );
}

export default MuiButton;