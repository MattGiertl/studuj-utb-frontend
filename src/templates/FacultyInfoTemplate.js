/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Paragraph from '../atoms/Paragraph';
import BackgroundHeading from '../molecules/BackgroundHeading';
import Layout from '../atoms/Layout';
import UnderlinedHeading from '../molecules/UnderlinedHeading';

class FacultyInfoTemplate extends Component {
  render() {
    const {
      facultyName,
      facultyAbout,
      facultyOpportunities,
    } = this.props.details;
    return (
      <PageLayoutWrapper
        contentHeight="100vh"
        header={
          <PageHeader
            backButton
            middle={
              <Paragraph fontWeight="bold">Univerzita Tomáše Bati</Paragraph>
            }
          />
        }
      >
        <BackgroundHeading title={facultyName} />
        <Layout css={{ flexDirection: 'column', margin: '0 12px' }}>
          <UnderlinedHeading title="O fakultě" />
          <Paragraph color="black" fontSize="0.8rem">
            {facultyAbout}
          </Paragraph>
          <UnderlinedHeading title="Uplatnění absolventů" />
          <Paragraph color="black" fontSize="0.8rem">
            {facultyOpportunities}
          </Paragraph>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default FacultyInfoTemplate;
