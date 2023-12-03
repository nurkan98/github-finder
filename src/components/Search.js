import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }
  onChange = (e) => {
    this.setState({ keyword: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.keyword==="") {
      this.props.alertStats(true,"Please enter a text!","alert alert-warning");
    }
    this.props.searchUser(this.state.keyword);
    this.setState({ keyword: ''});

  };
  onClick = () => {
    this.props.removeData();
  }

  render() {
    return (
      <div className="container mt-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="keyword"
              placeholder="Search"
              value={this.state.keyword}
              className="form-control bg-white"
              onChange={this.onChange}
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="bi bi-search"></i>
            </button>
            <button className="btn btn-danger" type="button" onClick={this.onClick}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
