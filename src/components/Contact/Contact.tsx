import { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { HeaderText, Wrapper } from "../constants";
import { Grid } from "@mui/material";

function Contact() {
  const isDesktop = useContext(DesktopContext);

  return (
    <Wrapper>
      <HeaderText>Contact</HeaderText>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "50%" }}
      >
        <HeaderText>Email: url</HeaderText>
        <HeaderText>Fiverr: url</HeaderText>
        <HeaderText>UpWork: url</HeaderText>
        <HeaderText>PeoplePerHour: url</HeaderText>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "50%" }}
      >
        <HeaderText>Email: url</HeaderText>
        <HeaderText>Fiverr: url</HeaderText>
        <HeaderText>UpWork: url</HeaderText>
        <HeaderText>PeoplePerHour: url</HeaderText>
      </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Contact;
