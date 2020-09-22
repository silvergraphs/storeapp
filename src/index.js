import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
/* import * as serviceWorker from "./serviceWorker"; */
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    {/*     <Container style={{ padding: "3.5em 0em 1em 0em" }}>
      <Header as="h2" icon inverted textAlign="center">
        ¡Something is wrong!
      </Header>
      <Header as="h3" icon inverted textAlign="center">
        Cannot establish database connection
      </Header>
    </Container> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister(); */
