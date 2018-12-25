/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';

import Layout from '../atoms/Layout';
import PageHeader from '../organisms/PageHeader';
import WidgetContainer from '../organisms/WidgetContainer';
import UnderlinedHeading from '../molecules/UnderlinedHeading';

class MainPageTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper header={<PageHeader middle="Main" />}>
        <Layout
          css={{ flexDirection: 'column', margin: '0 12px', width: '100%' }}
        >
          <WidgetContainer />
          <UnderlinedHeading title="Proč studovat na UTB?" />
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default MainPageTemplate;
