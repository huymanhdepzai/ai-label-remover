import type { HomeBasics } from '../pages/types';

const pl: HomeBasics = {
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
    { q: 'Jak usunąć metadane AI z obrazu?', a: 'Upuść obraz w polu na górze tej strony i kliknij „Wyczyść wszystkie obrazy”. Przed czyszczeniem karta każdego pliku pokazuje znalezione dane C2PA, IPTC i prompt.' },
    { q: 'Czy przesyłanie tu zdjęć jest bezpieczne?', a: 'Twoje zdjęcia w ogóle nie są przesyłane. AI Label Remover otwiera pliki w przeglądarce, przetwarza je w pamięci karty i zapisuje czystą kopię bezpośrednio na Twoim urządzeniu. Po wczytaniu strony możesz przejść offline, a narzędzie nadal działa.' },
  ],
};

export default pl;
