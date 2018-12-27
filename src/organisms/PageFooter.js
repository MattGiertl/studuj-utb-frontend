/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Component } from 'react';
import TabBar from './Tabbar';

class PageFooterBase extends Component {
  render() {
    // const isIphoneX = isIos() && isIphoneXDisplay();
    const { children } = this.props;
    return (
      <>
        {children}
        <TabBar paddingBottom={isIphoneX ? '20' : '0'} xl={isIphoneX}>
          <TabBarItem
            label="Lorem"
            icon="home"
            exact
            to="/"
            id="homeTab"
          />
          <TabBarItem
            label="Ipsum"
            icon="calendar"
            to={calendarLinkTo}
            id="calendarTab"
          />
          <TabBarItem
            to="Dolor"
            label={intl.formatMessage(messages.moreParagraph)}
            icon="more"
            id="moreTab"
          />
        </TabBar>
      </>
    );
  }
}
