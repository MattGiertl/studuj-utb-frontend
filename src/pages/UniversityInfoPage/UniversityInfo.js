/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line
import React from 'react';
import Layout from '../../atoms/Layout';
import Paragraph from '../../atoms/Paragraph';
import BackgroundHeading from '../../molecules/BackgroundHeading';
import UnderlinedHeading from '../../molecules/UnderlinedHeading';

export const StudyOfferInfo = () => (
  <>
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
        UTB se skládá ze 6 fakult, na nichž můžeš získat kvalitní vzdělání v
        tehcnických, informatických, ekonomických, uměleckých, humanitních,
        pedagogických a zdravotních disciplínách
      </Paragraph>
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        Studovat můžeš v prezenční (denní) nebi v kombinované formě (při práci)
        a ve všech stupních studia, od bakalářského přes magisterské až po
        doktorské. Všechny studijní programz si můžeš projít v této aplikaci.
      </Paragraph>
      <UnderlinedHeading title="Studuj na moderní škole" />
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        UTB je moderní škola, otevřená novým myšlenkám a studentům z celého
        světa. Od počátku je budována jako dovjjazyčná: angličtina je u nás
        rovnocenným jazykem s češtinou. Univerzita poskytuje kvalitní
        vysokoškolské vzdělání s důrazem na podnikání, a je rovněž centrem vědy
        a výzkumu s mezinárodními úspěchy.
      </Paragraph>
      <UnderlinedHeading title="Nauč se podnikat" css={{ marginTop: '10px' }} />
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        Tomáš Baťa snil o tom, že obuje svět. My sníme o tom, že umožníme ještě
        mnoha dalším talentovaným lidem, aby svými myšlenkami a nadšením
        ovlyvnili svět. Pokud tě podnikání zajímá, naučíme tě vše potřebné, abys
        v něm uspěl.
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
        Ať budeš studovat na kterékoli z fakult UTB, budeš mít možnost zapsat si
        předmět Podnikatelská akademie, v němž získáš teoretické i praktické
        informace o podnikání. Na závěr obdržíš certifikát a budeš připraven na
        start vlastního podnikání. V budoucnu se ti to bude určitě hodit.
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
        Pokud se rozhodneš podnikat už v průběhu studia nebo po jeho skončení,
        univerzita tě v tom podpoří. Můžete třeba se spolužáky založit start-up
        firmu. Univerzita vám nabídne zázemí a vybavení za výhodných podmínek, a
        také poradenství. Příkladem je tzv. Upper ve Zlíně v ulici Nad Ovčírnou,
        v němž sídlí začínající firmy z oblasti kreativního průmyslu (designéři,
        umělci, marketéři). Mrkni na web Upper a přečti si tam další klíčové
        informace. Pár fotek z centra najdeš i ve fotogalerii uvnitř této
        aplikace. Studenti a absolventi IT oborů zase vuyužívají prostory,
        poradenství, technologie a vědecké poznatky ve Vědeckotechnickém ICT
        parku v sousedství Fakulty aplikované informatiky (ul. Nad Stráněmi,
        Zlín)
      </Paragraph>
    </Layout>
  </>
);

export const EnvironmentInfo = () => (
  <>
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
        odevzdávat na poslední chvíli. Čaje a kávy vypiješ litry. Budeš ale
        pracovat v krásném, moderním a inspirativním prostředí.
      </Paragraph>
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        Srdcem našeho kampusu je univerzitní centrum (U13), říkáme mu třináctka.
        Navrhla ho světově proslulá architektka a zlínská rodačka prof. Eva
        Jiřičná. Mimo to, že budova vypadá nádherně, je i skvěle funkční. V
        učebnách možná budeš mít přednášky nebo semináře. V knihovně UTB si
        vyhledáš potřebnou studijní literaturu, v atriu se zastavíš u umělecké
        výstavy, nebo si v restauraci doplníš energii. V celé budově se bez
        problémů připojíš na internet.
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
        Také vědecko-výzkumná pracoviště unioverzity sídlí v nových budovách a
        jsou vybavená nejmodernější technikou. Unikátní vědecko-výzkumné
        pracoviště Centrum polymerních systémů (CPS) jistě nepřehlédneš na Třídě
        Tomáše Bati. Patří ke špičkovým světovým pracovištím orientovaným na
        výzkum polymerů a procesů spojených s jejich výrobou a zpracováním.
        Kromě českých vědců v něm působí výzkumníci z mnoha zemí světa.
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
        Nejlépe bude, když se na naše budovy, učebny a laboratoře přijdeš sám
        podívat. Termíny Dnů otevřených dveří najdeš v této aplikaci.
      </Paragraph>
    </Layout>
  </>
);

