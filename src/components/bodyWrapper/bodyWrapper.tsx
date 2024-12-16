import { useEffect, useState } from "react";
import { DesktopBody, MobileBody } from "./styles";
import { accent, baseUrl, main, minimumDesktopSize, secondary } from "../../constants";
import { DesktopContext } from "../../hooks/contexts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { black } from "../../constants";
import { white } from "../../constants";

export const BodyWrapper = (props) => {
  const { children } = props;
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > minimumDesktopSize
  );

  document.title = 'Zugy Organizer';

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
        main: `${main}`, // Optional: Customize the secondary color
      },
      text: {
        primary: `${black}`, // Replace with your desired primary text color
        secondary: `${secondary}`, // Replace with your desired secondary text color
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
