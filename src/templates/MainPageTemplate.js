/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';

import Layout from '../atoms/Layout';
import PageHeader from '../organisms/PageHeader';
import Widget from '../molecules/Widget';

class MainPageTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper header={<PageHeader middle="Main" />}>
        <Layout
          css={{
            flexDirection: 'column',
            margin: '0 12px',
            marginTop: '10px',
            width: '100%',
          }}
        >
          <Widget count="10 000" title="Lorem Ipsum" />
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default MainPageTemplate;
