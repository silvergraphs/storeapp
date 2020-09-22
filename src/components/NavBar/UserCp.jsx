import React from "react";
import {} from "semantic-ui-react";
import { Button, Container, Menu, Modal, Form } from "semantic-ui-react";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

export default function UserCp() {
  const fixed = false;

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  return (
    <Container>
      <Menu.Item position="right" style={{ marginTop: "20px" }}>
        <Button as="a" inverted={!fixed}>
          Log in
        </Button>
        <Button
          as="a"
          inverted={!fixed}
          primary={fixed}
          style={{ marginLeft: "0.5em" }}
          onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
        >
          Sign Up
        </Button>
      </Menu.Item>

      {/* Modal */}
      <div>
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={() => dispatch({ type: "CLOSE_MODAL" })}
        >
          <Modal.Header>Sign Up</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
              />

              <Button content="Login" primary />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              align="center"
              onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            >
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </Container>
  );
}
