import React from "react";
import Link from "next/link";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import ContentContainer from "./containers/ContentContainer";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenusContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`

function Navbar(props) {
  return (
    <ContentContainer>
      <NavContainer >
        <Logo />
        <MenusContainer display="flex">
          <NavMenu
            menuHeadline="About"
            submenusArr={[
              { title: "Vision", link: "/vision" },
              { title: "Who we are", link: "/who-we-are" },
              { title: "Principles", link: "/principles" },
              { title: "Island", link: "/island" },
            ]}
          ></NavMenu>
          <NavMenu
            menuHeadline="Practical"
            submenusArr={[
              { title: "Practical info", link: "/practical" },
              { title: "Location", link: "/location" },
              { title: "Accommodation", link: "/accommodation" },
              { title: "FAQ", link: "/faq" },
              { title: "Map", link: "/map" },
            ]}
          ></NavMenu>
          <NavMenu menuHeadline="Contact" submenusArr={[]}></NavMenu>
          <NavMenu menuHeadline="Ticket" submenusArr={[]}></NavMenu>
          <NavMenu
            menuHeadline="Program"
            submenusArr={[
              { title: "Music", link: "/music" },
              { title: "Art", link: "/art" },
              { title: "Hangout", link: "/hangout" },
            ]}
          ></NavMenu>
          <NavMenu menuHeadline="Gallery" submenusArr={[]}></NavMenu>
        </MenusContainer>
      </NavContainer>
    </ContentContainer>
  );
}

export default Navbar;
