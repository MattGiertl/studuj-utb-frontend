// eslint-disable-next-line
import React, { Component } from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Paragraph from '../atoms/Paragraph';
import PageFooter from '../organisms/PageFooter';
import BackgroundHeading from '../molecules/BackgroundHeading';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Layout from '../atoms/Layout';

class AboutPageTemplate extends Component {
  render() {
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
        footer={<PageFooter />}
      >
        <BackgroundHeading title="O APLIKACI" />
        <Layout css={{ flexDirection: 'column', margin: '0 12px' }}>
          <UnderlinedHeading title="Název aplikace" />
          <Paragraph
            css={{ margin: 0, padding: 0 }}
            fontSize="0.8rem"
            color="black"
          >
            Studuj UTB
          </Paragraph>
          <UnderlinedHeading title="Verze aplikace" />
          <Paragraph
            css={{ margin: 0, padding: 0 }}
            fontSize="0.8rem"
            color="black"
          >
            0.5
          </Paragraph>
          <UnderlinedHeading title="Autoři aplikace" />
          <Paragraph
            css={{ margin: 0, padding: 0 }}
            fontSize="0.8rem"
            color="black"
          >
            Matúš Giertl, FAI UTB, m_giertl@utb.cz
          </Paragraph>
          <Paragraph
            css={{ margin: 0, padding: 0 }}
            fontSize="0.8rem"
            color="black"
          >
            Martin Zdražil, FMK UTB, m1_zdrazil@utb.cz
          </Paragraph>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default AboutPageTemplate;
