import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class OtherTemplate extends Component {
  render() {
    return (
      <div>
        <h1>Other Page</h1>
        <p>This is another page</p>
        <NavLink to="/">Go Back</NavLink>
      </div>
    );
  }
}

export default OtherTemplate;
