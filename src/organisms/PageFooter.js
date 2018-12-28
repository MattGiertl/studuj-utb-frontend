// eslint-disable-next-line
import React, { Component } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import TabBar from './Tabbar';
import TabBarItem from '../molecules/TabBarItem';

class PageFooter extends Component {
  render() {
    // const isIphoneX = isIos() && isIphoneXDisplay();
    const { children } = this.props;
    return (
      <>
        {children}
        <TabBar>
          <TabBarItem
            label="Univerzita"
            icon="university"
            exact
            to="/"
            id="homeTab"
          />
          <TabBarItem
            label="Studium"
            icon="user-graduate"
            id="calendarTab"
            to="/other"
          />
          <TabBarItem to="/stuff" label="Knihovna" icon="book" id="moreTab" />
        </TabBar>
      </>
    );
  }
}

export default PageFooter;
