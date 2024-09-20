import { useEffect, useState } from "react";
import { DesktopBody, MobileBody } from "./styles";
import { accent, minimumDesktopSize, secondary } from "../../constants";
import { DesktopContext } from "../../hooks/contexts";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const BodyWrapper = (props) => {
  const { children } = props;
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > minimumDesktopSize
  );

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > minimumDesktopSize);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: `${accent}`, // Change this to your desired primary color
      },
      secondary: {
        main: `${secondary}`, // Optional: Customize the secondary color
      },
    },
  });

  return (
    <DesktopContext.Provider value={isDesktop}>
      <ThemeProvider theme={theme}>
        {isDesktop ? (
          <DesktopBody>{children}</DesktopBody>
        ) : (
          <MobileBody>{children}</MobileBody>
        )}
      </ThemeProvider>
    </DesktopContext.Provider>
  );
};
