import React from "react";
import { Header, Grid, Transition, Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";

export default function Apps() {
  const { id } = useParams();

  if (id) {
    return (
      <Transition transitionOnMount={true} animation="fade up" duration={175}>
        <Container style={{ paddingTop: "1.3em" }}>
          <Header as="h2" inverted textAlign="center">
            App ID {id}
          </Header>
        </Container>
      </Transition>
    );
  } else {
    return (
      <Transition transitionOnMount={true} animation="fade up" duration={175}>
        <Container style={{ paddingTop: "1.3em" }}>
          <Header as="h2" inverted textAlign="center">
            All Apps
          </Header>
          <Grid>
            <Grid.Row columns={5}>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Transition>
    );
  }
}
