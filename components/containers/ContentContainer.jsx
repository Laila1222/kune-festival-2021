import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ContentContainerComp = styled.div`
  width: 85%;
  margin: 2rem auto;
`;

function ContentContainer({ children }) {
  return <ContentContainerComp>{children}</ContentContainerComp>;
}

export default ContentContainer;
