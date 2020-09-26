import React from "react";
import { Dropdown, Icon, Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Logg() {
  const [visible, setVisibility] = React.useState(false);

  return (
    <>
      {" "}
      <Dropdown
        text="User Panel&nbsp;"
        pointing
        className="link item"
        icon="user circle outline"
        onOpen={() => {
          setVisibility(!visible);
        }}
        onClose={() => {
          setVisibility(!visible);
        }}
      >
        <Transition.Group animation="drop" duration={287}>
          {visible && (
            <Dropdown.Menu>
              <Dropdown.Header>My Account</Dropdown.Header>
              <Dropdown.Item as={Link} to="/home">
                Change Password
              </Dropdown.Item>
              <Dropdown.Item>Change Email</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Store</Dropdown.Header>
              <Dropdown.Item>My Apps</Dropdown.Item>
              <Dropdown.Item>Upload</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Icon name="sign out alternate"></Icon>Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          )}
        </Transition.Group>
      </Dropdown>
    </>
  );
}
