/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Paragraph from '../atoms/Paragraph';
import { NavLink } from 'react-router-dom';
import { UtbIcon } from '../atoms/Icon/Icon';
import WidgetContainer from '../organisms/WidgetContainer';
import Layout from '../atoms/Layout';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Widget from '../molecules/Widget';
import PageFooter from '../organisms/PageFooter';

class LibraryTemplate extends Component {
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
            upperCount="110 000"
            upperTitle="Počet knih"
            leftCount="500"
            leftTitle="Počet míst"
            rightCount="500"
            rightTitle="Počet počítačů"
          />
          <UnderlinedHeading title="Služby knihovny" />
          <Paragraph color="black" css={{ margin: 0 }} fontSize="0.8rem">
            Knihovna UTB sídlí v objektu U13. Své služby poskytuje studentům a
            pedagogům UTB, ale i odborné veřejnosti
          </Paragraph>
          <br />
          <Paragraph color="black" css={{ margin: 0 }} fontSize="0.8rem">
            V knihovně je na 500 studijních míst, přičemž řada z nich je určena
            pro připojení notebooků. Najdeš v ní i 6 individuálních studoven a
            místa, kam se "zašít" se zajímavou knížkou.
          </Paragraph>
          <UnderlinedHeading title="Netradiční knihovna" />
          <Paragraph color="black" css={{ margin: 0 }} fontSize="0.8rem">
            Knihovna je oblíbená i díky jejím sociálním sítím, soutěžím a
            vlastním mobilním aplikacím.
          </Paragraph>
          <UnderlinedHeading title="Navštiv Obývák" />
          <Paragraph color="black" css={{ margin: 0 }} fontSize="0.8rem">
            Obývák je speciální chill-out prostor ve 4. patře budovy, který byl
            upraven tak, aby studentům ještě více zpříjemňoval pobyt v knihovně.
            Najdeš v něm časopisy, denní tisk, sedací pytle, výbornou kávu za
            pár korun a další vychytávky
          </Paragraph>
          <UnderlinedHeading title="Nakladatelství UTB" />
          <Paragraph color="black" css={{ margin: 0 }} fontSize="0.8rem">
            Tisk a vazba závěrečných prací nejsou problém. Díky univerzitnímu
            nakladatelství se nemusíš bát, že nebudeš mít kde vytisknout a
            svázat svou ročníkovku, bakalářku nebo diplomku. Nakladatelství
            nabízí rychlé, levné a spolehlivé službny. Dualší informace najdeš
            na webu nakladatelstvi.utb.cz
          </Paragraph>
          <UnderlinedHeading title="Knihovna na sítích" />
          <Layout
            css={{
              margin: '10px 0',
              justifyContent: 'space-between',
              marginBottom: '55px',
            }}
          >
            <Widget
              linkTo="https://www.facebook.com/knihovnautb/"
              title="Facebook"
              iconName={['fab', 'facebook-f']}
              widgetWidth="48%"
            />
            <Widget
              linkTo="https://twitter.com/knihovnautb?lang=en"
              title="Twitter"
              iconName={['fab', 'twitter']}
              widgetWidth="48%"
            />
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default LibraryTemplate;
