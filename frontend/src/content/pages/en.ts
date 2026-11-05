import type { Pages } from './types';

const en: Pages = {
  home: {
    reassure: 'Online, free, no sign-up, nothing to install — photos are read and cleaned right in your browser and never uploaded to a server.',
    ctaTools: 'See all tools',
    sources: {
      label: 'Reads and removes metadata from images made with',
      note: 'Product names only identify where images come from; AI Label Remover is not affiliated with these companies.',
    },
    start: {
      title: 'Start with the file you have',
      lead: 'Pick the job you need done — every tool has the drop zone built in at the top of the page.',
      badge: 'Recommended',
      open: 'Open tool',
    },
    nav: {
      remove: 'Remove metadata',
      check: 'View & check',
      learn: 'Learn',
      viewer: 'View photo metadata',
      aiCheck: 'Check if a photo is AI',
      whatIs: 'What is metadata?',
    },
    learn: {
      what: {
        title: 'What is metadata?',
        paragraphs: [
          'Metadata is “data about data”: notes stored inside an image file that never show up in the picture itself. Cameras, phones, photo editors and AI image generators all add to it automatically, usually without telling you.',
          'For photos, metadata falls into five broad groups. Each one answers a different question about the image — and about the person who took or made it.',
        ],
        types: [
          { name: 'Descriptive', text: 'Title, caption, keywords, names of people in the shot.', example: 'IPTC Caption, XMP dc:title' },
          { name: 'Technical', text: 'Camera make and model, lens, aperture, shutter, ISO, serial number.', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: 'Location & time', text: 'GPS coordinates, altitude, capture date and time zone.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: 'Rights & admin', text: 'Author, owner, copyright, last editing software.', example: 'EXIF Artist, Copyright, Software' },
          { name: 'Provenance & AI', text: 'Content Credentials, “made with AI” labels, prompts and workflows.', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          'You will see many names for the same job — “metadata remover”, “EXIF remover”, “metadata scrubber”, “strip photo info” — they all mean taking the hidden notes out of a file without changing the picture. Likewise a “metadata viewer”, “reader” or “checker” shows what is inside the file. AI Label Remover does both.',
      },
      why: {
        title: 'Why view and remove metadata before sharing a photo?',
        paragraphs: [
          'Any single metadata field is usually harmless, but together they say a lot about you. A photo taken at home and posted to a marketplace can carry GPS coordinates accurate to a few meters; images sent by email or cloud link keep everything the camera wrote. See [how GPS in photos can reveal your home address](remove-gps-location-from-photos).',
          'For images made or edited with AI, metadata also decides whether a platform shows a “Made with AI” label, and can expose the full prompt you wrote.',
        ],
        bullets: [
          'Revealing where you live, work or travel through GPS coordinates.',
          'Linking many photos to one person through a camera serial number or owner name.',
          'Exposing prompts, seeds, models and workflows you meant to keep private.',
          'Getting an AI label from a platform because of attached C2PA or IPTC data.',
        ],
      },
      standards: {
        title: 'Common photo metadata standards',
        lead: 'One image file can hold several metadata “compartments” at once, each following a different standard. AI Label Remover reads and removes all of the ones below.',
        items: [
          { name: 'EXIF', text: 'Written by cameras and phones: exposure settings, device, timestamps, GPS, thumbnails. [Learn about EXIF](what-is-exif-data).' },
          { name: 'XMP', text: 'Adobe’s XML format for edit history, ratings, keywords and many AI-related properties.' },
          { name: 'IPTC', text: 'The newsroom standard: captions, creator, copyright and the [DigitalSourceType](iptc-digitalsourcetype-ai) tag that declares AI images.' },
          { name: 'C2PA', text: 'Cryptographically signed Content Credentials recording how a file was made and edited. [What is C2PA](what-is-c2pa-content-credentials).' },
          { name: 'PNG text', text: 'tEXt, iTXt and zTXt chunks where [Stable Diffusion and ComfyUI](remove-stable-diffusion-comfyui-metadata) store prompts and workflows.' },
        ],
      },
    },
    security: {
      title: 'Your photos stay safe',
      lead: 'With any tool that handles personal files, the first question is “where do my photos go?”. AI Label Remover’s answer: nowhere.',
      items: [
        { title: '100% on your device', text: 'Reading and cleaning run in a Web Worker inside your browser tab. No server ever receives your files.' },
        { title: 'Nothing stored, no AI training', text: 'Because photos are never sent anywhere, there is no copy to store, leak or use to train a model.' },
        { title: 'Works offline', text: 'Load the page, turn off Wi-Fi and wash a file — it still works. The Network tab in DevTools shows no image data leaving.' },
        { title: 'No account, no tracking', text: 'No sign-up, no analytics, ads or third-party pixels. The site only remembers the language and theme you pick.' },
      ],
    },
    faq: [
      { q: 'What is the difference between EXIF and metadata?', a: 'EXIF is one kind of metadata — the kind cameras and phones write. “Metadata” is the wider term and also covers XMP, IPTC, C2PA and PNG text chunks. See [what EXIF data is](what-is-exif-data).' },
      { q: 'Can metadata show where a photo was taken?', a: 'Yes, if the image has GPS tags. Phones usually record latitude, longitude and altitude when location is enabled for the camera. The [EXIF remover](remove-exif-data) strips these tags without touching image quality.' },
      { q: 'How do I remove AI metadata from an image?', a: 'Drop the image into the box at the top of this page and press “Wash all images”, or use the dedicated [AI metadata remover](ai-tag-cleaner) to preview the C2PA, IPTC and prompt data first.' },
      { q: 'Is it safe to upload my photos here?', a: 'Your photos are not uploaded at all. AI Label Remover opens files in your browser, processes them in the tab’s memory and saves the clean copy straight to your device. Once the page has loaded you can go offline and it keeps working.' },
    ],
  },
  labels: {
    tools: 'More metadata tools',
    relatedTools: 'Dedicated tools for this',
    homeTitle: 'Pick the tool for your file',
    homeLead: 'Each page focuses on one job, with the washer built in at the top.',
    formats: 'What is removed and what stays',
    contact: 'Contact',
    contactText: 'Questions, bug reports or a file that does not wash correctly? Write to',
    updated: 'Last updated {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – Remove AI Tags from Image Metadata',
      description: 'Clean AI tags out of images: IPTC “AI generated” tags, C2PA, XMP generator names and prompts. Lossless, free, runs in your browser with no upload.',
      navLabel: 'AI tag cleaner',
      h1: 'AI tag cleaner for images',
      lead: 'AI generators and AI-assisted editors tag the files they touch: a “generated by AI” source type, a signed C2PA record, the app name, sometimes the whole prompt. Drop an image below to see every AI tag it carries, then clean them out without re-encoding a single pixel.',
      sections: [
        {
          heading: 'What counts as an AI tag',
          paragraphs: [
            'An AI tag is any field inside the file that says, or hints, that AI was involved. They hide in several metadata standards at once, which is why deleting one field by hand rarely does the job:',
          ],
          bullets: [
            'IPTC and XMP [DigitalSourceType](iptc-digitalsourcetype-ai) values such as trainedAlgorithmicMedia or compositeWithTrainedAlgorithmicMedia.',
            '[C2PA Content Credentials](what-is-c2pa-content-credentials) actions that mark generative steps, written by ChatGPT, Firefly, Photoshop and others.',
            'Software and creator-tool fields naming the generator, plus XMP history entries left by AI edits.',
            'Prompt, seed and model text in PNG chunks from [Stable Diffusion and ComfyUI](remove-stable-diffusion-comfyui-metadata).',
          ],
        },
        {
          heading: 'How the AI tag cleaner works',
          paragraphs: [
            'AI Label Remover reads the file structure directly in your browser. Each AI tag is listed with the exact field it came from, and the file gets a verdict — “AI traces found”, “Worth a second look” or “No AI traces” — before anything is changed.',
            'Pressing “Wash all images” cuts out the blocks that hold those tags: XMP, IPTC, EXIF, the C2PA manifest store and PNG text chunks. The compressed image data is copied byte for byte, and the cleaned copy is read again so you can confirm no AI tag is left.',
          ],
        },
        {
          heading: 'Which tools leave which tags',
          paragraphs: [
            'ChatGPT and Gemini images arrive with C2PA records; Firefly and Photoshop Generative Fill add C2PA and DigitalSourceType; Midjourney writes descriptive XMP; Stable Diffusion front-ends store full generation settings in the PNG. [What metadata AI image generators add](what-metadata-ai-image-generators-add) goes through them one by one.',
          ],
        },
        {
          heading: 'What an AI tag cleaner cannot do',
          paragraphs: [
            'Cleaning works on metadata only. [Invisible watermarks such as SynthID](synthid-invisible-ai-watermarks) live in the pixels and survive, and platforms can run their own classifiers. Cleaning tags is meant for privacy and for fixing wrong labels on real photos — if an image is AI-generated and realistic, platform rules generally still expect you to disclose it.',
          ],
        },
      ],
      faqHeading: 'AI tag cleaner questions',
      faq: [
        { q: 'Is an AI tag the same as an AI label?', a: 'Not quite. The tag is data inside the file; the label is what a platform shows, such as Instagram’s “AI info”. Platforms often create the label from the tag. To avoid that on a real photo, see [No AI tag](no-ai-tag).' },
        { q: 'Can I remove only the AI tags and keep everything else?', a: 'The cleaner removes whole metadata blocks rather than single fields, because AI tags are spread across several of them. Rotation, the ICC color profile and pixel size are always kept, so the picture displays exactly as before.' },
        { q: 'Does cleaning AI tags reduce image quality?', a: 'No. Nothing is re-encoded; only metadata is removed. See [why lossless removal matters](remove-metadata-without-losing-quality).' },
        { q: 'Which formats can I clean?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF and AVIF — up to 50 files at once, each up to 25 MB. Prompts in PNG files can also be handled with the [PNG metadata remover](png-metadata-remover).' },
        { q: 'Does this remove the ChatGPT or Gemini image metadata?', a: 'It removes the C2PA Content Credentials and IPTC fields those services write. Google also embeds a SynthID pixel watermark, which no metadata tool can remove. Details are in [ChatGPT and Gemini image metadata](chatgpt-gemini-image-metadata).' },
        { q: 'Can I see the prompt before I delete it?', a: 'Yes. The “Raw metadata” tab prints prompts, workflows and generator names word for word, so you can copy anything you want to keep before washing.' },
      ],
      related: ['iptc-digitalsourcetype-ai', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
      updated: '2026-11-05',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – Post Real Photos Without an “AI info” Label',
      description: 'Got an “AI info” tag on a real photo? Remove the C2PA and IPTC data behind it and post with no AI tag. Lossless, free and done in your browser.',
      navLabel: 'No AI tag',
      h1: 'No AI tag on your real photos',
      lead: 'A small generative fix in Photoshop or a phone editor can be enough for Instagram, Facebook or Threads to put an “AI info” tag on a genuine photo. Drop the file below to see which data triggers the tag, then share a clean copy with no AI tag in its metadata.',
      sections: [
        {
          heading: 'Why a real photo gets an AI tag',
          paragraphs: [
            'Platforms read provenance data that editors attach to the file. [Why real photos get an “AI info” label](made-with-ai-label) covers the details; the usual triggers are:',
          ],
          bullets: [
            'A C2PA manifest recording a generative step such as Generative Fill, AI erase or AI expand.',
            'An IPTC or XMP [DigitalSourceType](iptc-digitalsourcetype-ai) value saying the image was composited with AI.',
            'Content Credentials that an editing app adds by default on export.',
          ],
        },
        {
          heading: 'How to post with no AI tag',
          paragraphs: ['It takes under a minute and nothing leaves your device:'],
          bullets: [
            'Drop the edited photo into the box at the top of this page.',
            'Read the verdict and the fields behind it — the report names the exact C2PA action or IPTC value.',
            'Press “Wash all images” and save the clean copy.',
            'Upload the clean copy, not the original export.',
          ],
        },
        {
          heading: 'Stop the tag at the source',
          paragraphs: [
            'If you edit often, [turn off Content Credentials in Photoshop and Lightroom](turn-off-content-credentials-photoshop-lightroom) so they are not written in the first place. [Which platforms label AI images](which-platforms-label-ai-images) lists what Meta, TikTok, YouTube and others read.',
          ],
        },
        {
          heading: 'What “no AI tag” can and cannot promise',
          paragraphs: [
            'Removing the metadata removes the file-based reason for the tag, which is the cause on most edited photos. It cannot remove [pixel watermarks such as SynthID](synthid-invisible-ai-watermarks), and a platform may still label a post from its own detection or ask you to self-disclose. This page is meant for genuine photos with minor edits: if an image is AI-generated and could mislead people, disclose it.',
          ],
        },
      ],
      faqHeading: 'No AI tag questions',
      faq: [
        { q: 'Will this remove the “AI info” label from a post I already published?', a: 'No. The label belongs to the post on the platform. Delete or archive the post, clean the file here, then upload the clean copy.' },
        { q: 'Is “no AI tag” guaranteed?', a: 'No. It removes the metadata platforms read, but they can also use other signals. On most edited photos the metadata is the reason for the tag.' },
        { q: 'Does it work with iPhone and Android photos?', a: 'Yes. iPhone HEIC and Android JPG files are cleaned in place, with no conversion. There is also a dedicated [HEIC metadata remover](heic-metadata-remover).' },
        { q: 'What about AI tags on a fully AI-generated image?', a: 'The [AI tag cleaner](ai-tag-cleaner) shows and removes them, but platform rules generally still require you to label realistic AI images yourself.' },
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
      updated: '2026-11-05',
    },
    'remove-exif-data': {
      metaTitle: 'Remove EXIF Data from Photos Online, Free & Private',
      description: 'Strip EXIF data — GPS, camera, serial number, date — from JPG, HEIC, PNG and WebP in your browser. No upload, no quality loss, up to 50 files at once.',
      navLabel: 'EXIF remover',
      h1: 'Remove EXIF data from photos',
      lead: 'Drop your pictures below to see every EXIF field they carry — GPS position, camera and lens, serial number, capture time — then strip it out in one click. Everything runs on your device; the files are never uploaded.',
      sections: [
        {
          heading: 'What EXIF data gives away',
          paragraphs: [
            'EXIF is the block of technical notes a camera or phone writes into each photo. Most of it is harmless on its own, but together it can say a lot about you. [Our EXIF explainer](what-is-exif-data) walks through every common tag; these are the ones that matter for privacy:',
          ],
          bullets: [
            'GPS latitude, longitude and altitude — often accurate to a few meters, enough to locate a home.',
            'Date and time the photo was taken, with the time-zone offset.',
            'Camera or phone make and model, lens, and on many cameras a body serial number that links photos together.',
            'Owner or artist name, and the software that last edited the file.',
            'An embedded thumbnail, which can still show the original picture after a crop.',
          ],
        },
        {
          heading: 'How this EXIF remover works',
          paragraphs: [
            'AI Label Remover reads the file structure directly. In a JPEG it cuts out the APP1 segment that holds EXIF and XMP, plus IPTC, comments and embedded thumbnails; in HEIC, PNG and WebP it removes the equivalent boxes or chunks. The compressed image data is copied byte for byte, so nothing is re-encoded and the picture looks identical.',
            'Fields that control how the photo displays are kept on purpose: rotation, the ICC color profile and pixel size. That avoids the sideways photos and washed-out colors that cruder strippers produce. When the job is done, the washed file is read again so you can see that the EXIF fields are really gone.',
          ],
        },
        {
          heading: 'When to strip EXIF before sharing',
          paragraphs: [
            'Many large social networks remove EXIF on upload, but plenty of places do not: email attachments, cloud-drive links, forums, marketplaces, chat apps that send “original quality” files and your own website. [Which platforms strip metadata](which-platforms-strip-photo-metadata) lists the common ones. If you are not sure where a photo will end up, washing it first is the safe default.',
            'Selling something online, posting a photo taken at home, or sending pictures to someone you have only just met are the classic cases where [GPS data can reveal a location](remove-gps-location-from-photos).',
          ],
        },
        {
          heading: 'Private by design',
          paragraphs: [
            'Online EXIF removers usually upload your photo to a server, process it there and send it back. AI Label Remover does the whole job in Web Workers inside your browser tab: once the page has loaded you can even switch off your connection and it keeps working. There is no account, no watermark and no limit beyond 25 MB and 40 megapixels per file.',
          ],
        },
      ],
      faqHeading: 'EXIF removal questions',
      faq: [
        { q: 'Does removing EXIF reduce image quality?', a: 'No. Only metadata blocks are cut out; the compressed picture data is copied unchanged, so resolution, sharpness and color stay exactly the same. See [why re-saving loses quality](remove-metadata-without-losing-quality).' },
        { q: 'Will my photo still be the right way up?', a: 'Yes. The orientation value is kept so the picture displays the same way as before, along with the ICC color profile.' },
        { q: 'Can I remove EXIF from iPhone HEIC photos?', a: 'Yes. HEIC and HEIF files are supported directly, without converting them to JPEG first. There is also a dedicated [HEIC metadata remover](heic-metadata-remover) page.' },
        { q: 'How do I check that the EXIF is gone?', a: 'After washing, AI Label Remover re-reads the new file and shows which fields remain. You can also open it in any [online metadata viewer](image-metadata-viewer-online) or in your operating system’s file properties.' },
        { q: 'Can I do this without a website at all?', a: 'Yes — Windows, macOS and phones have built-in options, each with limits. [Removing metadata on Windows and Mac](remove-metadata-windows-mac) and [on iPhone and Android](view-remove-metadata-iphone-android) compare them.' },
      ],
      related: ['what-is-exif-data', 'remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
      updated: '2026-10-23',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'Remove C2PA Content Credentials from Images, Free',
      description: 'Inspect and remove C2PA Content Credentials (JUMBF manifests) from JPG, PNG, HEIC, WebP and AVIF files, losslessly and without uploading them anywhere.',
      navLabel: 'C2PA remover',
      h1: 'Remove C2PA Content Credentials',
      lead: 'Content Credentials are a signed history attached to an image: which app made it, which edits followed and whether generative AI was involved. Drop a file below to read its C2PA manifest, then remove the whole manifest store losslessly.',
      sections: [
        {
          heading: 'What a C2PA manifest contains',
          paragraphs: [
            'C2PA (the Coalition for Content Provenance and Authenticity) defines a way to embed a cryptographically signed record in a file. [C2PA explained](what-is-c2pa-content-credentials) goes deeper; in practice a manifest usually holds:',
          ],
          bullets: [
            'The claim generator — the app or service that signed it, such as Photoshop, Firefly, ChatGPT or a camera.',
            'A list of actions: created, opened, edited, cropped, and markers for generative AI steps.',
            'Ingredients — earlier versions or source images the file was built from.',
            'A digital source type stating whether the content was captured, composited or generated by AI.',
            'A signature and certificate tying the record to the exact image data.',
          ],
        },
        {
          heading: 'Where C2PA lives in each file type',
          paragraphs: [
            'In JPEG the manifest store sits in APP11 segments as JUMBF boxes; in PNG it is a caBX chunk; in HEIC and AVIF it is a uuid box; in WebP a dedicated RIFF chunk. AI Label Remover finds each of these, shows the claims inside, and removes the full store while copying the image data unchanged.',
            'Because the signature binds the manifest to the exact bytes, any re-save by another app usually breaks or drops it anyway. Removing it cleanly avoids leaving a broken, half-valid record behind.',
          ],
        },
        {
          heading: 'Reasons to keep it, reasons to remove it',
          paragraphs: [
            'Content Credentials can be valuable: they help news organisations and creators prove where an image came from. If that is your goal, keep them — and keep the original file either way, because removed metadata cannot be restored.',
            'Removing them makes sense when the record reveals more than you want (names, edit history, source images), or when an editor attached an AI marker to a genuine photo after a minor fix. You can also [turn off Content Credentials in Photoshop and Lightroom](turn-off-content-credentials-photoshop-lightroom) so they are not written in the first place.',
          ],
        },
      ],
      faqHeading: 'C2PA questions',
      faq: [
        { q: 'Does AI Label Remover verify C2PA signatures?', a: 'No. It reads and displays the manifest contents but does not validate the certificate chain. Use the official Content Credentials verify tool if you need signature validation.' },
        { q: 'Is removing Content Credentials legal?', a: 'Removing metadata from files you own or are allowed to modify is generally fine, but do not use it to misrepresent who made an image or how. This is general information, not legal advice.' },
        { q: 'Why does my photo say “Worth a second look”?', a: 'The file has a C2PA manifest that does not explicitly mention AI. Some platforms read any manifest as a hint, so check the actions listed before deciding.' },
        { q: 'Will a platform still know the image was edited?', a: 'Not from the removed manifest. Platforms may still use other signals, and [invisible watermarks](synthid-invisible-ai-watermarks) are not affected by metadata removal.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'turn-off-content-credentials-photoshop-lightroom', 'iptc-digitalsourcetype-ai'],
      updated: '2026-10-23',
    },
    'heic-metadata-remover': {
      metaTitle: 'HEIC Metadata Remover – Strip iPhone Photo EXIF & GPS',
      description: 'Remove EXIF, GPS location and timestamps from iPhone HEIC and HEIF photos without converting them to JPEG. Lossless, in your browser, nothing uploaded.',
      navLabel: 'HEIC metadata remover',
      h1: 'HEIC metadata remover for iPhone photos',
      lead: 'iPhones save photos as HEIC, and each one records where and when it was taken. Drop HEIC or HEIF files below to see that metadata and remove it — the photo stays a HEIC, with no conversion and no loss in quality.',
      sections: [
        {
          heading: 'What an iPhone HEIC photo records',
          paragraphs: ['A typical iPhone photo carries more than most people expect:'],
          bullets: [
            'Precise GPS coordinates, altitude and direction the camera was facing.',
            'Capture date, time and time zone, plus modification dates.',
            'Device model, lens and camera settings, and the iOS version.',
            'Apple-specific data such as the Live Photo pairing identifier.',
            'XMP data written by editing apps, sometimes including C2PA records.',
          ],
        },
        {
          heading: 'Remove metadata without converting to JPEG',
          paragraphs: [
            'The usual advice is to convert HEIC to JPEG and hope the metadata does not survive. That re-encodes the image, loses quality and often throws away the wide-gamut color profile. AI Label Remover instead edits the HEIC container itself: it removes the Exif and XMP items, C2PA uuid boxes and timestamp boxes, and keeps the HEVC image data, rotation (irot/imir) and color profile (colr) intact.',
            'The same engine handles AVIF, which uses the same ISOBMFF container format, so AVIF exports from modern apps can be washed the same way.',
          ],
        },
        {
          heading: 'iPhone settings vs. washing the file',
          paragraphs: [
            'iOS lets you switch off location for a single share via the “Options” button on the share sheet, and the Photos app can adjust or remove location per photo. These work well for one-off shares but are easy to forget, and they do not remove the other fields. [Viewing and removing metadata on iPhone and Android](view-remove-metadata-iphone-android) compares the built-in options.',
            'For a batch of photos — a folder of holiday pictures, product shots or images for a listing — dropping them into AI Label Remover and saving one ZIP is faster, and the before-and-after report shows exactly what was removed.',
          ],
        },
      ],
      faqHeading: 'HEIC questions',
      faq: [
        { q: 'Does it work on Windows, where HEIC sometimes cannot be opened?', a: 'Yes. AI Label Remover reads the HEIC structure itself, so it does not need a HEIC codec installed. HEIC files show a format label instead of a preview thumbnail, but reading and washing work normally.' },
        { q: 'Will the washed file still open in Photos?', a: 'Yes. The output is a standard HEIC file with the same image data; only the metadata items are removed.' },
        { q: 'Are Live Photos supported?', a: 'AI Label Remover processes the still HEIC image. The paired video file of a Live Photo is a separate file and is not changed.' },
        { q: 'Is there a file size limit?', a: 'Each file can be up to 25 MB and 40 megapixels, which covers photos from every current iPhone, and you can wash 50 at a time.' },
      ],
      related: ['view-remove-metadata-iphone-android', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
      updated: '2026-10-23',
    },
    'png-metadata-remover': {
      metaTitle: 'PNG Metadata Remover – Delete Prompts & Text Chunks',
      description: 'Remove PNG metadata — tEXt, iTXt and zTXt chunks with Stable Diffusion or ComfyUI prompts, XMP, eXIf and C2PA — while keeping the image lossless.',
      navLabel: 'PNG metadata remover',
      h1: 'PNG metadata remover',
      lead: 'PNG files hide metadata in text chunks: AI prompts and workflows, author names, software and timestamps. Drop PNGs below to read every chunk, then remove them while the image data stays bit-for-bit identical.',
      sections: [
        {
          heading: 'Where PNG keeps its metadata',
          paragraphs: ['A PNG is a sequence of chunks. The image itself lives in IHDR, PLTE and IDAT; everything else is optional. The chunks AI Label Remover removes are:'],
          bullets: [
            'tEXt, zTXt and iTXt — free-form text, compressed text and international text. Stable Diffusion WebUI writes a “parameters” chunk here; ComfyUI writes “prompt” and “workflow” JSON.',
            'XMP packets stored in iTXt, including IPTC and AI source declarations.',
            'eXIf — EXIF data, including GPS when an app copied it from a photo.',
            'caBX — C2PA Content Credentials.',
            'tIME (last-modified time) and dSIG (digital signature).',
          ],
        },
        {
          heading: 'What stays so the image looks the same',
          paragraphs: [
            'Transparency (tRNS), gamma and chromaticity (gAMA, cHRM), the sRGB flag and the embedded ICC profile (iCCP) all affect how the picture displays, so they are kept. Animated PNGs keep their acTL, fcTL and fdAT chunks, so APNG animations still play.',
            'Because the IDAT data is copied rather than recompressed, the washed file is pixel-identical to the original — usually a little smaller, since the text chunks are gone.',
          ],
        },
        {
          heading: 'Protecting AI prompts and workflows',
          paragraphs: [
            'If you share images made with Stable Diffusion, Forge or ComfyUI, anyone can drag the PNG back into the same tool and recover your exact prompt, seed, model and node graph. [How Stable Diffusion and ComfyUI hide prompts in PNGs](remove-stable-diffusion-comfyui-metadata) shows what is stored. Washing removes it all, while the “Raw metadata” tab lets you copy the prompt first if you want to keep it for yourself.',
          ],
        },
      ],
      faqHeading: 'PNG metadata questions',
      faq: [
        { q: 'Will removing PNG metadata change the colors?', a: 'No. Color-related chunks — sRGB, gAMA, cHRM and iCCP — are kept, and the IDAT image data is copied unchanged.' },
        { q: 'Does it work with transparent PNGs?', a: 'Yes. Transparency data (tRNS or the alpha channel inside IDAT) is part of the image and is never touched.' },
        { q: 'Can I keep the prompt somewhere?', a: 'Copy it from the “Raw metadata” tab before washing. Once removed, metadata cannot be restored from the washed file.' },
        { q: 'Does it also work for Midjourney or DALL·E PNGs?', a: 'Yes. Whatever text, XMP or C2PA data those services embed is removed the same way. See [hiding Midjourney and DALL·E prompts](hide-midjourney-dalle-prompts).' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
      updated: '2026-10-23',
    },
  },
  info: {
    about: {
      metaTitle: 'About AI Label Remover – How the Metadata Cleaner Works',
      description: 'Who builds AI Label Remover, how the in-browser metadata cleaner works, how our articles are researched and kept up to date, and what the tool will never do.',
      navLabel: 'About',
      title: 'About AI Label Remover',
      lead: 'AI Label Remover is a free tool for reading and removing hidden metadata from images — EXIF, GPS, XMP, IPTC, C2PA Content Credentials and AI prompts — built so that your files never have to leave your device.',
      sections: [
        {
          heading: 'Why it exists',
          paragraphs: [
            'Photos and AI images carry far more information than most people realise: home locations in GPS tags, device serial numbers, whole prompts and workflows, and provenance records that platforms read to apply labels. Most online cleaners ask you to upload the very files you are trying to protect. AI Label Remover was built to do the same job without that trade-off.',
          ],
        },
        {
          heading: 'How the tool works',
          paragraphs: [
            'When you add an image, your browser reads it locally. Web Workers parse the file structure — JPEG segments, PNG chunks, WebP RIFF chunks, GIF blocks and HEIC/AVIF boxes — and list every metadata block they find. Washing removes those blocks from the byte stream and copies the compressed image data unchanged, then reads the result again to confirm what is left.',
            'There is no server-side processing. The website itself is a set of static pages; once loaded, the tool works offline.',
          ],
        },
        {
          heading: 'How our articles are written',
          paragraphs: [
            'The guides on this site are based on the published specifications (EXIF, XMP, IPTC Photo Metadata, C2PA, the PNG and ISOBMFF formats), on platform help pages, and on testing real files from the tools we describe. Each article shows the date it was last revised, and we update articles when standards or platform policies change.',
            'Articles are general information, not legal advice. Platform rules on AI labels change often; check the platform’s own help pages before relying on any statement about them.',
          ],
        },
        {
          heading: 'What AI Label Remover will not do',
          paragraphs: [],
          bullets: [
            'Upload, store or log your files — there is no server that could receive them.',
            'Change pixels, remove invisible watermarks or visible logos.',
            'Promise that a platform will or will not apply a label.',
            'Help disguise AI-generated images as real photographs. Use it to protect privacy and correct mistakes.',
          ],
        },
        {
          heading: 'Independence',
          paragraphs: [
            'AI Label Remover is independent and is not affiliated with Meta, Google, OpenAI, Adobe, Midjourney, Apple or the C2PA. Product names are used only to describe compatibility.',
          ],
        },
      ],
      updated: '2026-10-23',
    },
    privacy: {
      metaTitle: 'Privacy Policy – AI Label Remover',
      description: 'Plain-language privacy policy: your images never leave your device, there are no accounts, analytics or ads, and only your language and theme are saved.',
      navLabel: 'Privacy',
      title: 'Privacy policy',
      lead: 'AI Label Remover is a tool for protecting your privacy, so using it should not cost you any. This page explains in plain language what happens to your images and the little information the website handles.',
      sections: [
        {
          heading: 'The short version',
          paragraphs: [],
          bullets: [
            'Your images are processed on your own device and are never uploaded.',
            'There are no accounts, sign-ups or mailing lists — we do not know who you are.',
            'There is no analytics, advertising, tracking pixel or third-party script.',
            'The only things saved are your language and light/dark theme, in your own browser, and you can delete them at any time.',
          ],
        },
        {
          heading: 'What happens to your images',
          paragraphs: ['When you add a picture to AI Label Remover, this is its whole journey:'],
          bullets: [
            'Your browser opens the file from your device and keeps it in the tab’s memory.',
            'Web Workers inside the tab read the metadata and, when you press wash, write a clean copy — still in memory.',
            'When you save, your browser writes the clean file or ZIP straight to your device.',
            'When you close or reload the tab, the images and reports are gone. Nothing is kept on a server, because no server ever receives them.',
          ],
        },
        {
          heading: 'You can check this yourself',
          paragraphs: [
            'You do not have to take our word for it. Load the page, switch off Wi-Fi or mobile data, then wash a file: it still works, because nothing needs to be sent. If you are comfortable with developer tools, open the Network tab while washing and you will see that no image data leaves your device.',
          ],
        },
        {
          heading: 'What we do not collect',
          paragraphs: ['AI Label Remover does not collect or store:'],
          bullets: [
            'your images, their metadata or the reports shown on screen;',
            'your name, email address or any account details;',
            'your location — GPS found in your photos is shown only to you, on your screen;',
            'a history of the files you checked or of how you used the tool.',
          ],
        },
        {
          heading: 'What is saved in your browser, and how to remove it',
          paragraphs: ['To remember your choices, the site saves two small preferences on your device:'],
          bullets: [
            'Language: a “lang” entry in local storage and a first-party “lang” cookie, kept for one year, so the home page opens in the language you picked. It holds only a language code such as “en”.',
            'Theme: a “theme” entry in local storage if you choose light or dark mode.',
            'To remove them, clear this site’s cookies and site data in your browser settings. AI Label Remover keeps working; it simply forgets your choices.',
          ],
        },
        {
          heading: 'When you visit the website',
          paragraphs: [
            'Like every website, each time you open a page our server needs a few basic technical details to send it to you: your device’s network address (IP address), the type of browser you use and the page you are opening. These details may be logged temporarily to keep the site running smoothly and to block abusive traffic, and are kept only as long as that requires. We do not use them to identify you, we do not build a profile of you, and we never share or sell them.',
            'When you open the home page, the server looks at your browser’s language setting, the language you picked before and the country you are visiting from, only to open the right language version for you. This happens on the spot and is not stored.',
          ],
        },
        {
          heading: 'Children',
          paragraphs: [
            'AI Label Remover does not ask for or collect personal information from anyone, including children. Younger users can use the tool without creating an account or sharing any details about themselves.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'Because AI Label Remover does not collect your name, email or any account, we hold no profile about you to provide, correct or delete. What the site remembers on your device is always under your control. The technical details logged temporarily when you visit are not linked to any name or account and are deleted once they are no longer needed to run the site.',
          ],
        },
        {
          heading: 'Changes to this policy',
          paragraphs: ['If the way AI Label Remover handles data ever changes, we will update this page and the date at the top.'],
        },
      ],
      updated: '2026-10-23',
    },
  },
};

export default en;
