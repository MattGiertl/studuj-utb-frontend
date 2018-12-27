/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Layout from '../atoms/Layout';
import BackgroundHeading from '../molecules/BackgroundHeading';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Paragraph from '../atoms/Paragraph';

class StudyOfferPageTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper
        header={<PageHeader backButton middle="Univerzita Tomáše Bati" />}
      >
        <Layout
          css={{ flexDirection: 'column', width: '100%', marginBottom: '50px' }}
        >
          <BackgroundHeading title="NABÍDKA STUDIA" />
          <Layout
            css={{
              flexDirection: 'column',
              margin: '0 15px',
            }}
          >
            <UnderlinedHeading
              title="Vyber si fakultu a obor"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              UTB se skládá ze 6 fakult, na nichž můžeš získat kvalitní vzdělání
              v tehcnických, informatických, ekonomických, uměleckých,
              humanitních, pedagogických a zdravotních disciplínách
            </Paragraph>
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Studovat můžeš v prezenční (denní) nebi v kombinované formě (při
              práci) a ve všech stupních studia, od bakalářského přes
              magisterské až po doktorské. Všechny studijní programz si můžeš
              projít v této aplikaci.
            </Paragraph>
            <UnderlinedHeading title="Studuj na moderní škole" />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              UTB je moderní škola, otevřená novým myšlenkám a studentům z
              celého světa. Od počátku je budována jako dovjjazyčná: angličtina
              je u nás rovnocenným jazykem s češtinou. Univerzita poskytuje
              kvalitní vysokoškolské vzdělání s důrazem na podnikání, a je
              rovněž centrem vědy a výzkumu s mezinárodními úspěchy.
            </Paragraph>
            <UnderlinedHeading
              title="Nauč se podnikat"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Tomáš Baťa snil o tom, že obuje svět. My sníme o tom, že umožníme
              ještě mnoha dalším talentovaným lidem, aby svými myšlenkami a
              nadšením ovlyvnili svět. Pokud tě podnikání zajímá, naučíme tě vše
              potřebné, abys v něm uspěl.
            </Paragraph>
            <UnderlinedHeading
              title="Podpora podnikání"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Ať budeš studovat na kterékoli z fakult UTB, budeš mít možnost
              zapsat si předmět Podnikatelská akademie, v němž získáš teoretické
              i praktické informace o podnikání. Na závěr obdržíš certifikát a
              budeš připraven na start vlastního podnikání. V budoucnu se ti to
              bude určitě hodit.
            </Paragraph>
            <UnderlinedHeading
              title="Pracuj na svém start-upu"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Pokud se rozhodneš podnikat už v průběhu studia nebo po jeho
              skončení, univerzita tě v tom podpoří. Můžete třeba se spolužáky
              založit start-up firmu. Univerzita vám nabídne zázemí a vybavení
              za výhodných podmínek, a také poradenství. Příkladem je tzv. Upper
              ve Zlíně v ulici Nad Ovčírnou, v němž sídlí začínající firmy z
              oblasti kreativního průmyslu (designéři, umělci, marketéři). Mrkni
              na web Upper a přečti si tam další klíčové informace. Pár fotek z
              centra najdeš i ve fotogalerii uvnitř této aplikace. Studenti a
              absolventi IT oborů zase vuyužívají prostory, poradenství,
              technologie a vědecké poznatky ve Vědeckotechnickém ICT parku v
              sousedství Fakulty aplikované informatiky (ul. Nad Stráněmi, Zlín)
            </Paragraph>
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default StudyOfferPageTemplate;
