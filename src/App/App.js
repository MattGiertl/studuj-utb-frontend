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
  faChevronRight,
  faChevronUp,
  faChevronDown,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(
  fab,
  faUniversity,
  faBook,
  faUserGraduate,
  faImages,
  faUtensils,
  faChevronLeft,
  faChevronDown,
  faInfoCircle,
  faChevronRight,
  faChevronUp,
);

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;
