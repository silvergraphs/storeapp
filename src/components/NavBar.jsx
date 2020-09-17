import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";

/* React Router */
import { Link, NavLink } from "react-router-dom";

export default function NavBar(props) {
  const [activeItem, setActiveItem] = React.useState(window.location.pathname);

  return (
    <Container>
      <Menu.Item
        as={Link}
        to="/"
        name="Home"
        active={activeItem === "/"}
        onClick={() => {
          setActiveItem("/");
          console.log(activeItem);
        }}
      />
      <Menu.Item
        as={Link}
        to="/apps"
        name="Applications"
        active={activeItem === "/apps"}
        onClick={() => {
          setActiveItem("/apps");
          console.log(activeItem);
        }}
      />
      <Menu.Item
        as={Link}
        to="/categories"
        name="Categories"
        active={activeItem === "/categories"}
        onClick={() => {
          setActiveItem("/categories");
          console.log(activeItem);
        }}
      />
    </Container>
  );
}
