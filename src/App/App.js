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
import DesktopPage from '../pages/DesktopPage/DesktopPage';

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
  state = {
    isMobile: undefined,
  };

  isMobile = () =>
    navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

  componentWillMount() {
    const isMobile = this.isMobile();
    this.setState({ isMobile: isMobile });
  }

  render() {
    const { isMobile } = this.state;
    return isMobile ? <Routes /> : <DesktopPage />;
  }
}

export default App;
