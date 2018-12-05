import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainPageTemplate extends Component {
  render() {
    return (
      <div>
        <h1>Main Page!</h1>
        <p>This is the main page!</p>
        <NavLink to="/other">Go to other page</NavLink>
      </div>
    );
  }
}

export default MainPageTemplate;
