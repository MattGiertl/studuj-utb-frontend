/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';

import Layout from '../atoms/Layout';
import PageHeader from '../organisms/PageHeader';
import WidgetContainer from '../organisms/WidgetContainer';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import TextWidget from '../organisms/TextWidget';
import TextWidgetContainer from '../organisms/TextWidgetContainer';

class MainPageTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper header={<PageHeader middle="Main" />}>
        <Layout
          css={{ flexDirection: 'column', margin: '0 12px', width: '100%' }}
        >
          <WidgetContainer />
          <UnderlinedHeading title="Proč studovat na UTB?" />
          <TextWidgetContainer>
            <TextWidget
              title="Nabídka studia"
              text="Lorem Ipsum Dolor Sit Amet"
              number="1"
            />
            <TextWidget
              title="Lorem Ipsum"
              text="Lorem Ipsum Dolor Sit Amet"
              number="2"
            />
            <TextWidget
              title="Lorem Ipsum"
              text="Lorem Ipsum Dolor Sit Amet"
              number="3"
            />
            <TextWidget
              title="Lorem Ipsum"
              text="Lorem Ipsum Dolor Sit Amet"
              number="4"
            />
            <TextWidget
              title="Lorem Ipsum"
              text="Lorem Ipsum Dolor Sit Amet"
              number="5"
            />
            <TextWidget
              title="Lorem Ipsum"
              text="Lorem Ipsum Dolor Sit Amet"
              number="6"
            />
            <TextWidget
              title="Lorem Ipsum"
              text="Lorem Ipsum Dolor Sit Amet"
              number="7"
            />
            <TextWidget
              title="Lorem Ipsum"
              text="Lorem Ipsum Dolor Sit Amet"
              number="8"
            />
          </TextWidgetContainer>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default MainPageTemplate;
