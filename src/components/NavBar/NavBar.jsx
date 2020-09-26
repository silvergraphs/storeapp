import React from "react";
import { Container, Menu } from "semantic-ui-react";

/* React Router */
import { Link, NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = React.useState(location.pathname);

  React.useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <Menu.Item
        as={Link}
        to="/home"
        name="Home"
        active={activeItem === "/" || activeItem === "/home"}
      />
      <Menu.Item
        as={NavLink}
        to="/apps"
        name="Applications"
        active={activeItem === "/apps"}
      />
      <Menu.Item
        as={NavLink}
        to="/categories"
        name="Categories"
        active={activeItem === "/categories"}
      />
      {/*    </Menu> */}
    </Container>
  );
}
