import type { Pages } from './types';

const pl: Pages = {
  home: {
    reassure: 'Online, za darmo, bez rejestracji i bez instalacji — zdjęcia są odczytywane i czyszczone bezpośrednio w przeglądarce i nigdy nie trafiają na serwer.',
    sources: {
      label: 'Odczytuje i usuwa metadane z obrazów utworzonych w',
      note: 'Nazwy produktów wskazują jedynie źródło obrazów; AI Label Remover nie jest powiązany z tymi firmami.',
    },
    learn: {
      what: {
        title: 'Czym są metadane?',
        paragraphs: [
          'Metadane to „dane o danych”: notatki zapisane wewnątrz pliku obrazu, których nigdy nie widać na samym zdjęciu. Aparaty, telefony, edytory zdjęć i generatory obrazów AI dodają je automatycznie, zwykle bez żadnej informacji.',
          'W zdjęciach metadane dzielą się na pięć dużych grup. Każda odpowiada na inne pytanie o obraz — i o osobę, która go zrobiła lub stworzyła.',
        ],
        types: [
          { name: 'Opisowe', text: 'Tytuł, podpis, słowa kluczowe, imiona osób na zdjęciu.', example: 'IPTC Caption, XMP dc:title' },
          { name: 'Techniczne', text: 'Marka i model aparatu, obiektyw, przysłona, czas naświetlania, ISO, numer seryjny.', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: 'Miejsce i czas', text: 'Współrzędne GPS, wysokość, data wykonania i strefa czasowa.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: 'Prawa i administracja', text: 'Autor, właściciel, prawa autorskie, ostatnio użyty program do edycji.', example: 'EXIF Artist, Copyright, Software' },
          { name: 'Pochodzenie i AI', text: 'Content Credentials, etykiety „utworzono za pomocą AI”, prompty i workflow.', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          'To samo zadanie ma wiele nazw — „usuwanie metadanych”, „usuń EXIF”, „czyszczenie metadanych”, „usuń informacje ze zdjęcia” — i wszystkie oznaczają wyjęcie ukrytych notatek z pliku bez zmiany obrazu. Podobnie „przeglądarka”, „czytnik” czy „narzędzie do sprawdzania metadanych” pokazuje, co jest w pliku. AI Label Remover robi jedno i drugie.',
      },
      why: {
        title: 'Dlaczego warto sprawdzić i usunąć metadane przed udostępnieniem zdjęcia?',
        paragraphs: [
          'Pojedyncze pole metadanych zwykle jest nieszkodliwe, ale razem mówią o Tobie bardzo wiele. Zdjęcie zrobione w domu i wystawione w serwisie ogłoszeniowym może zawierać współrzędne GPS z dokładnością do kilku metrów; obrazy wysłane e-mailem lub linkiem do chmury zachowują wszystko, co zapisał aparat. Zobacz, [jak GPS w zdjęciach może zdradzić Twój adres](remove-gps-location-from-photos).',
          'W przypadku obrazów utworzonych lub edytowanych z pomocą AI metadane decydują też, czy platforma pokaże etykietę „Utworzono za pomocą AI”, i mogą ujawnić cały napisany przez Ciebie prompt. Sprawdź, [skąd bierze się etykieta „Made with AI”](made-with-ai-label).',
        ],
        bullets: [
          'Ujawnienie, gdzie mieszkasz, pracujesz lub podróżujesz, dzięki współrzędnym GPS.',
          'Powiązanie wielu zdjęć z jedną osobą przez numer seryjny aparatu lub nazwisko właściciela.',
          'Odsłonięcie promptów, seedów, modeli i workflow, które miały pozostać prywatne.',
          'Otrzymanie etykiety AI od platformy z powodu dołączonych danych C2PA lub IPTC.',
        ],
      },
      standards: {
        title: 'Popularne standardy metadanych w zdjęciach',
        lead: 'Jeden plik obrazu może jednocześnie zawierać kilka „przegródek” z metadanymi, z których każda działa według innego standardu. AI Label Remover odczytuje i usuwa wszystkie poniższe.',
        items: [
          { name: 'EXIF', text: 'Zapisywany przez aparaty i telefony: ustawienia ekspozycji, urządzenie, znaczniki czasu, GPS, miniatury.' },
          { name: 'XMP', text: 'Format XML firmy Adobe dla historii edycji, ocen, słów kluczowych i wielu właściwości związanych z AI.' },
          { name: 'IPTC', text: 'Standard redakcji prasowych: podpis, autor, prawa autorskie i pole DigitalSourceType, które oznacza obrazy AI.' },
          { name: 'C2PA', text: 'Podpisane kryptograficznie Content Credentials zapisujące, jak plik powstał i był edytowany. [Czym jest C2PA](what-is-c2pa-content-credentials).' },
          { name: 'PNG text', text: 'Chunki tEXt, iTXt i zTXt, w których [Stable Diffusion i ComfyUI](remove-stable-diffusion-comfyui-metadata) zapisują prompty i workflow.' },
        ],
      },
    },
    security: {
      title: 'Twoje zdjęcia pozostają bezpieczne',
      lead: 'Przy każdym narzędziu, które obsługuje prywatne pliki, pierwsze pytanie brzmi: „dokąd trafiają moje zdjęcia?”. Odpowiedź AI Label Remover: donikąd.',
      items: [
        { title: '100% na Twoim urządzeniu', text: 'Odczyt i czyszczenie odbywają się w Web Workerze w karcie przeglądarki. Żaden serwer nie otrzymuje Twoich plików.' },
        { title: 'Nic nie jest zapisywane, brak trenowania AI', text: 'Ponieważ zdjęcia nigdzie nie są wysyłane, nie istnieje żadna kopia, którą można by zapisać, ujawnić lub użyć do trenowania modelu.' },
        { title: 'Działa offline', text: 'Wczytaj stronę, wyłącz Wi-Fi i wyczyść plik — nadal działa. Karta Sieć w DevTools nie pokazuje żadnych wychodzących danych obrazu.' },
        { title: 'Bez konta, bez śledzenia', text: 'Bez rejestracji, analityki, reklam ani pikseli stron trzecich. Strona zapamiętuje tylko wybrany język i motyw.' },
      ],
    },
    faq: [
      { q: 'Czym różni się EXIF od metadanych?', a: 'EXIF to jeden z rodzajów metadanych — ten, który zapisują aparaty i telefony. „Metadane” to pojęcie szersze, obejmujące także XMP, IPTC, C2PA i fragmenty tekstowe PNG.' },
      { q: 'Czy metadane mogą pokazać, gdzie zrobiono zdjęcie?', a: 'Tak, jeśli obraz zawiera tagi GPS. Telefony zwykle zapisują szerokość, długość geograficzną i wysokość, gdy aparat ma dostęp do lokalizacji. Czyszczenie usuwa te tagi bez wpływu na jakość. Zobacz, [jak usunąć lokalizację GPS ze zdjęć](remove-gps-location-from-photos).' },
      { q: 'Jak usunąć metadane AI z obrazu?', a: 'Upuść obraz w polu na górze tej strony i kliknij „Usuń wszystkie metadane”. Przed czyszczeniem karta każdego pliku pokazuje znalezione dane C2PA, IPTC i prompt.' },
      { q: 'Czy przesyłanie tu zdjęć jest bezpieczne?', a: 'Twoje zdjęcia w ogóle nie są przesyłane. AI Label Remover otwiera pliki w przeglądarce, przetwarza je w pamięci karty i zapisuje czystą kopię bezpośrednio na Twoim urządzeniu. Po wczytaniu strony możesz przejść offline, a narzędzie nadal działa.' },
    ],
    ctaTools: 'Zobacz wszystkie narzędzia',
    start: {
      title: 'Zacznij od pliku, który masz',
      lead: 'Wybierz, co chcesz zrobić — każde narzędzie ma pole do upuszczania plików na górze strony.',
      badge: 'Polecane',
      open: 'Otwórz narzędzie',
    },
    nav: {
      remove: 'Usuń metadane',
      check: 'Podgląd i sprawdzanie',
      learn: 'Wiedza',
      viewer: 'Podgląd metadanych zdjęcia',
      aiCheck: 'Sprawdź, czy zdjęcie to AI',
      whatIs: 'Czym są metadane?',
    },
  },
  labels: {
    tools: 'Więcej narzędzi do metadanych',
    relatedTools: 'Narzędzia do tego zadania',
    homeTitle: 'Wybierz narzędzie do swojego pliku',
    homeLead: 'Każda strona skupia się na jednym zadaniu, a narzędzie jest od razu na górze.',
    formats: 'Co zostaje usunięte, a co zostaje',
    contact: 'Kontakt',
    contactText: 'Pytania, błędy lub plik, który nie czyści się poprawnie? Napisz na',
    updated: 'Zaktualizowano {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – usuń tagi AI z metadanych obrazu',
      description: 'Usuń tagi AI z obrazów: IPTC „wygenerowane przez AI”, C2PA, nazwy generatorów w XMP i prompty. Bezstratnie, za darmo, w przeglądarce, bez wysyłania.',
      navLabel: 'Czyszczenie tagów AI',
      h1: 'Usuwanie tagów AI z obrazów',
      lead: 'Generatory AI i edytory z funkcjami AI oznaczają pliki, które przetwarzają: typ źródła „wygenerowane przez AI”, podpisany rekord C2PA, nazwę aplikacji, czasem cały prompt. Upuść obraz poniżej, aby zobaczyć każdy tag AI, a potem usuń je bez ponownego kodowania choćby jednego piksela.',
      sections: [
        {
          heading: 'Co jest tagiem AI',
          paragraphs: ['Tag AI to każde pole w pliku, które mówi lub sugeruje, że użyto AI. Kryją się w kilku standardach metadanych naraz, dlatego ręczne usunięcie jednego pola rzadko wystarcza:'],
          bullets: [
            'Wartości DigitalSourceType w IPTC i XMP, takie jak trainedAlgorithmicMedia lub compositeWithTrainedAlgorithmicMedia.',
            'Akcje w [Content Credentials C2PA](what-is-c2pa-content-credentials) oznaczające kroki generatywne, zapisywane przez ChatGPT, Firefly, Photoshop i inne.',
            'Pola Software i Creator Tool z nazwą generatora oraz wpisy historii XMP po edycjach AI.',
            'Prompt, seed i model w chunkach PNG ze [Stable Diffusion i ComfyUI](remove-stable-diffusion-comfyui-metadata).',
          ],
        },
        {
          heading: 'Jak działa czyszczenie tagów AI',
          paragraphs: [
            'AI Label Remover odczytuje strukturę pliku bezpośrednio w przeglądarce. Każdy tag AI jest pokazany wraz z dokładnym polem, z którego pochodzi, a plik dostaje ocenę — „Znaleziono ślady AI”, „Warto przyjrzeć się bliżej” lub „Brak śladów AI” — zanim cokolwiek zostanie zmienione.',
            'Kliknięcie „Usuń wszystkie metadane” wycina bloki z tymi tagami: XMP, IPTC, EXIF, magazyn manifestów C2PA i fragmenty tekstowe PNG. Skompresowane dane obrazu są kopiowane bajt po bajcie, a czysta kopia jest ponownie odczytywana, aby potwierdzić, że nie został żaden tag AI.',
          ],
        },
        {
          heading: 'Które narzędzia zostawiają jakie tagi',
          paragraphs: [
            'Obrazy z ChatGPT i Gemini mają rekordy C2PA; Firefly i Generatywne wypełnienie w Photoshopie dodają C2PA i DigitalSourceType; Midjourney zapisuje opisowe XMP; interfejsy Stable Diffusion zapisują w PNG wszystkie ustawienia generowania. Jeśli chcesz zachować prompty w tajemnicy, zobacz [jak ukryć prompty Midjourney i DALL·E](hide-midjourney-dalle-prompts).',
          ],
        },
        {
          heading: 'Czego czyszczenie tagów AI nie zrobi',
          paragraphs: [
            'Czyszczenie dotyczy tylko metadanych. Niewidoczne znaki wodne, takie jak SynthID, są zapisane w pikselach i pozostają, a platformy mogą używać własnych klasyfikatorów. Usuwanie tagów służy prywatności i poprawianiu błędnych etykiet na prawdziwych zdjęciach — jeśli obraz jest wygenerowany przez AI i realistyczny, zasady platform zwykle nadal wymagają, aby to zaznaczyć.',
          ],
        },
      ],
      faqHeading: 'Pytania o czyszczenie tagów AI',
      faq: [
        { q: 'Czy tag AI to to samo co etykieta AI?', a: 'Nie do końca. Tag to dane w pliku; etykieta to to, co pokazuje platforma, np. „Informacje o AI” na Instagramie. Platformy często tworzą etykietę na podstawie tagu. Aby uniknąć tego na prawdziwym zdjęciu, zobacz [No AI Tag](no-ai-tag).' },
        { q: 'Czy mogę usunąć tylko tagi AI, a resztę zostawić?', a: 'Narzędzie usuwa całe bloki metadanych zamiast pojedynczych pól, bo tagi AI są rozrzucone po kilku blokach. Obrót, profil kolorów ICC i rozmiar w pikselach zawsze zostają, więc obraz wygląda dokładnie tak samo.' },
        { q: 'Czy usuwanie tagów AI obniża jakość?', a: 'Nie. Nic nie jest ponownie kodowane; usuwane są tylko metadane, a dane obrazu pozostają identyczne.' },
        { q: 'Jakie formaty mogę czyścić?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF i AVIF — do 50 plików naraz, każdy do 25 MB. Prompty w PNG obsłuży też [usuwanie metadanych PNG](png-metadata-remover).' },
        { q: 'Czy to usuwa metadane obrazów z ChatGPT lub Gemini?', a: 'Usuwa Content Credentials C2PA i pola IPTC zapisywane przez te usługi. Google osadza też znak wodny SynthID w pikselach, którego żadne narzędzie do metadanych nie usunie.' },
        { q: 'Czy mogę zobaczyć prompt przed usunięciem?', a: 'Tak. Karta „Surowe metadane” pokazuje prompty, workflow i nazwy generatorów słowo w słowo, więc możesz skopiować to, co chcesz zachować.' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'remove-stable-diffusion-comfyui-metadata'],
      updated: '2026-11-06',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – zdjęcia bez etykiety „Informacje o AI”',
      description: 'Etykieta „Informacje o AI” na prawdziwym zdjęciu? Usuń dane C2PA i IPTC, które ją wywołują, i publikuj bez tagu AI. Bezstratnie, za darmo, w przeglądarce.',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag – prawdziwe zdjęcia bez tagu AI',
      lead: 'Drobna poprawka generatywna w Photoshopie lub aplikacji na telefon może wystarczyć, by Instagram, Facebook czy Threads dodały etykietę „Informacje o AI” do autentycznego zdjęcia. Upuść plik poniżej, aby zobaczyć, które dane ją wywołują, a potem udostępnij czystą kopię bez tagu AI w metadanych.',
      sections: [
        {
          heading: 'Dlaczego prawdziwe zdjęcie dostaje tag AI',
          paragraphs: ['Platformy odczytują dane o pochodzeniu, które edytory dołączają do pliku. [Dlaczego prawdziwe zdjęcia dostają etykietę „Made with AI”](made-with-ai-label) wyjaśnia szczegóły; najczęstsze przyczyny to:'],
          bullets: [
            'Manifest C2PA zapisujący krok generatywny, np. Generatywne wypełnienie, usuwanie AI lub rozszerzanie AI.',
            'Wartość DigitalSourceType w IPTC lub XMP mówiąca, że obraz złożono z pomocą AI.',
            'Content Credentials dodawane domyślnie przez aplikację do edycji przy eksporcie.',
          ],
        },
        {
          heading: 'Jak opublikować bez tagu AI',
          paragraphs: ['To zajmuje mniej niż minutę, a nic nie opuszcza Twojego urządzenia:'],
          bullets: [
            'Upuść edytowane zdjęcie w polu na górze tej strony.',
            'Przeczytaj ocenę i pola, które za nią stoją — raport podaje dokładną akcję C2PA lub wartość IPTC.',
            'Kliknij „Usuń wszystkie metadane” i zapisz czystą kopię.',
            'Opublikuj czystą kopię, a nie oryginalny eksport.',
          ],
        },
        {
          heading: 'Zatrzymaj tag u źródła',
          paragraphs: [
            'Jeśli często edytujesz, wyłącz Content Credentials w ustawieniach eksportu Photoshopa i Lightrooma, aby w ogóle nie były zapisywane. Dla wielu zdjęć naraz zobacz [jak usunąć metadane hurtowo](batch-remove-metadata).',
          ],
        },
        {
          heading: 'Co No AI Tag może, a czego nie może obiecać',
          paragraphs: [
            'Usunięcie metadanych usuwa przyczynę zapisaną w pliku, a to ona odpowiada za etykietę w większości edytowanych zdjęć. Nie usuwa znaków wodnych w pikselach, takich jak SynthID, a platforma nadal może oznaczyć post własną detekcją lub poprosić o samodzielne oznaczenie. Ta strona jest przeznaczona dla prawdziwych zdjęć z drobnymi poprawkami: jeśli obraz jest wygenerowany przez AI i może wprowadzać w błąd, oznacz go.',
          ],
        },
      ],
      faqHeading: 'Pytania o No AI Tag',
      faq: [
        { q: 'Czy to usunie etykietę „Informacje o AI” z opublikowanego posta?', a: 'Nie. Etykieta należy do posta na platformie. Usuń lub zarchiwizuj post, wyczyść plik tutaj i opublikuj czystą kopię.' },
        { q: 'Czy No AI Tag daje gwarancję?', a: 'Nie. Narzędzie usuwa metadane, które czytają platformy, ale mogą one korzystać też z innych sygnałów. W większości edytowanych zdjęć to właśnie metadane są powodem etykiety.' },
        { q: 'Czy działa ze zdjęciami z iPhone’a i Androida?', a: 'Tak. HEIC z iPhone’a i JPG z Androida są czyszczone bez konwersji. Jest też osobne narzędzie: [usuwanie metadanych HEIC](heic-metadata-remover).' },
        { q: 'A tagi AI na obrazie w całości wygenerowanym przez AI?', a: '[Czyszczenie tagów AI](ai-tag-cleaner) je pokazuje i usuwa, ale zasady platform zwykle nadal wymagają samodzielnego oznaczania realistycznych obrazów AI.' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'batch-remove-metadata'],
      updated: '2026-11-09',
    },
    'remove-exif-data': {
      metaTitle: 'Usuń dane EXIF ze zdjęć online – za darmo i prywatnie',
      description: 'Usuń EXIF — GPS, aparat, numer seryjny, datę — z JPG, HEIC, PNG i WebP w przeglądarce. Bez wysyłania, bez utraty jakości, do 50 plików naraz.',
      navLabel: 'Usuwanie EXIF',
      h1: 'Usuń dane EXIF ze zdjęć',
      lead: 'Upuść zdjęcia poniżej, aby zobaczyć każde pole EXIF — pozycję GPS, aparat i obiektyw, numer seryjny, czas wykonania — i usunąć je jednym kliknięciem. Wszystko dzieje się na Twoim urządzeniu; pliki nigdy nie są wysyłane.',
      sections: [
        {
          heading: 'Co zdradzają dane EXIF',
          paragraphs: ['EXIF to blok notatek technicznych, które aparat lub telefon zapisuje w każdym zdjęciu. Osobno większość jest niegroźna, ale razem mówią o Tobie sporo. Te pola mają znaczenie dla prywatności:'],
          bullets: [
            'Szerokość, długość geograficzna i wysokość GPS — często z dokładnością do kilku metrów, wystarczającą, by znaleźć dom.',
            'Data i godzina wykonania zdjęcia wraz ze strefą czasową.',
            'Marka i model aparatu lub telefonu, obiektyw, a w wielu aparatach numer seryjny, który łączy zdjęcia ze sobą.',
            'Imię właściciela lub autora i program, który ostatnio edytował plik.',
            'Osadzona miniatura, która po przycięciu wciąż może pokazywać pierwotny kadr.',
          ],
        },
        {
          heading: 'Jak działa to narzędzie do usuwania EXIF',
          paragraphs: [
            'AI Label Remover odczytuje strukturę pliku bezpośrednio. W JPEG wycina segment APP1 z EXIF i XMP, a także IPTC, komentarze i miniatury; w HEIC, PNG i WebP usuwa odpowiadające im boksy lub chunki. Skompresowane dane obrazu są kopiowane bajt po bajcie, więc nic nie jest ponownie kodowane, a zdjęcie wygląda identycznie.',
            'Pola, które decydują o wyświetlaniu, celowo zostają: obrót, profil kolorów ICC i rozmiar w pikselach. Dzięki temu unikasz obróconych zdjęć i wyblakłych kolorów, które dają prostsze narzędzia. Na koniec wyczyszczony plik jest ponownie odczytywany, abyś widział, że pola EXIF naprawdę zniknęły.',
          ],
        },
        {
          heading: 'Kiedy usuwać EXIF przed udostępnieniem',
          paragraphs: [
            'Wiele dużych serwisów społecznościowych usuwa EXIF przy wysyłaniu, ale wiele miejsc tego nie robi: załączniki e-mail, linki do chmury, fora, serwisy ogłoszeniowe, komunikatory wysyłające pliki w „oryginalnej jakości” i Twoja własna strona. Jeśli nie wiesz, gdzie trafi zdjęcie, wyczyszczenie go wcześniej to bezpieczny wybór.',
            'Sprzedaż czegoś w internecie, publikowanie zdjęcia zrobionego w domu czy wysyłanie zdjęć komuś, kogo dopiero poznałeś, to klasyczne sytuacje, w których [dane GPS mogą zdradzić lokalizację](remove-gps-location-from-photos).',
          ],
        },
        {
          heading: 'Prywatność w samym projekcie',
          paragraphs: [
            'Internetowe narzędzia do usuwania EXIF zwykle wysyłają zdjęcie na serwer, przetwarzają je tam i odsyłają. AI Label Remover robi wszystko w Web Workerach w karcie przeglądarki: po wczytaniu strony możesz nawet wyłączyć internet, a narzędzie nadal działa. Bez konta, bez znaku wodnego i bez limitów poza 25 MB i 40 megapikselami na plik.',
          ],
        },
      ],
      faqHeading: 'Pytania o usuwanie EXIF',
      faq: [
        { q: 'Czy usunięcie EXIF obniża jakość zdjęcia?', a: 'Nie. Wycinane są tylko bloki metadanych; skompresowane dane obrazu są kopiowane bez zmian, więc rozdzielczość, ostrość i kolory pozostają dokładnie takie same.' },
        { q: 'Czy zdjęcie nadal będzie prawidłowo obrócone?', a: 'Tak. Wartość orientacji zostaje, razem z profilem kolorów ICC, więc obraz wyświetla się tak jak wcześniej.' },
        { q: 'Czy mogę usunąć EXIF ze zdjęć HEIC z iPhone’a?', a: 'Tak. HEIC i HEIF są obsługiwane bezpośrednio, bez konwersji do JPEG. Jest też osobna strona: [usuwanie metadanych HEIC](heic-metadata-remover).' },
        { q: 'Jak sprawdzić, że EXIF zniknął?', a: 'Po czyszczeniu AI Label Remover ponownie odczytuje nowy plik i pokazuje, które pola zostały. Możesz też otworzyć właściwości pliku w swoim systemie.' },
        { q: 'Czy mogę zrobić to dla wielu zdjęć naraz?', a: 'Tak: do 50 plików jednocześnie, do pobrania jako jeden plik ZIP. Zobacz [jak usunąć metadane hurtowo](batch-remove-metadata).' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'made-with-ai-label'],
      updated: '2026-11-06',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'Usuń Content Credentials C2PA z obrazów za darmo',
      description: 'Sprawdź i usuń Content Credentials C2PA (manifesty JUMBF) z JPG, PNG, HEIC, WebP i AVIF — bezstratnie i bez wysyłania plików gdziekolwiek.',
      navLabel: 'Usuwanie C2PA',
      h1: 'Usuń Content Credentials C2PA',
      lead: 'Content Credentials to podpisana historia dołączona do obrazu: która aplikacja go utworzyła, jakie edycje nastąpiły i czy użyto generatywnej AI. Upuść plik poniżej, aby odczytać jego manifest C2PA, a potem bezstratnie usunąć cały magazyn manifestów.',
      sections: [
        {
          heading: 'Co zawiera manifest C2PA',
          paragraphs: ['C2PA (Coalition for Content Provenance and Authenticity) określa sposób osadzania w pliku kryptograficznie podpisanego rekordu. [C2PA w praktyce](what-is-c2pa-content-credentials) omawia to szerzej; zwykle manifest zawiera:'],
          bullets: [
            'Claim generator — aplikację lub usługę, która go podpisała, np. Photoshop, Firefly, ChatGPT lub aparat.',
            'Listę akcji: utworzono, otwarto, edytowano, przycięto oraz znaczniki kroków generatywnej AI.',
            'Składniki — wcześniejsze wersje lub obrazy źródłowe, z których powstał plik.',
            'Cyfrowy typ źródła mówiący, czy treść została zarejestrowana, złożona czy wygenerowana przez AI.',
            'Podpis i certyfikat wiążące rekord z dokładnymi danymi obrazu.',
          ],
        },
        {
          heading: 'Gdzie C2PA znajduje się w każdym formacie',
          paragraphs: [
            'W JPEG magazyn manifestów leży w segmentach APP11 jako boksy JUMBF; w PNG to chunk caBX; w HEIC i AVIF boks uuid; w WebP osobny chunk RIFF. AI Label Remover znajduje je wszystkie, pokazuje zawarte w nich deklaracje i usuwa cały magazyn, kopiując dane obrazu bez zmian.',
            'Ponieważ podpis wiąże manifest z dokładnymi bajtami, każdy ponowny zapis w innej aplikacji zwykle i tak go psuje lub usuwa. Czyste usunięcie zapobiega pozostawieniu uszkodzonego, częściowo ważnego rekordu.',
          ],
        },
        {
          heading: 'Powody, by zachować, i powody, by usunąć',
          paragraphs: [
            'Content Credentials bywają cenne: pomagają redakcjom i twórcom udowodnić, skąd pochodzi obraz. Jeśli to Twój cel, zachowaj je — i w każdym przypadku zachowaj oryginał, bo usuniętych metadanych nie da się przywrócić.',
            'Usunięcie ma sens, gdy rekord ujawnia więcej, niż chcesz (nazwiska, historię edycji, obrazy źródłowe), albo gdy edytor dodał znacznik AI do prawdziwego zdjęcia po drobnej poprawce. Możesz też wyłączyć Content Credentials w ustawieniach eksportu Photoshopa i Lightrooma.',
          ],
        },
      ],
      faqHeading: 'Pytania o C2PA',
      faq: [
        { q: 'Czy AI Label Remover weryfikuje podpisy C2PA?', a: 'Nie. Odczytuje i pokazuje zawartość manifestu, ale nie sprawdza łańcucha certyfikatów. Do weryfikacji podpisu użyj oficjalnego narzędzia Content Credentials Verify.' },
        { q: 'Czy usuwanie Content Credentials jest legalne?', a: 'Usuwanie metadanych z plików, które należą do Ciebie lub które możesz modyfikować, jest zasadniczo w porządku, ale nie używaj tego, by wprowadzać w błąd co do autora obrazu lub sposobu jego powstania. To informacje ogólne, nie porada prawna.' },
        { q: 'Dlaczego moje zdjęcie ma ocenę „Warto przyjrzeć się bliżej”?', a: 'Plik ma manifest C2PA, który nie wspomina wprost o AI. Niektóre platformy traktują każdy manifest jako wskazówkę, więc sprawdź wymienione akcje, zanim zdecydujesz.' },
        { q: 'Czy platforma nadal będzie wiedzieć, że obraz był edytowany?', a: 'Nie z usuniętego manifestu. Platformy mogą korzystać z innych sygnałów, a niewidoczne znaki wodne w pikselach nie są naruszane przez usuwanie metadanych.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'hide-midjourney-dalle-prompts'],
      updated: '2026-11-06',
    },
    'heic-metadata-remover': {
      metaTitle: 'Usuwanie metadanych HEIC – EXIF i GPS ze zdjęć iPhone',
      description: 'Usuń EXIF, lokalizację GPS i znaczniki czasu ze zdjęć HEIC i HEIF z iPhone’a bez konwersji do JPEG. Bezstratnie, w przeglądarce, nic nie jest wysyłane.',
      navLabel: 'Usuwanie metadanych HEIC',
      h1: 'Usuwanie metadanych HEIC ze zdjęć z iPhone’a',
      lead: 'iPhone zapisuje zdjęcia w HEIC, a każde z nich rejestruje, gdzie i kiedy zostało zrobione. Upuść pliki HEIC lub HEIF poniżej, aby zobaczyć te metadane i je usunąć — zdjęcie pozostaje w HEIC, bez konwersji i bez utraty jakości.',
      sections: [
        {
          heading: 'Co zapisuje zdjęcie HEIC z iPhone’a',
          paragraphs: ['Typowe zdjęcie z iPhone’a zawiera więcej, niż większość ludzi się spodziewa:'],
          bullets: [
            'Dokładne współrzędne GPS, wysokość i kierunek, w którym skierowany był aparat.',
            'Datę, godzinę i strefę czasową wykonania oraz daty modyfikacji.',
            'Model urządzenia, obiektyw, ustawienia aparatu i wersję iOS.',
            'Dane specyficzne dla Apple, np. identyfikator parowania Live Photo.',
            'Dane XMP zapisane przez aplikacje do edycji, czasem z rekordami C2PA.',
          ],
        },
        {
          heading: 'Usuwanie metadanych bez konwersji do JPEG',
          paragraphs: [
            'Zwykła rada to przekonwertować HEIC do JPEG i liczyć, że metadane nie przetrwają. To jednak ponownie koduje obraz, obniża jakość i często usuwa profil kolorów o szerokiej gamie. AI Label Remover zamiast tego edytuje sam kontener HEIC: usuwa elementy Exif i XMP, boksy uuid z C2PA i boksy znaczników czasu, a dane HEVC, obrót (irot/imir) i profil kolorów (colr) pozostawia nienaruszone.',
            'Ten sam silnik obsługuje AVIF, który używa tego samego kontenera ISOBMFF, więc eksporty AVIF z nowoczesnych aplikacji czyści się tak samo.',
          ],
        },
        {
          heading: 'Ustawienia iPhone’a a czyszczenie pliku',
          paragraphs: [
            'iOS pozwala wyłączyć lokalizację dla pojedynczego udostępnienia przyciskiem „Opcje” w arkuszu udostępniania, a aplikacja Zdjęcia umożliwia zmianę lub usunięcie lokalizacji dla każdego zdjęcia. To dobre rozwiązanie przy pojedynczych zdjęciach, ale łatwo o nim zapomnieć i nie usuwa innych pól. Zobacz, [dlaczego GPS w zdjęciach to ryzyko](remove-gps-location-from-photos).',
            'Przy większej liczbie zdjęć — folderze z wakacji, zdjęciach produktów czy obrazach do ogłoszenia — szybciej jest upuścić je w AI Label Remover i zapisać jeden ZIP, a raport przed/po pokazuje dokładnie, co zostało usunięte.',
          ],
        },
      ],
      faqHeading: 'Pytania o HEIC',
      faq: [
        { q: 'Czy działa w Windows, gdzie HEIC czasem się nie otwiera?', a: 'Tak. AI Label Remover sam odczytuje strukturę HEIC, więc nie potrzebuje zainstalowanego kodeka. Pliki HEIC pokazują etykietę formatu zamiast podglądu, ale odczyt i czyszczenie działają normalnie.' },
        { q: 'Czy wyczyszczony plik nadal otworzy się w Zdjęciach?', a: 'Tak. Wynikiem jest standardowy plik HEIC z tymi samymi danymi obrazu; usunięte są tylko elementy metadanych.' },
        { q: 'Czy obsługiwane są Live Photo?', a: 'AI Label Remover przetwarza nieruchome zdjęcie HEIC. Powiązane wideo Live Photo to osobny plik i nie jest zmieniane.' },
        { q: 'Czy jest limit rozmiaru pliku?', a: 'Każdy plik może mieć do 25 MB i 40 megapikseli, co obejmuje zdjęcia z każdego obecnego iPhone’a, a jednocześnie możesz wyczyścić 50 plików.' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
      updated: '2026-11-06',
    },
    'png-metadata-remover': {
      metaTitle: 'Usuwanie metadanych PNG – prompty i chunki tekstowe',
      description: 'Usuń metadane PNG — chunki tEXt, iTXt i zTXt z promptami Stable Diffusion lub ComfyUI, XMP, eXIf i C2PA — przy zachowaniu bezstratnego obrazu.',
      navLabel: 'Usuwanie metadanych PNG',
      h1: 'Usuwanie metadanych PNG',
      lead: 'Pliki PNG ukrywają metadane w chunkach tekstowych: prompty i workflow AI, nazwiska autorów, oprogramowanie i znaczniki czasu. Upuść pliki PNG poniżej, aby odczytać każdy chunk i je usunąć, podczas gdy dane obrazu pozostają identyczne co do bitu.',
      sections: [
        {
          heading: 'Gdzie PNG przechowuje metadane',
          paragraphs: ['PNG to sekwencja chunków. Sam obraz znajduje się w IHDR, PLTE i IDAT; wszystko inne jest opcjonalne. AI Label Remover usuwa następujące chunki:'],
          bullets: [
            'tEXt, zTXt i iTXt — tekst dowolny, skompresowany i międzynarodowy. Stable Diffusion WebUI zapisuje tu chunk „parameters”; ComfyUI zapisuje JSON „prompt” i „workflow”.',
            'Pakiety XMP zapisane w iTXt, w tym deklaracje IPTC i źródła AI.',
            'eXIf — dane EXIF, w tym GPS, jeśli aplikacja skopiowała je ze zdjęcia.',
            'caBX — Content Credentials C2PA.',
            'tIME (czas ostatniej modyfikacji) i dSIG (podpis cyfrowy).',
          ],
        },
        {
          heading: 'Co zostaje, by obraz wyglądał tak samo',
          paragraphs: [
            'Przezroczystość (tRNS), gamma i chromatyczność (gAMA, cHRM), flaga sRGB i osadzony profil ICC (iCCP) wpływają na wyświetlanie, więc zostają. Animowane PNG zachowują chunki acTL, fcTL i fdAT, dzięki czemu animacje APNG nadal działają.',
            'Ponieważ dane IDAT są kopiowane, a nie kompresowane ponownie, wyczyszczony plik jest identyczny z oryginałem co do piksela — zwykle nieco mniejszy, bo chunków tekstowych już nie ma.',
          ],
        },
        {
          heading: 'Ochrona promptów i workflow AI',
          paragraphs: [
            'Jeśli udostępniasz obrazy ze Stable Diffusion, Forge lub ComfyUI, każdy może przeciągnąć PNG z powrotem do tego samego narzędzia i odzyskać Twój dokładny prompt, seed, model i graf węzłów. [Jak Stable Diffusion i ComfyUI ukrywają prompty w PNG](remove-stable-diffusion-comfyui-metadata) pokazuje, co jest zapisywane. Czyszczenie usuwa wszystko, a karta „Surowe metadane” pozwala wcześniej skopiować prompt, jeśli chcesz go zachować.',
          ],
        },
      ],
      faqHeading: 'Pytania o metadane PNG',
      faq: [
        { q: 'Czy usunięcie metadanych PNG zmieni kolory?', a: 'Nie. Chunki związane z kolorem — sRGB, gAMA, cHRM i iCCP — zostają, a dane obrazu IDAT są kopiowane bez zmian.' },
        { q: 'Czy działa z przezroczystymi PNG?', a: 'Tak. Dane przezroczystości (tRNS lub kanał alfa w IDAT) są częścią obrazu i nigdy nie są zmieniane.' },
        { q: 'Czy mogę gdzieś zachować prompt?', a: 'Skopiuj go z karty „Surowe metadane” przed czyszczeniem. Po usunięciu metadanych nie da się ich odzyskać z wyczyszczonego pliku.' },
        { q: 'Czy działa też z PNG z Midjourney lub DALL·E?', a: 'Tak. Tekst, XMP lub dane C2PA osadzane przez te usługi są usuwane w ten sam sposób. Zobacz [jak ukryć prompty Midjourney i DALL·E](hide-midjourney-dalle-prompts).' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'batch-remove-metadata'],
      updated: '2026-11-06',
    },
  },
  info: {
    about: {
      metaTitle: 'O AI Label Remover – jak działa czyszczenie metadanych',
      description: 'Kto tworzy AI Label Remover, jak działa czyszczenie metadanych w przeglądarce, jak piszemy i aktualizujemy poradniki oraz czego narzędzie nigdy nie zrobi.',
      navLabel: 'O nas',
      title: 'O AI Label Remover',
      lead: 'AI Label Remover to darmowe narzędzie do odczytywania i usuwania ukrytych metadanych z obrazów — EXIF, GPS, XMP, IPTC, Content Credentials C2PA i promptów AI — zbudowane tak, aby Twoje pliki nigdy nie musiały opuszczać urządzenia.',
      sections: [
        {
          heading: 'Dlaczego powstało',
          paragraphs: [
            'Zdjęcia i obrazy AI zawierają dużo więcej informacji, niż większość ludzi sądzi: lokalizację domu w tagach GPS, numery seryjne urządzeń, całe prompty i workflow oraz rekordy pochodzenia, które platformy czytają, by nadawać etykiety. Większość narzędzi online prosi o wysłanie tych samych plików, które chcesz chronić. AI Label Remover powstał, by robić to samo bez tego kompromisu.',
          ],
        },
        {
          heading: 'Jak działa narzędzie',
          paragraphs: [
            'Gdy dodajesz obraz, przeglądarka odczytuje go lokalnie. Web Workery analizują strukturę pliku — segmenty JPEG, chunki PNG, chunki RIFF WebP, bloki GIF i boksy HEIC/AVIF — i wyświetlają każdy znaleziony blok metadanych. Czyszczenie usuwa te bloki ze strumienia bajtów, kopiuje skompresowane dane obrazu bez zmian i ponownie odczytuje wynik, aby potwierdzić, co zostało.',
            'Nie ma żadnego przetwarzania po stronie serwera. Strona to zestaw statycznych podstron; po wczytaniu narzędzie działa offline.',
          ],
        },
        {
          heading: 'Jak powstają nasze artykuły',
          paragraphs: [
            'Poradniki na tej stronie opierają się na opublikowanych specyfikacjach (EXIF, XMP, IPTC Photo Metadata, C2PA, formaty PNG i ISOBMFF), stronach pomocy platform i testach na prawdziwych plikach z opisywanych narzędzi. Każdy artykuł pokazuje datę ostatniej aktualizacji, a aktualizujemy je, gdy zmieniają się standardy lub zasady platform.',
            'Artykuły to informacje ogólne, nie porada prawna. Zasady platform dotyczące etykiet AI często się zmieniają; sprawdź ich strony pomocy, zanim na czymś polegniesz.',
          ],
        },
        {
          heading: 'Czego AI Label Remover nie zrobi',
          paragraphs: [],
          bullets: [
            'Nie wyśle, nie zapisze ani nie zaloguje Twoich plików — nie ma serwera, który mógłby je odebrać.',
            'Nie zmieni pikseli, nie usunie niewidocznych znaków wodnych ani widocznych logo.',
            'Nie obiecuje, że platforma nada lub nie nada etykiety.',
            'Nie pomoże podawać obrazów AI za prawdziwe zdjęcia. Używaj go do ochrony prywatności i poprawiania błędów.',
          ],
        },
        {
          heading: 'Niezależność',
          paragraphs: [
            'AI Label Remover jest niezależny i nie jest powiązany z Meta, Google, OpenAI, Adobe, Midjourney, Apple ani C2PA. Nazwy produktów służą wyłącznie do opisu zgodności.',
          ],
        },
      ],
      updated: '2026-11-06',
    },
    privacy: {
      metaTitle: 'Polityka prywatności – AI Label Remover',
      description: 'Polityka prywatności prostym językiem: obrazy nie opuszczają urządzenia, brak kont, analityki i reklam; zapisywany jest tylko język i motyw.',
      navLabel: 'Prywatność',
      title: 'Polityka prywatności',
      lead: 'AI Label Remover to narzędzie do ochrony prywatności, więc korzystanie z niego nie powinno jej kosztować. Ta strona prostym językiem wyjaśnia, co dzieje się z Twoimi obrazami i z nielicznymi danymi, które obsługuje strona.',
      sections: [
        {
          heading: 'W skrócie',
          paragraphs: [],
          bullets: [
            'Twoje obrazy są przetwarzane na Twoim urządzeniu i nigdy nie są wysyłane.',
            'Nie ma kont, rejestracji ani list mailingowych — nie wiemy, kim jesteś.',
            'Nie ma analityki, reklam, pikseli śledzących ani skryptów stron trzecich.',
            'Zapisywane są tylko język i jasny/ciemny motyw, w Twojej przeglądarce, i możesz je w każdej chwili usunąć.',
          ],
        },
        {
          heading: 'Co dzieje się z Twoimi obrazami',
          paragraphs: ['Gdy dodajesz obraz do AI Label Remover, oto cała jego droga:'],
          bullets: [
            'Przeglądarka otwiera plik z Twojego urządzenia i trzyma go w pamięci karty.',
            'Web Workery w karcie odczytują metadane, a po kliknięciu czyszczenia zapisują czystą kopię — nadal w pamięci.',
            'Przy zapisie przeglądarka zapisuje czysty plik lub ZIP bezpośrednio na urządzeniu.',
            'Po zamknięciu lub odświeżeniu karty obrazy i raporty znikają. Nic nie zostaje na serwerze, bo żaden serwer ich nie otrzymuje.',
          ],
        },
        {
          heading: 'Możesz to sprawdzić sam',
          paragraphs: [
            'Nie musisz wierzyć nam na słowo. Wczytaj stronę, wyłącz Wi-Fi lub dane komórkowe i wyczyść plik: nadal działa, bo nic nie trzeba wysyłać. Jeśli znasz narzędzia deweloperskie, otwórz kartę Sieć podczas czyszczenia — zobaczysz, że żadne dane obrazu nie opuszczają urządzenia.',
          ],
        },
        {
          heading: 'Czego nie zbieramy',
          paragraphs: ['AI Label Remover nie zbiera ani nie przechowuje:'],
          bullets: [
            'Twoich obrazów, ich metadanych ani raportów wyświetlanych na ekranie;',
            'imienia, adresu e-mail ani danych konta;',
            'Twojej lokalizacji — GPS znaleziony w zdjęciach jest pokazywany tylko Tobie, na Twoim ekranie;',
            'historii sprawdzanych plików ani sposobu korzystania z narzędzia.',
          ],
        },
        {
          heading: 'Co jest zapisywane w przeglądarce i jak to usunąć',
          paragraphs: ['Aby pamiętać Twoje wybory, strona zapisuje na urządzeniu dwie małe preferencje:'],
          bullets: [
            'Język: wpis „lang” w local storage i własne ciasteczko „lang”, przechowywane przez rok, aby strona główna otwierała się w wybranym języku. Zawiera tylko kod języka, np. „pl”.',
            'Motyw: wpis „theme” w local storage, jeśli wybierzesz tryb jasny lub ciemny.',
            'Aby je usunąć, wyczyść ciasteczka i dane tej strony w ustawieniach przeglądarki. AI Label Remover nadal działa; po prostu zapomina Twoje wybory.',
          ],
        },
        {
          heading: 'Gdy odwiedzasz stronę',
          paragraphs: [
            'Jak każda strona internetowa, przy otwieraniu podstrony nasz serwer potrzebuje kilku podstawowych danych technicznych, by ją wysłać: adresu sieciowego urządzenia (adres IP), typu przeglądarki i otwieranej strony. Dane te mogą być tymczasowo zapisywane w logach, by strona działała sprawnie i by blokować nadużycia, i są przechowywane tylko tak długo, jak to konieczne. Nie używamy ich do identyfikacji, nie tworzymy Twojego profilu i nigdy ich nie udostępniamy ani nie sprzedajemy.',
            'Gdy otwierasz stronę główną, serwer sprawdza język przeglądarki i język wybrany wcześniej, wyłącznie po to, by otworzyć właściwą wersję. Dzieje się to na bieżąco i nie jest zapisywane.',
          ],
        },
        {
          heading: 'Dzieci',
          paragraphs: [
            'AI Label Remover nie prosi nikogo o dane osobowe ani ich nie zbiera, także od dzieci. Młodsi użytkownicy mogą korzystać z narzędzia bez zakładania konta i bez podawania informacji o sobie.',
          ],
        },
        {
          heading: 'Twoje prawa',
          paragraphs: [
            'Ponieważ AI Label Remover nie zbiera imienia, adresu e-mail ani konta, nie mamy profilu, który moglibyśmy udostępnić, poprawić lub usunąć. To, co strona pamięta na Twoim urządzeniu, zawsze pozostaje pod Twoją kontrolą. Tymczasowo logowane dane techniczne nie są powiązane z nazwiskiem ani kontem i są usuwane, gdy przestają być potrzebne.',
          ],
        },
        {
          heading: 'Zmiany tej polityki',
          paragraphs: ['Jeśli sposób, w jaki AI Label Remover obsługuje dane, kiedykolwiek się zmieni, zaktualizujemy tę stronę i datę na górze.'],
        },
      ],
      updated: '2026-11-06',
    },
  },
};

export default pl;
