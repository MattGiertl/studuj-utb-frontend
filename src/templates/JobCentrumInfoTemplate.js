/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Layout from '../atoms/Layout';
import BackgroundHeading from '../molecules/BackgroundHeading';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Paragraph from '../atoms/Paragraph';

class JobCentrumInfoTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper
        header={<PageHeader backButton middle="Univerzita Tomáše Bati" />}
      >
        <Layout
          css={{ flexDirection: 'column', width: '100%', marginBottom: '50px' }}
        >
          <BackgroundHeading title="JOB CENTRUM" />
          <Layout
            css={{
              flexDirection: 'column',
              margin: '0 15px',
            }}
          >
            <UnderlinedHeading
              title="Nechej si poradit"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Každý den od 8 do 16 hodin si můžeš přijít pro radu týkající se
              kariéry do našeho Job centra. Pomůžeme ti zde vyhledat a
              zprostředkovat vhodné pracovní nabídky a poradíme s životopisem
              nebo motivačním dopicem. Pro více informací jdi na
              www.jobcentrum.utb.cz
            </Paragraph>
            <UnderlinedHeading
              title="Najdi si relevantní job"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              K job centru neodmyslitelně patří i portál{' '}
              <a href="www.kariera.utb.cz">kariéra UTB</a>, který přínáší
              nabídku brigád, volných míst, odborných praxí a stáží pro naše
              studenty i absolventy.
            </Paragraph>
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default JobCentrumInfoTemplate;
