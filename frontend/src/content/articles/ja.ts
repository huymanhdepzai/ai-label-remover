import type { Articles } from './types';

/** 日本語の拡張記事（基本記事は seo.guides.items の要約を使用）。 */
const ja: Articles = {
  'best-ai-metadata-removers-2026': {
      "title": "2026年最新：おすすめAIメタデータ＆AIラベル削除ツール比較",
      "metaTitle": "2026年最新AIメタデータ・AIラベル削除ツール比較（無劣化）",
      "summary": [
          "SNSやカメラアプリでAIラベルやC2PAマニフェスト、IPTCメタデータの付与が一般化した2026年、適切なメタデータ削除ツールの選定が不可欠です。",
          "ExifToolやデスクトップ編集ソフト、ブラウザ完結型ツールの性能を比較し、画質劣化なしでプライバシーを守る方法を解説します。"
      ],
      "description": "2026年の主要メタデータ削除ツールを徹底比較。AI Label RemoverやAI Tag Cleanerを活用し、画像を再エンコードせずNo AI Tag状態にする方法。",
      "related": [
          "how-to-get-no-ai-tag",
          "made-with-ai-label",
          "what-is-c2pa-content-credentials"
      ],
      "sections": [
          {
              "heading": "従来のメタデータ削除ツールが最新AIラベルに通用しない理由",
              "paragraphs": [
                  "かつてのメタデータ削除は、カメラ情報やGPSを消すだけで十分でした。しかし2026年現在、画像には[C2PAコンテンツ認証情報マニフェスト](what-is-c2pa-content-credentials)や[IPTC DigitalSourceTypeプロパティ](iptc-digitalsourcetype-ai)、生成AIのプロンプトなど複雑なデータが埋め込まれています。",
                  "従来のツールはバイナリのC2PAブロックを削除できなかったり、JPEGを再圧縮して画質を落としてしまいます。SNSの判定システムがこれらの残存データを検出すると、自動的に「AI情報」ラベルが付与されてしまいます。"
              ]
          },
          {
              "heading": "AI Label Remover：ブラウザ完結型の高性能AIタグクリーナー",
              "paragraphs": [
                  "AI Label Removerは最新のメタデータ構造に対応した専用ツールです。先進的な[AI tag cleaner](ai-tag-cleaner)として機能し、C2PAコンテナ、IPTCフラグ、GPSデータをブラウザ内で瞬時に切り取ります。",
                  "処理はすべてデバイス上のWeb Workersでローカル実行されるため、画像が外部サーバーへアップロードされることはありません。また、画像データを再エンコードしないため、[画質劣化のない完全なロスレス処理](remove-metadata-without-losing-quality)を実現しています。"
              ],
              "bullets": [
                  "完全ローカル処理：画像が外部に送信されないため、業務利用でも安心。",
                  "完全可逆（ロスレス）：解像度、色彩、ICCプロファイルを100%維持。",
                  "AI識別データの完全除去：[誤ったAIラベル付与](made-with-ai-label)の原因となるC2PAやIPTCを除去。",
                  "一括処理対応：JPEG、PNG、WebP、GIF、HEIC、AVIF形式を最大50枚まで一度に処理。"
              ]
          },
          {
              "heading": "比較：AI Label Remover・ExifTool・画像編集ソフト",
              "paragraphs": [
                  "ExifToolは高度な機能を持ちますが、コマンド操作が必要で日常的な写真共有には不向きです。誤った引数を指定するとファイルを破損させる恐れもあります。",
                  "画像編集ソフトのWeb書き出し機能は、保存のたびに再圧縮が発生し画質が低下します。さらにPhotoshopなどは[設定を無効化](turn-off-content-credentials-photoshop-lightroom)しない限り再度認証情報を付与してしまいます。",
                  "AI Label RemoverはWebツールの手軽さとローカルツールの安全性を両立しています。"
              ]
          },
          {
              "heading": "SNSで「No AI Tag」状態を確保する方法",
              "paragraphs": [
                  "InstagramやFacebookで本物の写真に不要なAI警告が付かないようにするには、ファイル内のメタデータをクリーンにして[No AI Tag](no-ai-tag)の状態を保つことが不可欠です。",
                  "投稿前に[AI tag cleaner](ai-tag-cleaner)を通すことで、自動検知のトリガーとなる不要な属性を取り除けます。"
              ]
          },
          {
              "heading": "メタデータ削除の倫理的利用について",
              "paragraphs": [
                  "AI Label Removerはプライバシーの保護や軽微なレタッチによる誤判定を正すためのツールです。完全にAIで生成された画像については、各プラットフォームの開示規則に従って適切に表記してください。"
              ]
          }
      ],
      "faqHeading": "2026年のメタデータ削除ツールに関するよくある質問",
      "faq": [
          {
              "q": "AI Label Removerは従来のEXIF削除ツールと何が違いますか？",
              "a": "従来のツールはEXIFタグのみに対応しています。AI Label Removerは最新のC2PAやIPTCなどのAI痕跡を、画像を再エンコードすることなく除去できる[AI tag cleaner](ai-tag-cleaner)です。"
          },
          {
              "q": "メタデータを消せばInstagramでAIラベルがつきませんか？",
              "a": "ファイル内のトリガー（C2PA/IPTC）を完全に除去するため、誤検知を防ぎ[No AI Tag](no-ai-tag)の基準を満たした安全な状態で投稿できます。"
          },
          {
              "q": "機密性の高い写真を読み込んでも安全ですか？",
              "a": "はい。処理はすべてお使いのブラウザ内部で行われ、サーバーへの通信は一切発生しません。"
          },
          {
              "q": "目に見えないSynthID透かしは削除できますか？",
              "a": "いいえ。SynthIDなどの不可視電子透かしはピクセル自体に織り込まれているため、メタデータツールでは削除できません。"
          }
      ]
  },

  'how-to-get-no-ai-tag': {
      "title": "写真に「No AI Tag」を確保する方法：AI Tag Cleaner活用ガイド",
      "metaTitle": "写真のNo AI Tag確保法：AI Tag Cleanerガイド",
      "summary": [
          "本物の写真であるにもかかわらず、SNSで勝手に「AI情報」や「AI生成」のラベルが付けられてしまうケースが多発しています。",
          "このガイドでは、自動検知の仕組みを解説し、AI Tag Cleanerを活用して画質劣化なしで正真正銘の「No AI Tag」状態にする方法を説明します。"
      ],
      "description": "本物の写真に不要なAIラベルを付けさせないNo AI Tag確保法。AI Tag CleanerとAI Label Removerで誤検知を防ぎ無劣化で共有する方法。",
      "related": [
          "best-ai-metadata-removers-2026",
          "made-with-ai-label",
          "iptc-digitalsourcetype-ai"
      ],
      "sections": [
          {
              "heading": "本物の写真にAIラベルが付いてしまう原因",
              "paragraphs": [
                  "Instagram、Facebook、TikTokなどのSNSは投稿時にファイルを自動スキャンします。ファイル内に[IPTC DigitalSourceType属性](iptc-digitalsourcetype-ai)や[C2PAコンテンツ認証情報マニフェスト](what-is-c2pa-content-credentials)が見つかると、即座にAIラベルが付与されます。",
                  "最大の問題はレタッチによる誤検知です。Photoshopの生成塗りつぶしやスマホの消しゴムマジックを使うと、AIメタデータが書き込まれます。写真の99%が本物であっても、ファイル全体がAI製と判定されてしまいます。"
              ]
          },
          {
              "heading": "No AI Tagへのアプローチ：事前検証とデータ削除",
              "paragraphs": [
                  "確実に[No AI Tag](no-ai-tag)の状態を保つには、検知の引き金となるメタデータブロックを取り除く必要があります。AI Label Removerに写真を読み込ませれば、即座に診断結果が表示されます。",
                  "[メタデータビューアー](image-metadata-viewer-online)でGPSやC2PA、AIの痕跡を確認し、ワンクリックで安全に切り離すことができます。"
              ]
          },
          {
              "heading": "スクリーンショット撮影よりAI Tag Cleanerが圧倒的に優れる理由",
              "paragraphs": [
                  "メタデータを消すためにスクリーンショットを撮る手法は、[解像度やダイナミックレンジを大きく低下](remove-metadata-without-losing-quality)させてしまいます。",
                  "専用の[AI tag cleaner](ai-tag-cleaner)を使えば、画像データのバイト列をそのまま保持するため、鮮鋭度やICCプロファイルを変えずにメタデータのみを除去できます。"
              ]
          },
          {
              "heading": "2026年における各プラットフォームの検知挙動",
              "paragraphs": [
                  "MetaはC2PAとIPTCを厳密にチェックして「AI情報」を表示します。TikTokやYouTubeも同様にデジタル認証情報を検知します。",
                  "[AI Label Remover](ai-tag-cleaner)でファイルを整理しておくことで、あらゆるSNSで作品本来の姿を正しく発信できます。"
              ]
          },
          {
              "heading": "倫理的配慮と適切な情報開示",
              "paragraphs": [
                  "No AI Tag状態にするのは、誤判定の修正やプライバシー保護において正当な行為です。一方、100%生成AIによって作られた画像については、コミュニティ規定に従い適切に自己申告してください。"
              ]
          }
      ],
      "faqHeading": "No AI TagおよびAI Tag Cleanerに関するよくある質問",
      "faq": [
          {
              "q": "画像ファイルにおける「No AI Tag」とはどういう意味ですか？",
              "a": "SNSの自動巡回システムが「AI生成」と判定する原因となるC2PAやIPTCなどの属性が含まれていない状態を指します。"
          },
          {
              "q": "投稿前にAIタグが付いているか確認できますか？",
              "a": "AI Label Removerに画像を読み込ませてください。C2PAやIPTCフラグの有無が一覧で表示されます。"
          },
          {
              "q": "AI Tag Cleanerを使うと画質が落ちますか？",
              "a": "いいえ。AI Label Removerはバイナリからメタデータ部分のみを切り離すため、画質は100%元のまま維持されます。"
          },
          {
              "q": "Lightroomが勝手にAIタグを埋め込むのはなぜですか？",
              "a": "最新のLightroomやPhotoshopは、生成AI系の修復ブラシ等を使用すると自動でContent Credentialsを付与する仕様になっています。"
          }
      ]
  },

  'made-with-ai-label': {
    metaTitle: '本物の写真に Instagram の「AI 情報」ラベルが付く理由',
    related: ['iptc-digitalsourcetype-ai', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
    description:
      'Instagram や Facebook で本物の写真に「AI 情報」ラベルが付くのは、編集ソフトが書き込んだ C2PA や IPTC の項目が原因のことがほとんど。その項目を見つけて劣化なしで消す方法。',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'ラベルが見ているのは写真ではなくファイル',
        paragraphs: [
          'Meta の AI ラベル「AI 情報」（以前は「Made with AI」）は、アップロードされたファイルに生成 AI の既知のシグナルが含まれていると付きます。そのうち 2 つは画像ファイルの中にあります。[C2PA コンテンツ認証情報のマニフェスト](what-is-c2pa-content-credentials)と、XMP に保存される [IPTC DigitalSourceType プロパティ](iptc-digitalsourcetype-ai)です。',
          'trainedAlgorithmicMedia という値は画像全体が生成されたことを、compositeWithTrainedAlgorithmicMedia は本物の写真に AI で作った部分があることを示します。どちらもアップロード時に自動で読み取れます。Meta は他のシグナルも使い、リアルな AI コンテンツの自己申告も求めているため、ファイルのメタデータは判断材料の 1 つにすぎません。',
        ],
      },
      {
        heading: 'シグナルはどこから来るのか',
        paragraphs: ['本物の写真の場合、原因はほぼ必ずカメラではなく編集アプリです。よくある原因は次のとおりです。'],
        bullets: [
          '生成塗りつぶし、生成拡張、AI 消去ツールの使用。c2pa のアクションが追加され、ファイルが合成として記録されることがあります。',
          '[コンテンツ認証情報をオンにしたままの書き出し](turn-off-content-credentials-photoshop-lightroom)。すべての編集の一覧がファイルに署名されます。',
          'AI 消しゴムなど、スマホのギャラリー機能が残す編集マーカー。',
          '既存のメタデータを引き継ぐ他のアプリを経由すること。保存し直してもマーカーが残り続けます。',
        ],
      },
      {
        heading: 'AI Label Remover で原因の項目を特定する',
        paragraphs: [
          'ページ上部のテーブルに画像を置いてください。「AI の痕跡」タブに、各シグナルとその場所が「C2PA · compositeWithTrainedAlgorithmicMedia」「XMP · Iptc4xmpExt › DigitalSourceType」のように表示されます。「生のメタデータ」に切り替えると、マニフェストに署名したクレームジェネレーターや記録された c2pa アクションなど、元の値を確認できます。',
          '「もう一度確認を」という判定は、AI の明示がないコンテンツ認証情報があるという意味です。それでもヒントとして扱うプラットフォームもあるので、投稿前に判断してください。',
        ],
      },
      {
        heading: '投稿するコピーを洗う',
        paragraphs: [
          '「すべての画像を洗う」を押すと、AI Label Remover は C2PA ストアと XMP・IPTC・EXIF のブロックをバイト列から切り取り、ピクセル、サイズ、回転、カラープロファイルはそのまま残します。洗ったファイルは読み直されるので、保存前に AI の痕跡が消えたことを確認できます。扱う痕跡の一覧は [AI メタデータ削除](ai-tag-cleaner)ページにあります。',
          'JPEG で保存し直してもメタデータは消えますが、[そのたびに画像が再圧縮されます](remove-metadata-without-losing-quality)。ブロックを切り取る方法ならその劣化はまったくありません。',
        ],
      },
      {
        heading: '誤ったラベルを正すことは、正しいラベルを隠すことではない',
        paragraphs: [
          '洗う処理は、作品を誤って説明するラベルを正し、個人情報を守るためのものです。全体または大部分が生成された画像で本物と誤解されうるなら、プラットフォームのルールは通常その開示を求めます。ラベルは見る人に正しく伝えるためにあります。AI Label Remover は誤りを正すために使い、生成画像を写真と偽るためには使わないでください。',
        ],
      },
    ],
    faqHeading: '「AI 情報」ラベルについて',
    faq: [
      { q: '投稿後に「AI 情報」ラベルを外せますか？', a: '通常は投稿の編集では外せません。本物の写真が誤ってラベル付けされた場合は、プラットフォームの異議申し立てやアカウントステータスの機能があれば使い、次回からは投稿前にファイルを洗ってください。' },
      { q: 'ファイルを洗えばラベルは必ず消えますか？', a: '保証はありません。洗えばファイル内のシグナル（編集した写真でよくある原因）は消えますが、プラットフォームは別の検出方法を使ったり、申告を求めたりすることがあります。' },
      { q: '見た目は変わりますか？', a: '変わりません。削除されるのはメタデータのブロックだけで、画像データはバイト単位でコピーされ、回転と ICC カラープロファイルも残ります。' },
      { q: 'カメラの設定は残して AI の項目だけ消せますか？', a: '現時点ではできません。AI Label Remover は場所、端末、作者、AI の来歴といった識別情報をまとめて削除します。公開共有ではそれがもっとも安全な既定値です。サイズ、回転、色、アニメーションは常に残ります。' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'PNG から ComfyUI のワークフローと Stable Diffusion のプロンプトを削除',
    related: ['image-metadata-viewer-online', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
    description:
      'A1111、Forge、ComfyUI は、プロンプト、シード、チェックポイント、ワークフロー全体をすべての PNG に書き込みます。中身をそのまま確認し、ピクセルを変えずに削除できます。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '設定は画像と一緒に出回る',
        paragraphs: [
          'ローカルの生成ツールは、画像を再現できるように設定を出力ファイル内にテキストで保存します。PNG では、そのテキストが画像データの横の tEXt・zTXt・iTXt チャンクに入っています。よく見つかるのは次のものです。',
        ],
        bullets: [
          'A1111 と Forge：プロンプト、ネガティブプロンプト、ステップ数、サンプラー、CFG、シード、解像度、モデルのハッシュと名前、LoRA や拡張機能の設定を含む「parameters」チャンク。',
          'ComfyUI：実行されたノードグラフを含む「prompt」チャンクと、エディタのレイアウト全体を含む「workflow」チャンク。PNG を ComfyUI にドロップすれば構成がまるごと再現されます。',
          'InvokeAI、NovelAI などのフロントエンド：独自のキーで同様のデータ。',
          'JPEG や WebP の書き出し：同じテキストを [EXIF の UserComment](what-is-exif-data) に書くツールもあります。',
        ],
      },
      {
        heading: '洗う理由と、洗わない理由',
        paragraphs: [
          '生成データは完全なレシピです。誰でもあなたの作風を再現でき、使っているチェックポイントや LoRA がわかり、ワークフローに埋もれたローカルパス、フォルダ名、ユーザー名が漏れることもあります。大きな ComfyUI のグラフは 1 枚あたり数十キロバイトにもなります。',
          '一方で、モデル共有サイトはパラメータを読んで生成情報を表示しますし、共同作業者がワークフローを必要とすることもあります。まずは各ファイルを確認してください。[AI Label Remover は削除する前にすべてを表示します](image-metadata-viewer-online)。',
        ],
      },
      {
        heading: 'AI Label Remover でプロンプトを読む',
        paragraphs: [
          'PNG をテーブルに置いてください。「生のメタデータ」では、各テキストチャンクがキーワード（parameters、prompt、workflow）ごとに全文表示され、「AI の痕跡」タブでは Stable Diffusion のプロンプトや ComfyUI のワークフローとして示されます。圧縮された zTXt・iTXt チャンクもブラウザ内で展開されるので読めます。',
        ],
      },
      {
        heading: '洗っても残るもの',
        paragraphs: [
          '「すべての画像を洗う」を押すと、PNG 処理はテキスト・XMP・EXIF・C2PA のチャンクを丸ごと削除し、IHDR、IDAT、パレット、透過、ガンマ、色のチャンクと APNG のアニメーションチャンクを残します。チャンク単位で削除するので残りの CRC は有効なままで、ファイルはどこでも開けます。各チャンクの詳細は [PNG メタデータ削除](png-metadata-remover)ページで解説しています。',
          '編集ソフトで開いて保存し直してもテキストは消えますが、[画像が再圧縮され、色が変わることもあります](remove-metadata-without-losing-quality)。バイト単位の削除ならどちらも起きません。',
        ],
      },
    ],
    faqHeading: 'Stable Diffusion と ComfyUI のデータについて',
    faq: [
      { q: 'A1111 や ComfyUI にメタデータを保存させないには？', a: 'A1111 と Forge には PNG に生成パラメータを書き込まない設定があり、ComfyUI は --disable-metadata オプション付きで起動できます。どちらも新しい画像にしか効かないので、手元の画像は洗ってください。' },
      { q: '洗った PNG から ComfyUI はワークフローを復元できますか？', a: 'できません。「prompt」と「workflow」チャンクが消えているので、ComfyUI にドラッグしても何も復元されません。グラフが再び必要なら、洗っていない元ファイルを残しておいてください。' },
      { q: '洗った PNG の見た目は同じですか？', a: '同じです。圧縮されたピクセルを含む IDAT チャンクはそのままコピーされるので、ピクセル単位で同一です。' },
      { q: 'JPEG や WebP の書き出しは？', a: 'EXIF の UserComment や XMP に保存されたプロンプトも、JPEG・WebP ファイルから検出して削除します。' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Midjourney・DALL·E 画像からプロンプトを削除する',
    related: ['chatgpt-gemini-image-metadata', 'what-metadata-ai-image-generators-add', 'synthid-invisible-ai-watermarks'],
    description:
      'Midjourney、DALL·E、ChatGPT、Firefly からダウンロードした画像には、プロンプト、ジョブ ID、AI の来歴が含まれることがあります。中身を確認し、投稿前に洗いましょう。',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'オンラインの生成サービスが書き込むもの',
        paragraphs: [
          'オンラインの画像サービスは、透明性の確保や来歴規格への対応のため、ダウンロード画像にメタデータを付けることが増えています。項目はサービスごとに異なり、時期によっても変わるので、確実なのはファイルを開いて確かめることだけです。見つかる可能性があるのは次のものです。',
        ],
        bullets: [
          'Midjourney：説明やコメントの項目に入ったプロンプトとジョブ ID。画像を AI 製と示す [IPTC DigitalSourceType](iptc-digitalsourcetype-ai) が付くことも多くあります。',
          '[DALL·E と ChatGPT の画像生成](chatgpt-gemini-image-metadata)：生成ツール名を記した [C2PA コンテンツ認証情報](what-is-c2pa-content-credentials)。',
          'Adobe Firefly：画像を AI 生成と記述するコンテンツ認証情報。',
          '多くのツール：ソフト名、作成日、ときにはアカウントに紐づく識別子。',
        ],
      },
      {
        heading: 'プロンプトは守る価値のある仕事',
        paragraphs: [
          'イラストレーター、デザイナー、プロンプトの書き手にとって、練り上げたプロンプトは何度もの試行錯誤の成果です。無料のメタデータビューアがあれば、画像をダウンロードした誰にでも埋め込まれたテキストがコピーできる状態で見えてしまいます。ジョブ ID やアカウント情報から、公開画像があなたに結びつくこともあります。',
        ],
      },
      {
        heading: 'まず確認し、それから洗う',
        paragraphs: [
          '画像をテーブルに置いてレポートを読んでください。「AI」の行にはプロンプト、生成ツール名、来歴の宣言が、「人物」の行には作者、説明、識別子が入っています。「すべての画像を洗う」を押してきれいなファイルを保存するか、まとめて ZIP で保存します。痕跡の種類ごとの説明は [AI メタデータ削除](ai-tag-cleaner)ページにあります。',
          '処理はすべてブラウザ内で行われるので、守りたいプロンプトが途中で別のサービスに渡ることはありません。',
        ],
      },
      {
        heading: '知っておきたい限界',
        paragraphs: [
          '[Google の SynthID](synthid-invisible-ai-watermarks) のように、ピクセルに透かしを隠す提供元もあります。これはメタデータではないので、洗っても影響しません。また、リアルな AI 画像を投稿する場合、プラットフォームのルールで開示を求められることがあります。洗う処理はあなたの制作過程を守るものであり、画像の本質を変えるものではありません。',
        ],
      },
    ],
    faqHeading: 'Midjourney と DALL·E のメタデータについて',
    faq: [
      { q: 'ダウンロードされた画像からプロンプトを読まれますか？', a: 'プロンプトがファイルのメタデータに入っていれば、メタデータビューアを持つ人なら誰でも読んでコピーできます。共有前に洗えば削除されます。' },
      { q: 'Midjourney のダウンロードには必ずプロンプトが入っていますか？', a: '形式やその時点のサービスの仕様によります。AI Label Remover でファイルを開けば、何が入っているか正確にわかります。' },
      { q: '洗えば SynthID などの透かしも消えますか？', a: '消えません。不可視の透かしはピクセルデータの中にあり、AI Label Remover はピクセルを一切変更しません。' },
      { q: '生成した画像をまとめて洗えますか？', a: 'はい。最大 50 枚を読み込み、レポートを確認してから、すべてを 1 つの ZIP で保存できます。' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'C2PA とは？コンテンツ認証情報をやさしく解説',
    related: ['iptc-digitalsourcetype-ai', 'turn-off-content-credentials-photoshop-lightroom', 'chatgpt-gemini-image-metadata'],
    description:
      'C2PA コンテンツ認証情報の入門ガイド。署名付きマニフェストに記録される内容、JPEG・PNG・WebP・HEIC・AVIF での保存場所、読み方、削除すると何が起きるかを解説します。',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'ひとことで言うと',
        paragraphs: [
          'C2PA（Coalition for Content Provenance and Authenticity）は、メディアに改ざんを検知できる履歴を付けるオープン標準を管理しています。利用者にはコンテンツ認証情報として見えます。カメラ、編集ソフト、AI 生成ツールは、画像がどう作られたか（カメラで撮影、アプリで編集、モデルで生成）を記録して署名できます。',
        ],
      },
      {
        heading: 'マニフェストの構造',
        paragraphs: ['マニフェストは、主に 3 つの部分からなるコンパクトな構造化データです。'],
        bullets: [
          'クレームジェネレーター：マニフェストを作成したソフトやサービス（編集ソフトや AI 画像 API など）。',
          'アサーション：コンテンツについての記述。c2pa.actions（作成、編集、開く、リサイズなど）、[digitalSourceType](iptc-digitalsourcetype-ai)、素材ファイルへのリンクなど。',
          '署名：署名者を示す暗号署名と証明書、そしてマニフェストを画像データと正確に結びつけるハッシュ。',
        ],
      },
      {
        heading: '形式ごとの保存場所',
        paragraphs: [
          'マニフェストは JUMBF コンテナに格納され、形式ごとに決まった場所に置かれます。JPEG では APP11 セグメント、PNG では caBX チャンク、WebP では C2PA チャンク、HEIC と AVIF では uuid ボックスです。独立したブロックなので、画像をデコードせずに読み取りも削除もできます。AI Label Remover は、ブロック、クレームジェネレーター、記録された操作、ソースタイプがあれば表示します。',
        ],
      },
      {
        heading: '削除すると実際に何が起きるか',
        paragraphs: [
          '[洗うと埋め込まれた記録が削除されます](remove-c2pa-content-credentials)（そのコピーから）。なお、どんな編集でも暗号的な結びつきはすでに壊れます。検証ツールは、ピクセルと一致しなくなったマニフェストを無効と判定します。つまり削除しても、本来ならファイルについて回る記録がなくなるだけです。',
          '「永続的な」認証情報を加える仕組みもあります。[不可視の透かしやフィンガープリント](synthid-invisible-ai-watermarks)によって、埋め込みのコピーが消えた後でも検証ツールがオンラインのリポジトリからマニフェストを取得できます。これはピクセルの中やリモートのサーバーにあるため、メタデータを洗っても影響しません。',
        ],
      },
      {
        heading: '残すか、洗うか',
        paragraphs: [
          '認証情報は、報道や自分のオリジナル写真など、画像の出どころを示す必要があるときに役立ちます。一方で、隠しておきたいソフト名、編集履歴、身元を明かしてしまったり、[軽く補正しただけの写真に AI ラベルを付けさせたりする](made-with-ai-label)こともあります。まずマニフェストを読み、ファイルごとに判断しましょう。',
        ],
      },
    ],
    faqHeading: 'C2PA について',
    faq: [
      { q: 'C2PA を使っているのは誰ですか？', a: 'Adobe、Microsoft、Google、OpenAI、Meta、Leica・Sony・Nikon などのカメラメーカー、多くの報道機関が規格を支持またはコアリションに参加しています。ただし使い方はそれぞれ異なります。' },
      { q: 'C2PA は不可視の透かしの一種ですか？', a: 'いいえ。C2PA は画像データの横に保存されるメタデータです。SynthID のようなピクセルの透かしは別の仕組みで、洗っても影響しません。' },
      { q: '洗う前に署名を検証するには？', a: 'AI Label Remover は生成ツール、操作、ソースタイプを表示します。署名を完全に検証するには、先に元ファイルを公式の Content Credentials 検証ツールにかけてください。' },
      { q: 'C2PA を削除すると画質は落ちますか？', a: '落ちません。マニフェストは独立したブロックで、圧縮された画像データはそのままコピーされます。' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: '写真の GPS 位置情報を削除（iPhone・Android・PC）',
    related: ['which-platforms-strip-photo-metadata', 'view-remove-metadata-iphone-android', 'remove-metadata-windows-mac'],
    description:
      '共有前に写真の GPS 位置情報を削除しましょう。位置・端末・時刻を明かす EXIF の項目、漏れる経路、画質を落とさずに洗う方法を解説します。',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'スマホが写真ごとに記録するもの',
        paragraphs: ['位置情報サービスがオンなら、普通のスマホ写真には次のものが含まれます。'],
        bullets: [
          '数メートル単位の精度のことも多い緯度・経度・高度と、GPS のタイムスタンプ。',
          '撮影した日時と、最後に編集した日時。',
          'メーカーと機種、レンズ情報、ときにはシリアル番号や所有者名。',
          'EXIF の独自のコピーを持つ埋め込みプレビューや補助画像（深度マップ、MPF 画像）。',
        ],
      },
      {
        heading: '元ファイルが外に出る経路',
        paragraphs: [
          '大手 SNS のフィードは公開時に EXIF を削除することが多いですが、元ファイルがそのまま届く経路はたくさんあります。[チャットアプリの「ファイルとして送信」やドキュメント送信](which-platforms-strip-photo-metadata)、メールの添付、クラウドの共有リンク、掲示板、売買サイト、ポートフォリオサイトなどです。自宅で撮った 1 枚から住所が、複数枚から生活パターンがわかってしまいます。',
        ],
      },
      {
        heading: '写真が明かす GPS データを確認する',
        paragraphs: [
          '写真をテーブルに置いてください。「わかってしまうこと」タブで場所・人物・日時の項目があるかがすぐにわかり、GPS 位置は 10 進数の座標で表示されます。「生のメタデータ」では、すべての項目が [EXIF IFD0・Exif・GPS](what-is-exif-data) ごとに表示されます。',
        ],
      },
      {
        heading: '副作用なしで洗う',
        paragraphs: [
          '「すべての画像を洗う」を押すと、[GPS、日時、端末、作者、ソフトの項目](remove-exif-data)が、隠れたコピーを持つ埋め込みサムネイルや MPF 補助画像とともに消えます。回転情報は最小限の EXIF ブロックに書き戻されるので縦の写真が横倒しにならず、カラープロファイルも残るので色はそのままです。iPhone の HEIC は JPEG に変換せずにそのまま洗えます。詳しくは [HEIC メタデータ削除](heic-metadata-remover)ページをご覧ください。',
        ],
      },
      {
        heading: 'カメラの段階で止める',
        paragraphs: [
          '[カメラの設定で位置情報の記録をオフにする](view-remove-metadata-iphone-android)ことも、共有オプションで 1 回の共有に限って位置情報を外すこともできます。それでも、送る前にファイルを洗うのがもっとも確実な習慣です。スマホの設定では残ってしまう端末、日時、プレビューの情報も消せるからです。',
        ],
      },
      {
        heading: '座標は実際どれくらい正確か',
        paragraphs: [
          'EXIF は緯度と経度を度・分・秒で保存し、スマホは秒を小数点以下まで記録します。緯度 1 秒はおよそ 31 メートルなので、小数第 2 位まである値は、数字の上では 1 メートル未満の地点を指します。実際の精度は電波状況しだいで、屋外ではたいてい 3〜10 メートル、屋内ではそれより粗くなりますが、それでも 1 軒の家を特定するには十分です。多くのスマホは高度も記録するので階数の見当がつくことがあり、レンズが向いていた方角まで残ります。',
        ],
      },
      {
        heading: '仮定の話ではない、現実のリスク',
        paragraphs: ['位置情報は、ありふれた写真をあなたの生活の地図に変えてしまいます。'],
        bullets: [
          '自宅で撮った出品物の写真から、購入希望者や出品を見た誰にでも住所がわかります。',
          'ジム、校門、オフィスで撮った写真が続けば、生活パターンとその時間帯がわかります。',
          '旅行中に投稿した写真は、家が留守だと知らせることになります。',
          '子どもの写真から、学校、遊び場、自宅がわかることがあります。',
        ],
      },
      {
        heading: '位置情報は GPS タグだけにあるとは限らない',
        paragraphs: [
          'GPS ディレクトリを消すだけでは足りないこともあります。写真管理アプリが座標を XMP にコピーすることがあり、City、Sublocation、Country といった IPTC の項目には地名がそのまま書かれていることもあります。AI Label Remover は EXIF と一緒に XMP と IPTC も削除するので、こうしたコピーも消えます。どのメタデータツールでも消せないのは、写っている内容そのものです。道路標識、番地、窓からの眺め、映り込みから場所がわかることもあるので、投稿前に見直しましょう。',
        ],
      },
      {
        heading: '共有前のクイックチェック',
        paragraphs: [],
        bullets: [
          '写真を AI Label Remover に置き、「わかってしまうこと」タブを確認します。',
          '場所が表示されたら「すべての画像を洗う」を押し、洗ったコピーを保存します。',
          '緑のパネルで、場所・人物・日時が消えたことを確認します。',
          '住所、ナンバープレート、ランドマークなど、目に見える手がかりがないか画像を見直します。',
          '共有するのは洗ったコピーにし、元ファイルは自分のライブラリに残します。',
        ],
      },
    ],
    faqHeading: 'GPS と写真のプライバシーについて',
    faq: [
      { q: '洗った後に位置情報を復元できますか？', a: '洗ったファイルからはできません。項目は隠されるのではなく削除されます。スマホの元ファイルには残っているので、共有するのは洗ったコピーだけにしてください。' },
      { q: 'GPS をオフにすれば位置情報は付きませんか？', a: '付くことがあります。スマホは Wi-Fi やモバイル通信からも位置を割り出せるので、GPS だけでなくカメラアプリ自体の位置情報の許可をオフにしてください。' },
      { q: '写真に GPS データがあるかはどう確認しますか？', a: 'AI Label Remover に置くと、「わかってしまうこと」タブに位置情報がデコードされた座標で表示されます。スマホでは、GPS があると写真の情報パネルに地図が表示されます。' },
      { q: 'SNS が GPS を消してくれるのでは？', a: '大手の多くは公開画像から EXIF を削除します。ただし、添付ファイル、ドキュメント、クラウドリンクでは元のメタデータが残るのが普通です。' },
      { q: '写真が回転してしまいませんか？', a: 'しません。回転情報は保持されるので、以前とまったく同じ向きで表示されます。' },
      { q: 'iPhone の HEIC 写真にも使えますか？', a: 'はい。HEIC と HEIF は形式を変えず、再エンコードもせずにそのまま洗えます。' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: '画像のメタデータを一括削除 — 無料・アップロード不要',
    related: ['remove-metadata-without-losing-quality', 'remove-metadata-windows-mac', 'remove-gps-location-from-photos'],
    description:
      '最大 50 枚の画像のメタデータをブラウザで一括削除。並列ワーカーで速く処理するしくみ、各結果の再確認、まとめて ZIP で保存する方法を解説します。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '一括処理の流れ',
        paragraphs: [],
        bullets: [
          'JPG・PNG・WebP・GIF・HEIC・AVIF を最大 50 ファイル（各 25 MB・4,000 万画素まで）テーブルに置きます。',
          '各ファイルは自動で読み込まれます。リストのファイルをクリックするとレポートが表示されます。',
          '「すべての画像を洗う」を 1 回押せば、読み込んだものをすべて洗えます。エンジンは [写真の EXIF 削除](remove-exif-data)ツールと同じです。',
          'ファイルを 1 つずつ保存するか、「まとめて ZIP で保存」で 1 つのアーカイブにします。',
        ],
      },
      {
        heading: 'サーバーなしで速い',
        paragraphs: [
          'AI Label Remover は、CPU のコア数に合わせて複数の Web Worker（ブラウザのバックグラウンドスレッド）に処理を分けます。各ワーカーが 1 ファイルずつ解析して洗ったバイト列を返すので、重い HEIC でもページは軽快です。画像はすでに圧縮されているため ZIP は無圧縮（store）方式で、梱包は速く、[劣化も増えません](remove-metadata-without-losing-quality)。',
        ],
      },
      {
        heading: 'すべての結果を読み直す',
        paragraphs: [
          '洗った後、出力ファイルはすべて読み直され、緑の結果パネルで場所・人物・日時・AI の痕跡が消えたかを確認できます。同じ名前のファイルが 2 つあれば、ZIP 内のコピーに番号が付くので上書きされません。',
        ],
      },
      {
        heading: '数百ファイルを処理するとき',
        paragraphs: [
          '50 ファイルずつ処理し、合間にテーブルを片付けてメモリを空けてください。メモリの少ないスマホでは、先にほかの重いタブを閉じましょう。何もアップロードしないので、ページを読み込んだ後はオフラインでも作業できます。',
        ],
      },
      {
        heading: '何も端末の外に出ない',
        paragraphs: [
          '画像のアップロード、保存、記録は一切ありません。ネットワーク通信はページ自体の読み込みだけです。そのため一括処理は、クライアントへの納品、未公開の撮影データ、第三者に送れないファイルにも向いています。',
        ],
      },
    ],
    faqHeading: '一括処理について',
    faq: [
      { q: '1 回の処理で形式を混ぜられますか？', a: 'はい。JPG・PNG・WebP・GIF・HEIC・AVIF を混ぜて処理でき、各ファイルは元の形式のままです。' },
      { q: 'なぜ 50 ファイルまでなのですか？', a: '処理はすべて端末のメモリで行うためです。上限があることでスマホや古いノート PC でも安定します。何回でも繰り返せます。' },
      { q: 'ファイル名は変わりますか？', a: '変わりません。洗ったファイルは元の名前のままです。ZIP 内でまったく同じ名前が重なったときだけ番号が付きます。' },
      { q: 'オフラインでも使えますか？', a: 'はい。何も送信しないので、ページを読み込んだ後は接続なしでファイルを洗えます。' },
    ],
  },

  'chatgpt-gemini-image-metadata': {
    title: 'ChatGPT・Gemini・Nano Bananaの画像に含まれるメタデータ',
    metaTitle: 'ChatGPTとGeminiの画像メタデータ：C2PAとSynthID',
    summary: [
      'ChatGPTやGoogle Gemini（Nano Bananaを含む）で作った画像には、生成時点で来歴情報が付いています。画像とは別に保存されるC2PAコンテンツ認証情報と、Googleの場合はピクセルに織り込まれた不可視の透かしSynthIDです。',
      'このガイドでは、各社が通常書き込む内容、ブラウザでの読み方、メタデータ削除ツールで洗えるもの、そして誠実なツールなら決して触れられないものを紹介します。',
    ],
    description:
      'ChatGPTとGemini（Nano Banana）の画像に含まれるメタデータ（C2PA、SynthID、目に見えるマーク）の中身と読み方、洗って削除できる範囲を解説します。',
    related: ['synthid-invisible-ai-watermarks', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    updated: '2026-10-23',
    sections: [
      {
        heading: '2つの提供元、2層のマーキング',
        paragraphs: [
          'OpenAIもGoogleも生成画像にマークを付けますが、頼っている層が異なります。OpenAIが主に使うのは[C2PAコンテンツ認証情報](what-is-c2pa-content-credentials)で、ファイル内に保存される署名付きマニフェストに生成ツール名とAIで作られた旨が記されます。Googleが主に使うのは[SynthID](synthid-invisible-ai-watermarks)で、生成時にピクセルへ埋め込まれる不可視の透かしです。さらにGeminiアプリやクラウド製品のNano Banana Proなど、新しいモデルにはC2PAメタデータも追加されています。',
          '2つの層の性質はまったく違います。メタデータは独立したブロックにあり、対応するビューアなら誰でも読めますが、ファイルを再エンコードしたり洗ったりすれば消えます。ピクセルの透かしはトリミング、リサイズ、圧縮にも耐え、提供元の専用検出器でしか読めません。',
        ],
      },
      {
        heading: 'ChatGPTの画像に通常含まれるもの',
        paragraphs: ['具体的な項目はバージョンによって変わりますが、ChatGPTやOpenAIの画像APIから直接ダウンロードしたPNG・JPEGには、よく次のものが含まれます。'],
        bullets: [
          'C2PAマニフェスト（PNGならcaBXチャンク、JPEGならAPP11セグメント）。OpenAIに発行された証明書で署名されています。',
          '画像を生成したOpenAIのサービス名を示すクレームジェネレーター。',
          'デジタルソースタイプ[trainedAlgorithmicMedia](iptc-digitalsourcetype-ai)付きのc2pa.createdアクション。「生成モデルが作った」ことを示す標準的な表現です。',
          'アップロードした写真を編集した場合は、元画像を指す素材（ingredient）の記録と、編集内容を表すアクション。',
        ],
      },
      {
        heading: 'GeminiやNano Bananaの画像に通常含まれるもの',
        paragraphs: [
          'Googleのモデルで生成された画像には、すべてピクセルにSynthIDが入っています。モデル、アプリ、プランによっては、隅にきらめきマークが表示されていたり、新しいモデルではAI生成と記したC2PAマニフェストが付いていたりします。Geminiに画像がSynthIDを含むかどうかを尋ねることもでき、これが透かしを確認できる唯一の確実な方法です。',
          '目に見えるマークとSynthIDは画像そのものの一部なので、メタデータだけを編集する処理の影響は受けません。C2PAマニフェストがあれば、それは他のメタデータブロックと同じように扱われます。',
        ],
      },
      {
        heading: 'メタデータが勝手に消えることが多い理由',
        paragraphs: [
          '来歴メタデータは壊れやすいものです。スクリーンショットを撮れば完全に消えます。多くのチャットアプリやSNSはアップロードされた画像を再エンコードし、公開用のコピーからは削除します。チャットAIにファイルを再アップロードしただけで、画像データしか残らないこともあります。そのため、コンテンツ認証情報のないChatGPTやGeminiの画像はよくあり、出どころについて何も証明しません。完全な記録が残っているのは最初にダウンロードしたファイルだけです。',
        ],
      },
      {
        heading: '共有する前にファイルを読む',
        paragraphs: [
          'ページ上部のテーブルに画像を置いてください。「AI の痕跡」タブには、C2PAマニフェストの有無、署名したクレームジェネレーター、宣言されたソースタイプが表示されます。「生のメタデータ」には記録されたアクションや素材のほか、ファイルが経由したアプリが追加したEXIFやXMPの項目が並びます。アップロードは一切なく、ファイルはブラウザ内で読み込まれます。',
        ],
      },
      {
        heading: '洗うと消えるもの、残るもの',
        paragraphs: ['「すべての画像を洗う」を押すか[AIメタデータ削除](ai-tag-cleaner)ツールを使うと、画像を描き直さずにメタデータだけをバイト列から切り取ります。具体的には次のとおりです。'],
        bullets: [
          '削除：C2PAマニフェスト、XMPとIPTCの項目、EXIF、ツール名やプロンプトを含むテキスト。',
          '保持：ピクセルデータ、サイズ、回転、ICCカラープロファイル。見た目はまったく同じです。',
          '影響なし：SynthIDと目に見えるきらめきマーク。どちらもピクセルの中にあるためです。提供元の検証ツールは透かしで画像を引き続き識別できます。',
        ],
      },
      {
        heading: 'AI画像は誠実に使う',
        paragraphs: [
          '洗う処理はプライバシーのための道具です。プロンプト、アカウント情報、編集履歴がファイルと一緒に出回るのを防ぎますが、画像の本質は変えません。リアルなAI画像を公開するなら、多くのプラットフォームが開示を求めており、開示しないアカウントの表示を制限するところもあります。本物の写真に付いた誤ったラベルは正し、本当にAIで作ったものははっきりそう示しましょう。',
        ],
      },
    ],
    faqHeading: 'ChatGPTとGeminiの画像メタデータについて',
    faq: [
      { q: 'ChatGPTの画像にはすべてC2PAが付いていますか？', a: 'OpenAIの画像生成から直接ダウンロードした画像には、通常コンテンツ認証情報が付いています。スクリーンショットや保存し直したもの、他のアプリを経由したコピーでは失われていることがよくあります。' },
      { q: 'AI Label RemoverでGemini画像のSynthIDを消せますか？', a: 'いいえ。SynthIDはピクセルに埋め込まれており、AI Label Removerはピクセルを一切変更しません。削除するのはC2PA、XMP、EXIFなどのメタデータだけです。' },
      { q: '画像がGemini製かどうかはどう確認しますか？', a: 'まずAI Label RemoverでC2PAマニフェストを探してください。SynthIDについては、Geminiに画像について尋ねるなど、Google自身の確認方法を使います。' },
      { q: 'ChatGPTの画像を洗うと画質は落ちますか？', a: 'いいえ。削除するのはメタデータのブロックだけで、圧縮された画像データは変更せずにコピーされるため、結果はピクセル単位で同一です。' },
    ],
  },

  'remove-metadata-windows-mac': {
    title: 'WindowsとMacで写真のメタデータを削除する方法',
    metaTitle: 'Windows 11とMacで写真のメタデータを削除する',
    summary: [
      'WindowsにもmacOSにも写真のメタデータを一部削除する機能がありますが、それぞれカバーできる範囲は限られます。WindowsはEXIFのプロパティ、macOSは位置情報が中心です。',
      'ここでは標準機能の正確な手順、プロが使う無料のコマンドライン方式、そして両OSで同じように使え、C2PA・XMP・AIプロンプトまで削除できるブラウザでの方法を紹介します。',
    ],
    description:
      'Windows 11/10とmacOSで写真のEXIF・GPSなどのメタデータを、標準機能・ExifTool・ブラウザで削除する手順と、それぞれで消し残るものを解説します。',
    related: ['view-remove-metadata-iphone-android', 'remove-metadata-without-losing-quality', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: '何を削除するのかを知る',
        paragraphs: [
          '写真には複数の種類のメタデータが同時に入っていることがあります。[EXIF](what-is-exif-data)（カメラ、日時、GPS）、XMP（編集履歴、説明、AI関連の項目）、IPTC（キャプション、権利情報、[DigitalSourceType](iptc-digitalsourcetype-ai)）、[C2PAコンテンツ認証情報](what-is-c2pa-content-credentials)、そしてPNGならAIプロンプトを含むテキストチャンクです。OSの標準機能はEXIFを前提に作られているため、それ以外は残りがちです。方法を選ぶときはこの点を意識してください。',
        ],
      },
      {
        heading: 'Windows 11・10：エクスプローラー',
        paragraphs: ['エクスプローラーには一般的なプロパティを削除する機能があります。'],
        bullets: [
          '写真を1枚または複数選び、右クリックして「プロパティ」を選択します。',
          '「詳細」タブを開き、下部の「プロパティや個人情報を削除」をクリックします。',
          'きれいな複製が欲しければ「可能なすべてのプロパティを削除してコピーを作成」、項目を選ぶなら「このファイルから次のプロパティを削除」を選びます。',
          '「OK」をクリックし、コピーの「詳細」タブでGPSやカメラの項目が空になったことを確認します。',
        ],
      },
      {
        heading: 'Windowsの方法の限界',
        paragraphs: [
          'この機能がうまく働くのは主にJPEGとTIFFです。PNG、WebP、HEIC、AVIFでは削除できる項目がほとんど表示されないことがあります。XMPパケット、C2PAマニフェスト、埋め込みサムネイルが残ることもあり、何が残ったかは報告されません。「フォト」アプリにはメタデータを削除して書き出す機能がありません。',
        ],
      },
      {
        heading: 'macOS：プレビューと写真',
        paragraphs: ['Macの標準機能は位置情報を対象にしています。'],
        bullets: [
          'プレビュー：写真を開き、「ツール」›「インスペクタを表示」を選び、位置情報（GPS）のタブで「位置情報を削除」をクリックして保存します。',
          '写真：画像を選んで「イメージ」›「位置情報」›「位置情報を非表示」を選ぶか、「ファイル」›「書き出す」で位置情報のチェックを外し、書き出したコピーにGPSが入らないようにします。',
          'Finderの「情報を見る」やプレビューのインスペクタは結果の確認に使えますが、どちらも一部の項目しか表示しません。',
        ],
      },
      {
        heading: 'Macの方法の限界',
        paragraphs: [
          '位置情報を消しても、機種、撮影時刻、ソフトウェア、編集履歴は残ります。プレビューや写真からJPEGで書き出すと[画像が再エンコードされ](remove-metadata-without-losing-quality)、そのたびに少しずつ画質が落ちます。設定を変えない限り、HEICファイルが変換されることもあります。',
        ],
      },
      {
        heading: '両方で使えるコマンドライン：ExifTool',
        paragraphs: [
          'ExifToolは、Windows・macOS・Linuxで使える歴史ある無料のメタデータツールです。ファイルを再エンコードせずに編集できます。便利なコマンドは次のとおりです。',
        ],
        bullets: [
          'exiftool -all= photo.jpg — 書き込み可能なメタデータをすべて削除し、photo.jpg_originalという名前のバックアップを残します。',
          'exiftool -all= --icc_profile:all -tagsfromfile @ -orientation photo.jpg — カラープロファイルと回転情報以外をすべて削除し、色と向きを正しく保ちます。',
          'exiftool -all= -r "C:\\Photos\\Share" — サブフォルダを含むフォルダ全体を処理します。',
        ],
      },
      {
        heading: 'ブラウザでの方法：どのパソコンでも同じ手順',
        paragraphs: [
          '会社のノートPCなどでソフトをインストールできない場合や、すべての形式を1つの方法で処理したい場合は、Chrome、Edge、Safari、FirefoxでAI Label Removerを開いてください。最大50枚の画像をドロップしてレポートを読み、「すべての画像を洗う」を押して、ファイルまたはZIPで保存します。JPEG、PNG、WebP、GIF、HEIC、AVIFからEXIF、GPS、XMP、IPTC、C2PA、PNGのプロンプトチャンクを削除し、回転情報とカラープロファイルは保持します。処理はすべてお使いのパソコン上で行われます。詳しくは[写真のEXIF削除](remove-exif-data)ページをご覧ください。',
        ],
      },
      {
        heading: 'どの方法を選ぶか',
        paragraphs: [],
        bullets: [
          'JPEG 1枚で基本だけ消したい：Windowsならエクスプローラー、Macならプレビュー。',
          'ライブラリから位置情報だけ消したい：Macの写真アプリ。',
          'スクリプト、サーバー、数千枚のファイル：ExifTool。',
          '形式が混在している、AIメタデータも消したい、インストールが許可されていない：AI Label Removerのようなローカルで動くブラウザツール。',
        ],
      },
    ],
    faqHeading: 'パソコンでのメタデータ削除について',
    faq: [
      { q: '「プロパティや個人情報を削除」でGPSは消えますか？', a: 'はい、JPEGファイルなら他のEXIFプロパティとともにGPSも削除されます。一部のXMPデータが残ることがあるので、結果の「詳細」タブを確認してください。' },
      { q: 'WindowsでHEIC写真のメタデータを削除できますか？', a: 'エクスプローラーのHEIC対応は限定的です。ExifToolや、AI Label RemoverのようにHEICを扱えるブラウザツールなら、ファイルを変換せずに削除できます。' },
      { q: 'プレビューで書き出せばメタデータはすべて消えますか？', a: '確実ではありません。書き出しで一部の項目は消えても残るものがあり、JPEGは再圧縮されます。共有前に書き出したファイルを確認してください。' },
      { q: '画質を保てるのはどの方法ですか？', a: 'エクスプローラー、ExifTool、AI Label Removerは再エンコードせずにメタデータを編集します。編集ソフトやビューアから新しいJPEGを書き出すと画像が再圧縮されます。' },
    ],
  },

  'image-metadata-viewer-online': {
    title: '画像メタデータビューア：EXIF・GPS・XMP・IPTC・C2PAをまとめて確認',
    metaTitle: '画像メタデータビューア：EXIF・GPS・AI情報を確認',
    summary: [
      '写真を共有する前や画像を信用する前に、スマホやファイルマネージャーが表示する一部の項目だけでなく、メタデータビューアでファイルが自分について語っているすべてを確認しておくと安心です。',
      'このガイドでは、完全なチェックで何を見るべきか、標準のビューアの限界、多くのオンラインEXIFビューア自体がプライバシーのリスクになる理由、重要な項目の読み方を解説します。',
    ],
    description:
      '無料の画像メタデータビューア。EXIF・GPS・XMP・IPTC・C2PA・AIプロンプトをアップロードせずにブラウザで確認。各項目の意味と標準ビューアで見落とされるものを解説します。',
    related: ['what-is-exif-data', 'how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos'],
    updated: '2026-10-23',
    sections: [
      {
        heading: '完全なチェックで見るもの',
        paragraphs: ['しっかりしたメタデータビューアは、EXIFだけでなくファイル内のすべてのブロックを読みます。'],
        bullets: [
          'EXIF：カメラやスマホの機種、露出、撮影時刻、レンズ、回転情報。',
          'GPS：位置情報がオンだった場合の緯度、経度、高度、方角。',
          'XMP：編集ソフト、履歴、説明、レーティング、AI関連の項目。',
          'IPTC：キャプション、キーワード、作者、著作権、[DigitalSourceType](iptc-digitalsourcetype-ai)。',
          'C2PA：[コンテンツ認証情報](what-is-c2pa-content-credentials)。誰が署名したか、どんな操作が記録されたか、AIが関わったか。',
          'PNGのテキストチャンク：[Stable Diffusionのパラメータ、ComfyUIのワークフロー](remove-stable-diffusion-comfyui-metadata)などの埋め込みテキスト。',
          'ICCプロファイルとサムネイル：色の情報と隠れたプレビュー画像。',
        ],
      },
      {
        heading: '標準ビューアとその死角',
        paragraphs: [
          'Windowsは「プロパティ」›「詳細」、macOSはプレビューのインスペクタやFinderの「情報を見る」、iPhoneは写真を上にスワイプ、Googleフォトは詳細パネルでメタデータを表示します。日付、カメラ、場所をざっと見るには十分ですが、表示されるのはEXIFの一部だけで、XMP、IPTC、C2PA、PNGのテキストはたいてい完全に無視されます。エクスプローラーではきれいに見えても、AIプロンプトが丸ごと入っていることがあります。',
        ],
      },
      {
        heading: 'オンラインEXIFビューアに潜むプライバシーの落とし穴',
        paragraphs: [
          '「オンラインEXIFビューア」をうたうサイトの多くは、画像をサーバーにアップロードし、そこで読み取ってレポートを返します。プライバシーの確認としては本末転倒です。心配している写真そのものが、GPS位置ごと第三者にコピーされてしまうからです。ファイルをローカルで読むビューアを選びましょう。簡単な見分け方は、ページを読み込んだ後にネット接続を切り、それでもビューアが動くかを確かめることです。',
        ],
      },
      {
        heading: 'AI Label Removerでファイルを読む',
        paragraphs: ['ページ上部のテーブルに画像を置いてください。結果は3つのタブにまとまります。'],
        bullets: [
          '「わかってしまうこと」：場所、人物、日時、端末をわかりやすくまとめ、GPSは10進数の座標に変換して表示します。',
          '「AI の痕跡」：C2PAマニフェスト、IPTCのソースタイプ、生成ツール名、プロンプトと判定結果。',
          '「生のメタデータ」：EXIF IFD0、Exif、GPS、XMPの名前空間、IPTC、C2PA、PNGテキストチャンクなど、すべての項目を出どころ別に表示します。',
        ],
      },
      {
        heading: 'まず読むべき項目',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude：[正確な場所](remove-gps-location-from-photos)。地図に貼り付けると何がわかるか確かめられます。',
          'DateTimeOriginal と ModifyDate：撮影した日時と最後に保存した日時。',
          'Make、Model、BodySerialNumber、LensSerialNumber：複数の写真を1台の端末に結びつけることがあります。',
          'Artist、Copyright、OwnerName：埋め込まれているとは思っていなかった名前。',
          'Software と CreatorTool：AIツールを含め、ファイルを扱ったアプリ。',
          'DigitalSourceType と C2PAのクレームジェネレーター：画像がどう作られたと自称しているか。',
        ],
      },
      {
        heading: 'ビューアにほとんど何も表示されないとき',
        paragraphs: [
          'SNSのフィードから保存した画像、スクリーンショット、チャットアプリで送られたファイルは、すでに再エンコードされてメタデータが削除されていることがよくあります。その場合メタデータがほとんどないのは普通のことで、画像が本物か、編集されたか、AI生成かについては何も語りません。出どころが重要なら元のファイルを求めましょう。',
        ],
      },
      {
        heading: '見ることは検証ではない',
        paragraphs: [
          '一般的なメタデータは誰でも編集できるプレーンテキストなので、証拠ではなく手がかりとして扱ってください。C2PAは署名されている点で異なりますが、ビューアがマニフェストを表示することと署名を検証することは別物です。検証には公式のContent Credentials検証ツールを使いましょう。十分に確認してデータを消したくなったら、「すべての画像を洗う」を押せば画像を変えずに削除できます。何が消えるかは[写真のEXIF削除](remove-exif-data)ページで詳しく説明しています。',
        ],
      },
    ],
    faqHeading: '画像メタデータの確認について',
    faq: [
      { q: '写真をアップロードしない無料のメタデータビューアはありますか？', a: 'あります。AI Label Removerはアップロードもアカウント登録もなしにブラウザ内でファイルを読み、ページを読み込んだ後はオフラインでも動作します。' },
      { q: 'AI画像のプロンプトを見ることはできますか？', a: '生成ツールが保存していれば見られます。Stable DiffusionやComfyUIのプロンプトはPNGのテキストチャンクに表示され、XMPやEXIFの項目にプロンプトを保存するサービスもあります。' },
      { q: 'WindowsでPNGのメタデータが表示されないのはなぜ？', a: 'エクスプローラーはPNGについてごく一部のプロパティしか表示しません。テキストチャンク、XMP、C2PAはそこでは見えませんが、完全なビューアなら表示されます。' },
      { q: 'メタデータで写真が偽物かどうかわかりますか？', a: 'AIのクレームジェネレーターなど強い手がかりにはなりますが、メタデータがない、あるいは編集されているというだけでは何も証明できません。' },
    ],
  },

  'iptc-digitalsourcetype-ai': {
    title: 'IPTC DigitalSourceType：画像がAI製であることをプラットフォームに伝える項目',
    metaTitle: 'IPTC DigitalSourceTypeとtrainedAlgorithmicMedia',
    summary: [
      'DigitalSourceTypeは小さなIPTCメタデータの項目ですが、影響は大きく、trainedAlgorithmicMediaという値ひとつで多くのプラットフォームが画像をAI生成としてラベル付けします。',
      'このガイドでは、よく見かける値、この項目を書き込む側と読む側、書き換えが簡単な理由、ファイル内で見つけたり削除したりする方法をまとめます。',
    ],
    description:
      'IPTC DigitalSourceTypeの意味、trainedAlgorithmicMediaとcompositeWithTrainedAlgorithmicMediaの値、この項目を読む側、見つけ方と削除方法を解説します。',
    related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'which-platforms-label-ai-images'],
    updated: '2026-10-23',
    sections: [
      {
        heading: '1つの項目、決まった答えのリスト',
        paragraphs: [
          'DigitalSourceTypeは、報道機関、ストックフォト会社、写真ソフトが画像を記述するために使うIPTC Photo Metadata規格の一部です。答えるのは「このコンテンツはどうやって作られたか」という1つの問いだけです。答えは自由記述ではなく、IPTCの統制語彙「digital source type」の用語で、http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia のようなURIで書かれます。',
          '画像ファイルでは、この項目はXMPのIptc4xmpExt:DigitalSourceTypeとして保存されます。[C2PAコンテンツ認証情報](what-is-c2pa-content-credentials)も署名付きアクションの中で同じ語彙を使うため、同じ用語が両方に現れます。',
        ],
      },
      {
        heading: 'よく見かける値',
        paragraphs: ['語彙は年々増えています。AIラベルに特に関係するのは次の用語です。'],
        bullets: [
          'trainedAlgorithmicMedia：サンプルコンテンツで学習した生成モデルが作成したもの。',
          'compositeWithTrainedAlgorithmicMedia：生成AIの要素を含む合成。たとえば[生成塗りつぶしで編集した写真](turn-off-content-credentials-photoshop-lightroom)。',
          'algorithmicMedia：手続き型アートやフラクタルアートのように、学習データなしでアルゴリズムだけで作られたもの。',
          'compositeSynthetic：合成要素を含む合成画像。',
          'algorithmicallyEnhanced：アルゴリズムによる軽微な補正や強調。',
          'digitalCapture：実際の光景をデジタルカメラやスキャナーで取り込んだもの。',
          'computationalCapture：多くのスマホのように、撮影時にアルゴリズムで処理された撮影画像。',
          'digitalArt と screenCapture：人がソフトで制作したアート作品と、スクリーンショット。',
        ],
      },
      {
        heading: '誰が書き込むのか',
        paragraphs: [
          'いくつかのAI画像サービスは出力にtrainedAlgorithmicMediaを書き込みます。生成機能を持つ編集ソフトは、AI編集の後に合成を示す値を記録することがあります。ストックフォトや通信社は取り込み時にこの項目を入力し、AI画像をこの方法で示すよう出品者に求めるマーケットプレイスもあります。また、この項目は気づかないうちに引き継がれることがあります。一度設定されると、XMPを保持するアプリを通る限り残り続けます。',
        ],
      },
      {
        heading: '誰が読むのか',
        paragraphs: [
          'Metaは、Facebook、Instagram、Threadsで[「AI情報」](made-with-ai-label)を表示するかどうかの判断に、C2PAとあわせてIPTCメタデータを使うと説明しています。[ほかのプラットフォーム](which-platforms-label-ai-images)、検索エンジン、ショッピングサービスも、AIの開示のためにこの項目を同様に使うと発表しています。そのため、compositeWithTrainedAlgorithmicMediaが付いた軽く修正しただけの本物の写真が、完全な生成画像とまったく同じラベルを付けられることがあります。',
        ],
      },
      {
        heading: '署名がないので簡単に変えられる',
        paragraphs: [
          'C2PAマニフェストと違い、通常のIPTCメタデータには署名がありません。どのメタデータエディタでもDigitalSourceTypeを追加、変更、削除でき、保存し直すときに捨ててしまうアプリも多くあります。「AI」と書かれていても「カメラ」と書かれていても、この項目は証拠ではなく自己申告として扱ってください。',
        ],
      },
      {
        heading: '見つけ方と削除方法',
        paragraphs: [
          'AI Label Removerに画像を置くと、「AI の痕跡」でこの項目が「XMP · Iptc4xmpExt › DigitalSourceType」として値とともに表示されます。C2PAマニフェスト内の同じ用語はC2PAの下に表示されます。「すべての画像を洗う」を押すとXMPパケット全体とC2PAストアが削除され、この項目も、EXIFやその他の識別情報とともに消えます。ほかのAI関連の項目については[AIメタデータ削除](ai-tag-cleaner)ページをご覧ください。',
          'この項目だけを消して残りのXMPを保ちたい場合は、コマンドラインツールで exiftool -XMP-iptcExt:DigitalSourceType= photo.jpg のように削除できます。C2PAマニフェストにも同じ値が入っている可能性がある点に注意してください。',
        ],
      },
      {
        heading: 'この項目を残すべきとき',
        paragraphs: [
          'この項目は、見る人が画像の作られ方を知るために存在します。画像が本当にAIで生成された、あるいは大きく変えられたものなら、宣言は残すか、投稿時に開示しましょう。自分の作品を誤って説明している場合や、ファイルから個人情報を消している場合には、削除するのが適切です。',
        ],
      },
    ],
    faqHeading: 'IPTC DigitalSourceTypeについて',
    faq: [
      { q: 'trainedAlgorithmicMediaとはどういう意味ですか？', a: '生成AIモデルが作成したコンテンツを表すIPTCの用語で、完全にAIで生成された画像を意味します。' },
      { q: '編集した写真にcompositeWithTrainedAlgorithmicMediaと表示されるのはなぜ？', a: 'AIによるオブジェクト削除などの生成編集が記録されたためです。この用語は、大きさに関係なくAI生成部分を含む合成を示します。' },
      { q: 'DigitalSourceTypeはC2PAと同じものですか？', a: 'いいえ。DigitalSourceTypeは通常署名のないIPTCの項目で、XMPに保存されます。C2PAは署名付きのマニフェストで、アクションの中に同じ語彙を含むことがあります。' },
      { q: 'AI Label RemoverでDigitalSourceTypeだけを消せますか？', a: '現時点ではできません。AI Label RemoverはXMPとC2PAをまとめて削除します。他のXMPデータを残す必要があるなら、ExifToolでこの項目だけを削除できます。' },
    ],
  },

  'remove-metadata-without-losing-quality': {
    title: '画質を落とさずにメタデータを削除：スクショや保存し直しがダメな理由',
    metaTitle: '画質を落とさずに画像のメタデータを削除する',
    summary: [
      'スクリーンショットを撮る、編集ソフトで保存し直す、オンライン変換に通すといった手軽な方法は、どれも画像を描き直します。メタデータは消えますが、シャープさや解像度、色の正確さも失われます。',
      'このガイドでは、その理由、画質を落とさずにメタデータを削除する方法、そしてピクセルが1つも変わっていないことを自分で確かめる方法を説明します。',
    ],
    description:
      'EXIF・GPS・C2PA・AIメタデータを画質を落とさずに削除。スクショや保存し直しで画質が落ちる理由、ロスレス削除のしくみと確認方法を解説します。',
    related: ['batch-remove-metadata', 'remove-metadata-windows-mac', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'メタデータとピクセルは別々に保存されている',
        paragraphs: [
          '一般的な画像形式はすべて、画像本体とそれに関するメモを分けて保存しています。JPEGはマーカー付きセグメントの並びで、メタデータはAPP1・APP11・APP13に、圧縮画像はSOSマーカーの後ろにあります。PNGはチャンクのリストで、ピクセルはIDATに、テキストはtEXt・zTXt・iTXtにあります。WebPはRIFFチャンク、HEICとAVIFはISOBMFFボックスを使います。両者が別々に保存されているので、画像をデコードせずにメタデータだけを削除できます。',
        ],
      },
      {
        heading: 'よくある近道とその代償',
        paragraphs: [],
        bullets: [
          'スクリーンショット：メタデータはすべて消えますが、画面の解像度で取り込まれ、切り取りや拡大縮小が起きたり、色が変わったり、通知など画面上の別のものが写り込んだりします。',
          '保存し直す・JPEGで書き出す：画像をデコードして再圧縮します。世代を重ねるごとにノイズが増え、ICCプロファイルが失われて色が変わることもあります。',
          'オンライン変換：画像を再エンコードし、たいていはその前にサーバーへアップロードします。',
          '形式の変換（たとえば[HEICからJPEGへ](view-remove-metadata-iphone-android)）：圧縮方式が変わり、広色域の色や透過がよく失われます。',
        ],
      },
      {
        heading: '画質を落とさずにメタデータを削除する方法',
        paragraphs: [
          'ロスレスな削除ツールはファイル構造をたどり、画像を表すブロックはすべてコピーし、メタデータを含むブロックだけを飛ばします。JPEGなら、EXIFとXMPのAPP1、C2PAのAPP11、IPTCのAPP13、コメントを捨て、量子化テーブル、ハフマンテーブル、スキャンデータはそのままコピーします。PNGではテキストやメタデータのチャンクを丸ごと削除するので、残ったチャンクのCRCはすべて有効なままです。HEICとAVIFではメタデータのアイテムを削除し、画像データが正しい位置を指し続けるよう内部のオフセットを書き換えます。',
          'AI Label Removerはブラウザ内でこの方式で動作します。[EXIF削除](remove-exif-data)でも[PNGメタデータ削除](png-metadata-remover)でも同じです。出力には、入力とまったく同じ圧縮画像データが含まれます。',
        ],
      },
      {
        heading: '良いツールが残す3つのもの',
        paragraphs: [],
        bullets: [
          '回転情報：スマホの写真の多くは横向きのまま保存され、[EXIFのタグ](what-is-exif-data)でビューアに回転を指示しています。これを消すと縦の写真が横倒しで表示されます。AI Label Removerはこのタグを最小限のEXIFブロックに書き戻します。',
          'カラープロファイル：ICCプロファイルは、特にDisplay P3で撮られたスマホ写真の色の解釈方法をアプリに伝えます。これがないと、くすんだり彩度が高すぎたりします。',
          'アニメーションと透過：APNG、アニメーションWebP、GIFのフレームやアルファチャンネルは、そのまま残る必要があります。',
        ],
      },
      {
        heading: '本当にロスレスだったか確かめる方法',
        paragraphs: ['ツールの言葉をうのみにする必要はありません。'],
        bullets: [
          'サイズを比べる：幅と高さが同じであること。',
          'ファイルサイズを比べる：洗ったファイルは削除したメタデータの分だけ小さくなるはずで、極端に小さくなることはありません。',
          'ピクセルを比べる：編集ソフトで両方をレイヤーとして開き、描画モードを「差の絶対値」にします。ロスレスなら真っ黒になります。',
          'ファイルを読み直す：[AI Label Removerは洗ったファイルをすべて読み直し](batch-remove-metadata)、残っている項目を表示します。',
        ],
      },
      {
        heading: 'ファイルが軽くなる理由',
        paragraphs: [
          'メタデータを削除するだけで、ファイルがかなり小さくなることもあります。カメラのJPEGに含まれる埋め込みサムネイルやMPFプレビュー、XMPの長い編集履歴、PNGに入った大きな[ComfyUIのワークフロー](remove-stable-diffusion-comfyui-metadata)は、数十から数百キロバイトになることがあります。これらを消せば、見た目を変えずにファイルを小さくできます。',
        ],
      },
    ],
    faqHeading: 'ロスレスなメタデータ削除について',
    faq: [
      { q: 'メタデータを消すと画質は落ちますか？', a: 'バイト単位で処理すれば落ちません。画質が落ちるのは、スクリーンショット、保存し直し、変換といった再エンコードだけです。' },
      { q: '洗った後にファイルが小さくなったのはなぜ？', a: 'メタデータのブロック、サムネイル、プレビュー画像が削除されたためです。画像データそのものは変わっていません。' },
      { q: '洗った後に色が変わることはありますか？', a: 'ありません。AI Label RemoverはICCカラープロファイルを残すので、色は以前とまったく同じように表示されます。' },
      { q: 'スクリーンショットはメタデータを消す安全な方法ですか？', a: 'メタデータは消えますが、画質が落ち、画面上の別のものが写り込むこともあります。ロスレス削除なら元の画像をそのまま保てます。' },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    metaTitle: '画像がAI生成か確認する方法（無料）',
    related: ['iptc-digitalsourcetype-ai', 'image-metadata-viewer-online', 'synthid-invisible-ai-watermarks'],
    title: 'この画像はAI生成？ファイルそのものを確認する方法',
    summary: [
      '画像がAI生成かどうかを知るもっとも手早く信頼できる手がかりは、ファイルの中にあります。C2PAコンテンツ認証情報、IPTCのDigitalSourceType、生成ツールのテキストは、画像を作ったツールの名前をそのまま示していることがよくあります。',
      'ここでは、何を探すべきか、ブラウザで動く無料チェッカーでの読み方、そして何も見つからなくても画像が本物だとは証明できない理由を説明します。',
    ],
    description:
      'C2PA、IPTC DigitalSourceType、生成ツールのメタデータをブラウザで読み、画像がAI生成か確認。それぞれのシグナルで証明できること・できないことも解説します。',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'まず元のファイルを手に入れる',
        paragraphs: [
          'メタデータが残っているのは、カメラや生成ツールから出たままのファイルだけです。スクリーンショット、保存し直したファイル、SNSから取得した画像は、たいてい再エンコードされてほとんどが失われています。可能な限り、圧縮された写真としてではなく「ファイルとして」送られた元の書き出しを求めましょう。',
        ],
      },
      {
        heading: '手がかり1：コンテンツ認証情報',
        paragraphs: [
          'C2PAに対応したツールは[デジタル署名付きの記録](what-is-c2pa-content-credentials)を添付します。クレームジェネレーターには画像を作ったアプリやサービスの名前が、c2pa.actionsには「作成」「編集」などの工程が記され、digitalSourceTypeでAI生成を直接宣言できます。',
          '記録は署名されているので、検証ツールを使えば署名後に画像が変更されたかどうかもわかります。AIサービスのマニフェストは、メタデータとして得られるもっとも強い証拠です。',
        ],
      },
      {
        heading: '手がかり2：IPTC DigitalSourceType',
        paragraphs: ['多くの生成ツールや編集ソフトは、コンテンツの作り方を記述する[標準のIPTC項目](iptc-digitalsourcetype-ai)を記入します。よく見かける値は次のとおりです。'],
        bullets: [
          'trainedAlgorithmicMedia：生成AIモデルが作ったもの。',
          'compositeWithTrainedAlgorithmicMedia：生成塗りつぶしのように、一部をAIで生成・置換した本物の写真。',
          'algorithmicMedia：手続き型アートのように、学習データなしでアルゴリズムが作ったもの。',
          'digitalCapture：カメラで撮影され、生成コンテンツの申告がないもの。',
        ],
      },
      {
        heading: '手がかり3：プロンプトとツール名',
        paragraphs: [
          '[Stable DiffusionのフロントエンドやComfyUI](remove-stable-diffusion-comfyui-metadata)は、プロンプト、シード、モデル、ワークフローをPNGファイルにテキストとして保存します。ほかのツールはXMPのCreatorToolやEXIFのSoftwareに名前を残します。いずれもAIが関わったことをはっきり示し、画像の作り方まで正確にわかることもよくあります。',
        ],
      },
      {
        heading: '画像がAI生成かチェックする',
        paragraphs: [
          'ページ上部のテーブルにファイルを置いてください。「AI の痕跡」タブは、AIの痕跡あり、もう一度確認を、AIの痕跡なしの3つのいずれかで判定し、各シグナルを出どころとともに表示します。「生のメタデータ」には元の値が表示されます。アップロードは一切ありません。見つかったものを消すには[AIメタデータ削除](ai-tag-cleaner)ページを使ってください。',
        ],
      },
      {
        heading: 'ファイルが空だったら',
        paragraphs: [
          'メタデータがないことは、どちらの方向にも何も証明しません。編集ソフト、チャットアプリ、SNSは常にメタデータを削除しており、カメラのEXIFがないことはせいぜい弱い手がかりです。次の手順は、提供元の透かしチェッカー（たとえば[GoogleのSynthID](synthid-invisible-ai-watermarks)用）、最古のコピーを探す画像の逆検索、そして画像が最初に現れた場所の確認です。ピクセルをもとにしたAI検出器が示すのは確率であって、証拠ではありません。',
        ],
      },
    ],
    faqHeading: '画像のAIチェックについて',
    faq: [
      { q: 'ChatGPTやGeminiで作られた画像だとわかりますか？', a: 'ファイルにコンテンツ認証情報が残っていれば、クレームジェネレーターにサービス名が記されています。Geminiの画像なら、GoogleのSynthIDチェックでピクセル内の透かしを検出することもできます。' },
      { q: 'AI Label RemoverでAIの痕跡が見つからなければ、本物の写真ですか？', a: '必ずしもそうではありません。ファイルにAIメタデータが含まれていないという意味です。メタデータは簡単に失われたり削除されたりするので、痕跡なしという結果は証拠ではなく「不明」と受け止めてください。' },
      { q: 'InstagramやFacebookから保存した画像もチェックできますか？', a: 'できますが、プラットフォームは通常公開用のコピーからメタデータを削除しているので、ほとんど何も出てこないと考えてください。プラットフォーム自身の「AI情報」ラベルは別のシグナルです。' },
      { q: 'チェックは無料でプライベートですか？', a: 'はい。無料でアカウントも不要、ファイルはアップロードされずにローカルで読み込まれます。' },
    ],
  },

  'which-platforms-label-ai-images': {
    metaTitle: 'AI画像にラベルを付けるSNSは？Meta・TikTok・YouTube',
    related: ['made-with-ai-label', 'iptc-digitalsourcetype-ai', 'what-is-c2pa-content-credentials'],
    title: 'SNSのAIラベル：Instagram、Facebook、TikTok、YouTube、Pinterest、LinkedIn',
    summary: [
      '「AI情報」などのラベルを画像や動画に付けるプラットフォームが増えています。多くは、ファイル内の同じシグナル（C2PAコンテンツ認証情報とIPTCメタデータ）と、クリエイター自身の申告を組み合わせています。',
      'この概要では、主要プラットフォームが一般にどうラベルを付けるのか、何がきっかけになるのか、AIで軽く補正した本物の写真にとってどんな意味があるのかを説明します。',
    ],
    description:
      'Instagram、Facebook、Threads、TikTok、YouTube、Pinterest、LinkedInのAIラベルの付け方、きっかけとなるファイルのメタデータ、編集写真への影響を解説します。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '共通のシグナル',
        paragraphs: ['自動ラベル付けは、たいてい次のような共通シグナルにもとづいています。'],
        bullets: [
          'AIによる生成や編集を宣言する[C2PAコンテンツ認証情報](what-is-c2pa-content-credentials)。',
          'trainedAlgorithmicMediaなどの[IPTC DigitalSourceType](iptc-digitalsourcetype-ai)。',
          'プラットフォームが対応する検出器を持っている場合の、[一部のAI提供元による不可視の透かし](synthid-invisible-ai-watermarks)。',
          'クリエイターの申告。リアルなAIコンテンツを投稿するときのスイッチやチェックボックス。',
        ],
      },
      {
        heading: 'Meta：Instagram、Facebook、Threads',
        paragraphs: [
          'Metaは、業界標準のAIシグナルを検出したとき、またはクリエイターがAIの使用を申告したときに[「AI情報」](made-with-ai-label)（2024年に「Made with AI」から名称変更）を表示します。軽く補正しただけの写真にラベルが付くことに写真家が反発したため、MetaはAIで編集したコンテンツのラベルを投稿メニュー内に移し、大部分が生成されたコンテンツにはより目立つラベルを残しました。',
        ],
      },
      {
        heading: 'TikTok',
        paragraphs: [
          'TikTokはリアルなAI生成コンテンツへのラベル付けをクリエイターに義務づけており、AI生成と識別するC2PAコンテンツ認証情報付きでアップロードされたものには自動でラベルを付けると説明しています。',
        ],
      },
      {
        heading: 'YouTube',
        paragraphs: [
          'YouTubeは、リアルな改変・合成コンテンツの申告を投稿者に求め、視聴者にラベルを表示します。また逆方向にもC2PAを使っており、本物の撮影を示す認証情報を持つコンテンツには「カメラで撮影」といった表示を出します。',
        ],
      },
      {
        heading: 'PinterestとLinkedIn',
        paragraphs: [
          'Pinterestは、メタデータと独自の判定器にもとづいて、AIで生成・加工された画像にラベルを追加しています。LinkedInはC2PAデータを持つ画像にコンテンツ認証情報のアイコンを表示し、出どころや編集内容を確認できるようにしています。',
          'どのプラットフォームもこうしたポリシーを頻繁に見直しています。特定の挙動を前提にする前に、最新のヘルプセンターを確認してください。',
        ],
      },
      {
        heading: '本物の写真にラベルが付いたとき',
        paragraphs: [
          '通行人を消すといった生成編集を1回行っただけで、メタデータ上では写真全体がAIを含む合成コンテンツとして記録されることがあります。投稿前にAI Label Removerにファイルを置けば、どの項目がラベルのきっかけになるかがわかります。ラベルが誤りなら、[コピーを洗えば](ai-tag-cleaner)原因を取り除けます。画像の大部分が生成されたものなら、開示しましょう。ラベルはそのためにあります。',
        ],
      },
    ],
    faqHeading: 'SNSのAIラベルについて',
    faq: [
      { q: 'InstagramはAI生成のプロフィールにもラベルを付けますか？', a: 'Instagramは、AI生成の人物を扱うアカウントにプロフィール単位のラベルを導入しており、申告しないアカウントのおすすめ表示を制限することがあります。AIツールで編集するだけのクリエイターは通常対象外ですが、最新のガイドラインを確認してください。' },
      { q: '小さな物を消しただけなのに、なぜAIラベルが？', a: '多くの編集ソフトは、どんな生成編集でもC2PAやIPTCに「AIを含む合成」と記録します。プラットフォームは編集の大きさを考慮せずにその宣言を読みます。' },
      { q: '投稿後もプラットフォームはメタデータを保持しますか？', a: '多くはアップロード時に読み取り、公開用のコピーからは削除します。そのため自分の投稿をダウンロードしても、元の項目はまず表示されません。' },
      { q: '洗った画像ならどのラベルも付きませんか？', a: '必ずしもそうではありません。洗えばファイル内のシグナルは消えますが、プラットフォームは透かしの検出や判定器を使ったり、申告を求めたりすることもあります。' },
    ],
  },

  'what-metadata-ai-image-generators-add': {
    metaTitle: 'AI画像生成ツールが追加するメタデータとは',
    related: ['chatgpt-gemini-image-metadata', 'remove-stable-diffusion-comfyui-metadata', 'iptc-digitalsourcetype-ai'],
    title: 'AI画像生成ツールがファイルに隠すもの：DALL·E、Firefly、Midjourney、Gemini、Stable Diffusion',
    summary: [
      'ほとんどのAI画像ツールは、署名付きのコンテンツ認証情報から平文のプロンプトまで、出力に何かを残します。各ツールが何を書き込むかを知れば、プロンプトを守り、プラットフォームが画像にラベルを付ける理由を理解できます。',
      '以下では、人気の生成ツールのファイルによく含まれるメタデータと、自分のファイルに実際に何が入っているかを確認する方法をまとめます。',
    ],
    description:
      '人気のAI画像生成ツールが埋め込むC2PA、IPTC DigitalSourceType、XMP、プロンプト、ワークフローと、ファイルからの読み方・洗い方を解説します。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '痕跡の3つの系統',
        paragraphs: ['AI関連のメタデータは大きく3種類に分かれます。'],
        bullets: [
          '署名付きの来歴：生成ツールとその処理内容を記したC2PAコンテンツ認証情報。',
          '説明的な項目：[DigitalSourceType](iptc-digitalsourcetype-ai)、CreatorTool、説明文などのIPTC・XMPの項目。',
          '生成設定：プロンプト、シード、モデル、パラメータのテキスト。主にローカルツールが保存します。',
        ],
      },
      {
        heading: 'OpenAI：ChatGPTの画像とDALL·E',
        paragraphs: [
          '[OpenAIの画像生成](chatgpt-gemini-image-metadata)で作られた画像には、OpenAIを出どころとして示すC2PAコンテンツ認証情報が付いており、C2PA対応のビューアやプラットフォームが識別できます。',
        ],
      },
      {
        heading: 'Adobe：FireflyとPhotoshopの生成機能',
        paragraphs: [
          'Adobeは、Fireflyを使った機能で作ったコンテンツにコンテンツ認証情報を付け、AI生成またはAI編集と記述します。そのため、生成塗りつぶしや生成拡張で手を入れた写真は、ほぼ全体が本物の写真でも、AIを含む合成の宣言を持つことがあります。',
        ],
      },
      {
        heading: 'Google（Gemini、Imagen）とMeta AI',
        paragraphs: [
          'Googleは生成モデルの画像に[不可視の透かしSynthID](synthid-invisible-ai-watermarks)を埋め込み、一部の製品ではメタデータでAIコンテンツを示しています。Metaは、Meta AIの画像には目に見えるマーカー、不可視の透かし、AI生成を示すIPTCメタデータが含まれると説明しています。',
        ],
      },
      {
        heading: 'Midjourney',
        paragraphs: [
          '[Midjourneyからダウンロードした画像にはプロンプトが含まれることがあり](hide-midjourney-dalle-prompts)、説明やコメントの項目にジョブIDが、さらにAI生成を示すIPTCの値が入っていることもあります。何が含まれるかは、ダウンロード形式とその時点のサービスのバージョンによって変わります。',
        ],
      },
      {
        heading: 'ローカルの生成ツール：Stable DiffusionのフロントエンドとComfyUI',
        paragraphs: [
          'ローカルツールは何も署名しませんが、もっとも詳しい情報を保存していることがよくあります。A1111とForgeは「parameters」というテキストチャンクを書き込み、[ComfyUIはプロンプトとワークフローのグラフ全体](remove-stable-diffusion-comfyui-metadata)をJSONとして埋め込みます。これらの設定はたいていオフにできますが、効くのは新しい画像だけです。',
          '生成ツールはバージョンごとに出力内容を変えるので、確実なのはファイルそのものを開くことです。AI Label Removerのテーブルに置いて各項目を確認し、共有したくないものは[AIメタデータ削除](ai-tag-cleaner)で洗い流しましょう。',
        ],
      },
    ],
    faqHeading: '生成ツールのメタデータについて',
    faq: [
      { q: 'Nano Bananaは画像にメタデータを追加しますか？', a: 'Googleは自社モデルの画像にSynthIDでマークを付け、Nano Banana Proなどの新しいモデルにはC2PAコンテンツ認証情報も追加しています。具体的なファイルで中身を確認してください。' },
      { q: 'すべての生成ツールがC2PAを追加しますか？', a: 'いいえ。大手のクラウドサービスでは増えていますが、多くのツール、特にローカルツールはテキストのメタデータしか書き込まないか、何も書き込みません。' },
      { q: '洗えば不可視の透かしも消えますか？', a: '消えません。SynthIDのような透かしはピクセルの中にあり、洗う処理はピクセルを一切変更しません。' },
      { q: '同じツールで作った2枚の画像の中身が違うのはなぜ？', a: '書き出し形式、アプリのバージョン、ダウンロード元、その後の編集によって、項目が追加されたり削除されたりするためです。' },
    ],
  },

  'synthid-invisible-ai-watermarks': {
    metaTitle: 'SynthIDと不可視のAI透かしをわかりやすく解説',
    related: ['chatgpt-gemini-image-metadata', 'how-to-check-if-image-is-ai-generated', 'what-is-c2pa-content-credentials'],
    title: 'SynthIDと不可視の透かし：メタデータを洗える範囲の限界',
    summary: [
      '一部のAI画像には2種類のマーカーがあります。画像とは別に保存されたメタデータと、ピクセルに織り込まれた透かしです。後者の代表例がGoogleのSynthIDです。',
      'この記事では、ピクセルの透かしがC2PAやEXIFとどう違うのか、どう検出されるのか、そして誠実なメタデータツールがそれを消せない理由を説明します。',
    ],
    description:
      'SynthIDなど不可視のAI透かしとは何か、C2PAメタデータとの違い、検出方法、そしてメタデータを洗っても透かしが残る理由を解説します。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '別々の2つの層',
        paragraphs: [
          'EXIF、XMP、IPTC、[C2PA](what-is-c2pa-content-credentials)といったメタデータは、ファイル内の独立したブロックにあり、画像に触れずに簡単に読んだり削除したりできます。ピクセルの透かしはまったく別物で、ピクセル値全体にかすかなパターンとして散らばっており、目には見えなくても検出器には見えます。',
        ],
      },
      {
        heading: 'SynthIDについて',
        paragraphs: [
          'SynthIDは、Googleのモデルが生成したコンテンツのためにGoogle DeepMindが開発した透かし技術です。生成時に知覚できない信号を埋め込み、トリミング、リサイズ、圧縮、色調整といった一般的な変更の後も検出できるよう設計されています。関連技術は画像、音声、動画、テキストにも対応しています。',
        ],
      },
      {
        heading: 'ピクセルの透かしを検出する',
        paragraphs: [
          '汎用のビューアでは透かしは読めず、提供元の検出器が必要です。Googleは製品内での確認を含め、[コンテンツにSynthIDが含まれるか確認する方法](chatgpt-gemini-image-metadata)を導入しています。ほかの提供元にも独自の方法があります。',
        ],
      },
      {
        heading: '洗っても透かしに触れない理由',
        paragraphs: [
          'AI Label Removerを含むロスレスなメタデータツールは、[画像データをバイト単位でそのままコピー](remove-metadata-without-losing-quality)します。それこそが画質を一切落とさないことを保証するしくみです。そのバイトの中にある透かしはそのまま残ります。「AIの透かしを消せる」とうたうツールは、実際には消せないか、画像を大きく変えてしまいます。また、提供元の透かしを回避しようとすると利用規約に違反するおそれがあります。',
        ],
      },
      {
        heading: '実際のところ',
        paragraphs: [
          '[AIメタデータを削除](ai-tag-cleaner)するのは、プライバシーを守り、共有したくないプロンプト、位置情報、来歴情報を消すための正しい方法です。しかし、AI画像を検出不能にするものではありません。リアルなAIコンテンツを投稿するときは、プラットフォームの開示ルールに従ってください。',
        ],
      },
      {
        heading: 'メタデータ、透かし、フィンガープリントの違い',
        paragraphs: ['「AI ラベル」と呼ばれる技術には 3 種類あり、それぞれ働き方がまったく違います。'],
        bullets: [
          'メタデータ：EXIF、XMP、IPTC、C2PA のブロック。誰でも読めて、簡単に削除でき、保存し直すと失われることもあります。',
          'ピクセルの透かし：SynthID のように画像そのものに隠されたパターン。提供元の検出ツールでしか読めず、編集に耐えるよう設計されています。',
          'フィンガープリント：サーバーに保存された画像の簡潔な特徴データ。メタデータがまったくなくても、似た画像を後から照合できます。',
        ],
      },
      {
        heading: '不可視の透かしを使っているのは誰か',
        paragraphs: [
          'Google は自社の AI モデルが生成した画像に SynthID を付けています。Meta は、自社の AI 機能で作られた画像にメタデータに加えて不可視の透かしを入れていると説明しています。Adobe などは「永続的な」コンテンツ認証情報を推進しており、C2PA マニフェストを透かしやフィンガープリントと組み合わせて、記録を再び参照できるようにしています。メタデータだけに頼る生成ツールもあり、ローカルのツールは通常何も付けません。各社の対応は頻繁に変わるので、どんな一覧もその時点のものと考えてください。',
        ],
      },
      {
        heading: '検出はどこまで信頼できるか',
        paragraphs: [
          '透かしの検出は統計的なものです。検出ツールが示すのは透かしがある可能性の高さであり、「ある・ない」の断定ではありません。大きな編集で透かしが弱まることもあり、各検出ツールが認識できるのは自社の透かしだけです。何より、透かしが見つからなくても何の証明にもなりません。透かしをまったく付けない生成ツールも多いからです。そのため [AI 生成画像かどうかの確認](how-to-check-if-image-is-ai-generated)には、複数の手がかりを合わせて判断する必要があります。',
        ],
      },
      {
        heading: 'プライバシーにとっての意味',
        paragraphs: [
          '公開されている説明によれば、ピクセルの透かしはコンテンツが提供元のモデルで生成されたことを示すもので、プロンプトを読める文字として保存するものではありません。あなたの情報をもっとも漏らしやすいプロンプト、アカウント ID、位置、端末情報はメタデータにあり、それこそが洗うツールで消せる層です。つまり、洗うことで個人情報は守られ、透かしは引き続き画像の出どころを示し続けます。',
        ],
      },
    ],
    faqHeading: 'SynthIDと透かしについて',
    faq: [
      { q: '透かしのない画像は本物の写真ですか？', a: 'そうとは限りません。透かしを付けない生成ツールは多く、透かしがないことだけでは何もわかりません。' },
      { q: '透かしからプロンプトが漏れることはありますか？', a: '公開されている説明ではありません。プロンプトやアカウント情報は通常メタデータにあり、洗うと削除されます。' },
      { q: 'トリミングやスクリーンショットでSynthIDは消えますか？', a: '通常は消えません。SynthIDは、トリミング、リサイズ、スクリーンショット、圧縮などの一般的な編集に耐えるよう設計されています。' },
      { q: 'AI Label RemoverはSynthIDを消しますか？', a: 'いいえ。削除するのはメタデータだけで、ピクセルは一切編集しないため、不可視の透かしは残ります。' },
      { q: '画像にSynthIDが入っているかはどうやってわかりますか？', a: 'わかるのはGoogleの検証ツールだけです。メタデータリーダーにはピクセルの中身は見えません。' },
      { q: 'AI画像にはすべて透かしが入っていますか？', a: 'いいえ。出力に透かしを入れる提供元もあれば入れないところも多く、ローカルツールは通常何も追加しません。' },
    ],
  },

  'turn-off-content-credentials-photoshop-lightroom': {
    metaTitle: 'PhotoshopとLightroomのコンテンツ認証情報',
    related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'iptc-digitalsourcetype-ai'],
    title: 'PhotoshopとLightroomのコンテンツ認証情報：設定の管理と書き出しファイルの洗浄',
    summary: [
      'Adobeのアプリは、書き出しファイルにコンテンツ認証情報を添付できます。使用した生成AI機能を含む、署名付きの編集記録です。作品を証明するには便利ですが、補正した写真にAIラベルが付くよくある原因でもあります。',
      'ここでは、認証情報がどこから来るのか、書き出しファイルの確認方法、きれいなファイルが必要なときにコピーから洗い流す方法を紹介します。',
    ],
    description:
      'PhotoshopとLightroomのコンテンツ認証情報の出どころ、書き出しファイルのC2PAデータの確認方法、画質を落とさずコピーから洗い流す方法を解説します。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '認証情報が付く2つの経路',
        paragraphs: ['書き出しファイルにコンテンツ認証情報が付くのは、次の2つのどちらかが理由です。'],
        bullets: [
          'コンテンツ認証情報をオンにしたため、アプリがあなたの身元と編集履歴を書き出しファイルに署名している。',
          '[生成塗りつぶし](made-with-ai-label)などの生成機能を使ったため、Adobeがコンテンツを「AIで編集」と記述する認証情報を付けた。',
        ],
      },
      {
        heading: '公開前に確認する',
        paragraphs: [
          '書き出したJPEGやPNGをページ上部のテーブルに置いてください。レポートにC2PAブロック、Adobe Photoshopなどのクレームジェネレーター、c2paアクション、[AIを含む合成のソースタイプ](iptc-digitalsourcetype-ai)が表示されたら、[認証情報を読むプラットフォームではラベルが付く可能性があります](which-platforms-label-ai-images)。',
        ],
      },
      {
        heading: 'Adobeアプリの設定',
        paragraphs: [
          'Adobeはコンテンツ認証情報の対応を広げ続けており、設定の場所はバージョンによって変わります。最近のバージョンでは、Photoshopのコンテンツ認証情報パネルと、Lightroomの書き出しダイアログにあるコンテンツ認証情報のセクションを探してください。お使いのバージョンの詳細はAdobeのヘルプページにあります。オプションをオフにしても、生成編集に認証情報が付くのを止められない場合があります。',
        ],
      },
      {
        heading: 'コピーを洗う',
        paragraphs: [
          'クライアント向けポータル、マーケットプレイス、SNS用にきれいなファイルが必要なら、コピーから[C2PAブロックを洗い流しましょう](remove-c2pa-content-credentials)。AI Label Removerはマニフェストをバイト列から切り取り、ピクセル、サイズ、回転、カラープロファイルは保持したうえで、結果を読み直して何も残っていないことを確認できるようにします。',
        ],
      },
      {
        heading: '署名付きの元ファイルは保管する',
        paragraphs: [
          '認証情報は、作者であることや画像の編集経緯を示す貴重な証拠になります。認証情報付きの元の書き出しファイルは保管し、メタデータが誤解を招いたり、意図以上の情報を明かしたりする場面でだけ、洗ったコピーを共有しましょう。',
        ],
      },
    ],
    faqHeading: 'Adobeのコンテンツ認証情報について',
    faq: [
      { q: 'Photoshopで編集した写真にInstagramがAIラベルを付けるのはなぜ？', a: '生成塗りつぶし、生成拡張などの機能は、コンテンツ認証情報やIPTCの項目にAI編集を記録し、Metaはアップロード時にそのシグナルを読み取るためです。' },
      { q: '認証情報をオフにしても生成編集は記録されますか？', a: '記録されることがあります。Adobeは生成コンテンツに認証情報を付けるので、設定だけを信じずに書き出したファイルを確認してください。' },
      { q: '洗うと編集が元に戻りますか？', a: 'いいえ。削除されるのはメタデータのブロックだけで、編集済みのピクセルは変更されずにコピーされます。' },
      { q: '後から認証情報を付け直せますか？', a: '洗ったコピーには付けられませんが、元のファイルから認証情報を有効にして書き出し直すことはできます。' },
    ],
  },

  'which-platforms-strip-photo-metadata': {
    metaTitle: '写真のメタデータを消すアプリは？WhatsApp・Instagram・X',
    related: ['remove-gps-location-from-photos', 'view-remove-metadata-iphone-android', 'image-metadata-viewer-online'],
    title: '写真のメタデータを消すアプリ、黙ってGPSを渡してしまうアプリ',
    summary: [
      'SNSは写真の位置情報を消してくれる、と広く思われています。公開されるコピーについては、たしかにそうであることが多いです。しかし元のファイルは、チャットアプリ、メール、クラウドのリンク、ファイル共有サイトを通じて、EXIFを丸ごと抱えたまま届くことがあります。',
      'このガイドでは、よくある共有方法を「たいてい削除される」と「たいてい残る」に分け、最後に必ず効く習慣を紹介します。ファイルが端末を離れる前に洗うことです。',
    ],
    description:
      '写真のメタデータを削除するSNSやチャットアプリ、GPSやEXIFが残る共有方法、送信前に写真がきれいか確かめる方法を解説します。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '公開コピーと元のファイル',
        paragraphs: [
          'フィードに写真を投稿すると、大手プラットフォームの多くは画像を再エンコードし、公開版からEXIFを削除します。見る人にはGPS位置がわかりませんが、プラットフォーム自身はアップロード時に元のファイルを受け取っています。より大きなリスクは、元のファイルを手つかずのまま渡してしまうあらゆる経路です。',
        ],
      },
      {
        heading: 'たいてい削除される',
        paragraphs: [],
        bullets: [
          'Facebook、Instagram、Xなど大手SNSのフィードに投稿した写真。',
          '多くのチャットアプリで、通常の圧縮画像として送った写真。',
          'プラットフォームが表示前にリサイズや変換をするほとんどの画像。',
        ],
      },
      {
        heading: 'たいてい残る',
        paragraphs: [],
        bullets: [
          'WhatsAppやTelegramなどで「ファイルとして」「ドキュメントとして」送った写真。',
          'メールの添付ファイルや、Drive、Dropbox、iCloudなどクラウドのリンク共有。',
          'アップロードしたファイルをそのまま配布する掲示板、売買サイト、ポートフォリオサイト。',
          'カメラ設定の表示パネルなど、意図的にEXIFを見せる写真コミュニティ。',
        ],
      },
      {
        heading: '自分の経路を試す',
        paragraphs: [
          'アプリのメディアの扱いは頻繁に変わります。確実に知るには、いつもの方法で自分宛てに写真を送り、届いたものをダウンロードしてAI Label Removerのテーブルに置いてください。[「わかってしまうこと」タブ](image-metadata-viewer-online)で、場所、人物、日時のデータが残っているかがすぐにわかります。',
        ],
      },
      {
        heading: '送る前に洗う',
        paragraphs: [
          '確実な習慣は、写真が端末を離れる前にメタデータを洗うことです。AI Label Removerは[GPS、日時、端末や作者の項目](remove-gps-location-from-photos)と隠れたプレビューを削除し、回転と色は保ち、すべてをローカルで処理します。知らない人、買い手、クライアントに送る写真に最適です。削除される項目は[写真のEXIF削除](remove-exif-data)ページで確認できます。',
        ],
      },
    ],
    faqHeading: 'アプリと写真のメタデータについて',
    faq: [
      { q: 'メールで送ると写真のメタデータは消えますか？', a: '通常は消えません。添付ファイルは元のファイルのまま送られるので、メールアプリが事前に画像をリサイズしない限り、EXIFとGPSも一緒に届きます。' },
      { q: 'WhatsAppはGPSを削除しますか？', a: '通常の画像として送った写真は圧縮され、メタデータのほとんどが失われます。ドキュメントとして送った写真は、GPSを含む元のファイルのまま届きます。' },
      { q: 'Instagramは写真の撮影場所を表示しますか？', a: '公開された画像からはEXIFが削除されています。投稿に追加した位置情報タグはそれとは別で、誰にでも見えます。' },
      { q: 'スクリーンショットで十分では？', a: 'EXIFは消えますが、画質が落ち、サイズが変わり、画面上の別のものが写り込むこともあります。ロスレスに洗えば元の画像はそのままです。' },
    ],
  },

  'view-remove-metadata-iphone-android': {
    metaTitle: 'iPhoneとAndroidで写真のメタデータを削除する',
    related: ['remove-gps-location-from-photos', 'remove-metadata-windows-mac', 'which-platforms-strip-photo-metadata'],
    title: 'iPhoneとAndroidで写真のメタデータを確認・削除する方法',
    summary: [
      'スマホは写真ごとに撮影場所と日時、そして機種を記録しています。iOSでもAndroidでも、それを確認し、共有前に位置情報を外すことができます。',
      '以下では、標準の方法とその限界、そしてアプリをインストールせずにブラウザで識別情報をすべて洗い流す方法を紹介します。',
    ],
    description:
      'iPhoneとAndroidで写真のメタデータを確認し、共有前に位置情報を削除。HEICを含むEXIFをすべて、アプリ不要でブラウザから洗い流せます。',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'iPhoneで確認する',
        paragraphs: [
          '写真アプリで写真を開いて上にスワイプするか、情報ボタンをタップします。日付と時刻、カメラとレンズ、露出の詳細、位置情報がオンだった場合は地図が表示されます。日付の横にある「調整」から、その写真の日付、時刻、位置情報を編集できます。',
        ],
      },
      {
        heading: 'iPhoneで位置情報なしで共有する',
        paragraphs: ['標準の設定が2つ役立ちます。'],
        bullets: [
          '共有シートの上部にある「オプション」をタップし、送信前に「位置情報」をオフにします。',
          '新しく撮る写真に位置情報を付けないようにするには、「設定」›「プライバシーとセキュリティ」›「位置情報サービス」›「カメラ」で「なし」を選びます。',
        ],
      },
      {
        heading: 'Androidの場合',
        paragraphs: [
          'Googleフォトで写真を開いて上にスワイプすると、日付、端末、位置情報などの詳細が表示されます。バージョンによっては、そこで位置情報を編集・削除できます。新しく撮る写真に位置情報を付けないようにするには、カメラアプリの設定で位置情報をオフにしてください。項目の名前や場所はメーカーによって異なります。',
        ],
      },
      {
        heading: '標準機能の限界',
        paragraphs: [
          'スマホの設定は位置情報が中心です。機種、撮影時刻、レンズの情報、編集ソフト、埋め込みプレビューはたいてい残り、設定が効くのはこれから撮る写真か1回の共有だけです。[パソコンにコピーしたファイル](remove-metadata-windows-mac)や他のアプリで送ったファイルには、すべてが残ります。',
        ],
      },
      {
        heading: 'ブラウザですべて洗い流す',
        paragraphs: [
          'スマホでAI Label Removerを開き、「ファイルを選ぶ」をタップしてレポートを読み、「すべての画像を洗う」をタップします。iPhoneのHEICも含め、[GPS、日時、端末、作者のデータが削除され](remove-gps-location-from-photos)、回転と色は保たれます。アップロードもアプリも不要です。iPhone写真に記録される内容は[HEICメタデータ削除](heic-metadata-remover)ページで紹介しています。',
        ],
      },
      {
        heading: 'iPhone：HEIC、JPEG、Live Photos',
        paragraphs: [
          'iPhone は初期設定で写真を HEIC で保存します（設定 › カメラ › フォーマット › 高効率）。「互換性優先」を選ぶと JPEG で保存されます。どちらの形式にも、位置、日時、端末、レンズといった同じ EXIF が入ります。Apple 以外の端末に送るとき、iOS が途中で JPEG に変換することがありますが、メタデータは通常そのまま付いていきます。Live Photos には独自のメタデータを持つ短い動画も含まれます。AI Label Remover が洗うのは静止画なので、プライバシーが気になるときは Live Photos を静止画として共有してください。',
        ],
      },
      {
        heading: 'Android：メーカーごとに少しずつ違う',
        paragraphs: [
          'Android のスマホは同じ EXIF の項目を使いますが、メニューは同じではありません。共有画面で位置情報を削除するスイッチがあるギャラリーアプリもあれば、写真ごとに詳細を編集することしかできないものもあります。Google フォトには、共有したリンクやアルバムを見る人に位置情報を表示しない設定がありますが、ほかの方法で送ったファイルには影響しません。メニュー名はバージョンによって変わるので、項目が見つからなければファイルを洗うのが確実な方法です。',
        ],
      },
      {
        heading: '「ファイルとして送信」の落とし穴',
        paragraphs: [
          'メッセージアプリで普通に写真を送ると、たいてい圧縮され、メタデータの大半が消えます。ところが、画質を保つために同じ写真をファイルやドキュメントとして送ると、元ファイルが位置情報も含めてそのまま届きます。AirDrop、Quick Share、メール、クラウドのリンクも同じです。まさにこういうときこそ、[ファイルが何を明かすか確認](remove-gps-location-from-photos)し、先に洗っておきましょう。',
        ],
      },
      {
        heading: 'スマホでできる 2 分の習慣',
        paragraphs: [],
        bullets: [
          'スマホのブラウザで AI Label Remover を開き、次回のためにホーム画面に追加します。',
          '「ファイルを選ぶ」をタップし、共有する写真を選びます。',
          'レポートを読み、「すべての画像を洗う」をタップして緑のパネルを確認します。',
          '洗ったコピーを保存し、元ファイルではなくそちらを共有します。',
        ],
      },
    ],
    faqHeading: 'スマホ写真のメタデータについて',
    faq: [
      { q: 'AirDrop では位置情報が残りますか？', a: '残ることがあります。AirDrop は元ファイルを送ります。共有シート上部の「オプション」で「位置情報」をオフにするか、先にファイルを洗ってください。' },
      { q: '写真のスクリーンショットを撮ればメタデータは消えますか？', a: '元の EXIF は消えますが、画質が落ち、スクリーンショット自体に新しいメタデータが付きます。元ファイルを洗うほうが劣化がなく、確実です。' },
      { q: 'スマホでEXIFを消すのにアプリは必要ですか？', a: '不要です。標準機能で1回の共有の位置情報を外せますし、AI Label Removerはスマホのブラウザで動くので、何もインストールせずにそれ以外もすべて削除できます。' },
      { q: '位置情報をオフにすれば過去の写真もきれいになりますか？', a: 'なりません。影響するのは新しく撮る写真だけです。既存の写真の位置情報は、削除するまで残ります。' },
      { q: 'iPhoneのHEICファイルに対応していますか？', a: 'はい。HEICファイルはJPEGに変換したり再エンコードしたりせず、そのまま洗えます。' },
      { q: 'iPhoneの共有オプションですべて消えますか？', a: '消えるのは主に位置情報だけです。機種や撮影時刻は共有したファイルに残ることがあります。' },
    ],
  },

  'what-is-exif-data': {
    metaTitle: 'EXIFデータとは？項目・プライバシー・削除方法',
    related: ['image-metadata-viewer-online', 'remove-gps-location-from-photos', 'remove-metadata-without-losing-quality'],
    title: 'EXIFデータを専門用語なしで解説',
    summary: [
      'EXIF（Exchangeable Image File Format）は、カメラやスマホが写真1枚ごとに書き込む隠れた情報です。撮影設定、日時、機種、そして多くの場合GPS位置が含まれます。',
      'この記事では、EXIFに何が含まれるか、XMP・IPTC・C2PAとの違い、プライバシー上重要な理由、安全に確認・削除する方法を説明します。',
    ],
    description:
      'EXIFデータとは何か、含まれる項目（カメラ、日時、GPS）、XMP・IPTC・C2PAとの違い、画質を落とさずに確認・洗浄する方法を解説します。',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'EXIFに含まれるもの',
        paragraphs: ['一般的な写真には次の情報が含まれていることがあります。'],
        bullets: [
          '端末：カメラやスマホのメーカーと機種、レンズ、場合によってはシリアル番号。',
          '露出：ISO感度、絞り、シャッタースピード、焦点距離、フラッシュ。',
          '日時：撮影日時と最終更新日時。タイムゾーン付きのことも多い。',
          '位置：緯度、経度、高度、場合によっては方角。',
          'その他：回転情報、小さな埋め込みサムネイル、編集ソフトの名前。',
        ],
      },
      {
        heading: 'EXIFの保存方法',
        paragraphs: [
          'JPEGでは、EXIFはファイル先頭近くのAPP1セグメントにあり、いくつかのディレクトリ（IFD）に分かれています。基本的な画像と端末の情報はIFD0に、撮影設定はExifディレクトリに、[位置情報はGPSディレクトリ](remove-gps-location-from-photos)にあります。HEIC、WebP、PNGもそれぞれのコンテナにEXIFを持てます。',
        ],
      },
      {
        heading: 'XMP・IPTC・C2PAとの違い',
        paragraphs: [],
        bullets: [
          'EXIF：カメラやスマホが記録する撮影時の技術データ。',
          'XMP：編集ソフトが説明、キーワード、編集履歴、AI関連の項目に使う柔軟なXML形式。',
          'IPTC：報道機関やストックフォトが使う説明・権利情報。AIコンテンツ向けの[DigitalSourceType](iptc-digitalsourcetype-ai)も含みます。',
          'C2PA：来歴と編集を記録する[署名付きのコンテンツ認証情報](what-is-c2pa-content-credentials)。',
        ],
      },
      {
        heading: 'なぜ重要なのか',
        paragraphs: [
          '写真家はEXIFを学習や作品の記録に活用します。しかし多くの人にとっては、主にプライバシーのリスクです。たった1枚の写真から、自宅の住所、使っている端末、ある時刻にどこにいたかがわかってしまいます。EXIFはとても簡単に編集できるので、それ単体で証拠として扱うべきではありません。',
        ],
      },
      {
        heading: '正しく確認・削除する',
        paragraphs: [
          'OSの情報パネルに表示されるのは一部の項目だけです。[AI Label RemoverはEXIF、XMP、IPTCのすべての項目をデコード](image-metadata-viewer-online)し、出どころ別にまとめて表示します。EXIFを削除するときは、写真が回転しないよう回転情報のタグを残し、色が正確なままになるようカラープロファイルを残し、[画像を再圧縮する方法](remove-metadata-without-losing-quality)は避けましょう。[写真のEXIF削除](remove-exif-data)ツールはこの3つをすべて自動で行います。',
        ],
      },
      {
        heading: 'EXIF の成り立ち',
        paragraphs: [
          'EXIF は 1990 年代半ば、デジタルカメラが共通の方法で設定を記録できるよう、日本の電機メーカーによって作られました。現在は CIPA と JEITA が共同で管理しています。基本的な考え方はほとんど変わっておらず、番号付きのタグが並び、それぞれに 1 つの値が入ります。新しい版ではタイムゾーンのオフセットやレンズのシリアル番号などが追加され、Exif 3.0 では UTF-8 の文字列にも正式に対応しました。スマホもこの規格をそのまま採用しているため、スマホの写真は 2005 年のコンパクトカメラと同じ構造を持っています。違うのは、GPS がはるかに正確なことです。',
        ],
      },
      {
        heading: '意外と知られていない項目',
        paragraphs: ['日時や場所のほかにも、多くの人が思う以上の情報を明かすタグがあります。'],
        bullets: [
          'OffsetTime：タイムゾーンの差。GPS がなくても地域を絞り込めます。',
          'BodySerialNumber、LensSerialNumber、CameraOwnerName：多くの写真を同じカメラ、同じ人物に結びつけられる値です。',
          'GPSImgDirection：カメラが向いていた方角。窓やベランダを特定できることもあります。',
          'Software：編集アプリとそのバージョン。画像に何が施されたかの手がかりになります。',
          'MakerNote：メーカー独自のブロック。シャッター回数、内部のシリアル番号、ピントや顔検出のデータが入っていることがあります。',
        ],
      },
      {
        heading: '編集しても残るサムネイル',
        paragraphs: [
          '多くのファイルは、2 つ目のディレクトリ（IFD1）に小さなプレビュー画像を持っています。メイン画像は更新してもこのプレビューはそのままにする編集ソフトもあり、その場合はサムネイルを読むだけで、トリミングやぼかしの前の状態がわかってしまいます。スマホは、独自の EXIF を持つより大きなプレビューや補助画像（MPF）も保存しています。きちんと洗うにはこうした隠れたコピーも消す必要があります。AI Label Remover が GPS タグを空にするだけでなく、埋め込みサムネイルと MPF 画像を削除するのはそのためです。',
        ],
      },
      {
        heading: '残すもの、消すもの',
        paragraphs: [
          'SNS の投稿、出品、チャットの添付、掲示板など、公開で共有するものは、識別につながる EXIF をすべて消すのが安全な既定値です。ただし、身元ではなく表示に関わる 2 つは残す価値があります。回転情報とカラープロファイルです。作者として名前を示したいなら、ほとんどのプラットフォームで捨てられてしまう EXIF の著作権欄より、目に見えるキャプションや署名のほうがずっと確実です。元ファイルは自分の保管場所に残し、共有するのは洗ったコピーにしましょう。',
        ],
      },
    ],
    faqHeading: 'EXIFについて',
    faq: [
      { q: 'EXIF とメタデータは同じものですか？', a: 'EXIF はメタデータの一種です。ファイルには XMP、IPTC、C2PA、形式固有のテキストも入りうるため、徹底した削除には EXIF 以外も確認する必要があります。' },
      { q: 'スクリーンショットにも EXIF はありますか？', a: '通常はずっと少なく、カメラ設定や GPS はありません。ただし、端末、ソフト、撮影日時が記録されることはあります。' },
      { q: 'EXIFデータはどうやって見ますか？', a: 'Windowsでは「プロパティ」›「詳細」、Macではプレビューのインスペクタ、スマホでは写真の情報を開きます。XMPやIPTCを含むすべての項目を見るには、AI Label Removerのような完全なビューアを使ってください。' },
      { q: 'EXIFは画像の見た目に影響しますか？', a: 'しません。EXIFは画像データとは別に保存されているので、削除しても見た目は変わりません。' },
      { q: 'EXIFは偽造できますか？', a: '簡単にできます。一般的なツールでEXIFの項目を書き換えられるので、手がかりとして扱い、決して証拠とはみなさないでください。' },
      { q: '回転情報もEXIFですが、AI Label Removerは残しますか？', a: 'はい。最小限のEXIFブロックに書き戻すので、写真は引き続き正しい向きで表示されます。' },
    ],
  },
};

export default ja;
