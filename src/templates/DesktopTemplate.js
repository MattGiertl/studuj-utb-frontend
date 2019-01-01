/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line
import React, { Component } from 'react';
import Paragraph from '../atoms/Paragraph';
import Layout from '../atoms/Layout';

const backgroundImage = require('../pages/DesktopPage/utb-background.jpg');

class DesktopTemplate extends Component {
  render() {
    return (
      <Layout
        css={{
          height: '100vh',
          margin: 0,
          padding: 0,
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Paragraph textAlign="center" fontSize="3.5rem">
          Tato aplikace je pouze dostupná z mobilních zařízení.
        </Paragraph>
      </Layout>
    );
  }
}

export default DesktopTemplate;
