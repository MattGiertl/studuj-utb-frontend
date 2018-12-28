/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';

import PageHeader from '../organisms/PageHeader';
import WidgetContainer from '../organisms/WidgetContainer';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import TextWidget from '../organisms/TextWidget';
import TextWidgetContainer from '../organisms/TextWidgetContainer';
import PageFooter from '../organisms/PageFooter';
import Layout from '../atoms/Layout';
import { UtbIcon } from '../atoms/Icon/Icon';
import Paragraph from '../atoms/Paragraph';

class UniversityPageTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper
        header={
          <PageHeader
            left={<UtbIcon />}
            middle={
              <Paragraph css={{ margin: 0, padding: 0 }} fontWeight="bold">
                Univerzita Tomáše Bati
              </Paragraph>
            }
            right={
              <Paragraph
                css={{ margin: 0, pading: 0, marginBottom: '10px' }}
                fontWeight="bold"
                fontSize="25px"
              >
                ...
              </Paragraph>
            }
          />
        }
        footer={<PageFooter />}
      >
        <Layout css={{ flexDirection: 'column', margin: '0 12px' }}>
          <WidgetContainer />
          <UnderlinedHeading title="Proč studovat na UTB?" />
          <TextWidgetContainer>
            <TextWidget
              title="Nabídka studia"
              text="Vyber si z bohaté nabídky studijních programů a oborů"
              number="1"
              to="/nabidka-studia"
            />
            <TextWidget
              title="Atraktivní prostředí"
              text="Vzdělávej se v moderním a špičkově vybeveném prostředí"
              number="2"
              to="/atraktivni-prostredi"
            />
            <TextWidget
              title="Výjezdy do zahraničí"
              text="Využij široké možnosti studia a praxe v zahraničí!"
              number="3"
              to="/vyjezdy-do-zahranici"
            />
            <TextWidget
              title="Praxe ve firmách"
              text="Získavej cenné zkušenosti z praxe již během studia"
              number="4"
              to="/praxe-ve-firmach"
            />
            <TextWidget
              title="Job Centrum"
              text="Využij soustavné kariérní poradenství po dobu studia"
              number="5"
              to="/job-centrum"
            />
            <TextWidget
              title="Akademická poradna"
              text="Spolehni se v náročných situacích na odborníky"
              number="6"
              to="/akademicka-poradna"
            />
            <TextWidget
              title="Studentské projekty"
              text="Zapoj se do široké škály studentských aktivit"
              number="7"
              to="/studentske-projekty"
            />
            <TextWidget
              title="Zábava a sport"
              text="Užij si vysokoškolský společenský život naplno"
              number="8"
              to="/zabava-a-sport"
            />
          </TextWidgetContainer>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default UniversityPageTemplate;
