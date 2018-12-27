/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import PageHeader from '../organisms/PageHeader';
import Layout from '../atoms/Layout';
import BackgroundHeading from '../molecules/BackgroundHeading';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Paragraph from '../atoms/Paragraph';

class EnvironmentInfoTemplate extends Component {
  render() {
    return (
      <PageLayoutWrapper
        header={<PageHeader backButton middle="Univerzita Tomáše Bati" />}
      >
        <Layout
          css={{ flexDirection: 'column', width: '100%', marginBottom: '50px' }}
        >
          <BackgroundHeading title="ATRAKTIVNÍ PROSTŘEDÍ" />
          <Layout
            css={{
              flexDirection: 'column',
              margin: '0 15px',
            }}
          >
            <UnderlinedHeading
              title="Dennodenně se inspiruj"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Studium na univerzitě ti zabere hodně času a úkoly budeš nejednou
              odevzdávat na poslední chvíli. Čaje a kávy vypiješ litry. Budeš
              ale pracovat v krásném, moderním a inspirativním prostředí.
            </Paragraph>
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Srdcem našeho kampusu je univerzitní centrum (U13), říkáme mu
              třináctka. Navrhla ho světově proslulá architektka a zlínská
              rodačka prof. Eva Jiřičná. Mimo to, že budova vypadá nádherně, je
              i skvěle funkční. V učebnách možná budeš mít přednášky nebo
              semináře. V knihovně UTB si vyhledáš potřebnou studijní
              literaturu, v atriu se zastavíš u umělecké výstavy, nebo si v
              restauraci doplníš energii. V celé budově se bez problémů připojíš
              na internet.
            </Paragraph>
            <UnderlinedHeading
              title="Navštiv naše vědecko-výzkumná pracoviště"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Také vědecko-výzkumná pracoviště unioverzity sídlí v nových
              budovách a jsou vybavená nejmodernější technikou. Unikátní
              vědecko-výzkumné pracoviště Centrum polymerních systémů (CPS)
              jistě nepřehlédneš na Třídě Tomáše Bati. Patří ke špičkovým
              světovým pracovištím orientovaným na výzkum polymerů a procesů
              spojených s jejich výrobou a zpracováním. Kromě českých vědců v
              něm působí výzkumníci z mnoha zemí světa.
            </Paragraph>
            <UnderlinedHeading
              title="Přijď se k nám podívat"
              css={{ marginTop: '10px' }}
            />
            <Paragraph
              fontSize="0.8rem"
              color="black"
              css={{ marginTop: '10px', marginBottom: 0 }}
            >
              Nejlépe bude, když se na naše budovy, učebny a laboratoře přijdeš
              sám podívat. Termíny Dnů otevřených dveří najdeš v této aplikaci.
            </Paragraph>
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default EnvironmentInfoTemplate;
