/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';

import Layout from '../atoms/Layout';
import PageHeader from '../organisms/PageHeader';
import WidgetContainer from '../organisms/WidgetContainer';

class MainPageTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper header={<PageHeader middle="Main" />}>
        <WidgetContainer />
      </PageLayoutWrapper>
    );
  }
}

export default MainPageTemplate;
