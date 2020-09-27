import React, { useState, useEffect } from "react";
import {
  Header,
  Grid,
  Transition,
  Container,
  Button,
  Icon,
  Image,
  Label,
} from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Apps() {
  const { id } = useParams();

  const [apps, setApps] = useState([]);

  const fetchData = async () => {
    const apiUrl = "http://localhost:3080/api/app/" + (id || "");
    const query = await axios(apiUrl);
    console.log(query.data);
    setApps(query.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (id) {
    return (
      <Transition transitionOnMount={true} animation="fade down" duration={200}>
        <Container style={{ paddingTop: "1.3em" }} textAlign="center">
          <Header as="h2" inverted textAlign="center">
            <Image
              circular
              src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
            />{" "}
            {apps.name}
          </Header>

          <Header sub inverted textAlign="center">
            Price
          </Header>
          <span style={{ color: "#fff", alignText: "center" }}>
            <Icon name="dollar"></Icon>
            {apps.price == 0 ? <>Free</> : <>{apps.price} USD</>}
          </span>

          <Header sub inverted textAlign="center">
            Upload Date
          </Header>
          <span style={{ color: "#fff", alignText: "center" }}>
            <Icon name="time"></Icon>
            {apps.createdAt}
          </span>

          <Header
            as="h5"
            inverted
            textAlign="center"
            style={{ paddingBottom: "2em" }}
          >
            App ID: {apps.id} - Category: <Label>Games</Label>
          </Header>
          <Container>
            <Button
              animated="vertical"
              inverted
              color="white"
              size="medium"
              style={{ verticalAlign: "unset" }}
            >
              <Button.Content hidden>
                {apps.price == 0 ? <>Free</> : <>{apps.price} USD</>}
              </Button.Content>
              <Button.Content visible>
                <Icon name="shop"></Icon>Buy
              </Button.Content>
            </Button>

            <Button inverted color="white" size="medium">
              <Button.Content>
                <Icon name="star"></Icon>Add to Wishlist
              </Button.Content>
            </Button>
            <div style={{ paddingTop: "2em" }}>
              <Button
                as={Link}
                to="/apps"
                icon
                labelPosition="left"
                basic
                inverted
                size="small"
              >
                <Icon name="arrow left" />
                All Apps
              </Button>
            </div>
          </Container>
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
            <Grid.Row columns={4}>
              {apps.map((app, index) => (
                <Grid.Column key={index} style={{ paddingBottom: "2em" }}>
                  <p className="gridContent">
                    <Link to={"/apps/" + app.id} className="gridLink">
                      {app.name}
                    </Link>
                  </p>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Container>
      </Transition>
    );
  }
}
