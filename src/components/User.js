import React, { Component } from "react";

export class User extends Component {
  render() {
    return (
      <div
        className="card  mt-3 mb-3 p-3"
        style={{ backgroundColor: "#618685" }}
      >
        <div className=" row">
          <div className="col-md-3">
            <img
              className="img-fluid rounded-circle"
              src={this.props.avatar_url}
              alt={this.props.login}
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-9">
            <h2>{this.props.login}</h2>
            <hr />
            <h6 className="mb-4">Type : {this.props.type}</h6>
            <a
              href={this.props.html_url}
              className="btn btn-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go Profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
