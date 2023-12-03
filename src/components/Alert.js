import React, { Component } from "react";

export class Alert extends Component {
    
  render() {
    return (
     
      <div className="container mt-3">
          <div className={this.props.alertType}>{this.props.alertMsg}</div>
      </div>
    )
  }
}

export default Alert;
