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

class UniversityPageTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper header={<PageHeader middle="Univerzita Tomáše Bati" />}>
        <Layout
          css={{ flexDirection: 'column', margin: '0 12px', width: '100%' }}
        >
          <WidgetContainer />
          <UnderlinedHeading title="Proč studovat na UTB?" />
          <TextWidgetContainer>
            <TextWidget
              title="Nabídka studia"
              text="Vyber si z bohaté nabídky studijních programů a oborů"
              number="1"
            />
            <TextWidget
              title="Atraktivní prostředí"
              text="Vzdělávej se v moderním a špičkově vybeveném prostředí"
              number="2"
            />
            <TextWidget
              title="Výjezdy do zahraničí"
              text="Využij široké možnosti studia a praxxe v zahraničí!"
              number="3"
            />
            <TextWidget
              title="Praxe ve firmách"
              text="Získavej cenné zkušenosti z praxe již během studia"
              number="4"
            />
            <TextWidget
              title="Job Centrum"
              text="Využij soustavné kariérní poradenství po dobu studia"
              number="5"
            />
            <TextWidget
              title="Akademická poradna"
              text="Spolehni se v náročných situacích na odborníky"
              number="6"
            />
            <TextWidget
              title="Studentské projekty"
              text="Zapoj se do široé škály studentských aktivit"
              number="7"
            />
            <TextWidget
              title="Zábava a sport"
              text="Užij si vysokoškolský společenský život naplno"
              number="8"
            />
          </TextWidgetContainer>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default UniversityPageTemplate;
