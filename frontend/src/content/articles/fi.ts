import type { Articles } from './types';

const fi: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Miksi aito kuva saa Instagramissa AI-tiedot-merkinnän',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Aito kuva sai Instagramissa tai Facebookissa ”AI-tiedot”-merkinnän? Syynä on yleensä editorin kirjoittama C2PA- tai IPTC-kenttä. Näin löydät ja poistat sen.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Merkintä lukee tiedostoa, ei kuvaa',
        paragraphs: [
          'Metan ”AI-tiedot”-merkintä (ennen vuoden 2024 puoliväliä ”Made with AI”) lisätään, kun ladatusta kuvasta löytyy tunnettuja generatiivisen tekoälyn signaaleja. Kaksi niistä on itse kuvatiedostossa: [C2PA-alkuperätiedot eli Content Credentials](what-is-c2pa-content-credentials) sekä XMP-lohkoon tallennettu IPTC DigitalSourceType -ominaisuus.',
          'Arvo trainedAlgorithmicMedia kertoo, että koko kuva on luotu tekoälyllä. Arvo compositeWithTrainedAlgorithmicMedia taas tarkoittaa, että aidossa valokuvassa on tekoälyllä tehtyjä osia. Kumpikin voidaan lukea automaattisesti latauksen yhteydessä. Meta käyttää myös muita signaaleja ja pyytää käyttäjiä merkitsemään realistisen tekoälysisällön itse, joten metadata on vain yksi tekijä monien joukossa.',
        ],
      },
      {
        heading: 'Mistä harhaanjohtava signaali tulee',
        paragraphs: ['Aidoissa kuvissa merkinnän laukaisee lähes aina muokkausohjelma, ei kamera. Tyypillisiä lähteitä:'],
        bullets: [
          'Generatiivinen täyttö, generatiivinen laajennus tai tekoälypohjainen poistotyökalu, jotka voivat lisätä c2pa-toimintoja ja merkitä tiedoston yhdistelmäkuvaksi.',
          'Vienti Content Credentials -asetus päällä, jolloin jokainen muokkausvaihe allekirjoitetaan tiedostoon.',
          'Puhelimen galleriasovellusten tekoälypyyhekumit ja vastaavat toiminnot, jotka jättävät jälkeensä muokkausmerkinnän.',
          'Tiedoston kulkeminen muiden sovellusten kautta, jotka kopioivat olemassa olevan metadatan eteenpäin – merkintä säilyy useiden tallennusten yli.',
        ],
      },
      {
        heading: 'Paikanna kenttä AI Label Removerissa',
        paragraphs: [
          'Pudota kuva työkaluun. ”AI-jäljet”-välilehti luettelee jokaisen signaalin ja sen sijainnin, esimerkiksi ”C2PA · compositeWithTrainedAlgorithmicMedia” tai ”XMP · Iptc4xmpExt › DigitalSourceType”. ”Raaka metadata” -näkymässä näet varsinaiset arvot, kuten ohjelman, joka allekirjoitti manifestin, sekä kaikki tallennetut c2pa-toiminnot.',
          'Tulos ”Kannattaa katsoa toiseen kertaan” tarkoittaa, että tiedostossa on Content Credentials -tiedot, mutta niissä ei sanota suoraan, että tekoälyä olisi käytetty. Jotkin alustat pitävät pelkkää manifestiakin vihjeenä, joten päätä ennen julkaisua.',
        ],
      },
      {
        heading: 'Puhdista julkaistava kopio',
        paragraphs: [
          'Paina ”Poista kaikki metadata”. AI Label Remover leikkaa C2PA-säilön sekä XMP-, IPTC- ja EXIF-lohkot pois tavuvirrasta ja jättää kuvadatan, koon, suunnan ja väriprofiilin ennalleen. Puhdistettu tiedosto luetaan uudelleen, joten näet ennen tallennusta, että AI-jäljet ovat poissa. Jos kuvia on useita, [voit puhdistaa ne kerralla](batch-remove-metadata).',
          'Tallentaminen uudeksi JPEG-tiedostoksi poistaisi myös metadatan, mutta se pakkaa kuvan uudelleen joka kerta ja heikentää laatua. Lohkojen leikkaaminen välttää tämän menetyksen kokonaan.',
        ],
      },
      {
        heading: 'Väärän merkinnän korjaaminen ei ole oikean piilottamista',
        paragraphs: [
          'Puhdistus on tarkoitettu merkinnöille, jotka kuvaavat työtäsi väärin, ja yksityisten tietojen suojaamiseen. Jos kuva on kokonaan tai suurelta osin tekoälyn tuottama ja voisi mennä aidosta, alustojen säännöt edellyttävät yleensä, että kerrot sen – merkintä on olemassa katsojien vuoksi. Käytä AI Label Removeria virheiden korjaamiseen, ei synteettisten kuvien esittämiseen valokuvina.',
        ],
      },
    ],
    faqHeading: 'Kysymyksiä AI-tiedot-merkinnästä',
    faq: [
      {
        q: 'Voinko poistaa AI-tiedot-merkinnän julkaisun jälkeen?',
        a: 'Yleensä ei julkaisua muokkaamalla. Jos merkintä kuvaa aitoa valokuvaa väärin, käytä alustan valitus- tai tilatoimintoja, jos niitä on, ja puhdista tiedosto ennen seuraavaa julkaisua.',
      },
      {
        q: 'Häviääkö merkintä varmasti, kun puhdistan tiedoston?',
        a: 'Takuuta ei ole. Puhdistus poistaa tiedostoon tallennetut signaalit, jotka ovat muokattujen kuvien tavallisin syy, mutta alustat voivat käyttää myös muita tunnistustapoja.',
      },
      {
        q: 'Muuttuuko kuva näköjään?',
        a: 'Ei. Vain metadatalohkot poistetaan. Kuvadata kopioidaan tavu tavulta, ja suunta sekä ICC-väriprofiili säilyvät.',
      },
      {
        q: 'Voinko säilyttää kameran asetukset ja poistaa vain AI-kentät?',
        a: 'Tällä hetkellä et. AI Label Remover poistaa kaiken tunnistavan metadatan – sijainnin, laitteen, tekijän ja tekoälyalkuperän – yhdellä kertaa, mikä on turvallisin oletus julkiseen jakamiseen. Koko, suunta, värit ja animaatio säilyvät aina.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Poista ComfyUI-työnkulut ja SD-kehotteet PNG-kuvista',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge ja ComfyUI kirjoittavat kehotteen, siemenen, mallin ja koko työnkulun jokaiseen PNG-kuvaan. Katso teksti ja poista se pikseleihin koskematta.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Asetuksesi kulkevat kuvan mukana',
        paragraphs: [
          'Paikalliset kuvageneraattorit tallentavat asetuksensa tekstinä tulostiedostoon, jotta kuvan voi luoda uudelleen. PNG-tiedostoissa teksti on tEXt-, zTXt- tai iTXt-lohkoissa kuvadatan rinnalla. Tyypillisesti löydät:',
        ],
        bullets: [
          'A1111 ja Forge: ”parameters”-lohko, jossa on kehote, negatiivinen kehote, askeleet, sampleri, CFG, siemen, resoluutio, mallin tiiviste ja nimi sekä LoRA- ja laajennusasetukset.',
          'ComfyUI: ”prompt”-lohko, jossa on suoritettu solmugraafi, ja ”workflow”-lohko, jossa on koko editorin asettelu – kun PNG pudotetaan ComfyUI:hin, koko kokoonpano palaa näkyviin.',
          'InvokeAI, NovelAI ja muut käyttöliittymät: vastaavat tiedot omilla avaimillaan.',
          'JPEG- ja WebP-viennit: jotkin työkalut kirjoittavat saman tekstin EXIF UserComment -kenttään.',
        ],
      },
      {
        heading: 'Syitä puhdistaa – ja syitä olla puhdistamatta',
        paragraphs: [
          'Generointitiedot ovat täydellinen resepti. Niiden avulla kuka tahansa voi toistaa tyylisi, nähdä mihin malleihin ja LoRA-tiedostoihin luotat, ja työnkulun syövereistä voi paljastua paikallisia polkuja, kansioiden nimiä tai käyttäjänimiä. Suuret ComfyUI-graafit voivat myös lisätä kymmeniä kilotavuja jokaiseen kuvaan.',
          'Toisaalta mallien jakosivustot lukevat parametrit näyttääkseen generointitiedot, ja yhteistyökumppanit saattavat tarvita työnkulun. Tarkista siksi jokainen tiedosto ensin – AI Label Remover näyttää kaiken ennen kuin mitään poistetaan.',
        ],
      },
      {
        heading: 'Kehotteen lukeminen AI Label Removerissa',
        paragraphs: [
          'Pudota PNG työkaluun. ”Raaka metadata” -näkymässä jokainen tekstilohko näkyy avainsanansa alla – parameters, prompt, workflow – koko sisältöineen, ja ”AI-jäljet”-välilehti merkitsee sen Stable Diffusion -kehotteeksi tai ComfyUI-työnkuluksi. Pakatut zTXt- ja iTXt-lohkot puretaan selaimessa, jotta voit lukea ne.',
        ],
      },
      {
        heading: 'Mitä puhdistus säilyttää',
        paragraphs: [
          'Paina ”Poista kaikki metadata”. PNG-käsittelijä poistaa teksti-, XMP-, EXIF- ja C2PA-lohkot kokonaisina ja säilyttää IHDR-, IDAT-, paletti-, läpinäkyvyys-, gamma- ja värilohkot sekä APNG-animaation lohkot. Koska lohkot poistetaan kokonaisina, jäljelle jäävät tarkistussummat (CRC) pysyvät kelvollisina ja tiedosto aukeaa kaikkialla.',
          'Kuvan avaaminen ja uudelleentallennus editorissa poistaisi myös tekstin, mutta se pakkaa kuvan uudelleen ja voi muuttaa värejä. Tavutason poisto välttää molemmat. Sama koskee [Midjourneyn ja DALL·E:n latauksia](hide-midjourney-dalle-prompts), joissa kehote on tallennettu toisella tavalla.',
        ],
      },
    ],
    faqHeading: 'Kysymyksiä Stable Diffusionin ja ComfyUI:n tiedoista',
    faq: [
      {
        q: 'Miten estän A1111:tä tai ComfyUI:ta tallentamasta metadataa?',
        a: 'A1111:ssä ja Forgessa on asetus, joka lopettaa generointiparametrien kirjoittamisen PNG-tiedostoihin, ja ComfyUI:n voi käynnistää --disable-metadata-valitsimella. Molemmat koskevat vain uusia kuvia, joten puhdista jo olemassa olevat.',
      },
      {
        q: 'Voiko ComfyUI rakentaa työnkulun uudelleen puhdistetusta PNG:stä?',
        a: 'Ei. ”prompt”- ja ”workflow”-lohkot ovat poissa, joten tiedoston vetäminen ComfyUI:hin ei palauta mitään. Säilytä koskematon alkuperäinen, jos tarvitset graafia myöhemmin.',
      },
      {
        q: 'Näyttääkö puhdistettu PNG täsmälleen samalta?',
        a: 'Kyllä. Pakatut pikselit sisältävät IDAT-lohkot kopioidaan muuttamattomina, joten kuva on pikselilleen sama.',
      },
      {
        q: 'Entä JPEG- ja WebP-viennit?',
        a: 'EXIF UserComment- tai XMP-kenttiin tallennetut kehotteet tunnistetaan ja poistetaan myös JPEG- ja WebP-tiedostoista.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Poista kehotteet Midjourney- ja DALL·E-kuvista',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Midjourneyn, DALL·E:n, ChatGPT:n ja Fireflyn lataukset voivat sisältää kehotteesi, työn tunnisteen ja tekoälyalkuperän. Tarkista ja poista ne ennen jakamista.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Mitä pilvipalvelut kirjoittavat kuvaan',
        paragraphs: [
          'Verkossa toimivat kuvapalvelut lisäävät latauksiin yhä useammin metadataa läpinäkyvyyden ja alkuperästandardien vuoksi. Kentät vaihtelevat palvelun mukaan ja muuttuvat ajan myötä, joten ainoa luotettava tapa on avata tiedosto. Voit löytää esimerkiksi:',
        ],
        bullets: [
          'Midjourney: kehote ja työn tunniste kuvaus- tai kommenttikentissä, usein yhdessä IPTC DigitalSourceType -arvon kanssa, joka merkitsee kuvan tekoälyn tekemäksi.',
          'DALL·E ja ChatGPT:n kuvagenerointi: [C2PA Content Credentials](what-is-c2pa-content-credentials), joissa generaattori mainitaan nimeltä.',
          'Adobe Firefly: Content Credentials, joiden mukaan kuva on luotu tekoälyllä.',
          'Monet työkalut: ohjelman nimi, luontipäivä ja joskus tiliin sidottu tunniste.',
        ],
      },
      {
        heading: 'Kehote on säilyttämisen arvoista työtä',
        paragraphs: [
          'Kuvittajille, suunnittelijoille ja kehotteiden kirjoittajille viimeistelty kehote on monen kokeilukierroksen tulos. Mikä tahansa ilmainen metadatan katseluohjelma näyttää upotetun tekstin kenelle tahansa kuvan lataajalle valmiina kopioitavaksi. Työtunnisteet ja tilitiedot voivat lisäksi yhdistää julkisen kuvan sinuun.',
        ],
      },
      {
        heading: 'Katso ensin, puhdista sitten',
        paragraphs: [
          'Pudota kuva työkaluun ja lue raportti. ”AI”-merkityt rivit sisältävät kehotteet, generaattorien nimet ja alkuperäilmoitukset; ”Ihmiset”-rivit tekijät, kuvaukset ja tunnisteet. Paina ”Poista kaikki metadata” ja tallenna puhdas tiedosto – tai koko erä ZIP-tiedostona.',
          'Kaikki tapahtuu selaimessasi, joten suojaamasi kehotteet eivät matkalla päädy vielä yhteen palveluun.',
        ],
      },
      {
        heading: 'Rajoitukset, jotka kannattaa tietää',
        paragraphs: [
          'Jotkin palveluntarjoajat piilottavat vesileiman myös pikseleihin, kuten Googlen SynthID. Se ei ole metadataa, eikä puhdistus kosketa sitä. Jos julkaiset realistisen tekoälykuvan, alustan säännöt voivat edelleen vaatia sen merkitsemistä – lue lisää [AI-tiedot-merkinnästä](made-with-ai-label). Puhdistus suojaa työprosessiasi, mutta ei muuta sitä, mikä kuva on.',
        ],
      },
    ],
    faqHeading: 'Kysymyksiä Midjourneyn ja DALL·E:n metadatasta',
    faq: [
      {
        q: 'Voiko joku lukea kehotteeni ladatusta kuvasta?',
        a: 'Jos kehote on tallennettu tiedoston metadataan, kuka tahansa metadatan katseluohjelmalla voi lukea ja kopioida sen. Tiedoston puhdistaminen ennen jakamista poistaa sen.',
      },
      {
        q: 'Sisältääkö jokainen Midjourney-lataus kehotteen?',
        a: 'Se riippuu tiedostomuodosta ja palvelun nykyisestä toiminnasta. Avaa tiedosto AI Label Removerissa nähdäksesi tarkalleen, mitä siinä on.',
      },
      {
        q: 'Poistaako puhdistus SynthIDn tai vastaavat vesileimat?',
        a: 'Ei. Näkymättömät vesileimat ovat pikselidatassa, jota AI Label Remover ei koskaan muuta.',
      },
      {
        q: 'Voinko puhdistaa kokonaisen sarjan kuvia?',
        a: 'Kyllä. Lataa enintään 50 kuvaa, tarkista raportit ja tallenna kaikki yhtenä ZIP-tiedostona.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Mikä on C2PA? Content Credentials selitettynä',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-gps-location-from-photos'],
    description:
      'Selkeä opas C2PA:han ja Content Credentials -tietoihin: mitä allekirjoitettu manifesti kertoo, missä eri tiedostomuodot sitä säilyttävät ja mitä poisto tekee.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Lyhyesti',
        paragraphs: [
          'Coalition for Content Provenance and Authenticity (C2PA) ylläpitää avointa standardia, jolla mediaan liitetään peukaloinnin paljastava historia. Käyttäjille se näkyy nimellä Content Credentials. Kamerat, editorit ja tekoälygeneraattorit voivat allekirjoittaa kuvaan merkinnän siitä, miten se syntyi – kuvattiin kameralla, muokattiin sovelluksessa tai tuotettiin mallilla.',
        ],
      },
      {
        heading: 'Manifestin rakenne',
        paragraphs: ['Manifesti on tiivis, jäsennelty paketti, jossa on kolme pääosaa:'],
        bullets: [
          'Claim generator – ohjelma tai palvelu, joka loi manifestin, esimerkiksi kuvankäsittelyohjelma tai tekoälykuvien rajapinta.',
          'Väitteet (assertions) – lausumat sisällöstä: c2pa.actions (luotu, muokattu, avattu, skaalattu jne.), digitalSourceType sekä linkit ainesosatiedostoihin.',
          'Allekirjoitus – kryptografinen allekirjoitus ja varmenne, joka yksilöi allekirjoittajan, sekä tiiviste, joka sitoo manifestin juuri tähän kuvadataan.',
        ],
      },
      {
        heading: 'Missä kukin tiedostomuoto sitä säilyttää',
        paragraphs: [
          'Manifesti pakataan JUMBF-säiliöön, jonka kukin tiedostomuoto tallentaa omaan paikkaansa: JPEG:ssä APP11-segmentteihin, PNG:ssä caBX-lohkoon, WebP:ssä C2PA-lohkoon sekä HEIC- ja AVIF-tiedostoissa uuid-laatikkoon. Erillisenä lohkona sen voi lukea ja poistaa purkamatta kuvaa. AI Label Remover näyttää lohkon, allekirjoittaneen ohjelman, tallennetut toiminnot ja lähdetyypin aina, kun ne ovat olemassa.',
        ],
      },
      {
        heading: 'Mitä poisto oikeasti tekee',
        paragraphs: [
          'Puhdistus poistaa upotetun merkinnän kyseisestä tiedoston kopiosta. Muista, että mikä tahansa muokkaus rikkoo jo kryptografisen sidoksen – tarkistimet ilmoittavat pikseleihinsä sopimattoman manifestin virheelliseksi – joten poistossa häviää merkintä, joka muuten kulkisi mukana.',
          'Jotkin järjestelmät lisäävät ”kestäviä” tunnisteita: näkymättömän vesileiman tai sormenjäljen, jonka avulla tarkistin voi hakea manifestin verkkorekisteristä, vaikka upotettu kopio olisi poistettu. Metadatan poisto ei vaikuta niihin, koska ne ovat pikseleissä tai etäpalvelimella.',
        ],
      },
      {
        heading: 'Säilyttää vai poistaa?',
        paragraphs: [
          'Tunnisteista on hyötyä, kun sinun täytyy osoittaa kuvan alkuperä – uutistyössä tai omien valokuviesi kohdalla. Ne voivat kuitenkin paljastaa ohjelmistoja, muokkaushistorian ja henkilöllisyyden, jotka haluaisit pitää omana tietonasi, tai [laukaista AI-merkinnän kevyesti muokatussa kuvassa](made-with-ai-label). Lue manifesti ensin ja päätä tiedostokohtaisesti.',
        ],
      },
    ],
    faqHeading: 'Kysymyksiä C2PA:sta',
    faq: [
      {
        q: 'Kuka käyttää C2PA:ta?',
        a: 'Adobe, Microsoft, Google, OpenAI, Meta, kameravalmistajat kuten Leica, Sony ja Nikon sekä monet uutisorganisaatiot tukevat standardia tai kuuluvat koalitioon, joskin kukin käyttää sitä eri tavalla.',
      },
      {
        q: 'Onko C2PA näkymätön vesileima?',
        a: 'Ei. C2PA on kuvadatan rinnalle tallennettua metadataa. Pikselivesileimat, kuten SynthID, ovat erillinen mekanismi, eikä puhdistus vaikuta niihin.',
      },
      {
        q: 'Miten tarkistan allekirjoituksen ennen puhdistusta?',
        a: 'AI Label Remover näyttää generaattorin, toiminnot ja lähdetyypin. Täydellistä allekirjoituksen tarkistusta varten aja alkuperäinen tiedosto ensin virallisen Content Credentials -tarkistimen läpi.',
      },
      {
        q: 'Heikentääkö C2PA:n poisto laatua?',
        a: 'Ei. Manifesti on oma lohkonsa; pakattu kuvadata kopioidaan sellaisenaan.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Poista GPS-sijainti kuvista iPhonella, Androidilla ja PC:llä',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Poista GPS-sijainti kuvista ennen jakamista: mitkä EXIF-kentät paljastavat sijaintisi, laitteesi ja ajan, mistä ne vuotavat ja miten poistat ne häviöttömästi.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Mitä puhelin tallentaa jokaiseen kuvaan',
        paragraphs: ['Kun sijaintipalvelut ovat päällä, tavallinen älypuhelinkuva voi sisältää:'],
        bullets: [
          'Leveys- ja pituusasteen sekä korkeuden, usein muutaman metrin tarkkuudella, sekä GPS-aikaleiman.',
          'Tarkan kuvaus- ja viimeisimmän muokkaushetken.',
          'Valmistajan ja mallin, objektiivin tiedot ja joskus sarjanumeron tai omistajan nimen.',
          'Upotetut esikatselukuvat ja toissijaiset kuvat (syvyyskartat, MPF-kuvat), joissa on oma kopio EXIF-tiedoista.',
        ],
      },
      {
        heading: 'Miten alkuperäinen tiedosto pääsee ulos',
        paragraphs: [
          'Suuret sosiaalisen median syötteet poistavat yleensä EXIF-tiedot julkaistavasta kuvasta, mutta monet reitit toimittavat koskemattoman alkuperäisen: viestisovellusten ”lähetä tiedostona” -tila, sähköpostin liitteet, jaetut pilvilinkit, keskustelupalstat, kirpputorit ja portfoliosivustot. Yksi kotona otettu kuva voi paljastaa osoitteesi; kuvasarja paljastaa päivärytmisi.',
        ],
      },
      {
        heading: 'Tarkista, minkä sijainnin kuvasi paljastaa',
        paragraphs: [
          'Pudota kuva työkaluun. ”Mitä se paljastaa” -välilehti näyttää heti, onko kuvassa paikkaa, henkilöitä tai aikaa koskevia kenttiä, ja GPS-sijainti puretaan desimaalikoordinaateiksi. ”Raaka metadata” luettelee jokaisen kentän ryhmiteltynä EXIF IFD0-, Exif- ja GPS-osioihin.',
        ],
      },
      {
        heading: 'Puhdista ilman sivuvaikutuksia',
        paragraphs: [
          'Paina ”Poista kaikki metadata”. GPS-, päivämäärä-, laite-, tekijä- ja ohjelmistokentät poistuvat, samoin upotetut pienoiskuvat ja MPF-lisäkuvat, jotka muuten säilyttäisivät piilokopion. Suuntatunniste kirjoitetaan takaisin pieneen EXIF-lohkoon, jotta pystykuvat eivät käänny kyljelleen, ja väriprofiili säilyy, jotta värit pysyvät oikeina. iPhonen HEIC-kuvat puhdistetaan sellaisinaan ilman muuntamista JPEG:ksi.',
        ],
      },
      {
        heading: 'Estä sijainti jo kamerassa',
        paragraphs: [
          'iPhonessa: Asetukset → Tietosuoja ja turvallisuus → Sijaintipalvelut → Kamera → Ei koskaan. Androidissa sijaintitunnisteen voi yleensä kytkeä pois Kamera-sovelluksen asetuksista (nimi vaihtelee valmistajan mukaan). Tiedoston puhdistaminen ennen jakamista on silti perusteellisin tapa, koska se poistaa myös laite-, aika- ja esikatselutiedot, joihin puhelimen asetukset eivät ulotu.',
        ],
      },
      {
        heading: 'Kuinka tarkkoja koordinaatit ovat',
        paragraphs: [
          'EXIF tallentaa leveys- ja pituusasteen asteina, minuutteina ja sekunteina, ja puhelimet kirjaavat sekunnit desimaaleineen. Yksi leveysasteen sekunti on noin 31 metriä, joten kahden desimaalin arvo osoittaa paperilla alle metrin levyisen kohdan. Todellinen tarkkuus riippuu signaalista – ulkona usein 3–10 metriä, sisällä heikompi – mutta se riittää silti yksittäisen talon tunnistamiseen. Monet puhelimet lisäävät myös korkeuden, joka voi vihjata kerroksesta, sekä kompassisuunnan, johon objektiivi osoitti.',
        ],
      },
      {
        heading: 'Sijainti piiloutuu muuallekin kuin GPS-kenttiin',
        paragraphs: [
          'GPS-hakemiston tyhjentäminen ei aina riitä. Kuvanhallintaohjelmat voivat kopioida koordinaatit XMP-lohkoon, ja IPTC-kentät kuten kaupunki, alue ja maa voivat nimetä paikan selväkielisesti. AI Label Remover poistaa XMP- ja IPTC-tiedot EXIF:n ohella, joten nämäkin kopiot häviävät. Mikään metadatatyökalu ei kuitenkaan poista itse kuvaa: katukyltit, talonumerot, ikkunanäkymä tai heijastus voivat paljastaa sijainnin, joten katso kuva läpi ennen julkaisua.',
        ],
      },
      {
        heading: 'Nopea tarkistus ennen jakamista',
        paragraphs: [],
        bullets: [
          'Pudota kuva AI Label Removeriin ja katso ”Mitä se paljastaa” -välilehteä.',
          'Jos paikka näkyy, paina ”Poista kaikki metadata” ja tallenna puhdas kopio.',
          'Tarkista, että vihreä paneeli vahvistaa paikan, henkilöiden ja ajan poistuneen.',
          'Vilkaise kuvaa näkyvien vihjeiden varalta – osoitteet, rekisterikilvet, maamerkit.',
          'Jaa puhdas kopio ja säilytä alkuperäinen omassa kirjastossasi. Useille kuville [eräpuhdistus](batch-remove-metadata) säästää aikaa.',
        ],
      },
    ],
    faqHeading: 'Kysymyksiä GPS-tiedoista ja kuvien yksityisyydestä',
    faq: [
      {
        q: 'Voiko sijainnin palauttaa puhdistuksen jälkeen?',
        a: 'Ei puhdistetusta tiedostosta – kentät poistetaan, ei piiloteta. Puhelimesi alkuperäisessä kuvassa sijainti on yhä, joten jaa vain puhdas kopio.',
      },
      {
        q: 'Jos kytken GPS:n pois, merkitäänkö kuviin silti sijainti?',
        a: 'Voidaan merkitä. Puhelin voi päätellä sijainnin Wi-Fi- ja matkapuhelinverkoista, joten poista sijaintioikeus itse kamerasovellukselta, ei pelkkää GPS:ää.',
      },
      {
        q: 'Eivätkö sosiaaliset verkostot poista GPS-tietoja joka tapauksessa?',
        a: 'Monet suuret poistavat EXIF-tiedot julkaistusta kuvasta. Liitteet, dokumentit ja pilvilinkit säilyttävät yleensä alkuperäisen metadatan.',
      },
      {
        q: 'Kääntyykö kuvani väärin päin?',
        a: 'Ei. Suuntatunniste säilytetään, joten kuva näkyy täsmälleen kuten ennenkin. Myös iPhonen HEIC-tiedostot puhdistetaan ilman muodon vaihtoa.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Poista metadata useista kuvista kerralla – ilmaiseksi',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Puhdista jopa 50 kuvaa kerralla selaimessa: rinnakkaiset työsäikeet pitävät käsittelyn nopeana, tulokset tarkistetaan ja kaiken voi tallentaa ZIP-tiedostona.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Erä alusta loppuun',
        paragraphs: [],
        bullets: [
          'Pudota enintään 50 JPG-, PNG-, WebP-, GIF-, HEIC- tai AVIF-tiedostoa työkaluun (enintään 25 Mt ja 40 megapikseliä tiedostoa kohden).',
          'Jokainen tiedosto luetaan automaattisesti; napsauta jonossa olevaa tiedostoa nähdäksesi sen raportin.',
          'Paina ”Poista kaikki metadata” kerran, niin kaikki luetut tiedostot puhdistetaan.',
          'Tallenna tiedostot yksitellen tai paina ”Tallenna kaikki ZIP-tiedostona” saadaksesi yhden arkiston.',
        ],
      },
      {
        heading: 'Nopeutta ilman palvelinta',
        paragraphs: [
          'AI Label Remover jakaa työn useille Web Workereille – selaimen taustasäikeille – prosessorin ytimien määrän mukaan. Kukin säie ottaa yhden tiedoston, jäsentää sen ja palauttaa puhdistetut tavut, joten sivu pysyy sujuvana raskaidenkin HEIC-tiedostojen kanssa. ZIP käyttää tallennusmenetelmää ilman pakkausta, koska kuvat on jo pakattu: arkiston luonti on nopeaa eikä aiheuta lisähäviötä.',
        ],
      },
      {
        heading: 'Jokainen tulos luetaan uudelleen',
        paragraphs: [
          'Puhdistuksen jälkeen jokainen tulostiedosto luetaan uudelleen, ja vihreä tulospaneeli vahvistaa, ovatko paikka, henkilöt, aika ja AI-jäljet poissa. Jos kahdella tiedostolla on sama nimi, ZIP-arkistossa toinen saa numeron, joten mitään ei kirjoiteta yli.',
        ],
      },
      {
        heading: 'Satojen tiedostojen käsittely',
        paragraphs: [
          'Etene 50 tiedoston kierroksissa ja tyhjennä pöytä kierrosten välillä muistin vapauttamiseksi. Vähämuistisissa puhelimissa sulje ensin muut raskaat välilehdet. Koska mitään ei ladata palvelimelle, voit jopa katkaista verkkoyhteyden, kun sivu on latautunut.',
        ],
      },
      {
        heading: 'Mikään ei poistu laitteelta',
        paragraphs: [
          'Yhtään kuvaa ei lähetetä, tallenneta tai kirjata; ainoa verkkoliikenne on itse sivun lataus. Siksi eräpuhdistus sopii asiakastoimituksiin, julkaisemattomiin kuvauksiin ja kaikkeen, mitä et saa lähettää kolmannelle osapuolelle – esimerkiksi [GPS-sijainnin poistamiseen lomakuvista](remove-gps-location-from-photos) tai [Stable Diffusion -kehotteiden siivoamiseen](remove-stable-diffusion-comfyui-metadata) kokonaisesta kansiosta.',
        ],
      },
    ],
    faqHeading: 'Kysymyksiä eräpuhdistuksesta',
    faq: [
      {
        q: 'Voiko samassa erässä olla eri tiedostomuotoja?',
        a: 'Kyllä. Yksi erä voi sisältää JPG-, PNG-, WebP-, GIF-, HEIC- ja AVIF-tiedostoja, ja jokainen tiedosto säilyttää oman muotonsa.',
      },
      {
        q: 'Miksi raja on 50 tiedostoa?',
        a: 'Kaikki käsittely tapahtuu laitteesi muistissa. Raja pitää puhelimet ja vanhemmat kannettavat vakaina; kierroksia voit ajaa niin monta kuin haluat.',
      },
      {
        q: 'Muuttuvatko tiedostonimet?',
        a: 'Eivät. Puhdistetut tiedostot säilyttävät nimensä. Vain ZIP-arkiston täsmälleen samannimiset tiedostot saavat numeroliitteen.',
      },
      {
        q: 'Toimiiko työkalu ilman verkkoyhteyttä?',
        a: 'Kyllä. Kun sivu on latautunut, se puhdistaa tiedostoja ilman yhteyttä, koska mitään ei lähetetä minnekään.',
      },
    ],
  },
};

export default fi;
