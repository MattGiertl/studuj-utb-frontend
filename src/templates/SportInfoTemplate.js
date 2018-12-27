/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Layout from '../atoms/Layout';
import BackgroundHeading from '../molecules/BackgroundHeading';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Paragraph from '../atoms/Paragraph';

class SportInfoTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper
        header={<PageHeader backButton middle="Univerzita Tomáše Bati" />}
      >
        <Layout
          css={{ flexDirection: 'column', width: '100%', marginBottom: '50px' }}
        >
          <BackgroundHeading title="ZÁBAVA A SPORT" />
          <Layout
            css={{
              flexDirection: 'column',
              margin: '0 15px',
            }}
          >
            <UnderlinedHeading
              title="Bav se s ostatními"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Velké množství projektů ve Zlíně vytváŘejí pro spolužáky studenti
              univerzity. Jeto naše výsada a jsme na ni velmi hrdí. Máme ale i
              plno dalších projektů, například reprezentační ples UTB, pořádaný
              ve velkém sále Kongresového centra. Ples si nenechá ujít žádný
              milovník tance a společenských událostí. Další akce každoročně
              pořádá univerzita ve spolupráci se Studentskou unií. Jsou to:
              Majáles, Mezinárodní den studentstva nebo Rozsvícení vánočního
              stromku.
            </Paragraph>
            <UnderlinedHeading
              title="Univerzitní televize Neon TV"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Neon TV přináší zpravodajství z univerzitního Zlína. Mimo to
              nabízí i snímky zlínských studentů a přenosy společenských a
              psortovních akcí. Na YouTube televize Neon TV nebo přímo na webu{' '}
              <a href="www.neontv.cz">Neon TV</a> najdeš týdenní zpravodajství i
              další video obsah.
            </Paragraph>
            <UnderlinedHeading
              title="Univerzitní sbor"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Rád zpíváš, a myslíš si, že hezky? Pokud ano, zapoj se do
              univerzitního sboru, který hledá nové hlasy. Předchozí zkušenost
              se zpěvem se nevyžaduje, proto se neboj a přijď na zkoušku. Sbot
              vystupuje na promocích a dalších akcích pořádaných UTB. Kontakt:
              Lenka Neubauerová, neub.lenka@gmail.com, tel 604 366 199.
            </Paragraph>
            <UnderlinedHeading
              title="Sportuj na UTB"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Baví tě sportovat? Rád zkoušíš nové sporty? Pak se ti u nás bude
              líbit. Náš Ústav tělesné výchovy ti nabízí výběr z více než 30
              sportů, takže na své si přijde opravdu každý. Dokonce s námi můžeš
              jet lyžovat do Alp, na letní sportovní pobyt nebo třeba na
              cyklokurz. Aerobic, plavání, basketbal, cyklistika, florbal, golf,
              indoor cycling, inline bruslení, kendo, lyžování, squash, stolní
              tenis, taekwondo - to jsou jen některé sporty z naší nabídky.
              Vyvrcholením sportovního roku je Rektorský den sport, kdy se můžeš
              zpaojit například do golfového, fotbalového nebo squashového
              turnaje a poměřit síly s ostatnímy studenty.
            </Paragraph>
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Můžeš se stát i členem Vysokoškolského sportovního klubu a otevřít
              si tak cestu ke sportování za zvýhodněných podmínek. A jestli máŠ
              chuť dělat některý sport na výkonnostní nebo vrcholové úrovni,
              můžeš reprezentovat naší univerzitu. Pravidelně se účastníme
              akademických přeborů a zahraničních soutěží. Sportu zdar!
            </Paragraph>
            <UnderlinedHeading
              title="Fandi University Zlín Golems!"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Svého druhu unikátem je na zlínské univerzitě klub amerického
              fotbalu, univerzitní tým Zlín Golems. Tento v ČR netradiční sport
              najdeš i ve výběru sportovních aktivit, které si volíš v rámci
              tělocviku. Pokud je ti americký fotbal sympatický, neváhej a
              připoj se k týmu co nejdříve. Šanci zapojit se mají i sportovně
              založené slečny, které mohou borce na hřišti povzbuzovat jako
              cheerleaders. Těšíme se na váš první zápas!
            </Paragraph>
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default SportInfoTemplate;
