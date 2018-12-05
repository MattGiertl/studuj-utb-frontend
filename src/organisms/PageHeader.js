import React, { Component } from 'react';
import styled from '@emotion/styled';
import Layout from '../atoms/Layout';

class PageHeader extends Component {
  render() {
    const { left, middle, right, backButton, children } = this.props;
    return (
      <>
        <Layout
          css={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            fontSize: '1rem',
            flex: 1,
          }}
        >
          {left}
        </Layout>
        <Layout
          css={{
            display: 'flex',
            flex: 2,
            width: '100%',
            height: '100%',
            justifyContent: '100%',
            alignItems: 'center',
          }}
        >
          {middle}
        </Layout>
        <Layout
          css={{
            flex: 1,
            justifyContent: 'flex-end',
            marginRight: '1rem',
          }}
        >
          {right}
        </Layout>
        {children}
      </>
    );
  }
}

export default PageHeader;
