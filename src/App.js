import React from "react";
import { Container, Divider, Header, Icon, Menu } from "semantic-ui-react";

/* Importing components */
import UserCp from "./components/NavBar/UserCp";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Logg from "./components/Logg";

/* React Router */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./routes/Home";
import Apps from "./routes/Apps";
import Categories from "./routes/Categories";

function App() {
  const fixed = false;
  return (
    <Router>
      <Container>
        {/* Page Header */}
        <Container style={{ padding: "3.5em 0em 1em 0em" }}>
          <Header as="h2" icon inverted textAlign="center">
            <Icon name="google play" />
            Store App
            <Header.Subheader>
              This application tries to imitate an Application Store, showing a
              list of applications and categories, where you can register as a
              user or developer.
            </Header.Subheader>
          </Header>
          <Menu
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            stackable
            style={{ marginTop: "20px" }}
          >
            <NavBar></NavBar>
            {/* <Logg></Logg> */}
            <UserCp></UserCp>
          </Menu>
          <Divider />
        </Container>

        {/* React Router Dynamic Content */}
        <Switch>
          <Route path="/" exact component={() => <Home />} />

          <Route path="/home" exact component={() => <Home />} />

          <Route path="/apps" exact component={() => <Apps />} />

          <Route path="/apps/:id" exact component={() => <Apps />} />

          <Route path="/categories" exact component={() => <Categories />} />

          <Route
            path="/categories/:id"
            exact
            component={() => <Categories />}
          />

          {/* Error 404 */}
          <Route
            exact
            render={() => (
              <Error
                errorCode="404"
                errorMsg="Sorry, the page you visited does not exist."
              />
            )}
          />
        </Switch>

        <Footer></Footer>
      </Container>
    </Router>
  );
}

export default App;
