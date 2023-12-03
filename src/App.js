import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Alert from "./components/Alert";
import React, { Component } from "react";
import Search from "./components/Search";
import axios from "axios";

export class App extends Component {
  constructor(users) {
    super(users);

    this.state = {
      users: [],
      loading: false,
      alertIsVisible: false,
      alertMsg: null,
      alertType: null,
    };
  }

  searchUser = (keyword) => {
    this.setState({ users: [] });
    this.setState({ loading: true });
    axios("https://api.github.com/search/users?q=" + keyword)
      .then((res) => this.setState({ users: res.data.items }))
      .finally(() => this.setState({ loading: false }))
      .catch((e) =>
        e.response.status === 422
          ? this.alertStats(true, "Please enter a text!", "alert alert-warning")
          : this.alertStats(true, e, "alert alert-danger")
      );
  };
  removeData = (keyword) => {
    this.setState({ users: [] });
  };
  alertStats = (stats, msg, type) => {
    this.setState({ alertIsVisible: stats });
    this.setState({ alertMsg: msg });
    this.setState({ alertType: type });

    setTimeout(() => {
      this.setState({ alertIsVisible: false });
    }, 3000);
  };
  render() {
    return (
      <div>
        <Navbar text="Github Finder" icon="bi bi-github" />
        <Search
          alertStats={this.alertStats}
          searchUser={this.searchUser}
          removeData={this.removeData}
        />
        {this.state.alertIsVisible && (
          <Alert
            alertMsg={this.state.alertMsg}
            alertType={this.state.alertType}
          />
        )}
        <UserList users={this.state.users} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
