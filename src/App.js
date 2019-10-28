import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Render from "./components/Render";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    let initialData;
    let currentData = localStorage.getItem("permanentData");
    let changingData = JSON.parse(currentData);
    if (changingData.length > 0) {
      initialData = changingData;
    } else {
      initialData = ["initialData"];
    }
    this.state = {
      Jacket: initialData
    };
  }

  firstOpe = (one, two, three, four) => {
    let myJacket = this.state.Jacket;
    let content = {
      first_name: one,
      last_name: two,
      email: three,
      profession: four
    };
    myJacket.push(content);
    this.setState(
      {
        Jacket: myJacket
      },
      () => {
        let data = JSON.stringify(this.state.Jacket);
        localStorage.setItem("permanentData", data);
      }
    );
  };
  render() {
    return (
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/render">Render</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route
              path="/register"
              render={() => <Register firstOpe={this.firstOpe} />}
            />
            <Route
              path="/render"
              render={() => <Render secondOpe={this.state.Jacket} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
