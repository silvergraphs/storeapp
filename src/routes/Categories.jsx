import React, { useState, useEffect } from "react";
import { Header, Grid, Transition, Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Categories() {
  const { id } = useParams();

  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const apiUrl = "http://localhost:3080/api/category/" + (id || "");
    const query = await axios(apiUrl);
    console.log(query.data);
    setCategories(query.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (id) {
    return (
      <Transition transitionOnMount={true} animation="fade up" duration={175}>
        <Container style={{ paddingTop: "1.3em" }}>
          <Header as="h2" inverted textAlign="center">
            Category ID {id}
          </Header>
        </Container>
      </Transition>
    );
  } else {
    return (
      <Transition transitionOnMount={true} animation="fade up" duration={175}>
        <Container style={{ paddingTop: "1.3em" }}>
          <Header as="h2" inverted textAlign="center">
            All Categories
          </Header>
          <Grid textAlign="center">
            <Grid.Row columns={4}>
              {categories.map((category, index) => (
                <Grid.Column key={index} style={{ paddingBottom: "2em" }}>
                  <p className="gridContent">{category.name}</p>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Container>
      </Transition>
    );
  }
}
