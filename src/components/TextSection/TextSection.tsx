import React, { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { Copy, HeaderText } from "../constants";
import { mobileMargin } from "../../constants";


function TextSection({title, content}) {
  const isDesktop = useContext(DesktopContext);
  const alignType = isDesktop ? 'inherit' : 'center';
  const padding = isDesktop ? '0px' : mobileMargin;

  return (
    <>
        <HeaderText align={alignType}>{title}</HeaderText>
        <Copy padding={padding}>{content}</Copy>

    </>

  );
}

export default TextSection;