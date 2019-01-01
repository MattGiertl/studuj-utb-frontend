/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Paragraph from '../atoms/Paragraph';
import Layout from '../atoms/Layout';

class UniversityInfoTemplate extends Component {
  render() {
    const { info } = this.props;
    return (
      <PageLayoutWrapper
        header={
          <PageHeader
            backButton
            middle={
              <Paragraph fontWeight="bold">Univerzita Tomáše Bati</Paragraph>
            }
          />
        }
      >
        <Layout
          css={{ flexDirection: 'column', width: '100%', marginBottom: '50px' }}
        >
          {info}
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default UniversityInfoTemplate;
