/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import Layout from '../atoms/Layout';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Paragraph from '../atoms/Paragraph';
import BackgroundHeading from '../molecules/BackgroundHeading';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';

class ErasmusInfoTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper
        header={<PageHeader backButton middle="Univerzita Tomáše Bati" />}
      >
        <Layout
          css={{ flexDirection: 'column', width: '100%', marginBottom: '50px' }}
        >
          <BackgroundHeading title="VÝJEZDY DO ZAHRANIČÍ" />
          <Layout
            css={{
              flexDirection: 'column',
              margin: '0 15px',
            }}
          >
            <UnderlinedHeading
              title="Studuj a pracuj v zahraničí"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Po ukončení 1. ročníku můžeš vycestovat na studijní pobyt či
              pracovní stáž v podstatě kamkoliv na světě. UTB podporuje dva
              nejčastější vzdělávací programy (Erasmus+ a Freemover), i několik
              dalších významných projektů.
            </Paragraph>
            <UnderlinedHeading
              title="Program Erasmus+"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              V rámci programu Erasmus+ můžeš studovat 3-12 měsíců na
              partnerských univerzitách v zemích EU nebo strávit 3 měsíce na
              pracovní stáži ve firmě, kterou si vybereš. Na studium i pracovní
              stáž získáš finanční příspěvek, jehož výše se odvíjí od délky a
              místa tvého pobytu v zahraničí.
            </Paragraph>
            <UnderlinedHeading
              title="Program Freemover"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Projekt Freemover ti dovoluje studovat nebo pracovat kdekoli na
              světě, a to již od 1 měsíce. Vybrat si můžeš některou z
              partnerských škol, anebo kontaktovat novou školu. Bude tě to stát
              trochu úsilí, nakonec ale můžeš mít cestu otevřenou třeba i do
              Kanady nebo na Taiwan. V tomto případě dostáváš příspěvek 10 000
              Kč na měsíc.
            </Paragraph>
            <UnderlinedHeading
              title="Využij double-degree programy"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Mimo tyto projekty realizujeme také společné studijní programy se
              Školami ve Velké Británii a Francii. Znamená to, že část studia
              absolvuješ v ČR a zbytek v zahraničí. Výhodou, že po standardní
              době studia získáš 2 vysokoškolské diplomy. Tyto unikátní sdílené
              programy připravujeme také s americkými, polskými a slovenskými
              univerzitami.
            </Paragraph>
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default ErasmusInfoTemplate;
