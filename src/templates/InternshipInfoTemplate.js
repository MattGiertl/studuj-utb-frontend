/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Layout from '../atoms/Layout';
import BackgroundHeading from '../molecules/BackgroundHeading';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Paragraph from '../atoms/Paragraph';

class InternshipInfoTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper
        header={<PageHeader backButton middle="Univerzita Tomáše Bati" />}
      >
        <Layout
          css={{ flexDirection: 'column', width: '100%', marginBottom: '50px' }}
        >
          <BackgroundHeading title="PRAXE VE FIRMÁCH" />
          <Layout
            css={{
              flexDirection: 'column',
              margin: '0 15px',
            }}
          >
            <UnderlinedHeading
              title="Získej co nejvíce zkušeností"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Již v bakalářských oborech můžeš pracovat na reálných projektech a
              rozvíjet do budoucna své možnosti na trhu práce. Nabídneme ti
              stáže ve firmách, významných společnostech, sutátních institucích
              a agenturách. Naším přáním je, aby sis po ukončení studia dokázal
              najít práci v České republice nebo kdekoli v zahraničí.
            </Paragraph>
            <UnderlinedHeading title="Zapoj se" css={{ marginTop: '10px' }} />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Budeš-li mít chuť a energii, můžeš se během studia podílet na
              projektech společností, jejichž aktivity přesahují hranice kraje.
              Máme na mysli třeba společnosti Baťa, Continental Barum, Moravský
              peněžní ústav, Slovácké strojírny, Deloitte, Česká zbrojovka,
              Rockaway a mnohé další.
            </Paragraph>
            <UnderlinedHeading
              title="Inspiruj se absolventy"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              O tom, že tvá prace může skončit nabídkou na práci, svědčí mnoho
              úspěšných příběhů našich absolventů. Setkáš se s nimi třeba ve
              společnostech Tescoma, Hamé, Impromat, Vodafone, TON, Red Bull a
              Seznam.cz, nebo v institucích jako jsou třeba Česká televize či
              Krajská nemocnice Tomáše Bati. Občas se podívej na web fakulty, na
              níž by sis přál studovat. Určitě se tam dřívě nebo později objeví
              přednáška některého z jejích absolventů.
            </Paragraph>
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default InternshipInfoTemplate;