export const TravelAbroadInfo = () => (
  <>
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
        Po ukončení 1. ročníku můžeš vycestovat na studijní pobyt či pracovní
        stáž v podstatě kamkoliv na světě. UTB podporuje dva nejčastější
        vzdělávací programy (Erasmus+ a Freemover), i několik dalších významných
        projektů.
      </Paragraph>
      <UnderlinedHeading title="Program Erasmus+" css={{ marginTop: '10px' }} />
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        V rámci programu Erasmus+ můžeš studovat 3-12 měsíců na partnerských
        univerzitách v zemích EU nebo strávit 3 měsíce na pracovní stáži ve
        firmě, kterou si vybereš. Na studium i pracovní stáž získáš finanční
        příspěvek, jehož výše se odvíjí od délky a místa tvého pobytu v
        zahraničí.
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
        Projekt Freemover ti dovoluje studovat nebo pracovat kdekoli na světě, a
        to již od 1 měsíce. Vybrat si můžeš některou z partnerských škol, anebo
        kontaktovat novou školu. Bude tě to stát trochu úsilí, nakonec ale můžeš
        mít cestu otevřenou třeba i do Kanady nebo na Taiwan. V tomto případě
        dostáváš příspěvek 10 000 Kč na měsíc.
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
        absolvuješ v ČR a zbytek v zahraničí. Výhodou, že po standardní době
        studia získáš 2 vysokoškolské diplomy. Tyto unikátní sdílené programy
        připravujeme také s americkými, polskými a slovenskými univerzitami.
      </Paragraph>
    </Layout>
  </>
);

export const InternshipInfo = () => (
  <>
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
        rozvíjet do budoucna své možnosti na trhu práce. Nabídneme ti stáže ve
        firmách, významných společnostech, sutátních institucích a agenturách.
        Naším přáním je, aby sis po ukončení studia dokázal najít práci v České
        republice nebo kdekoli v zahraničí.
      </Paragraph>
      <UnderlinedHeading title="Zapoj se" css={{ marginTop: '10px' }} />
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        Budeš-li mít chuť a energii, můžeš se během studia podílet na projektech
        společností, jejichž aktivity přesahují hranice kraje. Máme na mysli
        třeba společnosti Baťa, Continental Barum, Moravský peněžní ústav,
        Slovácké strojírny, Deloitte, Česká zbrojovka, Rockaway a mnohé další.
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
        Seznam.cz, nebo v institucích jako jsou třeba Česká televize či Krajská
        nemocnice Tomáše Bati. Občas se podívej na web fakulty, na níž by sis
        přál studovat. Určitě se tam dřívě nebo později objeví přednáška
        některého z jejích absolventů.
      </Paragraph>
    </Layout>
  </>
);

export const JobCentreInfo = () => (
  <>
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
        Každý den od 8 do 16 hodin si můžeš přijít pro radu týkající se kariéry
        do našeho Job centra. Pomůžeme ti zde vyhledat a zprostředkovat vhodné
        pracovní nabídky a poradíme s životopisem nebo motivačním dopicem. Pro
        více informací jdi na www.jobcentrum.utb.cz
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
        <a href="www.kariera.utb.cz">kariéra UTB</a>, který přínáší nabídku
        brigád, volných míst, odborných praxí a stáží pro naše studenty i
        absolventy.
      </Paragraph>
    </Layout>
  </>
);

export const AcademicCounselInfo = () => (
  <>
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
        vysokoškolské prostředí, trpěl trémou během zkouškového období nebo by
        tě potkaly jiné problémy, nebudeš v tom sám.
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
        Poradit se můžeš kdykoli s psychology v Akademické poradně. Můžeš za
        nimi přijít i s problémy osobního charaktery a dokonce přívést i své
        blízké. Určitě pak zjistíš, že každý problém má své řuešení.
      </Paragraph>
    </Layout>
  </>
);

