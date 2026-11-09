import type { Articles } from './types';

const pl: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Dlaczego prawdziwe zdjęcia dostają etykietę Informacje o AI na Instagramie',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Prawdziwe zdjęcie oznaczone etykietą Informacje o AI na Instagramie lub Facebooku często zawiera metadane C2PA lub IPTC dodane przez edytor graficzny. Sprawdź, jak je usunąć bez utraty jakości.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Etykieta analizuje plik, a nie treść fotografii',
        paragraphs: [
          'Etykieta „Informacje o AI” na platformach Meta jest nakładana automatycznie, gdy w pliku zostaną wykryte rozpoznawalne znaczniki generatywnej sztucznej inteligencji. Dwa kluczowe sygnały kryją się wewnątrz pliku: [manifest C2PA Content Credentials](what-is-c2pa-content-credentials) oraz atrybut IPTC DigitalSourceType w bloku XMP.',
          'Wartość trainedAlgorithmicMedia wskazuje, że cały obraz został wygenerowany przez algorytmy, z kolei compositeWithTrainedAlgorithmicMedia oznacza, że prawdziwe zdjęcie zawiera elementy edytowane za pomocą AI. Algorytmy serwisów społecznościowych skanują te pola podczas przesyłania.',
        ],
      },
      {
        heading: 'Skąd biorą się znaczniki AI w prawdziwych fotografiach',
        paragraphs: ['W przypadku ujęć z rzeczywistych aparatów lub smartfonów przyczyną jest niemal zawsze aplikacja edycyjna:'],
        bullets: [
          'Wypełnienie generatywne, rozszerzanie kadru lub narzędzia usuwania AI w Photoshopie i Lightroomie dopisują akcje c2pa i oznaczają plik jako kompozycję.',
          'Eksport z włączoną funkcją Content Credentials podpisuje całą historię zmian w pliku.',
          'Narzędzia typu „Magiczna gumka AI” w galeriach smartfonów zapisują adnotacje w blokach EXIF i XMP.',
          'Aplikacje do obróbki zachowują wcześniejsze znaczniki przy ponownym zapisie pliku.',
        ],
      },
      {
        heading: 'Wykrywanie znaczników za pomocą AI Label Remover',
        paragraphs: [
          'Po przeciągnięciu zdjęcia do obszaru roboczego zakładka „Ślady AI” wskaże wszystkie wykryte sygnały (np. C2PA JUMBF czy IPTC XMP). W zakładce „Surowe metadane” można dodatkowo sprawdzić oprogramowanie podpisujące manifest oraz zarejestrowane operacje.',
          'Ostrzeżenie o konieczności weryfikacji pojawia się, gdy plik zawiera manifest poświadczeń treści nawet bez wyraźnego oznaczenia AI. Część platform profilaktycznie nakłada etykietę już przy samej obecności manifestu.',
        ],
      },
      {
        heading: 'Bezstratne czyszczenie kopii przeznaczonej do publikacji',
        paragraphs: [
          'Kliknięcie przycisku „Usuń wszystkie metadane” powoduje, że AI Label Remover precyzyjnie wycina bloki C2PA, XMP, IPTC i EXIF ze strumienia binarnego, pozostawiając piksele, wymiary, orientację i profil kolorów ICC bez zmian. Szczegóły działania opisano na stronie narzędzia [AI tag cleaner](ai-tag-cleaner).',
          'Zwykłe ponowne zapisanie jako JPEG w programie graficznym powoduje ponowną kompresję ze stratą jakości, podczas gdy wycinanie bloków metadanych w całości chroni oryginalną jakość.',
        ],
      },
      {
        heading: 'Korygowanie błędnych oznaczeń a zasady przejrzystości',
        paragraphs: [
          'Usuwanie metadanych ma na celu ochronę prywatności i korygowanie nieprawidłowo oznaczonych fotografii. Jeśli obraz powstał w całości za pomocą generatywnej sztucznej inteligencji, należy postępować zgodnie z zasadami platform i otwarcie informować odbiorców o jego charakterze.',
        ],
      },
    ],
    faqHeading: 'Pytania dotyczące etykiet AI',
    faq: [
      { q: 'Czy mogę usunąć etykietę „Informacje o AI” po opublikowaniu posta?', a: 'Zwykle nie jest to możliwe w opublikowanym poście. Wyczyść oryginalny plik za pomocą [AI tag cleaner](ai-tag-cleaner) i opublikuj go ponownie.' },
      { q: 'Czy usunięcie metadanych gwarantuje brak etykiety?', a: 'Usuwa bezpośrednią przyczynę plikową (C2PA i IPTC). Niektóre platformy mogą jednak stosować niezależne modele klasyfikacji wizualnej.' },
      { q: 'Czy zdjęcie zmieni się wizualnie lub straci ostrość?', a: 'Nie. Dane pikseli są kopiowane bajt po bajcie bez ponownego kodowania.' },
      { q: 'Czy można zachować parametry aparatu i usunąć tylko znaczniki AI?', a: 'W celu zapewnienia pełnego bezpieczeństwa narzędzie kompleksowo usuwa wszystkie dane identyfikacyjne, w tym GPS i informacje o urządzeniu.' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Usuwanie workflow ComfyUI i promptów Stable Diffusion z plików PNG',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge i ComfyUI zapisują prompty, ziarna i całe drzewa węzłów w plikach PNG. Usuń te dane bez modyfikacji pojedynczego piksela.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Parametry generowania podróżują wraz z plikiem',
        paragraphs: [
          'Podczas renderowania obrazów w Stable Diffusion WebUI (AUTOMATIC1111), Forge lub ComfyUI wszystkie ustawienia są automatycznie zapisywane w segmentach tekstowych PNG (tEXt, zTXt, iTXt).',
          'W przypadku ComfyUI obejmuje to kompletny graf węzłów w formacie JSON. Każdy, kto pobierze plik PNG, może przeciągnąć go do ComfyUI i natychmiast odtworzyć użyte prompty, modele LoRA, ustawienia samplera oraz lokalne ścieżki na dysku.',
        ],
      },
      {
        heading: 'Dlaczego warto usuwać metadane generowania',
        paragraphs: [
          'Dopracowane prompty i unikalne konfiguracje węzłów w projektach komercyjnych stanowią chronioną własność intelektualną twórcy.',
          'Ponadto tekstowe bloki mogą ujawniać nazwę użytkownika i strukturę folderów na komputerze oraz zwiększają rozmiar pliku.',
        ],
      },
      {
        heading: 'Kontrola i usuwanie w AI Label Remover',
        paragraphs: [
          'Wgrywając plik do [usuwania metadanych PNG](png-metadata-remover), można wygodnie odczytać prompty przed ich wycięciem.',
          'Niezbędne do wyświetlania segmenty IHDR, IDAT, PLTE oraz profil kolorów iCCP są ściśle chronione.',
        ],
      },
      {
        heading: 'Stan pliku po zakończeniu czyszczenia',
        paragraphs: [
          'Oczyszczony plik PNG wygląda dokładnie tak samo, ale po przeciągnięciu do ComfyUI zachowuje się jak zwykły obraz bez ukrytych parametrów.',
        ],
      },
    ],
    faqHeading: 'Pytania o metadane Stable Diffusion',
    faq: [
      { q: 'Czy można wyłączyć zapisywanie metadanych w ComfyUI?', a: 'Tak, zmieniając ustawienia węzła Save Image lub korzystając z węzłów zapisujących bez metadanych.' },
      { q: 'Czy ComfyUI odtworzy workflow z oczyszczonego PNG?', a: 'Nie. Segmenty tekstowe zostały trwale usunięte, więc w pliku nie ma danych do rekonstrukcji.' },
      { q: 'Czy oczyszczony PNG zachowuje przezroczystość tła?', a: 'Tak, wartości pikseli i kanał alfa pozostają nienaruszone.' },
      { q: 'Czym to się różni od konwersji do JPEG?', a: 'Konwersja formatu wiąże się ze stratną kompresją. AI Label Remover zachowuje bezstratny format PNG.' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Usuwanie promptów z grafik Midjourney i DALL·E',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Grafiki z Midjourney, DALL·E 3 i Firefly zawierają treść promptu, identyfikator zadania i znaczniki AI. Wyczyść je przed publikacją w sieci.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Co zapisują generatory w chmurze',
        paragraphs: [
          'Usługi takie jak Midjourney, OpenAI DALL·E 3 czy Adobe Firefly umieszczają w nagłówkach identyfikator zadania, czas utworzenia oraz podpis cyfrowy [C2PA](what-is-c2pa-content-credentials).',
          'Midjourney często zapisuje pełną treść promptu w polach XMP lub komentarzach EXIF, co pozwala każdemu odczytać opis za pomocą standardowej przeglądarki plików.',
        ],
      },
      {
        heading: 'Ochrona promptów jako tajemnicy warsztatu',
        paragraphs: [
          'Osiągnięcie pożądanego stylu wymaga wielu godzin eksperymentów. Publikacja oryginalnego pliku bez czyszczenia ułatwia kopiowanie wypracowanych rozwiązań.',
        ],
      },
      {
        heading: 'Podgląd i bezpieczne usuwanie',
        paragraphs: [
          'AI Label Remover pozwala podejrzeć ukryte teksty i usunąć je jednym kliknięciem, bez wpływu na detale czy odwzorowanie barw grafiki.',
        ],
      },
      {
        heading: 'Ograniczenia techniczne',
        paragraphs: [
          'Czyszczenie metadanych dotyczy nagłówków kontenera pliku. Niewidzialne znaki wodne wbudowane w układ pikseli (np. Google SynthID) nie mogą być usunięte tą metodą.',
        ],
      },
    ],
    faqHeading: 'Pytania o prompty Midjourney i DALL·E',
    faq: [
      { q: 'Czy odbiorcy mogą zobaczyć prompt z opublikowanej grafiki?', a: 'Tak, jeśli serwis nie kompresuje grafiki automatycznie, każdy pobierający plik ma dostęp do metadanych.' },
      { q: 'Czy każda wersja Midjourney zapisuje prompt?', a: 'Większość plików pobieranych bezpośrednio z platformy zawiera pełne parametry generowania.' },
      { q: 'Czy czyszczenie wpływa na nasycenie barw?', a: 'Nie. Profil kolorów ICC oraz składowe RGB są w pełni zachowane.' },
      { q: 'Czy można przetwarzać całe serie wygenerowanych grafik?', a: 'Tak, narzędzie [zbiorczego usuwania metadanych](batch-remove-metadata) pozwala przeciągnąć do 50 grafik jednocześnie.' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Czym jest C2PA? Standard Content Credentials w prostych słowach',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Przystępny przewodnik po C2PA i poświadczeniach treści: co zawiera podpisany manifest, gdzie znajduje się w pliku i jak go usunąć.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'W skrócie',
        paragraphs: [
          'C2PA (Coalition for Content Provenance and Authenticity) to otwarty standard techniczny rozwijany m.in. przez Adobe, Microsoft, Google, Intela i Sony. Służy do dołączania do plików cyfrowego paszportu — Content Credentials.',
          'Paszport ten rejestruje urządzenie, którym wykonano zdjęcie, użyte programy, ingerencję sztucznej inteligencji oraz pełną historię edycji.',
        ],
      },
      {
        heading: 'Co kryje manifest C2PA',
        paragraphs: [
          'Manifest zawiera łańcuch poświadczeń: dane o sprzęcie, miniatury kolejnych etapów pracy, identyfikatory narzędzi oraz podpisy kryptograficzne.',
          'Użycie narzędzi generatywnych jest w nim wyraźnie odnotowywane, co pozwala platformom społecznościowym automatycznie nakładać oznaczenia.',
        ],
      },
      {
        heading: 'Lokalizacja w różnych formatach graficznych',
        paragraphs: [
          'W plikach JPEG manifest znajduje się w segmencie APP11 (format JUMBF), w PNG w segmencie caBX, a w HEIC i AVIF w dedykowanych strukturach uuid.',
          'Funkcja [usuwania C2PA](remove-c2pa-content-credentials) bezpiecznie wycina te sekcje bez naruszania warstwy wizualnej.',
        ],
      },
      {
        heading: 'Dlaczego użytkownicy decydują się na usunięcie C2PA',
        paragraphs: [
          'Oprócz ochrony prawdziwych fotografii przed błędnym oznakowaniem chroni to prywatność twórcy i zmniejsza wagę pliku nawet o setki kilobajtów.',
        ],
      },
      {
        heading: 'Zachować czy usunąć: świadomy wybór',
        paragraphs: [
          'W fotoreportażu manifest C2PA stanowi dowód autentyczności. W pracy komercyjnej i codziennym użytkowaniu usunięcie metadanych zapewnia pełną kontrolę nad prywatnością.',
        ],
      },
    ],
    faqHeading: 'Pytania o standard C2PA',
    faq: [
      { q: 'Czy C2PA to niewidzialny znak wodny?', a: 'Nie. C2PA to rekord metadanych w nagłówku pliku, który nie ingeruje w piksele obrazu.' },
      { q: 'Jakie programy wprowadzają obecnie C2PA?', a: 'Adobe Photoshop, Lightroom, DALL·E 3, wybrane aparaty Leica i Nikon oraz generatory chmurowe.' },
      { q: 'Jak zweryfikować podpis przed usunięciem?', a: 'Na stronie verify.contentcredentials.org lub w podglądzie AI Label Remover.' },
      { q: 'Czy usunięcie C2PA pogarsza jakość obrazu?', a: 'Nie, obraz nie jest poddawany ponownej kompresji.' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Usuwanie lokalizacji GPS ze zdjęć z telefonu i komputera',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Usuń współrzędne GPS ze zdjęć przed ich udostępnieniem: dowiedz się, jak EXIF zdradza Twój adres i jak bezpiecznie oczyścić plik bez utraty jakości.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Co smartfon zapisuje w każdym zdjęciu',
        paragraphs: [
          'Aparaty w smartfonach (iPhone i Android) domyślnie zapisują w metadanych EXIF dokładną szerokość i długość geograficzną, wysokość oraz kierunek aparatu.',
          'Udostępnienie oryginalnego pliku pozwala każdemu ustalić dokładną lokalizację domu, miejsca pracy lub szkoły dziecka.',
        ],
      },
      {
        heading: 'Jak dochodzi do wycieku oryginalnego pliku',
        paragraphs: [
          'O ile serwisy społecznościowe kompresują zdjęcia i usuwają GPS, o tyle przesyłanie jako „plik” lub „dokument” w komunikatorach, przez AirDrop, e-mail czy na portalach ogłoszeniowych zachowuje pełne współrzędne.',
        ],
      },
      {
        heading: 'Weryfikacja lokalizacji przed czyszczeniem',
        paragraphs: [
          'AI Label Remover od razu informuje o obecności współrzędnych geograficznych, prezentując dokładną pozycję oraz model urządzenia.',
        ],
      },
      {
        heading: 'Bezstratne czyszczenie bez re-kompresji',
        paragraphs: [
          '[Usuwanie danych EXIF](remove-exif-data) eliminuje znaczniki GPS i identyfikatory sprzętu bez ponownego kodowania pikseli, zachowując 100% ostrości.',
        ],
      },
      {
        heading: 'Wyłączanie geolokalizacji w ustawieniach telefonu',
        paragraphs: [
          'iPhone: Ustawienia > Prywatność i ochrona > Usługi lokalizacji > Aparat > „Nigdy”. Android: Ustawienia aparatu > wyłącz „Tagi lokalizacji”.',
        ],
      },
      {
        heading: 'Precyzja współrzędnych ze smartfona',
        paragraphs: [
          'Dzięki wspomaganiu GPS sieciami Wi-Fi współrzędne mają dokładność rzędu kilku metrów, wskazując konkretny budynek.',
        ],
      },
      {
        heading: 'Rzeczywiste zagrożenia dla bezpieczeństwa',
        paragraphs: [
          'Zdjęcia przedmiotów czy zwierząt zawierające współrzędne mogą zostać wykorzystane przez osoby niepowołane.',
        ],
      },
      {
        heading: 'Inne wrażliwe pola metadanych',
        paragraphs: [
          'Oprócz pozycji GPS zagrożenie stanowi numer seryjny aparatu, dokładny znacznik czasu z ułamkami sekund i identyfikatory sprzętowe.',
        ],
      },
      {
        heading: 'Nawyk sprawdzania plików przed wysyłką',
        paragraphs: [
          'Szybkie sprawdzenie pliku w przeglądarce przed publikacją skutecznie chroni prywatność.',
        ],
      },
    ],
    faqHeading: 'Pytania o lokalizację GPS w zdjęciach',
    faq: [
      { q: 'Czy po wyczyszczeniu można odzyskać lokalizację?', a: 'Nie, dane współrzędnych zostały trwale wycięte z pliku.' },
      { q: 'Czy komunikatory nie usuwają lokalizacji automatycznie?', a: 'Usuwają ją przy zwykłej wysyłce, ale przesyłanie jako dokument zachowuje oryginalne metadane.' },
      { q: 'Czy obsługiwane są pliki HEIC z iPhone’a?', a: 'Tak, narzędzie [czyszczenia metadanych HEIC](heic-metadata-remover) usuwa dane bez wymuszonej konwersji.' },
      { q: 'Czy orientacja zdjęcia nie zostanie obrócona?', a: 'Nie, znacznik orientacji niezbędny do poprawnego wyświetlania pozostaje nienaruszony.' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Zbiorcze usuwanie metadanych ze zdjęć — bez wysyłania na serwer',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Wyczyść do 50 zdjęć naraz bezpośrednio w przeglądarce: równoległa praca Web Workerów, brak transferu na serwer i pobieranie w jednym archiwum ZIP.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Błyskawiczne przetwarzanie całych serii',
        paragraphs: [
          'Czyszczenie pojedynczych zdjęć przy dużych sesjach jest uciążliwe. AI Label Remover umożliwia przeciągnięcie do 50 plików jednocześnie.',
          'Wielowątkowe Web Workery wykorzystują wszystkie rdzenie procesora w Twoim urządzeniu.',
        ],
      },
      {
        heading: 'Lokalna wydajność bez ograniczeń łącza',
        paragraphs: [
          'Pliki są przetwarzane bezpośrednio w pamięci przeglądarki, dzięki czemu obróbka nawet setek megabajtów trwa zaledwie parę sekund.',
        ],
      },
      {
        heading: 'Weryfikacja każdego wyniku',
        paragraphs: [
          'Po przetworzeniu program odczytuje nagłówek każdego pliku, upewniając się, że EXIF, GPS, C2PA i prompty zostały bezpowrotnie usunięte.',
        ],
      },
      {
        heading: 'Pobieranie pojedynczo lub jako archiwum ZIP',
        paragraphs: [
          'Pliki zachowują oryginalne nazwy i mogą być pobrane pojedynczo lub jako jedno skompresowane archiwum ZIP.',
        ],
      },
      {
        heading: 'Pełne bezpieczeństwo i praca offline',
        paragraphs: [
          'Narzędzie działa w pełni lokalnie i nie wymaga aktywnego połączenia z siecią po załadowaniu strony.',
        ],
      },
    ],
    faqHeading: 'Pytania o czyszczenie seryjne',
    faq: [
      { q: 'Czy mogę łączyć różne formaty w jednej partii?', a: 'Tak, można jednocześnie przeciągnąć pliki JPEG, PNG, WebP, HEIC i AVIF.' },
      { q: 'Dlaczego wprowadzono limit 50 plików?', a: 'Dla zagwarantowania stabilności i ochrony pamięci RAM urządzeń mobilnych.' },
      { q: 'Czy nazwy plików ulegną zmianie w archiwum ZIP?', a: 'Nie, pliki w archiwum zachowują oryginalne nazwy.' },
      { q: 'Czy do działania wymagany jest internet?', a: 'Nie, po otwarciu strony kod wykonuje się w całości lokalnie w przeglądarce.' },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Przeglądarka metadanych zdjęć: EXIF, GPS, XMP, IPTC i C2PA w jednym miejscu',
    metaTitle: 'Przeglądarka metadanych zdjęć online: EXIF, GPS, AI',
    summary: [
      'Zanim udostępnisz zdjęcie albo zaufasz pobranemu obrazowi, dobra przeglądarka metadanych pokaże wszystko, co plik mówi o sobie — a nie tylko kilka pól widocznych w telefonie czy Eksploratorze plików.',
      'Ten poradnik wyjaśnia, co obejmuje pełne sprawdzenie metadanych, czego nie widać we wbudowanych przeglądarkach, dlaczego wiele internetowych przeglądarek EXIF samo w sobie zagraża prywatności i jak czytać najważniejsze pola.',
    ],
    description:
      'Darmowa przeglądarka metadanych online: sprawdź EXIF, GPS, XMP, IPTC, C2PA i prompty AI zdjęcia w przeglądarce — bez wysyłania pliku i bez konta.',
    updated: '2026-11-09',
    related: ['how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos', 'what-is-c2pa-content-credentials'],
    sections: [
      {
        heading: 'Co obejmuje pełne sprawdzenie metadanych',
        paragraphs: ['Dokładna przeglądarka metadanych odczytuje każdy blok pliku, nie tylko EXIF:'],
        bullets: [
          'EXIF — marka i model aparatu lub telefonu, ekspozycja, czas wykonania, obiektyw i orientacja.',
          'GPS — szerokość i długość geograficzna, wysokość i kierunek, jeśli lokalizacja była włączona. Zobacz też, [jak usunąć lokalizację GPS ze zdjęć](remove-gps-location-from-photos).',
          'XMP — program do edycji, historia zmian, opisy, oceny i pola dotyczące AI.',
          'IPTC — podpisy, słowa kluczowe, autor, prawa autorskie i DigitalSourceType (sposób powstania obrazu).',
          'C2PA — [Content Credentials](what-is-c2pa-content-credentials): kto podpisał plik, jakie operacje zapisano i czy użyto AI.',
          'Bloki tekstowe PNG — [parametry Stable Diffusion i workflow ComfyUI](remove-stable-diffusion-comfyui-metadata) oraz inny osadzony tekst.',
          'Profil ICC i miniatury — informacje o kolorach i ukryte podglądy.',
        ],
      },
      {
        heading: 'Wbudowane przeglądarki i ich martwe pola',
        paragraphs: [
          'Windows pokazuje metadane w Właściwości › Szczegóły, macOS w Inspektorze aplikacji Podgląd lub w oknie Pokaż informacje w Finderze, iPhone po przesunięciu zdjęcia w górę, a Zdjęcia Google w panelu informacji. Do szybkiego sprawdzenia daty, aparatu i miejsca to wystarczy, ale narzędzia te pokazują tylko wybrane pola EXIF i zwykle całkowicie pomijają XMP, IPTC, C2PA oraz tekst PNG. Plik może wyglądać na czysty w Eksploratorze, a mimo to zawierać pełny prompt AI.',
        ],
      },
      {
        heading: 'Pułapka prywatności w internetowych przeglądarkach EXIF',
        paragraphs: [
          'Wiele stron typu „przeglądarka EXIF online” działa tak, że wysyła Twój obraz na swój serwer, tam go odczytuje i odsyła raport. Przy sprawdzaniu prywatności to odwrócona logika: zdjęcie, o które się martwisz — razem z pozycją GPS — trafia właśnie do kogoś obcego. Wybieraj przeglądarkę, która czyta plik lokalnie. Prosty test: załaduj stronę, odłącz internet i sprawdź, czy narzędzie nadal działa.',
        ],
      },
      {
        heading: 'Odczyt pliku w AI Label Remover',
        paragraphs: ['Przeciągnij obraz do pola na górze tej strony. Wynik jest podzielony na trzy karty:'],
        bullets: [
          '„Co zdradza” — proste podsumowanie miejsca, osób, czasu i urządzenia, z GPS przeliczonym na współrzędne dziesiętne.',
          '„Ślady AI” — manifesty C2PA, typy źródła IPTC, nazwy generatorów i prompty wraz z werdyktem.',
          '„Surowe metadane” — każde pole pogrupowane według źródła: EXIF IFD0, Exif, GPS, przestrzenie nazw XMP, IPTC, C2PA i bloki tekstowe PNG.',
        ],
      },
      {
        heading: 'Pola, które warto przeczytać najpierw',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude — dokładne miejsce; wklej współrzędne do mapy, by zobaczyć, co ujawniają.',
          'DateTimeOriginal a ModifyDate — kiedy zdjęcie zrobiono, a kiedy ostatnio zapisano.',
          'Make, Model, BodySerialNumber, LensSerialNumber — mogą powiązać zdjęcia z jednym konkretnym urządzeniem.',
          'Artist, Copyright, OwnerName — nazwiska, o których obecności w pliku możesz nie wiedzieć.',
          'Software i CreatorTool — jakie aplikacje edytowały plik, w tym narzędzia AI.',
          'DigitalSourceType i claim generator C2PA — jak sam obraz deklaruje swoje pochodzenie. Więcej w poradniku [jak sprawdzić, czy zdjęcie jest wygenerowane przez AI](how-to-check-if-image-is-ai-generated).',
        ],
      },
      {
        heading: 'Gdy przeglądarka nie pokazuje prawie nic',
        paragraphs: [
          'Obraz zapisany z mediów społecznościowych, zrzut ekranu albo zdjęcie wysłane komunikatorem zwykle zostało ponownie skompresowane i pozbawione metadanych. Brak danych jest wtedy normalny i nie mówi nic o tym, czy zdjęcie jest prawdziwe, edytowane czy wygenerowane przez AI. Jeśli pochodzenie ma znaczenie, poproś o oryginalny plik.',
        ],
      },
      {
        heading: 'Wyświetlenie to jeszcze nie weryfikacja',
        paragraphs: [
          'Zwykłe metadane to zwykły tekst, który każdy może zmienić — traktuj je jako wskazówkę, nie dowód. C2PA jest inne, bo jest podpisane cyfrowo, ale wyświetlenie manifestu nie oznacza sprawdzenia podpisu; do tego służy oficjalny weryfikator Content Credentials. Gdy już wiesz, co jest w pliku, i chcesz to usunąć, kliknij „Usuń wszystkie metadane” — dane znikną bez zmiany samego obrazu. Strona [usuwanie danych EXIF](remove-exif-data) wyjaśnia dokładnie, co zostaje usunięte.',
        ],
      },
    ],
    faqHeading: 'Pytania o przeglądanie metadanych',
    faq: [
      {
        q: 'Czy istnieje darmowa przeglądarka metadanych, która nie wysyła zdjęcia?',
        a: 'Tak. AI Label Remover czyta pliki w Twojej przeglądarce, bez wysyłania i bez konta, a po załadowaniu strony działa także offline.',
      },
      {
        q: 'Czy mogę zobaczyć prompt obrazu wygenerowanego przez AI?',
        a: 'Jeśli generator go zapisał — tak. Prompty Stable Diffusion i ComfyUI znajdują się w blokach tekstowych PNG, a niektóre usługi zapisują je w polach XMP lub EXIF.',
      },
      {
        q: 'Dlaczego Windows nie pokazuje metadanych mojego pliku PNG?',
        a: 'Eksplorator plików pokazuje dla PNG tylko kilka właściwości. Bloki tekstowe, XMP i C2PA są tam niewidoczne, ale pełna przeglądarka je wyświetli.',
      },
      {
        q: 'Czy metadane mogą udowodnić, że zdjęcie jest fałszywe?',
        a: 'Metadane dają wskazówki, a nie ostateczny dowód. Wiarygodnie zweryfikować można tylko podpisane dane C2PA; zwykłe pola łatwo edytować lub usunąć.',
      },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    title: 'Czy ten obraz wygenerowała AI? Jak sprawdzić sam plik',
    metaTitle: 'Jak sprawdzić, czy zdjęcie jest z AI (za darmo)',
    summary: [
      'Najszybsza wiarygodna wskazówka, czy obraz został wygenerowany przez AI, kryje się w samym pliku: Content Credentials C2PA, pole IPTC DigitalSourceType i tekst zapisany przez generator często wskazują dokładnie, jakim narzędziem powstał obraz.',
      'Dowiesz się, czego szukać, jak to odczytać darmowym narzędziem działającym w przeglądarce i dlaczego brak śladów nigdy nie dowodzi, że zdjęcie jest prawdziwe.',
    ],
    description:
      'Sprawdź, czy zdjęcie jest z AI: odczytaj C2PA, IPTC DigitalSourceType i metadane generatora w przeglądarce i dowiedz się, czego dowodzi każdy sygnał.',
    updated: '2026-11-09',
    related: ['image-metadata-viewer-online', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    sections: [
      {
        heading: 'Zdobądź oryginalny plik',
        paragraphs: [
          'Metadane przetrwają tylko w pliku w takiej postaci, w jakiej opuścił aparat lub generator. Zrzuty ekranu, ponownie zapisane kopie i obrazy pobrane z mediów społecznościowych zwykle zostały przekodowane i straciły większość danych. Jeśli to możliwe, poproś o oryginalny eksport — wysłany „jako plik”, a nie jako skompresowane zdjęcie.',
        ],
      },
      {
        heading: 'Wskazówka pierwsza: Content Credentials (C2PA)',
        paragraphs: [
          'Narzędzia obsługujące C2PA dołączają [cyfrowo podpisany zapis pochodzenia](what-is-c2pa-content-credentials). Jego claim generator wskazuje aplikację lub usługę, która utworzyła obraz, lista c2pa.actions zawiera kroki takie jak „created” czy „edited”, a digitalSourceType może wprost deklarować generowanie przez AI.',
          'Ponieważ zapis jest podpisany, weryfikator potrafi też stwierdzić, czy obraz zmieniono po podpisaniu. Manifest od usługi AI to najmocniejszy dowód, jaki mogą dać metadane.',
        ],
      },
      {
        heading: 'Wskazówka druga: IPTC DigitalSourceType',
        paragraphs: ['Wiele generatorów i edytorów wypełnia standardowe pole IPTC opisujące, jak powstała treść. Najczęstsze wartości:'],
        bullets: [
          'trainedAlgorithmicMedia — wygenerowane przez model generatywnej AI.',
          'compositeWithTrainedAlgorithmicMedia — prawdziwe zdjęcie z fragmentami wygenerowanymi lub zastąpionymi przez AI, np. Generatywnym wypełnieniem w Photoshopie.',
          'algorithmicMedia — utworzone przez algorytm bez danych treningowych, np. grafika proceduralna.',
          'digitalCapture — wykonane aparatem, bez zadeklarowanej treści generatywnej.',
        ],
      },
      {
        heading: 'Wskazówka trzecia: prompty i nazwy narzędzi',
        paragraphs: [
          '[Interfejsy Stable Diffusion i ComfyUI](remove-stable-diffusion-comfyui-metadata) zapisują prompt, seed, model i workflow jako tekst w plikach PNG. Inne narzędzia zostawiają swoją nazwę w XMP CreatorTool lub EXIF Software. Każdy z tych śladów jasno wskazuje na udział AI — i często mówi dokładnie, jak obraz powstał. Dlatego warto wiedzieć, [jak ukryć prompty Midjourney i DALL·E](hide-midjourney-dalle-prompts).',
        ],
      },
      {
        heading: 'Jak sprawdzić, czy obraz jest wygenerowany przez AI',
        paragraphs: [
          'Przeciągnij plik do pola na górze tej strony. Karta „Ślady AI” wydaje jeden z trzech werdyktów — „Znaleziono ślady AI”, „Warto przyjrzeć się bliżej” albo „Brak śladów AI” — i wymienia każdy sygnał wraz ze źródłem. „Surowe metadane” pokazują wartości źródłowe. Nic nie jest wysyłane na serwer. Aby usunąć znalezione dane, użyj narzędzia [AI Tag Cleaner](ai-tag-cleaner).',
        ],
      },
      {
        heading: 'Gdy plik nie ma metadanych',
        paragraphs: [
          'Brak metadanych niczego nie dowodzi — ani w jedną, ani w drugą stronę: edytory, komunikatory i serwisy społecznościowe usuwają je nagminnie, a brak EXIF z aparatu to co najwyżej słaba poszlaka. Kolejne kroki to narzędzie dostawcy do wykrywania znaków wodnych (np. Google SynthID dla Gemini), wyszukiwanie obrazem w celu znalezienia najwcześniejszej kopii i sprawdzenie, gdzie obraz pojawił się po raz pierwszy. Detektory AI analizujące piksele podają prawdopodobieństwo, a nie dowód.',
        ],
      },
    ],
    faqHeading: 'Pytania o rozpoznawanie obrazów AI',
    faq: [
      {
        q: 'Czy da się sprawdzić, że obraz powstał w ChatGPT lub Gemini?',
        a: 'Jeśli plik zachował Content Credentials, claim generator podaje nazwę usługi. W przypadku obrazów z Gemini narzędzie Google SynthID może też wykryć znak wodny w pikselach.',
      },
      {
        q: 'Jeśli AI Label Remover nie znajdzie śladów AI, czy zdjęcie jest prawdziwe?',
        a: 'Niekoniecznie. Oznacza to tylko, że plik nie zawiera metadanych AI. Metadane łatwo tracą się lub zostają usunięte, więc czysty wynik traktuj jako „nieznane”, a nie dowód.',
      },
      {
        q: 'Czy mogę sprawdzić obraz zapisany z Instagrama lub Facebooka?',
        a: 'Możesz, ale platformy zwykle usuwają metadane z publikowanych kopii, więc spodziewaj się niewiele albo nic. Etykieta „Informacje o AI” nadawana przez platformę to osobny sygnał — zobacz, [dlaczego prawdziwe zdjęcia ją dostają](made-with-ai-label).',
      },
      {
        q: 'Czy sprawdzenie jest darmowe i prywatne?',
        a: 'Tak — za darmo, bez konta, a plik jest odczytywany lokalnie, bez wysyłania na serwer.',
      },
    ],
  },
};

export default pl;
