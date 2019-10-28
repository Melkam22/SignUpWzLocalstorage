import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Label } from "reactstrap";

class Register extends Component {
  state = {
    first_name: [],
    last_name: [],
    email: [],
    profession: []
  };
  handleFirst_name = e => {
    this.setState({
      first_name: e.target.value
    });
  };
  handleLast_name = e => {
    this.setState({
      last_name: e.target.value
    });
  };
  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleProfession = e => {
    this.setState({
      profession: e.target.value
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <h2>Hello from Register!</h2>
          <div>
            <Label for="firsName">FirstName: </Label>
            <input
              type="text"
              placeholder="put your name here"
              onChange={this.handleFirst_name}
            />
          </div>
          <div>
            <Label for="lastName">LastName: </Label>
            <input
              type="text"
              placeholder="put your last-name here"
              onChange={this.handleLast_name}
            />
          </div>
          <div>
            <Label for="email">Email: </Label>
            <input
              type="text"
              placeholder="put your email here"
              onChange={this.handleEmail}
            />
          </div>
          <div>
            <Label for="profession">Profession: </Label>
            <input
              type="text"
              placeholder="put your profession here"
              onChange={this.handleProfession}
            />
          </div>
          <Button
            onClick={() =>
              this.props.firstOpe(
                this.state.first_name,
                this.state.last_name,
                this.state.email,
                this.state.profession
              )
            }
          >
            Submit
          </Button>
        </form>

        <Link to="/render">Go to Render</Link>
      </div>
    );
  }
}

export default Register;
