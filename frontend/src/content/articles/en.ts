import type { Articles } from './types';

const en: Articles = {
  'best-ai-metadata-removers-2026': {
      "title": "Top Best AI Metadata & Label Removal Tools in 2026",
      "metaTitle": "Best AI Metadata & Label Removers in 2026 (Free & Lossless)",
      "summary": [
          "As generative AI tags, C2PA manifests, and IPTC markers become standard across camera software and social networks in 2026, finding the right tool to clean image metadata is essential.",
          "We compare leading offline utilities like ExifTool and desktop editors against modern in-browser solutions to help you achieve complete privacy and a clean, label-free image."
      ],
      "description": "Compare the best metadata removers in 2026. Discover how AI Label Remover, AI Tag Cleaner, and No AI Tag deliver private, lossless image metadata washing.",
      "related": [
          "how-to-get-no-ai-tag",
          "made-with-ai-label",
          "what-is-c2pa-content-credentials"
      ],
      "sections": [
          {
              "heading": "Why traditional metadata removers fail against 2026 AI labels",
              "paragraphs": [
                  "For years, stripping metadata simply meant using an EXIF cleaner to delete camera models and GPS coordinates. In 2026, image files carry far more complex structures: [C2PA Content Credentials manifests](what-is-c2pa-content-credentials), [IPTC DigitalSourceType fields](iptc-digitalsourcetype-ai), and embedded AI prompts from generators like Midjourney and ComfyUI.",
                  "Traditional photo cleaners strip camera EXIF but leave binary C2PA manifests intact, or they recompress the JPEG and degrade pixel quality. When social networks detect residual AI metadata, they automatically apply an unwanted “AI info” label to your upload."
              ]
          },
          {
              "heading": "AI Label Remover: The premier browser-based AI tag cleaner",
              "paragraphs": [
                  "AI Label Remover is purpose-built for the modern metadata landscape. Operating as an advanced [AI tag cleaner](ai-tag-cleaner), it inspects and slices out C2PA JUMBF containers, IPTC generative flags, text chunks, and GPS data directly within your browser.",
                  "Because all processing runs locally via Web Workers on your CPU, no images are ever uploaded to a remote server. Crucially, the image byte streams are copied without re-encoding, ensuring [lossless metadata removal without losing quality](remove-metadata-without-losing-quality)."
              ],
              "bullets": [
                  "Zero server uploads: Complete privacy and security for personal and commercial photos.",
                  "Lossless byte slicing: Preserves exact resolution, ICC color profiles, and pixel sharpness.",
                  "Full AI signature removal: Strips C2PA, IPTC, and prompt parameters that trigger [false AI labels](made-with-ai-label).",
                  "Multi-format batch support: Handles up to 50 files across JPEG, PNG, WebP, GIF, HEIC, and AVIF."
              ]
          },
          {
              "heading": "Comparison: AI Label Remover vs ExifTool vs Desktop Editors",
              "paragraphs": [
                  "ExifTool remains a powerful command-line utility for technical users. However, terminal syntax is cumbersome for quick sharing, and deleting raw JUMBF blocks can corrupt files if incorrect arguments are used.",
                  "Desktop image editors allow “Export for Web”, but they re-encode compressed pixels, degrading quality on every save. Furthermore, Adobe Creative Cloud can re-inject Content Credentials into exports unless [manually disabled](turn-off-content-credentials-photoshop-lightroom).",
                  "AI Label Remover combines the instant accessibility of an online utility with the privacy of an offline tool. You inspect the exact metadata before and after, removing all triggers effortlessly."
              ]
          },
          {
              "heading": "Achieving “No AI Tag” status on social networks",
              "paragraphs": [
                  "If your goal is to post clean photographs on Instagram, Facebook, TikTok, or Threads without false warnings, having [No AI Tag](no-ai-tag) on your media is critical. Platforms rely on automatic scanner algorithms that inspect uploaded byte headers for AI indicators.",
                  "By running your files through an [AI tag cleaner](ai-tag-cleaner) prior to upload, you remove the metadata triggers that cause automatic false flags, ensuring your creative work speaks for itself."
              ]
          },
          {
              "heading": "Ethical considerations for AI metadata cleaning",
              "paragraphs": [
                  "Using an AI Label Remover is designed to protect creator privacy, remove GPS coordinates, and rectify false-positive tags caused by minor touch-up tools. If an image is genuinely generated from scratch by AI, platform policies and regulations generally require transparent disclosure."
              ]
          }
      ],
      "faqHeading": "Frequently asked questions about 2026 metadata removers",
      "faq": [
          {
              "q": "What makes AI Label Remover different from old EXIF strippers?",
              "a": "Traditional EXIF tools only scan for TIFF and EXIF headers, missing modern C2PA JUMBF boxes and IPTC XMP markers. AI Label Remover is an [AI tag cleaner](ai-tag-cleaner) engineered to detect and strip both legacy camera tags and modern AI provenance records without re-compressing pixels."
          },
          {
              "q": "Does removing metadata guarantee No AI Tag on Instagram?",
              "a": "Washing the metadata eliminates all file-level triggers (C2PA and IPTC). While platforms may also use computer vision classifiers or user disclosure, stripping metadata gives you a clean [No AI Tag](no-ai-tag) baseline free of accidental digital tags."
          },
          {
              "q": "Is it safe to clean sensitive business or private photos online?",
              "a": "With AI Label Remover, yes. The application executes entirely inside your client browser via Web Workers; zero bytes are uploaded to any server or cloud service."
          },
          {
              "q": "Can this tool remove invisible SynthID watermarks?",
              "a": "No. Metadata cleaners only remove header blocks. Pixel-embedded watermarks like Google SynthID alter pixel values directly and cannot be removed by metadata tools."
          }
      ]
  },

  'how-to-get-no-ai-tag': {
      "title": "How to Get “No AI Tag” on Photos: The Complete AI Tag Cleaner Guide",
      "metaTitle": "How to Get “No AI Tag” on Photos: AI Tag Cleaner Guide",
      "summary": [
          "Photographers and digital creators frequently find their authentic photos mistakenly flagged with “AI info” or “Made with AI” badges on social media platforms.",
          "This guide explains why automated platform detectors flag your files, and how to use an AI tag cleaner to achieve a verified “No AI Tag” status without sacrificing image quality."
      ],
      "description": "Learn how to get a clean No AI Tag status on your photos. Use AI Tag Cleaner and AI Label Remover to eliminate false AI flags on Instagram and Facebook.",
      "related": [
          "best-ai-metadata-removers-2026",
          "made-with-ai-label",
          "iptc-digitalsourcetype-ai"
      ],
      "sections": [
          {
              "heading": "Why your real photographs receive unwanted AI tags",
              "paragraphs": [
                  "Social networks like Instagram, Facebook, Threads, and TikTok scan uploads using automated inspection engines. If the scanner detects [an IPTC DigitalSourceType tag](iptc-digitalsourcetype-ai) or [a C2PA Content Credentials manifest](what-is-c2pa-content-credentials), the system immediately appends an AI badge.",
                  "A widespread issue for photographers is false positives: using basic generative tools like Adobe Generative Fill, Lightroom object removal, or smartphone erasers writes synthetic descriptors into the file. Even when 99% of the scene is an authentic capture, the whole photo gets branded as AI-generated."
              ]
          },
          {
              "heading": "The No AI Tag solution: Inspecting and washing your media",
              "paragraphs": [
                  "Achieving a verified [No AI Tag](no-ai-tag) result requires removing the specific metadata blocks that trigger platform crawlers. With AI Label Remover, you simply drop your files onto the table to view an instant diagnostic report.",
                  "The [image metadata viewer](image-metadata-viewer-online) breaks down all embedded tags into location privacy, camera provenance, and AI traces. If an AI marker is detected, clicking the wash button cleanly cuts the data out of the file stream."
              ]
          },
          {
              "heading": "Why an AI Tag Cleaner is superior to screenshotting or re-exporting",
              "paragraphs": [
                  "Many creators resort to taking screenshots or re-saving photos in basic apps to bypass AI flags. While this drops metadata, [it severely degrades resolution and dynamic range](remove-metadata-without-losing-quality). Screenshots compress colors into sRGB and discard fine detail.",
                  "Using a dedicated [AI tag cleaner](ai-tag-cleaner) preserves the original pixel stream byte-for-byte. The image maintains its original sharpness, ICC color profile, and dimensions while eliminating the metadata fingerprints that produce the tag."
              ]
          },
          {
              "heading": "Platform detection behaviors in 2026",
              "paragraphs": [
                  "Different platforms handle AI markers differently. Meta’s family of apps relies heavily on C2PA and IPTC tags to automatically append “AI info”. TikTok and YouTube flag videos and images containing digital source credentials.",
                  "Keeping your files clean with [AI Label Remover](ai-tag-cleaner) ensures your photos remain free of unintended markers across all major networks."
              ]
          },
          {
              "heading": "Responsible disclosure and ethics",
              "paragraphs": [
                  "Ensuring your work has No AI Tag is legitimate when correcting false positives or safeguarding privacy. However, creators working with purely synthetic media should adhere to platform community guidelines by transparently labeling AI creations."
              ]
          }
      ],
      "faqHeading": "Frequently asked questions about No AI Tag and AI tag cleaning",
      "faq": [
          {
              "q": "What does “No AI Tag” mean for an image file?",
              "a": "It means the file contains zero metadata markers (such as C2PA manifests, IPTC composite flags, or AI prompts) that trigger automated “Made with AI” or “AI info” labels upon social media upload."
          },
          {
              "q": "How do I know if my photo has AI tags before posting?",
              "a": "Drop the image into AI Label Remover. The inspector tab will explicitly display whether any C2PA manifests, IPTC DigitalSourceType entries, or AI generation prompts exist."
          },
          {
              "q": "Will using an AI tag cleaner reduce my photo’s resolution?",
              "a": "Not at all. AI Label Remover extracts metadata blocks directly from the binary stream without decoding or re-encoding pixels, preserving 100% of the visual quality."
          },
          {
              "q": "Why did Lightroom add an AI tag to my RAW export?",
              "a": "Recent versions of Lightroom and Photoshop automatically attach Content Credentials and generative markers whenever generative AI tools or removal brushes are applied."
          }
      ]
  },

  'made-with-ai-label': {
    metaTitle: 'Why Real Photos Get the “AI Info” Label on Instagram',
    related: ['iptc-digitalsourcetype-ai', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
    description:
      'A genuine photo tagged “AI info” on Instagram, Facebook or Threads usually carries a C2PA or IPTC field written by an editor. Find that field and wash it out losslessly.',
    sections: [
      {
        heading: 'The label is reading your file, not your photo',
        paragraphs: [
          'Meta’s “AI info” tag (called “Made with AI” before mid-2024) is applied when an upload contains recognised signals of generative AI. Two of those signals sit inside the image file itself: [a C2PA Content Credentials manifest](what-is-c2pa-content-credentials), and [the IPTC DigitalSourceType property](iptc-digitalsourcetype-ai) carried in XMP.',
          'A value of trainedAlgorithmicMedia says the whole image was generated; compositeWithTrainedAlgorithmicMedia says a real photo has AI-made parts. Either can be read automatically at upload. Meta also uses other signals and asks people to disclose realistic AI content themselves, so file metadata is one input among several.',
        ],
      },
      {
        heading: 'Where the stray signal comes from',
        paragraphs: ['On genuine photos the trigger is almost always the editing app, not the camera. Typical sources:'],
        bullets: [
          'Using Generative Fill, Generative Expand or an AI remove tool, which can add c2pa actions and mark the file as a composite.',
          '[Exporting with Content Credentials switched on](turn-off-content-credentials-photoshop-lightroom), which signs a list of every edit into the file.',
          'Phone gallery features such as AI erasers that leave an edit marker behind.',
          'Passing the file through other apps that copy existing metadata forward, so the marker survives several re-saves.',
        ],
      },
      {
        heading: 'Pinpoint the field in AI Label Remover',
        paragraphs: [
          'Lay the image on the table above. The “AI traces” tab lists each signal with where it lives — for example “C2PA · compositeWithTrainedAlgorithmicMedia” or “XMP · Iptc4xmpExt › DigitalSourceType”. Switch to “Raw metadata” to read the underlying values, including the claim generator that signed the manifest and every recorded c2pa action.',
          'A “Worth a second look” verdict means Content Credentials are present without an explicit AI statement. Some platforms still treat that manifest as a hint, so decide before you post.',
        ],
      },
      {
        heading: 'Wash the copy you post',
        paragraphs: [
          'Press “Wash all images”. AI Label Remover cuts the C2PA store, XMP, IPTC and EXIF blocks out of the byte stream while leaving pixel data, size, rotation and color profile as they were. The washed file is read again, so you can see the AI traces are gone before saving. The [AI tag cleaner](ai-tag-cleaner) page lists every trace it handles.',
          'Re-saving as a new JPEG would also drop the metadata, but [it re-compresses the picture every time](remove-metadata-without-losing-quality). Cutting blocks avoids that loss entirely.',
        ],
      },
      {
        heading: 'Fixing a wrong label is not hiding a right one',
        paragraphs: [
          'Washing is for labels that misdescribe your work and for keeping private details private. If an image is wholly or largely generated and could pass as real, platform rules generally expect you to say so — the label exists to inform viewers. Use AI Label Remover to correct mistakes, not to pass synthetic images off as photographs.',
        ],
      },
    ],
    faqHeading: 'About the “AI info” tag',
    faq: [
      {
        q: 'Can I remove the “AI info” label after posting?',
        a: 'Usually not by editing the post. If the label misdescribes a real photo, use the platform’s appeal or account-status options where available, and wash the file before you post next time.',
      },
      {
        q: 'If I wash the file, is the tag guaranteed to go away?',
        a: 'No guarantee. Washing removes the signals stored in the file — the usual cause on edited photos — but platforms may use other detection or ask you to disclose.',
      },
      {
        q: 'Does the photo change visually?',
        a: 'No. Only metadata blocks are removed. Image data is copied byte for byte and rotation and ICC color profile stay in place.',
      },
      {
        q: 'Can I keep camera settings and drop only the AI fields?',
        a: 'Not at the moment. AI Label Remover removes all identifying metadata — place, device, author and AI provenance — in one pass, which is the safest default for public sharing. Size, rotation, color and animation are always kept.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Remove ComfyUI Workflows & Stable Diffusion Prompts From PNG',
    related: ['image-metadata-viewer-online', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
    description:
      'A1111, Forge and ComfyUI write your prompt, seed, checkpoint and full workflow into every PNG. See the exact text, then wash it out without changing a pixel.',
    sections: [
      {
        heading: 'Your settings travel with the image',
        paragraphs: [
          'Local generators store their settings as text inside the output so an image can be recreated. In PNG files that text sits in tEXt, zTXt or iTXt chunks alongside the image data. What you will typically find:',
        ],
        bullets: [
          'A1111 and Forge: a “parameters” chunk with prompt, negative prompt, steps, sampler, CFG, seed, resolution, model hash and name, plus LoRA and extension settings.',
          'ComfyUI: a “prompt” chunk holding the executed node graph and a “workflow” chunk holding the full editor layout — drop the PNG into ComfyUI and the whole setup reappears.',
          'InvokeAI, NovelAI and other front-ends: similar data under their own keys.',
          'JPEG or WebP exports: some tools write the same text to [EXIF UserComment](what-is-exif-data) instead.',
        ],
      },
      {
        heading: 'Reasons to wash it — and reasons not to',
        paragraphs: [
          'Generation data is a full recipe. It lets anyone reproduce your look, shows which checkpoints and LoRAs you rely on, and can expose local paths, folder names or usernames buried in a workflow. Big ComfyUI graphs can also add tens of kilobytes per image.',
          'On the other hand, model-sharing sites read the parameters to display generation info, and collaborators may want the workflow. Check each file first; [AI Label Remover shows everything before removing anything](image-metadata-viewer-online).',
        ],
      },
      {
        heading: 'Reading the prompt in AI Label Remover',
        paragraphs: [
          'Lay the PNG on the table. In “Raw metadata” each text chunk appears under its keyword — parameters, prompt, workflow — with its full contents, while the “AI traces” tab flags it as a Stable Diffusion prompt or ComfyUI workflow. Compressed zTXt and iTXt chunks are inflated in the browser so you can read them.',
        ],
      },
      {
        heading: 'What washing keeps',
        paragraphs: [
          'Press “Wash all images”. The PNG handler drops text, XMP, EXIF and C2PA chunks as whole units and keeps IHDR, IDAT, palette, transparency, gamma and color chunks, as well as APNG animation chunks. Because chunks are removed whole, the remaining CRCs stay valid and the file opens everywhere. The [PNG metadata remover](png-metadata-remover) page covers each chunk in detail.',
          'Opening and re-saving in an editor would also lose the text, but it [re-compresses the image and can shift colors](remove-metadata-without-losing-quality). Byte-level removal avoids both.',
        ],
      },
    ],
    faqHeading: 'About Stable Diffusion and ComfyUI data',
    faq: [
      {
        q: 'How do I stop A1111 or ComfyUI from saving metadata?',
        a: 'A1111 and Forge have a setting that stops writing generation parameters into PNG files, and ComfyUI can be started with the --disable-metadata flag. Both apply only to new images, so wash the ones you already have.',
      },
      {
        q: 'Can ComfyUI rebuild the workflow from a washed PNG?',
        a: 'No. The “prompt” and “workflow” chunks are gone, so dragging the file into ComfyUI restores nothing. Keep an unwashed original if you will need the graph again.',
      },
      {
        q: 'Is the washed PNG identical to look at?',
        a: 'Yes. The IDAT chunks holding the compressed pixels are copied unchanged, so the image is pixel-for-pixel the same.',
      },
      {
        q: 'What about JPEG and WebP exports?',
        a: 'Prompts stored in EXIF UserComment or XMP are detected and washed out of JPEG and WebP files too.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Remove Prompts From Midjourney & DALL·E Images',
    related: ['chatgpt-gemini-image-metadata', 'what-metadata-ai-image-generators-add', 'synthid-invisible-ai-watermarks'],
    description:
      'Downloads from Midjourney, DALL·E, ChatGPT and Firefly can contain your prompt, job ID and AI provenance. Check what a file carries and wash it out before posting.',
    sections: [
      {
        heading: 'What hosted generators write',
        paragraphs: [
          'Hosted image services increasingly stamp metadata onto downloads, for transparency and to support provenance standards. The exact fields vary by service and change over time, so the only dependable answer is to open the file. Things you may find:',
        ],
        bullets: [
          'Midjourney: the prompt and a job ID in description or comment fields, often with an [IPTC DigitalSourceType](iptc-digitalsourcetype-ai) that marks the image as AI-made.',
          '[DALL·E and ChatGPT image generation](chatgpt-gemini-image-metadata): [C2PA Content Credentials](what-is-c2pa-content-credentials) naming the generator.',
          'Adobe Firefly: Content Credentials describing the image as generated with AI.',
          'Many tools: a software name, creation date and occasionally an account-linked identifier.',
        ],
      },
      {
        heading: 'A prompt is work worth keeping',
        paragraphs: [
          'For illustrators, designers and prompt writers, a polished prompt is the product of many rounds of trial and error. Any free metadata viewer will show embedded text to whoever downloads your image, ready to copy. Job IDs and account details can also tie a public image back to you.',
        ],
      },
      {
        heading: 'Look first, then wash',
        paragraphs: [
          'Lay the image on the table and read the report. Rows tagged “AI” hold prompts, generator names and source declarations; rows tagged “People” hold authors, descriptions and identifiers. Press “Wash all images” and save the clean file — or save the whole batch as a ZIP. The [AI tag cleaner](ai-tag-cleaner) page explains each kind of trace.',
          'All of this runs in your browser, so the prompts you are protecting are not handed to yet another service along the way.',
        ],
      },
      {
        heading: 'Limits worth knowing',
        paragraphs: [
          'Some providers also hide watermarks in the pixels, such as [Google’s SynthID](synthid-invisible-ai-watermarks). Those are not metadata and washing does not touch them. And if you post a realistic AI image, platform rules may still ask you to disclose it. Washing protects your process; it does not change what the image is.',
        ],
      },
    ],
    faqHeading: 'About Midjourney and DALL·E metadata',
    faq: [
      {
        q: 'Can someone read my prompt from a downloaded image?',
        a: 'If the prompt is stored in the file’s metadata, anyone with a metadata viewer can read and copy it. Washing the file before sharing removes it.',
      },
      {
        q: 'Does every Midjourney download contain the prompt?',
        a: 'It depends on format and current service behavior. Open the file in AI Label Remover to see exactly what is there.',
      },
      {
        q: 'Will washing remove SynthID or similar watermarks?',
        a: 'No. Invisible watermarks live in the pixel data, which AI Label Remover never alters.',
      },
      {
        q: 'Can I wash a whole set of generations?',
        a: 'Yes. Load up to 50 images, check the reports, then save them all as one ZIP.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'What Is C2PA? Content Credentials Explained',
    related: ['iptc-digitalsourcetype-ai', 'turn-off-content-credentials-photoshop-lightroom', 'chatgpt-gemini-image-metadata'],
    description:
      'A plain guide to C2PA Content Credentials: what the signed manifest records, where JPEG, PNG, WebP, HEIC and AVIF store it, how to read it and what removing it does.',
    sections: [
      {
        heading: 'The short version',
        paragraphs: [
          'The Coalition for Content Provenance and Authenticity (C2PA) maintains an open standard for attaching a tamper-evident history to media. Users see it as Content Credentials. Cameras, editors and AI generators can sign a record into an image saying how it came to be — shot on a camera, edited in an app, or produced by a model.',
        ],
      },
      {
        heading: 'Anatomy of a manifest',
        paragraphs: ['A manifest is a compact, structured bundle with three main parts:'],
        bullets: [
          'Claim generator — the software or service that produced the manifest, such as an editor or an AI image API.',
          'Assertions — statements about the content: c2pa.actions (created, edited, opened, resized and so on), [a digitalSourceType](iptc-digitalsourcetype-ai) and links to ingredient files.',
          'Signature — a cryptographic signature and certificate identifying the signer, plus a hash binding the manifest to the exact image data.',
        ],
      },
      {
        heading: 'Where each format keeps it',
        paragraphs: [
          'The manifest is packed in a JUMBF container that each format stores in its own slot: APP11 segments in JPEG, a caBX chunk in PNG, a C2PA chunk in WebP and a uuid box in HEIC and AVIF. As a separate block it can be read and removed without decoding the image. AI Label Remover shows the block, the claim generator, the recorded actions and the source type whenever they exist.',
        ],
      },
      {
        heading: 'What removal actually does',
        paragraphs: [
          '[Washing deletes the embedded record](remove-c2pa-content-credentials) from that copy of the file. Bear in mind that any edit already breaks the cryptographic binding — verifiers report a manifest that no longer matches its pixels as invalid — so stripping removes a record that would otherwise ride along.',
          'Some systems add “durable” credentials: [an invisible watermark or fingerprint](synthid-invisible-ai-watermarks) that lets a verifier fetch the manifest from an online repository even after the embedded copy is gone. Metadata washing has no effect on those, because they live in the pixels or on a remote server.',
        ],
      },
      {
        heading: 'Keep it, or wash it?',
        paragraphs: [
          'Credentials are useful when you need to show where an image came from — in reporting, or for your own original photography. They can also disclose software, edit history and identity you would rather keep to yourself, or [set off AI labels on lightly edited photos](made-with-ai-label). Read the manifest first and decide per file.',
        ],
      },
    ],
    faqHeading: 'About C2PA',
    faq: [
      {
        q: 'Who uses C2PA?',
        a: 'Adobe, Microsoft, Google, OpenAI, Meta, camera makers such as Leica, Sony and Nikon, and many news organisations support the standard or belong to the coalition, though each uses it differently.',
      },
      {
        q: 'Is C2PA a kind of invisible watermark?',
        a: 'No. C2PA is metadata stored beside the image data. Pixel watermarks like SynthID are a separate mechanism and are unaffected by washing.',
      },
      {
        q: 'How do I verify the signature before washing?',
        a: 'AI Label Remover shows generator, actions and source type. For full signature validation, run the original through an official Content Credentials verifier first.',
      },
      {
        q: 'Does removing C2PA cost any quality?',
        a: 'No. The manifest is its own block; the compressed image data is copied as-is.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Remove GPS Location From Photos on iPhone, Android & PC',
    related: ['which-platforms-strip-photo-metadata', 'view-remove-metadata-iphone-android', 'remove-metadata-windows-mac'],
    description:
      'Remove GPS location from photos before you share: which EXIF fields reveal your position, device and time, where they leak, and how to wash them out losslessly.',
    sections: [
      {
        heading: 'What a phone stamps into each shot',
        paragraphs: ['With location services on, a normal smartphone photo can hold:'],
        bullets: [
          'Latitude, longitude and altitude, often within a few meters, plus a GPS timestamp.',
          'The exact moment it was taken and last edited.',
          'Maker and model, lens details and sometimes a serial number or owner name.',
          'Embedded previews and secondary images (depth maps, MPF images) that carry their own copy of the EXIF.',
        ],
      },
      {
        heading: 'How the original file gets out',
        paragraphs: [
          'Big social feeds tend to strip EXIF from what they publish, but many routes deliver the untouched original: [“send as file” or document mode in chat apps](which-platforms-strip-photo-metadata), email attachments, shared cloud links, forums, marketplaces and portfolio sites. One photo taken at home can reveal your address; a series can reveal your routine.',
        ],
      },
      {
        heading: 'Check the GPS data your photo gives away',
        paragraphs: [
          'Lay the photo on the table. The “What it reveals” tab shows straight away whether place, people and time fields are present, with the GPS position decoded to decimal coordinates. “Raw metadata” lists every field grouped by [EXIF IFD0, Exif and GPS](what-is-exif-data).',
        ],
      },
      {
        heading: 'Wash it without side effects',
        paragraphs: [
          'Press “Wash all images”. [GPS, dates, device, author and software fields](remove-exif-data) go, along with embedded thumbnails and MPF secondary images that would otherwise keep a hidden copy. The orientation tag is written back into a tiny EXIF block so portrait shots do not turn sideways, and the color profile is kept so colors stay true. iPhone HEIC files are washed in place, with no conversion to JPEG — see the [HEIC metadata remover](heic-metadata-remover).',
        ],
      },
      {
        heading: 'Stopping it at the camera',
        paragraphs: [
          'You can [switch off location tagging in your camera settings](view-remove-metadata-iphone-android), or drop location for a single share using your phone’s share options. Washing the file before it goes out is still the most thorough habit, because it also clears device, time and preview data that phone settings leave behind.',
        ],
      },
      {
        heading: 'How precise the coordinates really are',
        paragraphs: [
          'EXIF stores latitude and longitude as degrees, minutes and seconds, and phones record the seconds with decimals. One second of latitude is about 31 meters, so a value with two decimal places points to a spot well under a meter wide on paper. Real accuracy depends on the signal — often 3 to 10 meters outdoors, worse indoors — but that is still enough to pick out a single house. Many phones add altitude, which can hint at a floor, and the compass direction the lens was facing.',
        ],
      },
      {
        heading: 'Real risks, not hypotheticals',
        paragraphs: ['Location data turns ordinary photos into a map of your life:'],
        bullets: [
          'A photo of something you are selling, taken at home, gives buyers — and anyone browsing — your address.',
          'A run of pictures from the gym, school gate or office reveals a routine and the times you keep it.',
          'Holiday photos posted while you are away show that your home is empty.',
          'Pictures of children can reveal their school, playground or home.',
        ],
      },
      {
        heading: 'Location hides in more than the GPS tags',
        paragraphs: [
          'Clearing the GPS directory is not always enough. Photo managers may copy coordinates into XMP, and IPTC fields such as City, Sublocation and Country can name the place in plain text. AI Label Remover removes XMP and IPTC along with EXIF, so these copies go too. What no metadata tool can remove is the picture itself: street signs, house numbers, the view from a window or a reflection can all give a location away, so take a look before you post.',
        ],
      },
      {
        heading: 'A quick check before you share',
        paragraphs: [],
        bullets: [
          'Lay the photo in AI Label Remover and look at the “What it reveals” tab.',
          'If a place is listed, press “Wash all images” and save the washed copy.',
          'Check the green panel confirms that place, people and time are gone.',
          'Glance at the picture for visible clues — addresses, number plates, landmarks.',
          'Share the washed copy, and keep the original in your own library.',
        ],
      },
    ],
    faqHeading: 'About GPS and photo privacy',
    faq: [
      {
        q: 'Can the location be recovered after washing?',
        a: 'Not from the washed file — the fields are removed, not hidden. The original on your phone still has it, so share the washed copy only.',
      },
      {
        q: 'If I turn off GPS, are my photos still tagged?',
        a: 'They can be. Phones can work out a position from Wi-Fi and mobile networks, so turn off location access for the camera app itself, not just GPS.',
      },
      {
        q: 'How do I check if a photo has GPS data?',
        a: 'Lay it in AI Label Remover: the “What it reveals” tab shows any location with decoded coordinates. On a phone, the photo info panel shows a map when GPS is present.',
      },
      {
        q: 'Don’t social networks remove GPS anyway?',
        a: 'Many large ones strip EXIF from the published image. Attachments, documents and cloud links usually keep the original metadata.',
      },
      {
        q: 'Will my photo come out rotated?',
        a: 'No. The orientation tag is preserved, so the photo displays exactly as before.',
      },
      {
        q: 'Do iPhone HEIC photos work?',
        a: 'Yes. HEIC and HEIF files are washed in place, with no format change and no re-encoding.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Batch Remove Metadata From Images — Free, No Upload',
    related: ['remove-metadata-without-losing-quality', 'remove-metadata-windows-mac', 'remove-gps-location-from-photos'],
    description:
      'Wash up to 50 images at once in the browser: how the parallel workers keep it fast, how each result is double-checked, and how to save the whole batch as one ZIP.',
    sections: [
      {
        heading: 'A batch, start to finish',
        paragraphs: [],
        bullets: [
          'Lay up to 50 JPG, PNG, WebP, GIF, HEIC or AVIF files on the table (25 MB and 40 MP each).',
          'Each one is read automatically; click any file in the queue to see its report.',
          'Press “Wash all images” once to wash everything that has been read — the same engine as the [EXIF data remover](remove-exif-data).',
          'Save files one by one, or press “Save all as ZIP” for a single archive.',
        ],
      },
      {
        heading: 'Speed without a server',
        paragraphs: [
          'AI Label Remover spreads work over several Web Workers — background threads in your browser — matched to your CPU core count. Each worker takes one file, parses it and hands back washed bytes, so the page stays smooth even with heavy HEIC files. The ZIP uses the store method, since images are already compressed; packing is quick and [adds no further loss](remove-metadata-without-losing-quality).',
        ],
      },
      {
        heading: 'Every result is re-read',
        paragraphs: [
          'After washing, each output is read again and the green result panel confirms whether place, people, time and AI traces are gone. If two files share a name, the copy inside the ZIP gets a number so nothing is overwritten.',
        ],
      },
      {
        heading: 'Working through hundreds of files',
        paragraphs: [
          'Go in rounds of 50 and clear the table between rounds to free memory. On low-memory phones, close other heavy tabs first. Since nothing is uploaded, you can even go offline once the page has loaded.',
        ],
      },
      {
        heading: 'Nothing leaves the machine',
        paragraphs: [
          'No image is uploaded, stored or logged; the only network traffic is the page itself loading. That makes batch washing suitable for client deliveries, unreleased shoots and anything you are not allowed to send to a third party.',
        ],
      },
    ],
    faqHeading: 'About batch washing',
    faq: [
      {
        q: 'Can one batch mix different formats?',
        a: 'Yes. A single batch can mix JPG, PNG, WebP, GIF, HEIC and AVIF, and every file keeps its own format.',
      },
      {
        q: 'Why stop at 50 files?',
        a: 'All processing uses your device’s memory. The cap keeps phones and older laptops stable; you can run as many rounds as you like.',
      },
      {
        q: 'Do file names change?',
        a: 'No. Washed files keep their names. Only exact duplicates inside the ZIP get a numbered suffix.',
      },
      {
        q: 'Does it work offline?',
        a: 'Yes. Once loaded, the page washes files with no connection, because nothing is sent anywhere.',
      },
    ],
  },

  'chatgpt-gemini-image-metadata': {
    title: 'ChatGPT, Gemini and Nano Banana Images: What Metadata They Carry',
    metaTitle: 'ChatGPT & Gemini Image Metadata: C2PA and SynthID',
    summary: [
      'Images made with ChatGPT or Google Gemini (including Nano Banana) leave the generator with provenance attached: C2PA Content Credentials stored beside the picture, and in Google’s case an invisible SynthID watermark woven into the pixels.',
      'This guide shows what each provider typically writes, how to read it in your browser, which parts a metadata cleaner can wash out — and which parts no honest cleaner can touch.',
    ],
    description:
      'What metadata ChatGPT and Gemini (Nano Banana) images carry — C2PA Content Credentials, SynthID, visible marks — how to read it, and what washing can remove.',
    related: ['synthid-invisible-ai-watermarks', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    sections: [
      {
        heading: 'Two providers, two layers of marking',
        paragraphs: [
          'OpenAI and Google both mark generated images, but they lean on different layers. OpenAI relies mainly on [C2PA Content Credentials](what-is-c2pa-content-credentials): a signed manifest stored in the file that names the generator and states the image was created by AI. Google relies mainly on [SynthID](synthid-invisible-ai-watermarks), an invisible watermark embedded in the pixels at generation time, and has added C2PA metadata to newer models such as Nano Banana Pro in the Gemini app and its cloud products.',
          'The two layers behave very differently. Metadata sits in its own block, can be read by any capable viewer and disappears as soon as the file is re-encoded or cleaned. A pixel watermark survives cropping, resizing and compression, and can only be read by the provider’s own detector.',
        ],
      },
      {
        heading: 'What a ChatGPT image usually contains',
        paragraphs: ['Exact fields change between app versions, but a PNG or JPEG downloaded straight from ChatGPT or the OpenAI image API commonly holds:'],
        bullets: [
          'A C2PA manifest — in a caBX chunk for PNG or APP11 segments for JPEG — signed with a certificate issued to OpenAI.',
          'A claim generator naming the OpenAI service that produced the image.',
          'A c2pa.created action with the digital source type [trainedAlgorithmicMedia](iptc-digitalsourcetype-ai), the standard way of saying “made by a generative model”.',
          'When you edit an uploaded photo, an ingredient entry pointing to the original and actions describing the edit.',
        ],
      },
      {
        heading: 'What a Gemini or Nano Banana image usually contains',
        paragraphs: [
          'Every image generated by Google’s models carries SynthID in the pixels. Depending on the model, app and plan, you may also find a visible sparkle mark in a corner and, for newer models, a C2PA manifest describing the image as AI-generated. Google has also made it possible to ask Gemini whether an image carries SynthID, which is the only reliable way to check for the watermark.',
          'Because the visible mark and SynthID are part of the picture, they are unaffected by anything that only edits metadata. The C2PA manifest, if present, behaves like any other metadata block.',
        ],
      },
      {
        heading: 'Why the metadata often vanishes on its own',
        paragraphs: [
          'Provenance metadata is fragile. A screenshot drops it completely. Many chat apps and social networks re-encode uploads and strip the public copy. Even uploading a file back into a chat assistant can leave only the bare image data behind. So a ChatGPT or Gemini image without Content Credentials is common and proves nothing about where it came from — only the original download keeps the full record.',
        ],
      },
      {
        heading: 'Read the file before you share it',
        paragraphs: [
          'Lay the image on the table at the top of this page. The “AI traces” tab shows whether a C2PA manifest is present, which claim generator signed it and which source type it declares. “Raw metadata” lists the recorded actions and any ingredients, plus EXIF and XMP fields added by apps the file has passed through. Nothing is uploaded; the file is read inside your browser.',
        ],
      },
      {
        heading: 'What washing removes — and what stays',
        paragraphs: ['Pressing “Wash all images” — or using the dedicated [AI tag cleaner](ai-tag-cleaner) — cuts the metadata out of the byte stream without redrawing the picture. In practice:'],
        bullets: [
          'Removed: the C2PA manifest, XMP and IPTC fields, EXIF and any text that names the tool or holds a prompt.',
          'Kept: pixel data, dimensions, rotation and the ICC color profile — so the image looks identical.',
          'Not affected: SynthID and any visible sparkle mark, because both live in the pixels. Provider verifiers can still recognise the image by its watermark.',
        ],
      },
      {
        heading: 'Use AI images honestly',
        paragraphs: [
          'Washing is a privacy tool: it keeps prompts, account details and editing history from riding along with a file. It does not change what the image is. If you publish a realistic AI image, most platforms expect you to disclose it, and some limit the reach of accounts that do not. Correct mislabels on real photos; label genuine AI work clearly.',
        ],
      },
    ],
    faqHeading: 'About ChatGPT and Gemini image metadata',
    faq: [
      {
        q: 'Does every ChatGPT image include C2PA?',
        a: 'Images downloaded directly from OpenAI’s image generation normally include Content Credentials. Copies that were screenshotted, re-saved or passed through other apps often lose them.',
      },
      {
        q: 'Can AI Label Remover remove SynthID from Gemini images?',
        a: 'No. SynthID is embedded in the pixels, and AI Label Remover never changes pixels. It removes only metadata such as C2PA, XMP and EXIF.',
      },
      {
        q: 'How do I check if an image came from Gemini?',
        a: 'Look for a C2PA manifest in AI Label Remover first. For SynthID, use Google’s own verification, for example by asking Gemini about the image.',
      },
      {
        q: 'Will washing a ChatGPT image reduce its quality?',
        a: 'No. Only metadata blocks are removed; the compressed image data is copied unchanged, so the result is pixel-for-pixel identical.',
      },
    ],
  },

  'remove-metadata-windows-mac': {
    title: 'How to Remove Metadata From Photos on Windows and Mac',
    metaTitle: 'Remove Photo Metadata on Windows 11 and Mac',
    summary: [
      'Windows and macOS both ship with a way to strip some metadata from photos, but each covers only part of the job: Windows focuses on EXIF properties, macOS on location.',
      'Here are the exact built-in steps, the free command-line method professionals use, and a browser method that works the same on both systems and also removes C2PA, XMP and AI prompts.',
    ],
    description:
      'Step-by-step: remove EXIF, GPS and other metadata from photos on Windows 11/10 and macOS with built-in tools, ExifTool or your browser — and what each one misses.',
    related: ['view-remove-metadata-iphone-android', 'remove-metadata-without-losing-quality', 'what-is-exif-data'],
    sections: [
      {
        heading: 'Know what you are removing',
        paragraphs: [
          'A photo can carry several kinds of metadata at once: [EXIF](what-is-exif-data) (camera, time, GPS), XMP (editing history, descriptions, AI fields), IPTC (captions, rights, [DigitalSourceType](iptc-digitalsourcetype-ai)), [C2PA Content Credentials](what-is-c2pa-content-credentials) and, in PNG files, text chunks holding AI prompts. Built-in operating-system tools were designed around EXIF, so they tend to leave the other types in place. Keep that in mind when choosing a method.',
        ],
      },
      {
        heading: 'Windows 11 and 10: File Explorer',
        paragraphs: ['File Explorer has a built-in remover for common properties:'],
        bullets: [
          'Select one or more photos, right-click and choose Properties.',
          'Open the Details tab and click “Remove Properties and Personal Information” at the bottom.',
          'Choose “Create a copy with all possible properties removed” for a clean duplicate, or “Remove the following properties from this file” to tick individual fields.',
          'Click OK, then open the copy’s Details tab to confirm the GPS and camera fields are empty.',
        ],
      },
      {
        heading: 'Where the Windows method falls short',
        paragraphs: [
          'The option works best with JPEG and TIFF. For PNG, WebP, HEIC and AVIF it may show little or nothing to remove. It can also leave XMP packets, C2PA manifests and embedded thumbnails behind, and it gives no report of what remained. The Photos app does not offer a metadata-stripping export.',
        ],
      },
      {
        heading: 'macOS: Preview and Photos',
        paragraphs: ['On a Mac the built-in options are aimed at location:'],
        bullets: [
          'Preview: open the photo, choose Tools › Show Inspector, open the location (GPS) tab and click “Remove Location Info”, then save.',
          'Photos: select images and choose Image › Location › Hide Location, or use File › Export and leave location information unticked so the exported copy has no GPS.',
          'Finder’s Get Info and Preview’s Inspector are useful for checking the result, but both show only a subset of fields.',
        ],
      },
      {
        heading: 'Where the Mac method falls short',
        paragraphs: [
          'Removing location leaves the device model, capture time, software and edit history in place. Exporting from Preview or Photos to JPEG [re-encodes the image](remove-metadata-without-losing-quality), which costs a little quality each time, and HEIC files may be converted unless you choose otherwise.',
        ],
      },
      {
        heading: 'Command line on both: ExifTool',
        paragraphs: [
          'ExifTool is a free, long-standing metadata tool for Windows, macOS and Linux. It edits files without re-encoding them. Useful commands:',
        ],
        bullets: [
          'exiftool -all= photo.jpg — removes all writable metadata and keeps a backup named photo.jpg_original.',
          'exiftool -all= --icc_profile:all -tagsfromfile @ -orientation photo.jpg — removes everything except the color profile and orientation, so colors and rotation stay correct.',
          'exiftool -all= -r "C:\\Photos\\Share" — cleans a whole folder, including subfolders.',
        ],
      },
      {
        heading: 'Browser method: same steps on any computer',
        paragraphs: [
          'If you cannot install software — on a work laptop, for example — or you want one method for every format, open AI Label Remover in Chrome, Edge, Safari or Firefox. Drop up to 50 images, read the report, press “Wash all images” and save the files or a ZIP. It [removes EXIF](remove-exif-data), GPS, XMP, IPTC, C2PA and PNG prompt chunks from JPEG, PNG, WebP, GIF, HEIC and AVIF while keeping orientation and color profile, and it runs entirely on your machine.',
        ],
      },
      {
        heading: 'Which method to choose',
        paragraphs: [],
        bullets: [
          'One JPEG, just the basics: File Explorer on Windows, Preview on Mac.',
          'Location only, straight from your library: Photos on Mac.',
          'Scripts, servers or thousands of files: ExifTool.',
          'Mixed formats, AI metadata or no install allowed: a local browser tool such as AI Label Remover.',
        ],
      },
    ],
    faqHeading: 'About removing metadata on a computer',
    faq: [
      {
        q: 'Does “Remove Properties and Personal Information” delete GPS?',
        a: 'Yes, for JPEG files it removes GPS along with other EXIF properties. Check the Details tab of the result, because some XMP data can remain.',
      },
      {
        q: 'Can I remove metadata from HEIC photos on Windows?',
        a: 'File Explorer has limited HEIC support. ExifTool or a browser tool that handles HEIC, such as AI Label Remover, removes it without converting the file.',
      },
      {
        q: 'Does exporting from Preview remove all metadata?',
        a: 'Not reliably. Export can drop some fields but keep others, and it re-compresses JPEGs. Check the exported file before sharing.',
      },
      {
        q: 'Which method keeps the image quality?',
        a: 'File Explorer, ExifTool and AI Label Remover edit metadata without re-encoding. Exporting a new JPEG from an editor or viewer re-compresses the picture.',
      },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Image Metadata Viewer: See EXIF, GPS, XMP, IPTC and C2PA in One Place',
    metaTitle: 'Image Metadata Viewer: Check EXIF, GPS and AI Data',
    summary: [
      'Before you share a photo or trust an image, a good metadata viewer shows everything the file says about itself — not just the handful of fields a phone or file manager shows.',
      'This guide explains what a complete metadata check covers, where built-in viewers stop, why many online EXIF viewers are a privacy risk in themselves, and how to read the fields that matter.',
    ],
    description:
      'Free online image metadata viewer: see every EXIF, GPS, XMP, IPTC, C2PA and AI prompt field in your browser, with no upload — and what built-in viewers miss.',
    related: ['what-is-exif-data', 'how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos'],
    sections: [
      {
        heading: 'What a complete check covers',
        paragraphs: ['A thorough metadata viewer reads every block in the file, not just EXIF:'],
        bullets: [
          'EXIF — camera or phone model, exposure, capture time, lens and orientation.',
          'GPS — latitude, longitude, altitude and direction, if location was on.',
          'XMP — editing software, history, descriptions, ratings and AI fields.',
          'IPTC — captions, keywords, creator, copyright and [DigitalSourceType](iptc-digitalsourcetype-ai).',
          'C2PA — [Content Credentials](what-is-c2pa-content-credentials): who signed the file, what actions were recorded, whether AI was involved.',
          'PNG text chunks — [Stable Diffusion parameters, ComfyUI workflows](remove-stable-diffusion-comfyui-metadata) and other embedded text.',
          'ICC profile and thumbnails — color information and hidden preview images.',
        ],
      },
      {
        heading: 'Built-in viewers and their blind spots',
        paragraphs: [
          'Windows shows metadata under Properties › Details; macOS under Preview’s Inspector or Finder’s Get Info; iPhone when you swipe up on a photo; Google Photos in the details panel. These are fine for a quick look at date, camera and location, but they show a curated subset of EXIF and usually ignore XMP, IPTC, C2PA and PNG text entirely. A file can look clean in Explorer and still carry a full AI prompt.',
        ],
      },
      {
        heading: 'The privacy catch with online EXIF viewers',
        paragraphs: [
          'Many “online EXIF viewer” sites work by uploading your image to their server, reading it there and sending back a report. For a privacy check that is backwards: the very photo you are worried about — with its GPS position — has now been copied to a third party. Prefer a viewer that reads the file locally. A simple test is to load the page, disconnect from the internet and see whether the viewer still works.',
        ],
      },
      {
        heading: 'Reading a file in AI Label Remover',
        paragraphs: [
          'Lay the image on the table at the top of this page. Three tabs organise the result:',
        ],
        bullets: [
          '“What it reveals” — a plain summary of place, people, time and device, with GPS decoded to decimal coordinates.',
          '“AI traces” — C2PA manifests, IPTC source types, generator names and prompts, with a verdict.',
          '“Raw metadata” — every field grouped by source: EXIF IFD0, Exif, GPS, XMP namespaces, IPTC, C2PA and PNG text chunks.',
        ],
      },
      {
        heading: 'Fields worth reading first',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude — [the exact spot](remove-gps-location-from-photos); paste into a map to see what it reveals.',
          'DateTimeOriginal versus ModifyDate — when the photo was taken versus last saved.',
          'Make, Model, BodySerialNumber, LensSerialNumber — can tie photos to one device.',
          'Artist, Copyright, OwnerName — names you may not realise are embedded.',
          'Software and CreatorTool — which apps touched the file, including AI tools.',
          'DigitalSourceType and the C2PA claim generator — how the image says it was made.',
        ],
      },
      {
        heading: 'When the viewer shows almost nothing',
        paragraphs: [
          'An image saved from a social feed, a screenshot or a file sent through a chat app has often been re-encoded and stripped. Little or no metadata is normal in those cases and tells you nothing about whether the picture is real, edited or AI-generated. Ask for the original file if the origin matters.',
        ],
      },
      {
        heading: 'Viewing is not verifying',
        paragraphs: [
          'Ordinary metadata is plain text that anyone can edit, so treat it as a clue rather than proof. C2PA is different because it is signed, but a viewer showing the manifest is not the same as validating the signature; use an official Content Credentials verifier for that. When you have seen enough and want the data gone, press “Wash all images” to remove it without changing the picture — the [EXIF data remover](remove-exif-data) page explains exactly what goes.',
        ],
      },
    ],
    faqHeading: 'About viewing image metadata',
    faq: [
      {
        q: 'Is there a free image metadata viewer that does not upload my photo?',
        a: 'Yes. AI Label Remover reads files inside your browser with no upload and no account, and it keeps working offline once the page has loaded.',
      },
      {
        q: 'Can I see the prompt of an AI image?',
        a: 'If the generator saved it, yes. Stable Diffusion and ComfyUI prompts appear under PNG text chunks, and some services store prompts in XMP or EXIF fields.',
      },
      {
        q: 'Why does Windows show no metadata for my PNG?',
        a: 'File Explorer shows only a few properties for PNG. Text chunks, XMP and C2PA are invisible there but appear in a full viewer.',
      },
      {
        q: 'Can metadata tell me if a photo is fake?',
        a: 'It can provide strong clues, such as an AI claim generator, but missing or edited metadata proves nothing on its own.',
      },
    ],
  },

  'iptc-digitalsourcetype-ai': {
    title: 'IPTC DigitalSourceType: The Field That Tells Platforms an Image Is AI',
    metaTitle: 'IPTC DigitalSourceType and trainedAlgorithmicMedia',
    summary: [
      'DigitalSourceType is a small IPTC metadata field with a big effect: a single value such as trainedAlgorithmicMedia is enough for many platforms to label an image as AI-generated.',
      'This guide lists the values you will meet, who writes and reads the field, why it is easy to change, and how to find or remove it in a file.',
    ],
    description:
      'What the IPTC DigitalSourceType field means, the values trainedAlgorithmicMedia and compositeWithTrainedAlgorithmicMedia, who reads it, and how to find or remove it.',
    related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'which-platforms-label-ai-images'],
    sections: [
      {
        heading: 'One field, a fixed list of answers',
        paragraphs: [
          'DigitalSourceType is part of the IPTC Photo Metadata Standard, the vocabulary newsrooms, stock agencies and photo software use to describe images. It answers one question: how was this content made? The answer is not free text but a term from the IPTC “digital source type” controlled vocabulary, written as a URI such as http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia.',
          'In image files the field is stored in XMP as Iptc4xmpExt:DigitalSourceType. [C2PA Content Credentials](what-is-c2pa-content-credentials) reuse the same vocabulary inside their signed actions, so the same terms appear in both places.',
        ],
      },
      {
        heading: 'The values you will meet',
        paragraphs: ['The vocabulary has grown over the years. The terms most relevant to AI labels are:'],
        bullets: [
          'trainedAlgorithmicMedia — created by a generative model trained on sample content.',
          'compositeWithTrainedAlgorithmicMedia — a composite that includes generative AI elements, for example [a photo edited with Generative Fill](turn-off-content-credentials-photoshop-lightroom).',
          'algorithmicMedia — created purely by an algorithm without training data, such as procedural or fractal art.',
          'compositeSynthetic — a composite that includes synthetic elements.',
          'algorithmicallyEnhanced — minor augmentation or correction by an algorithm.',
          'digitalCapture — captured by a digital camera or scanner from a real scene.',
          'computationalCapture — a capture processed by algorithms at the time it was taken, as many smartphones do.',
          'digitalArt and screenCapture — artwork made by a person with software, and screenshots.',
        ],
      },
      {
        heading: 'Who writes it',
        paragraphs: [
          'Several AI image services write trainedAlgorithmicMedia into their output. Editors that offer generative tools can record a composite value after an AI edit. Stock libraries and news agencies fill it in during ingestion, and some marketplaces ask sellers to mark AI images this way. The field can also be copied forward silently: once set, it survives every app that preserves XMP.',
        ],
      },
      {
        heading: 'Who reads it',
        paragraphs: [
          'Meta has said it uses IPTC metadata alongside C2PA when deciding whether to show [“AI info”](made-with-ai-label) on Facebook, Instagram and Threads. [Other platforms](which-platforms-label-ai-images), search engines and shopping services have announced similar use of the field for AI disclosure. That is why a lightly retouched real photo carrying compositeWithTrainedAlgorithmicMedia can end up labelled exactly like a fully generated image.',
        ],
      },
      {
        heading: 'Unsigned, so easy to change',
        paragraphs: [
          'Unlike a C2PA manifest, plain IPTC metadata carries no signature. Any metadata editor can add, change or remove DigitalSourceType, and many apps drop it when re-saving. Treat the field as a declaration, not as proof — whether it says “AI” or “camera”.',
        ],
      },
      {
        heading: 'Finding and removing it',
        paragraphs: [
          'Lay the image in AI Label Remover. In “AI traces” the field appears as “XMP · Iptc4xmpExt › DigitalSourceType” with its value; the same term inside a C2PA manifest is listed under C2PA. Pressing “Wash all images” removes the whole XMP packet and C2PA store, which takes the field with it, along with EXIF and other identifying data. The [AI tag cleaner](ai-tag-cleaner) page covers the other AI fields too.',
          'If you need to remove only this one field and keep the rest of your XMP, a command-line tool can do it: exiftool -XMP-iptcExt:DigitalSourceType= photo.jpg. Remember that a matching value may also sit in a C2PA manifest.',
        ],
      },
      {
        heading: 'When the field should stay',
        paragraphs: [
          'The field exists so viewers know how an image was made. If an image really is generated or substantially altered by AI, keep the declaration — or disclose it when you post. Removing it is appropriate when it misdescribes your work or when you are cleaning private data from a file.',
        ],
      },
    ],
    faqHeading: 'About IPTC DigitalSourceType',
    faq: [
      {
        q: 'What does trainedAlgorithmicMedia mean?',
        a: 'It is the IPTC term for content created by a generative AI model — a fully AI-generated image.',
      },
      {
        q: 'Why does my edited photo say compositeWithTrainedAlgorithmicMedia?',
        a: 'Because a generative edit, such as removing an object with AI, was recorded. The term marks a composite that includes AI-generated parts, regardless of their size.',
      },
      {
        q: 'Is DigitalSourceType the same as C2PA?',
        a: 'No. DigitalSourceType is an IPTC field, usually unsigned, stored in XMP. C2PA is a signed manifest that can contain the same vocabulary inside its actions.',
      },
      {
        q: 'Can I remove only DigitalSourceType with AI Label Remover?',
        a: 'Not at the moment. AI Label Remover removes all XMP and C2PA in one pass. ExifTool can delete the single field if you need to keep other XMP data.',
      },
    ],
  },

  'remove-metadata-without-losing-quality': {
    title: 'Remove Metadata Without Losing Quality: Why Screenshots and Re-saving Hurt',
    metaTitle: 'Remove Image Metadata Without Losing Quality',
    summary: [
      'The quick ways to strip metadata — taking a screenshot, re-saving in an editor, running a file through an online converter — all redraw the picture. You lose the metadata, but you also lose sharpness, resolution or color accuracy.',
      'This guide explains why that happens, how to remove metadata without losing quality, and how to check for yourself that not a single pixel changed.',
    ],
    description:
      'Remove EXIF, GPS, C2PA and AI metadata without losing quality: why screenshots and re-saving hurt, how lossless removal works and how to verify it.',
    related: ['batch-remove-metadata', 'remove-metadata-windows-mac', 'what-is-exif-data'],
    sections: [
      {
        heading: 'Metadata and pixels live apart',
        paragraphs: [
          'Every common image format separates the picture from the notes about it. A JPEG is a series of marker segments: metadata in APP1, APP11 and APP13, the compressed image after the SOS marker. A PNG is a list of chunks, with pixels in IDAT and text in tEXt, zTXt or iTXt. WebP uses RIFF chunks, and HEIC and AVIF use ISOBMFF boxes. Because the two are stored separately, metadata can be removed without decoding the image at all.',
        ],
      },
      {
        heading: 'The usual shortcuts, and what they cost',
        paragraphs: [],
        bullets: [
          'Screenshot — removes all metadata, but captures at screen resolution, may crop or scale, can shift colors and may catch notifications or other content on screen.',
          'Re-save or export as JPEG — decodes and re-compresses the image; each generation adds artifacts, and the ICC profile may be dropped so colors shift.',
          'Online converters — re-encode the image and usually upload it to a server first.',
          'Format conversion, for example [HEIC to JPEG](view-remove-metadata-iphone-android) — changes compression and often loses wide-gamut color or transparency.',
        ],
      },
      {
        heading: 'How to remove metadata without losing quality',
        paragraphs: [
          'A lossless cleaner walks the file structure and copies every block that describes the picture, skipping only the blocks that carry metadata. For JPEG that means dropping APP1 EXIF and XMP, APP11 C2PA, APP13 IPTC and comments, while copying the quantization tables, Huffman tables and scan data untouched. For PNG, whole text and metadata chunks are removed, so the CRC of every remaining chunk stays valid. For HEIC and AVIF, metadata items are removed and internal offsets are rewritten so the image data still points to the right place.',
          'AI Label Remover works this way in your browser, whether you use the [EXIF data remover](remove-exif-data) or the [PNG metadata remover](png-metadata-remover). The output contains exactly the same compressed image data as the input.',
        ],
      },
      {
        heading: 'Three things a good cleaner keeps',
        paragraphs: [],
        bullets: [
          'Orientation — many phone photos are stored sideways with [an EXIF tag](what-is-exif-data) telling viewers to rotate them. Drop it and portraits display rotated. AI Label Remover writes the tag back into a minimal EXIF block.',
          'Color profile — the ICC profile tells apps how to interpret colors, especially for Display P3 phone photos. Without it, images can look dull or oversaturated.',
          'Animation and transparency — APNG, animated WebP and GIF frames, plus alpha channels, must survive intact.',
        ],
      },
      {
        heading: 'How to check it really was lossless',
        paragraphs: ['You do not have to take a tool’s word for it:'],
        bullets: [
          'Compare dimensions — width and height should be identical.',
          'Compare file size — the clean file should be smaller only by roughly the size of the removed metadata, never dramatically smaller.',
          'Compare pixels — open both in an editor as layers with the Difference blend mode; a lossless result is pure black.',
          'Re-read the file — [AI Label Remover reads every washed file again](batch-remove-metadata) and shows which fields remain.',
        ],
      },
      {
        heading: 'Where the size savings come from',
        paragraphs: [
          'Removing metadata can still make files noticeably smaller. Embedded thumbnails and MPF preview images in camera JPEGs, long XMP edit histories and large [ComfyUI workflows](remove-stable-diffusion-comfyui-metadata) in PNGs can add tens or hundreds of kilobytes. Removing them shrinks the file with no change to what you see.',
        ],
      },
    ],
    faqHeading: 'About lossless metadata removal',
    faq: [
      {
        q: 'Does removing metadata reduce image quality?',
        a: 'Not when it is done at the byte level. Only re-encoding — screenshots, re-saving, converting — reduces quality.',
      },
      {
        q: 'Why is my file smaller after washing?',
        a: 'Because metadata blocks, thumbnails and preview images were removed. The image data itself is unchanged.',
      },
      {
        q: 'Will the colors look different after washing?',
        a: 'No. AI Label Remover keeps the ICC color profile, so colors are displayed exactly as before.',
      },
      {
        q: 'Is a screenshot a safe way to remove metadata?',
        a: 'It removes metadata but lowers quality and may capture other things on screen. Lossless removal keeps the original image intact.',
      },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    metaTitle: 'How to Check If an Image Is AI-Generated (Free)',
    related: ['iptc-digitalsourcetype-ai', 'image-metadata-viewer-online', 'synthid-invisible-ai-watermarks'],
    title: 'Is This Image AI-Generated? How to Check the File Itself',
    summary: [
      'The quickest trustworthy clue to whether an image is AI-generated is inside the file: C2PA Content Credentials, the IPTC DigitalSourceType field and generator text frequently name the exact tool that made an image.',
      'Here is what to look for, how to read it with a free checker that runs in your browser, and why finding nothing never proves a picture is real.',
    ],
    description:
      'Check if an image is AI-generated by reading C2PA, IPTC DigitalSourceType and generator metadata in your browser — and what each signal can and cannot prove.',
    sections: [
      {
        heading: 'Get hold of the original',
        paragraphs: [
          'Metadata only survives in the file as it left the camera or generator. Screenshots, re-saves and images pulled from social feeds have usually been re-encoded and lost most of it. Ask for the original export — the one sent “as a file”, not as a compressed photo — whenever you can.',
        ],
      },
      {
        heading: 'Clue one: Content Credentials',
        paragraphs: [
          'Tools that support C2PA attach [a digitally signed record](what-is-c2pa-content-credentials). Its claim generator names the app or service that produced the image, its c2pa.actions list steps such as “created” or “edited”, and a digitalSourceType can state AI generation directly.',
          'Because the record is signed, a verifier can also tell whether the image changed after signing. A manifest from an AI service is the strongest metadata evidence available.',
        ],
      },
      {
        heading: 'Clue two: IPTC DigitalSourceType',
        paragraphs: ['Many generators and editors fill in [a standard IPTC field](iptc-digitalsourcetype-ai) describing how content was made. The values you will meet most:'],
        bullets: [
          'trainedAlgorithmicMedia — produced by a generative AI model.',
          'compositeWithTrainedAlgorithmicMedia — a real photo with AI-generated or replaced areas, as with Generative Fill.',
          'algorithmicMedia — made by an algorithm without training data, such as procedural art.',
          'digitalCapture — taken with a camera, no generative content declared.',
        ],
      },
      {
        heading: 'Clue three: prompts and tool names',
        paragraphs: [
          '[Stable Diffusion front-ends and ComfyUI](remove-stable-diffusion-comfyui-metadata) save prompt, seed, model and workflow as text in PNG files. Other tools leave their name in XMP CreatorTool or EXIF Software. Any of these points clearly to AI involvement — and often tells you exactly how the image was made.',
        ],
      },
      {
        heading: 'Checking if an image is AI-generated',
        paragraphs: [
          'Lay the file on the table at the top of this page. The “AI traces” tab gives one of three verdicts — AI traces found, worth a second look, or no AI traces — and lists each signal with its source. “Raw metadata” shows the underlying values. Nothing is uploaded. To remove what it finds, use the [AI tag cleaner](ai-tag-cleaner).',
        ],
      },
      {
        heading: 'If the file is empty',
        paragraphs: [
          'Absent metadata proves nothing either way: editors, chat apps and social networks strip it constantly, and missing camera EXIF is a weak hint at best. Next steps are the provider’s own watermark checker (for example for [Google’s SynthID](synthid-invisible-ai-watermarks)), a reverse image search to find the earliest copy, and a look at where the image first appeared. Pixel-based AI detectors report probabilities, not proof.',
        ],
      },
    ],
    faqHeading: 'About checking images for AI',
    faq: [
      {
        q: 'Can I tell if an image was made with ChatGPT or Gemini?',
        a: 'If the file still has its Content Credentials, the claim generator names the service. For Gemini images, Google’s SynthID check can also detect the watermark in the pixels.',
      },
      {
        q: 'If AI Label Remover finds no AI traces, is the photo real?',
        a: 'Not necessarily. It means the file holds no AI metadata. Metadata is easily lost or removed, so read a clean result as “unknown”, not as proof.',
      },
      {
        q: 'Can I check something saved from Instagram or Facebook?',
        a: 'You can, but platforms usually strip the published copy, so expect little or nothing. The platform’s own “AI info” label is a separate signal.',
      },
      {
        q: 'Is the check free and private?',
        a: 'Yes — free, no account, and the file is read locally without being uploaded.',
      },
    ],
  },

  'which-platforms-label-ai-images': {
    metaTitle: 'Which Platforms Label AI Images? Meta, TikTok, YouTube',
    related: ['made-with-ai-label', 'iptc-digitalsourcetype-ai', 'what-is-c2pa-content-credentials'],
    title: 'AI Labels Across Social Media: Instagram, Facebook, TikTok, YouTube, Pinterest and LinkedIn',
    summary: [
      'More and more platforms tag images and videos with labels like “AI info”. Most lean on the same signals inside the file — C2PA Content Credentials and IPTC metadata — combined with what creators declare.',
      'This overview covers how the big platforms generally apply labels, what sets them off, and what that means for real photos with a light AI-assisted edit.',
    ],
    description:
      'How Instagram, Facebook, Threads, TikTok, YouTube, Pinterest and LinkedIn apply AI labels, which file metadata triggers them, and what that means for edited photos.',
    sections: [
      {
        heading: 'The shared signals',
        paragraphs: ['Automatic labeling usually rests on a short list of common signals:'],
        bullets: [
          '[C2PA Content Credentials](what-is-c2pa-content-credentials) declaring AI generation or AI editing.',
          '[The IPTC DigitalSourceType field](iptc-digitalsourcetype-ai), such as trainedAlgorithmicMedia.',
          '[Invisible watermarks from some AI providers](synthid-invisible-ai-watermarks), where the platform has a matching detector.',
          'Creator disclosure — a toggle or checkbox when posting realistic AI content.',
        ],
      },
      {
        heading: 'Meta: Instagram, Facebook, Threads',
        paragraphs: [
          'Meta shows [“AI info”](made-with-ai-label) (renamed from “Made with AI” in 2024) when it detects industry-standard AI signals or when a creator discloses AI use. After photographers objected to lightly retouched photos being tagged, Meta moved the label for AI-edited content into the post menu and kept the more visible label for substantially generated content.',
        ],
      },
      {
        heading: 'TikTok',
        paragraphs: [
          'TikTok requires creators to label realistic AI-generated content and has said it automatically labels uploads that arrive with C2PA Content Credentials identifying them as AI-generated.',
        ],
      },
      {
        heading: 'YouTube',
        paragraphs: [
          'YouTube asks uploaders to disclose realistic altered or synthetic content and shows viewers a label. It also uses C2PA in the other direction, with a “captured with a camera” style indicator for content carrying authentic capture credentials.',
        ],
      },
      {
        heading: 'Pinterest and LinkedIn',
        paragraphs: [
          'Pinterest has added labels for AI-generated or AI-modified images based on metadata and its own classifiers. LinkedIn shows a Content Credentials icon on images that carry C2PA data, so viewers can inspect source and edits.',
          'Every platform revises these policies often; check the current help center before relying on any particular behavior.',
        ],
      },
      {
        heading: 'When a real photo is tagged',
        paragraphs: [
          'One generative edit, such as removing a passer-by, can mark the entire photo as composite AI content in its metadata. Before posting, lay the file in AI Label Remover to see which field would trigger a label. If the label would be wrong, [washing a copy](ai-tag-cleaner) removes the cause; if the image is substantially generated, disclose it — that is what labels are for.',
        ],
      },
    ],
    faqHeading: 'About AI labels on social platforms',
    faq: [
      {
        q: 'Does Instagram label AI-generated profiles too?',
        a: 'Instagram has introduced profile-level labels for accounts that feature AI-generated people and may limit recommendations for accounts that do not disclose. Creators who only edit with AI tools are generally not affected; check Instagram’s current guidance.',
      },
      {
        q: 'I only removed a small object — why the AI label?',
        a: 'Many editors record any generative edit in C2PA or IPTC as “composite with AI”. Platforms read the declaration without weighing how big the edit was.',
      },
      {
        q: 'Do platforms keep my metadata after posting?',
        a: 'Most read it during upload and strip it from the public copy, so downloading your own post rarely shows the original fields.',
      },
      {
        q: 'Does a washed image avoid every label?',
        a: 'Not always. Washing removes in-file signals, but platforms can also use watermark detection, classifiers or ask you to disclose.',
      },
    ],
  },

  'what-metadata-ai-image-generators-add': {
    metaTitle: 'What Metadata Do AI Image Generators Add?',
    related: ['chatgpt-gemini-image-metadata', 'remove-stable-diffusion-comfyui-metadata', 'iptc-digitalsourcetype-ai'],
    title: 'What AI Image Generators Hide in Your Files: DALL·E, Firefly, Midjourney, Gemini, Stable Diffusion',
    summary: [
      'Nearly every AI image tool leaves something behind in its output, from signed Content Credentials to plain-text prompts. Knowing what each writes helps you guard your prompts and understand why a platform tags an image.',
      'Below is a rundown of the metadata commonly found in files from popular generators, and how to see what your own files actually contain.',
    ],
    description:
      'What popular AI image generators embed — C2PA, IPTC DigitalSourceType, XMP, prompts and workflows — and how to read or wash it out of your files.',
    sections: [
      {
        heading: 'Three families of traces',
        paragraphs: ['AI-related metadata comes in three broad kinds:'],
        bullets: [
          'Signed provenance — C2PA Content Credentials naming the generator and what it did.',
          'Descriptive fields — IPTC and XMP entries such as [DigitalSourceType](iptc-digitalsourcetype-ai), CreatorTool or a description.',
          'Generation settings — prompt, seed, model and parameters saved as text, mostly by local tools.',
        ],
      },
      {
        heading: 'OpenAI: ChatGPT images and DALL·E',
        paragraphs: [
          'Images from [OpenAI’s image generation](chatgpt-gemini-image-metadata) carry C2PA Content Credentials identifying OpenAI as the source, so C2PA-aware viewers and platforms can recognise them.',
        ],
      },
      {
        heading: 'Adobe: Firefly and Photoshop’s generative tools',
        paragraphs: [
          'Adobe attaches Content Credentials to content made with its Firefly-powered features, describing it as AI-generated or AI-edited. A photo touched with Generative Fill or Generative Expand can therefore carry a composite AI declaration even if nearly all of it is a real photograph.',
        ],
      },
      {
        heading: 'Google (Gemini, Imagen) and Meta AI',
        paragraphs: [
          'Google embeds [its SynthID invisible watermark](synthid-invisible-ai-watermarks) in images from its generative models and uses metadata to mark AI content in some products. Meta has said Meta AI images include a visible marker, an invisible watermark and IPTC metadata indicating AI generation.',
        ],
      },
      {
        heading: 'Midjourney',
        paragraphs: [
          '[Midjourney downloads may include the prompt](hide-midjourney-dalle-prompts) and a job ID in description or comment fields, along with an IPTC value marking the image as AI-generated. What shows up depends on the download format and the service version at the time.',
        ],
      },
      {
        heading: 'Local generators: Stable Diffusion front-ends and ComfyUI',
        paragraphs: [
          'Local tools sign nothing, yet they often store the most detail: A1111 and Forge write a “parameters” text chunk, and [ComfyUI embeds its whole prompt and workflow graphs](remove-stable-diffusion-comfyui-metadata) as JSON. These options can usually be switched off — for new images only.',
          'Generators change their output between versions, so the reliable approach is to open the file itself: lay it on the table in AI Label Remover to see each field, then wash out whatever you would rather not share with the [AI tag cleaner](ai-tag-cleaner).',
        ],
      },
    ],
    faqHeading: 'About generator metadata',
    faq: [
      {
        q: 'Does Nano Banana add metadata to images?',
        a: 'Google marks images from its models with SynthID and has added C2PA Content Credentials to newer models such as Nano Banana Pro. Check a specific file to see what it carries.',
      },
      {
        q: 'Do all generators add C2PA?',
        a: 'No. Large hosted services increasingly do; many tools, especially local ones, write only text metadata or nothing.',
      },
      {
        q: 'Does washing remove invisible watermarks too?',
        a: 'No. Watermarks such as SynthID are in the pixels, and washing never changes pixels.',
      },
      {
        q: 'Why do two images from one tool differ?',
        a: 'Export format, app version, where you downloaded from and later edits can each add or remove fields.',
      },
    ],
  },

  'synthid-invisible-ai-watermarks': {
    metaTitle: 'SynthID and Invisible AI Watermarks, Explained',
    related: ['chatgpt-gemini-image-metadata', 'how-to-check-if-image-is-ai-generated', 'what-is-c2pa-content-credentials'],
    title: 'SynthID and Invisible Watermarks: Where Metadata Washing Stops',
    summary: [
      'Some AI images carry two kinds of marker: metadata stored beside the picture, and a watermark woven into the pixels. Google’s SynthID is the best-known example of the second.',
      'This piece explains how pixel watermarks differ from C2PA and EXIF, how they are detected, and why an honest metadata tool cannot remove them.',
    ],
    description:
      'What SynthID and other invisible AI watermarks are, how they differ from C2PA metadata, how they are detected, and why metadata washing leaves them in place.',
    sections: [
      {
        heading: 'Two separate layers',
        paragraphs: [
          'Metadata — EXIF, XMP, IPTC, [C2PA](what-is-c2pa-content-credentials) — sits in its own blocks inside the file, easy to read and easy to remove without touching the picture. A pixel watermark is another thing altogether: a faint pattern spread across pixel values that the eye cannot see but a detector can.',
        ],
      },
      {
        heading: 'About SynthID',
        paragraphs: [
          'SynthID is Google DeepMind’s watermarking technology for content generated by Google’s AI models. It embeds an imperceptible signal during generation and is designed to stay detectable after common changes such as cropping, resizing, compression and color tweaks. Related techniques cover images, audio, video and text.',
        ],
      },
      {
        heading: 'Detecting a pixel watermark',
        paragraphs: [
          'A generic viewer cannot read a watermark; you need the provider’s own detector. Google has introduced [ways to check content for SynthID](chatgpt-gemini-image-metadata), including verification inside its products. Other providers have their own methods.',
        ],
      },
      {
        heading: 'Why washing leaves it alone',
        paragraphs: [
          'A lossless metadata tool — AI Label Remover included — [copies image data byte for byte](remove-metadata-without-losing-quality); that is exactly how it guarantees no quality loss. Any watermark in those bytes stays put. Tools that promise to “strip AI watermarks” either do not deliver or alter the image heavily, and trying to defeat a provider’s watermark may breach its terms.',
        ],
      },
      {
        heading: 'In practice',
        paragraphs: [
          'Washing metadata with the [AI tag cleaner](ai-tag-cleaner) is the right move for privacy and for removing prompts, locations and provenance you do not want to share. It does not make an AI image undetectable. When posting realistic AI content, follow the platform’s disclosure rules.',
        ],
      },
      {
        heading: 'Metadata, watermark or fingerprint?',
        paragraphs: ['Three different techniques get called “AI labels”, and they behave very differently:'],
        bullets: [
          'Metadata — EXIF, XMP, IPTC and C2PA blocks. Anyone can read them, and they are easy to remove or lose when a file is re-saved.',
          'Pixel watermark — a hidden pattern in the image itself, like SynthID. Only the provider’s detector can read it, and it is built to survive edits.',
          'Fingerprint — a compact description of the image kept on a server. A lookalike image can be matched against it later, even with no metadata at all.',
        ],
      },
      {
        heading: 'Who uses invisible watermarks',
        paragraphs: [
          'Google applies SynthID to images from its own AI models. Meta has said it adds invisible watermarks as well as metadata to images made with its AI features. Adobe and others back “durable” Content Credentials, which pair a C2PA manifest with a watermark or fingerprint so the record can be looked up again. Other generators rely only on metadata, and local tools usually add nothing. Practices change often, so treat any list as a snapshot.',
        ],
      },
      {
        heading: 'How reliable detection is',
        paragraphs: [
          'Watermark detection is statistical: a detector reports how likely it is that a mark is present, not a yes-or-no certainty. Heavy edits can weaken a mark, and a detector only recognizes its own provider’s watermark. Most importantly, finding no watermark proves nothing — many generators never add one. That is why [checking an image for AI](how-to-check-if-image-is-ai-generated) means weighing several clues together.',
        ],
      },
      {
        heading: 'What it means for your privacy',
        paragraphs: [
          'As publicly described, a pixel watermark marks content as generated by a provider’s model rather than storing your prompt as readable text. The details that most often expose you — prompts, account IDs, locations, device data — live in metadata, and that is the layer a washer can clean. In short: washing protects your personal information, while the watermark keeps saying where the image came from.',
        ],
      },
    ],
    faqHeading: 'About SynthID and watermarks',
    faq: [
      {
        q: 'If an image has no watermark, is it a real photo?',
        a: 'No. Many generators add no watermark at all, so the absence of one tells you nothing on its own.',
      },
      {
        q: 'Can a watermark reveal my prompt?',
        a: 'Not as publicly described. Prompts and account details are usually stored in metadata, which washing removes.',
      },
      {
        q: 'Does cropping or a screenshot remove SynthID?',
        a: 'Generally not. SynthID is designed to survive common edits such as cropping, resizing, screenshots and compression.',
      },
      {
        q: 'Does AI Label Remover remove SynthID?',
        a: 'No. It removes metadata only and never edits pixels, so any invisible watermark remains.',
      },
      {
        q: 'How do I know if an image has SynthID?',
        a: 'Only Google’s verification tools can tell you. A metadata reader cannot see inside the pixels.',
      },
      {
        q: 'Is every AI image watermarked?',
        a: 'No. Some providers watermark output, many do not, and local tools usually add none.',
      },
    ],
  },

  'turn-off-content-credentials-photoshop-lightroom': {
    metaTitle: 'Content Credentials in Photoshop & Lightroom',
    related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'iptc-digitalsourcetype-ai'],
    title: 'Content Credentials in Photoshop and Lightroom: Control Them and Wash Your Exports',
    summary: [
      'Adobe apps can attach Content Credentials to exports — a signed log of edits that includes any generative AI features you used. Handy for proving your work, but also a common reason retouched photos get AI labels.',
      'Here is where the credentials come from, how to check an export, and how to wash them from a copy when you need a clean file.',
    ],
    description:
      'Where Photoshop and Lightroom Content Credentials come from, how to check an export for C2PA data, and how to wash it from a copy without losing quality.',
    sections: [
      {
        heading: 'Two ways credentials get attached',
        paragraphs: ['An export can carry Content Credentials for one of two reasons:'],
        bullets: [
          'You turned Content Credentials on, so the app signs your identity and edit history into the export.',
          'You used a generative feature such as [Generative Fill](made-with-ai-label), and Adobe applied credentials describing the content as AI-edited.',
        ],
      },
      {
        heading: 'Check before publishing',
        paragraphs: [
          'Lay the exported JPEG or PNG on the table at the top of this page. If the report shows a C2PA block, a claim generator such as Adobe Photoshop, c2pa actions and [a composite AI source type](iptc-digitalsourcetype-ai), [platforms that read credentials may label it](which-platforms-label-ai-images).',
        ],
      },
      {
        heading: 'The settings in Adobe’s apps',
        paragraphs: [
          'Adobe keeps expanding Content Credentials and the controls move between versions. In recent releases, look for a Content Credentials panel in Photoshop and a Content Credentials section in Lightroom’s export dialog; Adobe’s help pages cover your exact version. Switching the option off may not stop credentials being attached to generative edits.',
        ],
      },
      {
        heading: 'Washing a copy',
        paragraphs: [
          'When you need a clean file for a client portal, marketplace or social network, [wash the C2PA block](remove-c2pa-content-credentials) from a copy. AI Label Remover cuts the manifest out of the byte stream, keeps pixels, size, rotation and color profile, and reads the result again so you can confirm nothing remains.',
        ],
      },
      {
        heading: 'Archive the signed original',
        paragraphs: [
          'Credentials can be valuable proof of authorship and of how an image was edited. Keep the original export with its credentials and share washed copies only where the metadata would mislead or reveal more than you intend.',
        ],
      },
    ],
    faqHeading: 'About Adobe Content Credentials',
    faq: [
      {
        q: 'Why does Instagram label my Photoshop edit as AI?',
        a: 'Generative Fill, Generative Expand and similar features record an AI edit in Content Credentials or IPTC fields, and Meta reads those signals at upload.',
      },
      {
        q: 'With credentials off, are generative edits still recorded?',
        a: 'They can be. Adobe applies credentials to generative content, so check the exported file rather than trusting the setting alone.',
      },
      {
        q: 'Does washing undo my edits?',
        a: 'No. Only the metadata block is removed; your edited pixels are copied unchanged.',
      },
      {
        q: 'Can I put the credentials back later?',
        a: 'Not into the washed copy, but you can export again from the original with credentials enabled.',
      },
    ],
  },

  'which-platforms-strip-photo-metadata': {
    metaTitle: 'Which Apps Strip Photo Metadata? WhatsApp, Instagram, X',
    related: ['remove-gps-location-from-photos', 'view-remove-metadata-iphone-android', 'image-metadata-viewer-online'],
    title: 'Which Apps Strip Photo Metadata — and Which Quietly Pass Your GPS Along',
    summary: [
      'It is widely assumed social media removes location from photos. For the published copy it often does. Yet the original can still travel with full EXIF through chat apps, email, cloud links and file-sharing sites.',
      'This guide sorts common sharing routes into “usually stripped” and “usually kept”, and ends with the one habit that always works: wash the file before it leaves your device.',
    ],
    description:
      'Which social networks and chat apps strip photo metadata, which sharing routes keep GPS and EXIF, and how to be sure a photo is clean before you send it.',
    sections: [
      {
        heading: 'Public copy versus original file',
        paragraphs: [
          'Post a photo to a feed and most large platforms re-encode it and strip EXIF from the public version. Viewers cannot see your GPS position, but the platform still receives the original on upload. The larger risk is every route that passes the original along untouched.',
        ],
      },
      {
        heading: 'Typically stripped',
        paragraphs: [],
        bullets: [
          'Photos published to feeds on large networks such as Facebook, Instagram and X.',
          'Photos sent as normal compressed images in many chat apps.',
          'Most images a platform resizes or converts before showing them to others.',
        ],
      },
      {
        heading: 'Typically kept',
        paragraphs: [],
        bullets: [
          'Photos sent “as file” or “as document” in apps such as WhatsApp or Telegram.',
          'Email attachments and cloud-link shares (Drive, Dropbox, iCloud and similar).',
          'Forums, classified-ad and portfolio sites that hand out the file exactly as uploaded.',
          'Photography communities that show EXIF on purpose, such as camera-settings panels.',
        ],
      },
      {
        heading: 'Test your own route',
        paragraphs: [
          'Apps change how they handle media all the time. To be certain, send yourself a photo the way you usually would, download what arrives and lay it on the table in AI Label Remover: [the “What it reveals” tab](image-metadata-viewer-online) shows at once whether place, people or time data made it through.',
        ],
      },
      {
        heading: 'Wash before sending',
        paragraphs: [
          'The dependable habit is to wash metadata before a photo leaves your device. AI Label Remover [removes GPS, dates, device and author fields](remove-gps-location-from-photos) plus hidden previews, keeps rotation and colors, and does it all locally — well suited to photos going to strangers, buyers or clients. The [EXIF data remover](remove-exif-data) explains each field it removes.',
        ],
      },
    ],
    faqHeading: 'About apps and photo metadata',
    faq: [
      {
        q: 'Does email remove photo metadata?',
        a: 'Usually not. Attachments are sent as the original file, so EXIF and GPS travel along unless your mail app resizes the image first.',
      },
      {
        q: 'Does WhatsApp strip GPS?',
        a: 'Photos sent as normal images are compressed and lose most metadata. Photos sent as documents keep the original file, GPS included.',
      },
      {
        q: 'Will Instagram show where my photo was taken?',
        a: 'The published image has its EXIF stripped. A location tag you add to the post is separate and visible to everyone.',
      },
      {
        q: 'Isn’t a screenshot good enough?',
        a: 'It drops EXIF but lowers quality, changes dimensions and may catch other things on screen. Lossless washing keeps the original image intact.',
      },
    ],
  },

  'view-remove-metadata-iphone-android': {
    metaTitle: 'Remove Photo Metadata on iPhone and Android',
    related: ['remove-gps-location-from-photos', 'remove-metadata-windows-mac', 'which-platforms-strip-photo-metadata'],
    title: 'Viewing and Removing Photo Metadata on iPhone and Android',
    summary: [
      'Your phone logs where and when each photo was taken, along with the device model. iOS and Android both let you look at this and drop the location before sharing.',
      'Below are the built-in options, where they fall short, and a browser-based way to wash out everything identifying without installing an app.',
    ],
    description:
      'See photo metadata on iPhone and Android, remove location before sharing, and wash out all EXIF — HEIC included — in the browser with no app to install.',
    sections: [
      {
        heading: 'On iPhone: viewing',
        paragraphs: [
          'Open a photo in Photos and swipe up, or tap the info button. You will see date and time, camera and lens, exposure details and, if location was on, a map. The Adjust option beside the date lets you edit the date, time or location for that photo.',
        ],
      },
      {
        heading: 'On iPhone: sharing without location',
        paragraphs: ['Two built-in controls help:'],
        bullets: [
          'In the share sheet, tap Options at the top and switch Location off before sending.',
          'To stop tagging new photos, go to Settings › Privacy & Security › Location Services › Camera and choose Never.',
        ],
      },
      {
        heading: 'On Android',
        paragraphs: [
          'In Google Photos, open a photo and swipe up for details such as date, device and location; depending on version you can edit or remove the location there. To stop tagging new shots, turn off location in your camera app’s settings — the name and place of the option vary by manufacturer.',
        ],
      },
      {
        heading: 'Where built-in tools fall short',
        paragraphs: [
          'Phone settings focus on location. Device model, capture time, lens details, editing software and embedded previews usually stay, and settings only apply to future photos or one share. [Files copied to a computer](remove-metadata-windows-mac) or sent through other apps keep everything.',
        ],
      },
      {
        heading: 'Wash everything from the browser',
        paragraphs: [
          'Open AI Label Remover on your phone, tap “Browse files”, read the report and tap “Wash all images”. [GPS, time, device and author data are removed](remove-gps-location-from-photos) — iPhone HEIC included — while rotation and color stay. No upload, no app — and the [HEIC metadata remover](heic-metadata-remover) explains what an iPhone photo records.',
        ],
      },
      {
        heading: 'iPhone: HEIC, JPEG and Live Photos',
        paragraphs: [
          'By default iPhones save photos as HEIC (Settings › Camera › Formats › High Efficiency); choosing Most Compatible saves JPEG instead. Both formats carry the same EXIF — location, time, device and lens. When you send a photo to a non-Apple device, iOS may convert it to JPEG on the way, but the metadata usually comes along. Live Photos add a short video clip with its own metadata; AI Label Remover washes the still image, so share Live Photos as a still when privacy matters.',
        ],
      },
      {
        heading: 'Android: every brand does it a little differently',
        paragraphs: [
          'Android phones share the same EXIF fields but not the same menus. Some gallery apps offer a switch to remove location data in the share screen; others only let you edit details one photo at a time. Google Photos has a sharing setting that hides location from people who view your shared links and albums, but that does not change files sent by other routes. Menu names change between versions, so if you cannot find an option, washing the file is the reliable fallback.',
        ],
      },
      {
        heading: 'The “send as file” trap',
        paragraphs: [
          'Messaging apps usually compress photos and drop most metadata when you send them normally. Send the same photo as a file or document — often done to keep full quality — and the original arrives untouched, location included. AirDrop, nearby sharing, email and cloud links behave the same way. These are exactly the moments to [check what the file reveals](remove-gps-location-from-photos) and wash it first.',
        ],
      },
      {
        heading: 'A two-minute routine on your phone',
        paragraphs: [],
        bullets: [
          'Open AI Label Remover in your phone’s browser and add it to your home screen for next time.',
          'Tap “Browse files” and pick the photos you are about to share.',
          'Read the report, tap “Wash all images” and check the green panel.',
          'Save the washed copies and share those, not the originals.',
        ],
      },
    ],
    faqHeading: 'About phone photo metadata',
    faq: [
      {
        q: 'Does AirDrop keep location data?',
        a: 'It can. AirDrop sends the original file. Tap Options at the top of the share sheet and turn off Location, or wash the file first.',
      },
      {
        q: 'Does taking a screenshot of a photo remove its metadata?',
        a: 'It drops the original EXIF, but it also lowers quality and the screenshot gets its own metadata. Washing the original is lossless and more thorough.',
      },
      {
        q: 'Do I need an app to remove EXIF on my phone?',
        a: 'No. Built-in options remove location for a single share, and AI Label Remover runs in the phone’s browser to remove everything else without installing anything.',
      },
      {
        q: 'Does turning location off clean my older photos?',
        a: 'No. It only affects new shots. Existing photos keep their location until you remove it.',
      },
      {
        q: 'Are iPhone HEIC files supported?',
        a: 'Yes. HEIC files are washed directly, with no conversion to JPEG and no re-encoding.',
      },
      {
        q: 'Does the iPhone share option remove everything?',
        a: 'Mostly just location. Device model and capture time can remain in the shared file.',
      },
    ],
  },

  'what-is-exif-data': {
    metaTitle: 'What Is EXIF Data? Fields, Privacy and Removal',
    related: ['image-metadata-viewer-online', 'remove-gps-location-from-photos', 'remove-metadata-without-losing-quality'],
    title: 'EXIF Data, Explained Without the Jargon',
    summary: [
      'EXIF (Exchangeable Image File Format) is the hidden information a camera or phone writes into each photo: settings, date and time, device model and often the GPS position.',
      'This article covers what EXIF holds, how it differs from XMP, IPTC and C2PA, why it matters for privacy, and how to view or remove it safely.',
    ],
    description:
      'What EXIF data is, which fields it holds (camera, time, GPS), how it differs from XMP, IPTC and C2PA, and how to view or wash it out without losing quality.',
    sections: [
      {
        heading: 'What you will find in EXIF',
        paragraphs: ['A typical photo may include:'],
        bullets: [
          'Device — camera or phone make and model, lens and sometimes serial numbers.',
          'Exposure — ISO, aperture, shutter speed, focal length and flash.',
          'Time — when the photo was taken and last modified, often with a time-zone offset.',
          'Location — latitude, longitude, altitude and sometimes direction.',
          'Extras — orientation, a small embedded thumbnail and the editing software’s name.',
        ],
      },
      {
        heading: 'How EXIF is stored',
        paragraphs: [
          'In JPEG, EXIF lives in an APP1 segment near the start of the file and is split into directories (IFDs): IFD0 for basic image and device data, the Exif directory for camera settings and [the GPS directory for location](remove-gps-location-from-photos). HEIC, WebP and PNG can carry EXIF too, in their own containers.',
        ],
      },
      {
        heading: 'How it compares with XMP, IPTC and C2PA',
        paragraphs: [],
        bullets: [
          'EXIF — technical capture data from cameras and phones.',
          'XMP — a flexible XML format editors use for descriptions, keywords, edit history and AI fields.',
          'IPTC — description and rights data used by newsrooms and stock libraries, including [DigitalSourceType](iptc-digitalsourcetype-ai) for AI content.',
          'C2PA — [signed Content Credentials](what-is-c2pa-content-credentials) recording provenance and edits.',
        ],
      },
      {
        heading: 'Why it matters',
        paragraphs: [
          'Photographers use EXIF to learn and to keep a record of their work. For most people it is mainly a privacy risk: one photo can reveal a home address, a device and the time someone was somewhere. EXIF is also trivial to edit, so it should never count as proof on its own.',
        ],
      },
      {
        heading: 'Viewing and removing it properly',
        paragraphs: [
          'System info panels show a handful of fields; [AI Label Remover decodes every EXIF, XMP and IPTC field](image-metadata-viewer-online) and groups them by source. When removing EXIF, keep the orientation tag so photos are not rotated, keep the color profile so colors stay accurate, and avoid [anything that re-compresses the image](remove-metadata-without-losing-quality). The [EXIF data remover](remove-exif-data) does all three for you.',
        ],
      },
      {
        heading: 'Where EXIF came from',
        paragraphs: [
          'EXIF was created in the mid-1990s by Japanese electronics makers so that digital cameras could record their settings in a common way. It is now maintained jointly by CIPA and JEITA. The core idea has barely changed: a list of numbered tags, each holding one value. Newer versions added fields such as time-zone offsets, lens serial numbers and, in Exif 3.0, proper UTF-8 text. Phones adopted it unchanged, which is why a smartphone photo carries the same structure as a 2005 compact camera — only with far more precise GPS.',
        ],
      },
      {
        heading: 'Fields that surprise people',
        paragraphs: ['Beyond the obvious date and location, a few tags reveal more than most people expect:'],
        bullets: [
          'OffsetTime — the time-zone offset, which narrows down the region even when GPS is missing.',
          'BodySerialNumber, LensSerialNumber and CameraOwnerName — values that can link many photos back to one camera and one person.',
          'GPSImgDirection — which way the camera was facing, sometimes enough to identify a window or a balcony.',
          'Software — the editing app and version, which hints at what was done to the picture.',
          'MakerNote — a manufacturer’s private block that can hold shutter counts, internal serials and focus or face-detection data.',
        ],
      },
      {
        heading: 'The thumbnail that outlives your edits',
        paragraphs: [
          'Many files keep a small preview image in a second directory, IFD1. Some editors update the main picture but leave this preview untouched, so a crop or a blur can be undone simply by reading the thumbnail. Phones also store larger previews and secondary images (MPF) with their own EXIF. A proper clean removes these hidden copies too, which is why AI Label Remover drops embedded thumbnails and MPF images rather than just blanking the GPS tags.',
        ],
      },
      {
        heading: 'What to keep, what to remove',
        paragraphs: [
          'For anything shared publicly — social posts, listings, chat attachments, forum uploads — removing all identifying EXIF is the safe default. Two pieces are worth keeping because they affect display, not identity: the orientation tag and the color profile. If you want credit for your work, a visible caption or watermark survives far better than an EXIF copyright field, which most platforms throw away anyway. Keep your untouched originals in your own archive; share the washed copy.',
        ],
      },
    ],
    faqHeading: 'About EXIF',
    faq: [
      {
        q: 'Is EXIF the same thing as metadata?',
        a: 'EXIF is one kind of metadata. A file can also hold XMP, IPTC, C2PA and format-specific text, which is why a thorough cleaner looks beyond EXIF alone.',
      },
      {
        q: 'Do screenshots have EXIF data?',
        a: 'Usually far less — no camera settings or GPS — but they can still record the device, the software and the time they were taken.',
      },
      {
        q: 'How do I see EXIF data?',
        a: 'On Windows open Properties › Details, on a Mac use Preview’s Inspector, and on phones open the photo info. To see every field, including XMP and IPTC, use a full viewer such as AI Label Remover.',
      },
      {
        q: 'Does EXIF affect how the image looks?',
        a: 'No. EXIF is stored apart from the image data, so removing it changes nothing visually.',
      },
      {
        q: 'Can EXIF be faked?',
        a: 'Easily. Common tools can rewrite EXIF fields, so treat them as clues, never as proof.',
      },
      {
        q: 'Orientation is EXIF too — does AI Label Remover keep it?',
        a: 'Yes. It is written back in a minimal EXIF block so photos keep displaying the right way up.',
      },
    ],
  },
};

export default en;
