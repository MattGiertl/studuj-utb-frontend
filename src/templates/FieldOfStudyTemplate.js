/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import BackgroundHeading from '../molecules/BackgroundHeading';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Layout from '../atoms/Layout';
import Paragraph from '../atoms/Paragraph';

class FieldOfStudyTemplate extends Component {
  render() {
    const { details } = this.props;

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
        <BackgroundHeading title="Detail Oboru" />
        <Layout css={{ margin: '0 12px', flexDirection: 'column' }}>
          <UnderlinedHeading title="Název oboru" />
          <Paragraph
            fontSize="0.8rem"
            color="black"
            css={{ margin: 0, padding: 0 }}
          >
            {details.fieldName}
          </Paragraph>
          <UnderlinedHeading title="Popis oboru" />
          <Paragraph
            fontSize="0.8rem"
            color="black"
            css={{ margin: 0, padding: 0 }}
          >
            {details.fieldDetails}
          </Paragraph>
          <UnderlinedHeading title="Popis programu" />
          <Paragraph
            fontSize="0.8rem"
            color="black"
            css={{ margin: 0, padding: 0 }}
          >
            {details.programDetails}
          </Paragraph>
          <UnderlinedHeading title="Uplatnění" />
          <Paragraph
            fontSize="0.8rem"
            color="black"
            css={{ margin: 0, padding: 0, marginBottom: '50px' }}
          >
            {details.usage}
          </Paragraph>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default FieldOfStudyTemplate;
