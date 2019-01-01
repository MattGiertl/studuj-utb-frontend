// eslint-disable-next-line
import React, { Component } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import TabBar from './Tabbar';
import TabBarItem from '../molecules/TabBarItem';
import { isIos, isIphoneXDisplay, isInStandaloneMode } from '../utils/utils';

class PageFooter extends Component {
  state = {
    isX: undefined,
  };

  componentWillMount() {
    const isX = isIos() && isIphoneXDisplay() && isInStandaloneMode();
    this.setState({ isX: isX });
  }

  render() {
    const { children } = this.props;
    const { isX } = this.state;
    return (
      <>
        {children}
        <TabBar bordered addPadding={isX}>
          <TabBarItem
            label="Univerzita"
            icon="university"
            exact
            to="/"
            id="homeTab"
          />
          <TabBarItem
            bordered="true"
            label="Studium"
            icon="user-graduate"
            id="calendarTab"
            to="/studium"
          />
          <TabBarItem
            to="/knihovna"
            label="Knihovna"
            icon="book"
            id="moreTab"
          />
        </TabBar>
      </>
    );
  }
}

export default PageFooter;
