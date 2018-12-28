/** @jsx jsx */
import { jsx } from '@emotion/core';

// eslint-disable-next-line
import React, { Component } from 'react';

import Ribbon from '../atoms/Ribbon';
import Layout from '../atoms/Layout';

class PageHeader extends Component {
  backButtonClickedHandler = () => window.history.back();

  render() {
    const { backButton, left, middle, right, children } = this.props;
    return (
      <>
        <Ribbon orange>
          <Layout
            css={{
              alignItems: 'center',
              height: '100%',
              fontSize: '1rem',
              flex: 1,
              justifyContent: 'flex-start',
              paddingLeft: '0.5rem',
              marginRight: 'auto',
            }}
          >
            {backButton ? (
              <Layout
                onClick={this.backButtonClickedHandler}
                css={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                Back
              </Layout>
            ) : (
              left
            )}
          </Layout>
          <Layout css={{ flex: 2, justifyContent: 'center', fontSize: '1rem' }}>
            {middle}
          </Layout>
          <Layout
            css={{ flex: 1, justifyContent: 'flex-end', marginRight: '1rem' }}
          >
            {right}
          </Layout>
        </Ribbon>
        {children}
      </>
    );
  }
}

export default PageHeader;
