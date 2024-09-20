import { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { Copy, HeaderText, Wrapper } from "../constants";
import { Grid } from "@mui/material";
import { SkillGrid } from "./styles";

function SkillSet({innerRef}) {
  const isDesktop = useContext(DesktopContext);
  return (
    <Wrapper ref={innerRef}>
      <HeaderText>SkillSet</HeaderText>
      <SkillGrid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <HeaderText>Frontend</HeaderText>
        </Grid>
        <Grid item xs={6}>
          <HeaderText>BackEnd</HeaderText>

        </Grid>
        <Grid item xs={6}>
        <Copy>TypeScript</Copy>
        </Grid>
        <Grid item xs={6}>
          <Copy>PHP</Copy>
        </Grid>
        <Grid item xs={6}>
        <Copy>React</Copy>
        </Grid>
        <Grid item xs={6}>
          <Copy>Perl</Copy>
        </Grid>
        <Grid item xs={6}>
        <Copy>JavaScript</Copy>
        </Grid>
        <Grid item xs={6}>
          <Copy>MySQL</Copy>
        </Grid>
        <Grid item xs={6}>
        <Copy>CSS3</Copy>
        </Grid>
        <Grid item xs={6}>
          <Copy>Python</Copy>
        </Grid>
        <Grid item xs={6}>
        <Copy>SCSS</Copy>
        </Grid>
        <Grid item xs={6}>
          <Copy></Copy>
        </Grid>
        <Grid item xs={6}>
        <Copy>Angular JS</Copy>
        </Grid>
        <Grid item xs={6}>
          <Copy></Copy>
        </Grid>
        
      </SkillGrid>
    </Wrapper>
  );
}

export default SkillSet;
