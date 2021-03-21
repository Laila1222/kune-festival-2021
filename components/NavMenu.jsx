import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  &: hover .submenus {
    display: block;
  } ;
`;

const MenuHeadline = styled(Typography)`
  cursor: ${(props) => (props.clickable === "true" ? "pointer" : "default")};
`;

const Submenus = styled.div.attrs((props) => ({
  className: props.customclassname,
}))`
  display: none;
  cursor: pointer;
  position: absolute;
`;

const Submenu = styled(Typography)``;

function NavMenu({ menuHeadline, submenusArr }) {
  return (
    <MenuContainer>
      <MenuHeadline
        variant="h6"
        clickable={submenusArr.length > 0 ? "false" : "true"}
      >
        {menuHeadline}
      </MenuHeadline>
      <Submenus customclassname="submenus">
        {submenusArr.length > 0 && (
          <React.Fragment>
            {" "}
            {submenusArr.map((menu) => (
              <Submenu key={menu.title} variant="h6">
                {menu.title}
              </Submenu>
            ))}
          </React.Fragment>
        )}
      </Submenus>
    </MenuContainer>
  );
}

export default NavMenu;
