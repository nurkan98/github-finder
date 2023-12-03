import React, { Component } from "react";

export class Loading extends Component {
  render() {
    return (
      <div className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
    );
  }
}

export default Loading;
