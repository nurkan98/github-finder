import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <i className={this.props.icon}></i> {this.props.text}
          </a>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  text: "Abooo",
  icon: "bi bi-pencil",
};

export default Navbar;