export const StudentProjectsInfo = () => (
  <>
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
        studentských projektech. Naši studenti jich organizují skutečně spoustu.
        Ze jsou některé příklady
      </Paragraph>
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        Zlín Design Week, Busfest, Culturea, Skrz prsty, Cena Salvator, Fashion
        Show, Vítání prváků, Antiples, Miss Academia
      </Paragraph>
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        Více o projektech najdeš na <a href="www.komag.utb.cz">komag UTB</a>
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
        Několik projektů je zaměřeno i na studenty SŠ. Například cílem projektu
        Baťova manažerská olympiáda je vybrat nejlepší středoškoláky se zájmem o
        stodium ekonomie. Zapojit se můžeš také do projektu Učíme se navzájem,
        který podporuje odbornou činnost a spolupráci studentů UTB a středních
        škol.
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
        Nedílnou součást univerzitního prostředí tvoří studentské organizace.
        Stojí za celou řadou zábavních výjezdů a společenských aktivit,
        organizací výjezdů do zahraničí či odborných stáží a veletrhů. Můžeš si
        vybrat, zda se zapojíš do Studentské unie, Námořnické unie nebo do
        poboček mezinárodních organizací AIESEC a IAESTE. Napiš jim nebo počkej
        na začátek školního roku, kdy do svých týmů hledají talentované
        studenty.
      </Paragraph>
    </Layout>
  </>
);

export const FunAndSportInfo = () => (
  <>
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
        univerzity. Jeto naše výsada a jsme na ni velmi hrdí. Máme ale i plno
        dalších projektů, například reprezentační ples UTB, pořádaný ve velkém
        sále Kongresového centra. Ples si nenechá ujít žádný milovník tance a
        společenských událostí. Další akce každoročně pořádá univerzita ve
        spolupráci se Studentskou unií. Jsou to: Majáles, Mezinárodní den
        studentstva nebo Rozsvícení vánočního stromku.
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
        Neon TV přináší zpravodajství z univerzitního Zlína. Mimo to nabízí i
        snímky zlínských studentů a přenosy společenských a psortovních akcí. Na
        YouTube televize Neon TV nebo přímo na webu{' '}
        <a href="www.neontv.cz">Neon TV</a> najdeš týdenní zpravodajství i další
        video obsah.
      </Paragraph>
      <UnderlinedHeading title="Univerzitní sbor" css={{ marginTop: '10px' }} />
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        Rád zpíváš, a myslíš si, že hezky? Pokud ano, zapoj se do univerzitního
        sboru, který hledá nové hlasy. Předchozí zkušenost se zpěvem se
        nevyžaduje, proto se neboj a přijď na zkoušku. Sbot vystupuje na
        promocích a dalších akcích pořádaných UTB. Kontakt: Lenka Neubauerová,
        neub.lenka@gmail.com, tel 604 366 199.
      </Paragraph>
      <UnderlinedHeading title="Sportuj na UTB" css={{ marginTop: '10px' }} />
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        Baví tě sportovat? Rád zkoušíš nové sporty? Pak se ti u nás bude líbit.
        Náš Ústav tělesné výchovy ti nabízí výběr z více než 30 sportů, takže na
        své si přijde opravdu každý. Dokonce s námi můžeš jet lyžovat do Alp, na
        letní sportovní pobyt nebo třeba na cyklokurz. Aerobic, plavání,
        basketbal, cyklistika, florbal, golf, indoor cycling, inline bruslení,
        kendo, lyžování, squash, stolní tenis, taekwondo - to jsou jen některé
        sporty z naší nabídky. Vyvrcholením sportovního roku je Rektorský den
        sport, kdy se můžeš zpaojit například do golfového, fotbalového nebo
        squashového turnaje a poměřit síly s ostatnímy studenty.
      </Paragraph>
      <Paragraph
        fontSize="0.8rem"
        color="black"
        css={{ marginTop: '10px', marginBottom: 0 }}
      >
        Můžeš se stát i členem Vysokoškolského sportovního klubu a otevřít si
        tak cestu ke sportování za zvýhodněných podmínek. A jestli máŠ chuť
        dělat některý sport na výkonnostní nebo vrcholové úrovni, můžeš
        reprezentovat naší univerzitu. Pravidelně se účastníme akademických
        přeborů a zahraničních soutěží. Sportu zdar!
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
        Svého druhu unikátem je na zlínské univerzitě klub amerického fotbalu,
        univerzitní tým Zlín Golems. Tento v ČR netradiční sport najdeš i ve
        výběru sportovních aktivit, které si volíš v rámci tělocviku. Pokud je
        ti americký fotbal sympatický, neváhej a připoj se k týmu co nejdříve.
        Šanci zapojit se mají i sportovně založené slečny, které mohou borce na
        hřišti povzbuzovat jako cheerleaders. Těšíme se na váš první zápas!
      </Paragraph>
    </Layout>
  </>
);
