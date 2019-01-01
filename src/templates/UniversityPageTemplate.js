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
import { NavLink } from 'react-router-dom';

class UniversityPageTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper
        header={
          <PageHeader
            left={<UtbIcon />}
            middle={
              <Paragraph fontWeight="bold">Univerzita Tomáše Bati</Paragraph>
            }
            right={
              <NavLink
                css={{
                  margin: 0,
                  pading: 0,
                  marginBottom: '10px',
                  textDecoration: 'none',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '25px',
                  color: 'white',
                }}
                to="o-aplikaci"
              >
                ...
              </NavLink>
            }
          />
        }
        footer={<PageFooter />}
      >
        <Layout css={{ flexDirection: 'column', margin: '0 12px' }}>
          <WidgetContainer
            upperCount="10 000"
            upperTitle="Počet studentů"
            leftCount="6"
            leftTitle="Počet fakult"
            rightCount="111"
            rightTitle="Počet oborů"
          />
          <UnderlinedHeading title="Proč studovat na UTB?" />
          <TextWidgetContainer>
            <TextWidget
              title="Nabídka studia"
              text="Vyber si z bohaté nabídky studijních programů a oborů"
              number="1"
              to="/univerzita/info-nabidka-studia"
            />
            <TextWidget
              title="Atraktivní prostředí"
              text="Vzdělávej se v moderním a špičkově vybeveném prostředí"
              number="2"
              to="/univerzita/info-atraktivni-prostredi"
            />
            <TextWidget
              title="Výjezdy do zahraničí"
              text="Využij široké možnosti studia a praxe v zahraničí!"
              number="3"
              to="/univerzita/info-vyjezdy-do-zahranici"
            />
            <TextWidget
              title="Praxe ve firmách"
              text="Získavej cenné zkušenosti z praxe již během studia"
              number="4"
              to="/univerzita/info-praxe-ve-firmach"
            />
            <TextWidget
              title="Job Centrum"
              text="Využij soustavné kariérní poradenství po dobu studia"
              number="5"
              to="/univerzita/info-job-centrum"
            />
            <TextWidget
              title="Akademická poradna"
              text="Spolehni se v náročných situacích na odborníky"
              number="6"
              to="/univerzita/info-akademicka-poradna"
            />
            <TextWidget
              title="Studentské projekty"
              text="Zapoj se do široké škály studentských aktivit"
              number="7"
              to="/univerzita/info-studentske-projekty"
            />
            <TextWidget
              title="Zábava a sport"
              text="Užij si vysokoškolský společenský život naplno"
              number="8"
              to="/univerzita/info-zabava-a-sport"
            />
          </TextWidgetContainer>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default UniversityPageTemplate;
