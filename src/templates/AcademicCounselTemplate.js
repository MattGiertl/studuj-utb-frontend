/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Layout from '../atoms/Layout';
import BackgroundHeading from '../molecules/BackgroundHeading';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Paragraph from '../atoms/Paragraph';

class AcademicCounselTemplate extends Component {
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
              title="Nebuď na problémy sám"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              V případě, že bys měl problémy se zvládnutím učiva, s adaptací na
              vysokoškolské prostředí, trpěl trémou během zkouškového období
              nebo by tě potkaly jiné problémy, nebudeš v tom sám.
            </Paragraph>
            <UnderlinedHeading
              title="Získej radu kdykoli"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Poradit se můžeš kdykoli s psychology v Akademické poradně. Můžeš
              za nimi přijít i s problémy osobního charaktery a dokonce přívést
              i své blízké. Určitě pak zjistíš, že každý problém má své řuešení.
            </Paragraph>
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default AcademicCounselTemplate;
