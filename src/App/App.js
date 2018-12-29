/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import Routes from './Routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUniversity,
  faBook,
  faUserGraduate,
  faImages,
  faUtensils,
  faChevronLeft,
  faChevronDown,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUniversity,
  faBook,
  faUserGraduate,
  faImages,
  faUtensils,
  faChevronLeft,
  faChevronDown,
  faInfoCircle,
);

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;
