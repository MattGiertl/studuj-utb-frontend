/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';

import Layout from '../atoms/Layout';
import PageHeader from '../organisms/PageHeader';

class MainPageTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper header={<PageHeader middle="Main"/>}>
        <Layout
          css={{ flexDirection: 'column', margin: '0 15px', marginTop: '10px' }}
        >
          <h1 css={{ margin: 0, padding: 0 }}>Ahoj</h1>
          <NavLink exact to="/other">
            Go to other page
          </NavLink>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default MainPageTemplate;
