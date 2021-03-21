import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const LogoContainer = styled.div`
`;

const ImageContainer = styled.div`
    position: absolute;
    top: 1rem;
    
`

function Logo(props) {
  return (
    <LogoContainer>
      <ImageContainer>
        <Image
          src="/images/Logo-Circular.png"
          height="60"
          width="60"
          alt="Kune logo"
        />
      </ImageContainer>
    </LogoContainer>
  );
}

export default Logo;
