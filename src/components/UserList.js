import React, { Component } from "react";
import User from "./User";
import Loading from "./Loading";

export class UserList extends Component {
  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <>
        <div className="container">
          <div className="row">
            {this.props.users.map((user) => (
              <div className="col-md-6 ">
                <User
                  key={user.id}
                  avatar_url={user.avatar_url}
                  login={user.login}
                  html_url={user.html_url}
                  type={user.type}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default UserList;
