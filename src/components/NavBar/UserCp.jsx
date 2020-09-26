import React from "react";
import {} from "semantic-ui-react";
import { Button, Container, Menu, Modal, Transition } from "semantic-ui-react";

import Login from "./Login";
import Register from "./Register";

function Reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer, status: action.status };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

export default function UserCp() {
  const fixed = false;

  const [state, dispatch] = React.useReducer(Reducer, {
    open: false,
    dimmer: undefined,
    status: false,
  });
  const { open, dimmer } = state;

  return (
    <Container>
      <Menu.Item position="right" style={{ marginTop: "20px" }}>
        <Button
          as="a"
          inverted={!fixed}
          primary={fixed}
          style={{ marginLeft: "0.5em" }}
          onClick={() =>
            dispatch({
              type: "OPEN_MODAL",
              dimmer: "blurring",
              status: "login",
            })
          }
        >
          Log In
        </Button>
        <Button
          as="a"
          inverted={!fixed}
          primary={fixed}
          style={{ marginLeft: "0.5em" }}
          onClick={() =>
            dispatch({
              type: "OPEN_MODAL",
              dimmer: "blurring",
              status: "register",
            })
          }
        >
          Sign Up
        </Button>
      </Menu.Item>

      {/* Modal */}

      <div>
        <Transition.Group animation="fade" duration={257}>
          {open && (
            <Modal
              dimmer={dimmer}
              open={open}
              onClose={() => dispatch({ type: "CLOSE_MODAL" })}
              size="tiny"
            >
              <Modal.Header>
                {state.status === "login" ? "Log In" : "Register"}
              </Modal.Header>

              <Modal.Content>
                {state.status === "login" ? (
                  <Login></Login>
                ) : (
                  <Register></Register>
                )}
              </Modal.Content>
            </Modal>
          )}
        </Transition.Group>
      </div>
    </Container>
  );
}
