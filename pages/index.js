import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import HomeHeader from "../components/header/HomeHeader";
import styled from "styled-components";

const HomeContainer = styled.div`
`

export default function Index(props) {

  console.log(props);
  return (
    <Container maxWidth="sm">
      <HomeContainer>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Kune festival
          </Typography>
          <HomeHeader />
          <h1>Home</h1>
          <ProTip />
          <Copyright />
        </Box>
      </HomeContainer>
    </Container>
  );
}
