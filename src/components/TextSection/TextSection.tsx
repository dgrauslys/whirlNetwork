import React from "react";
import { Copy, HeaderText } from "../constants";


function TextSection({title, content}) {

  return (
    <>
        <HeaderText>{title}</HeaderText>
        <Copy>{content}</Copy>

    </>

  );
}

export default TextSection;