import React from "react";
import { Header, Grid, Transition } from "semantic-ui-react";
import { useParams } from "react-router-dom";

export default function Categories() {
  const { id } = useParams();

  if (id) {
    return (
      <Transition transitionOnMount={true} animation="fade up" duration={175}>
        <div>
          <Header as="h2" inverted textAlign="center">
            Category ID {id}
          </Header>
        </div>
      </Transition>
    );
  } else {
    return (
      <Transition transitionOnMount={true} animation="fade up" duration={175}>
        <div>
          <Header as="h2" inverted textAlign="center">
            All Categories
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
        </div>
      </Transition>
    );
  }
}
