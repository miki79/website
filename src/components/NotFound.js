import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="titleNotFound">404</h1>
        <h2 className="subtitleNotFound">PAGE NOT FOUND</h2>
        <Link to="/">Return to Home Page</Link>
      </div>
    );
  }
}

export default NotFound;
