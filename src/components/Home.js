import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Col } from "reactstrap";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h2>Hello from Home!</h2>
        <Col sm="6" className="app">
          <Card body>
            <CardTitle>
              <h3>Welcome to the Sing-up page!</h3>
            </CardTitle>
            <CardText>
              <p>
                We are planning to organize a petition in order to make out
                voice heard by the decision making body. First of all, we would
                like to extend our heart felt gratitude to you, and we will
                kindly invite you to fill in the given blank spaces by clicking
                the link below and go to the register page.
              </p>
            </CardText>
            <Button className="btn">
              <Link to="/register">Go to Register</Link>
            </Button>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Home;
