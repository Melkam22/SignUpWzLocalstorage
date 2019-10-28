import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

class Render extends Component {
  deleteFunc = f => {
    let myDelete = this.props.secondOpe;
    myDelete.splice(f, 1);
    this.setState(
      {
        secondOpe: myDelete
      },
      () => {
        localStorage.setItem(
          "permanentData",
          JSON.stringify(this.props.secondOpe)
        );
      }
    );
  };

  render() {
    console.log(this.props);
    return (
      <div className="render">
        <h2>Hello from Render!</h2>
        <Table className="table">
          <thead>
            <tr className="given">
              <th>#</th>
              <th className="th">First Name</th>
              <th className="th">Last Name</th>
              <th className="th">Email</th>
              <th className="th">Profession</th>
            </tr>
          </thead>
          {this.props.secondOpe ? (
            <div>
              {this.props.secondOpe.map((item, f) => {
                return (
                  <tbody className="renderTable">
                    <tr className="result">
                      <th scope="row">{f + 1}</th>
                      <td className="td">{item.first_name}</td>
                      <td className="td">{item.last_name}</td>
                      <td className="td">{item.email}</td>
                      <td className="td">{item.profession}</td>
                    </tr>
                    <button class="delbtn" onClick={() => this.deleteFunc(f)}>
                      X
                    </button>
                  </tbody>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </Table>
        <button className="btn2">
          <Link to="/register">Go back to Register</Link>
        </button>
      </div>
    );
  }
}

export default Render;
