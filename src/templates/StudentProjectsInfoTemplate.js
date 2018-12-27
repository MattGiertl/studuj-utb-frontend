/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Layout from '../atoms/Layout';
import BackgroundHeading from '../molecules/BackgroundHeading';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Paragraph from '../atoms/Paragraph';

class StudentProjectsInfoTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper
        header={<PageHeader backButton middle="Univerzita Tomáše Bati" />}
      >
        <Layout
          css={{ flexDirection: 'column', width: '100%', marginBottom: '50px' }}
        >
          <BackgroundHeading title="AKADEMICKÁ PORADNA" />
          <Layout
            css={{
              flexDirection: 'column',
              margin: '0 15px',
            }}
          >
            <UnderlinedHeading
              title="Seznam se s projekty"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Na všech fakultách dáváme studentům prostor k seberealizaci ve
              studentských projektech. Naši studenti jich organizují skutečně
              spoustu. Ze jsou některé příklady
            </Paragraph>
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Zlín Design Week, Busfest, Culturea, Skrz prsty, Cena Salvator,
              Fashion Show, Vítání prváků, Antiples, Miss Academia
            </Paragraph>
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Více o projektech najdeš na{' '}
              <a href="www.komag.utb.cz">komag UTB</a>
            </Paragraph>
            <UnderlinedHeading
              title="Projekty pro středoškoláky"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Několik projektů je zaměřeno i na studenty SŠ. Například cílem
              projektu Baťova manažerská olympiáda je vybrat nejlepší
              středoškoláky se zájmem o stodium ekonomie. Zapojit se můžeš také
              do projektu Učíme se navzájem, který podporuje odbornou činnost a
              spolupráci studentů UTB a středních škol.
            </Paragraph>
            <UnderlinedHeading
              title="Zapoj se do organizací"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Nedílnou součást univerzitního prostředí tvoří studentské
              organizace. Stojí za celou řadou zábavních výjezdů a společenských
              aktivit, organizací výjezdů do zahraničí či odborných stáží a
              veletrhů. Můžeš si vybrat, zda se zapojíš do Studentské unie,
              Námořnické unie nebo do poboček mezinárodních organizací AIESEC a
              IAESTE. Napiš jim nebo počkej na začátek školního roku, kdy do
              svých týmů hledají talentované studenty.
            </Paragraph>
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default StudentProjectsInfoTemplate;
