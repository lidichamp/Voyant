Voyant.util.Localization.LANGUAGE='ja'
Ext.apply(Voyant.panel.VoyantHeader.i18n, {
"homeConfirm":"（現在のコーパスを離れて）本当にやり直しますか？",
"title":"Voyantツール",
"helpTip":"Voyantツールは、ウェブ上でデジタルテキストを読解・分析するための環境です。",
"homeTip":"クリックしてコーパス作成画面に戻る。",
"home":"やり直す"});
Ext.apply(Voyant.panel.Cirrus.i18n, {
"maxTerms":"最も頻度の高い語",
"visible":"表示する",
"options":"オプション",
"scale":"スケール",
"title":"シーラス",
"helpTip":"</p><p>シーラスはコーパスまたはドキュメントに高頻度で出現する語によるワードクラウドを提供します。–&nbsp;コンテンツの概要を確認するのに便利です 。含まれる機能:</p> <ul><li>単語にカーソルを合わせると頻度を表示</li><li>単語をクリックすると、表示されている他のツールに反映</li></ul>",
"visibleTerms":"表示単語数"});
Ext.apply(Voyant.panel.DocumentsFinder.i18n, {
"emptyQuery":"検索語を入力",
"queryMatches":"{0}の一致するドキュメント({1}の中から)",
"titleField":"タイトル",
"emptyText":"一致する情報が見つかりませんでした。",
"query":"検索",
"count":"頻度",
"exportNewCorpus":"新しいコーパス",
"title":"ドキュメントファインダー",
"loading":"コーパスを読み込んでいます…",
"addRow":"列の追加",
"operator":"オペレータ",
"textField":"テクスト（デフォルト）",
"unsuccessfulQuery":"検索を完了できませんでした。",
"pubPlaceField":"出版地",
"advancedField":"<i>詳細検索</i>",
"authorField":"著者",
"noMatches":"一致するものがありません({0}のドキュメントの中で)",
"field":"フィールド",
"deleteRowTip":"この列を削除する",
"publisherField":"出版社",
"pubDateField":"発行日",
"exportNewCorpusTip":"一致するドキュメントから新しいコーパスを作成する(一致するものがないときはボタンは見えなくなります)"});
Ext.apply(Voyant.panel.TermsRadio.i18n, {
"displayPanelTip":"ワードディスプレイの設定を行うパネル",
"linear":"線形",
"log":"対数",
"displayPanel":"ディスプレイパネル",
"completingTransition":"移動中",
"removeTerm":"<b>{0}</b>を消去",
"yScale":"Y軸スケール",
"title":"タームラジオ",
"type":"視覚化",
"speed":"速度",
"segments":"セグメント",
"fraction":"ワードディスプレイ",
"duration":"速度",
"help":"このツールは、一定期間内の一つのコーパスを通じた単語登場頻度を調べるのに用いることができます。",
"resetTip":"図を初期状態にリセットする。",
"terms":"ターム",
"visibleSegments":"表示",
"visibleSegmentsTip":"このオプションはいくつのドキュメント/セグメントを同時に表示するかを決定します",
"reset":"リセットする",
"segmentsTip":"このオプションによっていくつのセグメントにドキュメントを分割するかを決定できます（このオプションはドキュメントの中の分布にのみ適用され、コーパスを横断する分布には適用されないことに注意して下さい）",
"termNotFound":"語が見つかりませんでした",
"fractionTip":"このオプションで表示される単語数を設定できます。例：20に設定＝少なくとも20%の頻度で出現する単語のみが表示される"});
Ext.apply(Voyant.util.Downloadable.i18n, {
"exportTitle":"エクスポート",
"downloadButton":"ダウンロード",
"cancelButton":"キャンセル"});
Ext.apply(Voyant.panel.CorpusCollocates.i18n, {
"contextTermRawFreq":"（前後の単語おける）共起の回数",
"matchingTerms":"{count}",
"contextTerm":"共起",
"emptyText":"一致する情報が見つかりませんでした。",
"termTip":"共起数がカウントされるキーワード",
"termRawFreqTip":"コーパスの中にキーワードが現れた回数",
"title":"共起",
"termRawFreq":"カウント（キーワード）",
"context":"前後の語数",
"term":"単語",
"helpTip":"コーパス共起では、コーパス全体を通して互いに近接して出現しやすい単語をテーブル形式で表示します。含まれる機能</p><ul><li>キーワード、共起語、共起回数による並び替え</li><li>検索ボックス（？アイコンにカーソルを合わせると記法ヘルプが表示されます）</li></ul></li></ul>",
"contextTermRawFreqTip":"コーパス内において、キーワードの近くでこの共起が起こった回数",
"contextTermTip":"キーワードの近くで共起する（前後の）単語"});
Ext.apply(Voyant.panel.Documents.i18n, {
"keepTip":"選択または絞り込みされたドキュメントに基づく新しいコーパスを作る",
"reorderFilteredError":"絞り込みされたコーパスは並び替えができません。先に新しいコーパスを作成(<i>消去する</i> or <i>残す</i> をクリック) してください。",
"typesCountLexical":"異なり語数",
"emptyText":"一致する情報が見つかりませんでした。",
"removeFilteredDocuments":"{0:plural('selected document')}を取り除いた（含まない） <i>新しい</i> コーパスを作りますか？",
"language":"言語",
"reorder":"並べ替える",
"removeSelectedDocuments":"{0:plural('selected document')}を取り除いた（含まない） <i>新しい</i> コーパスを作りますか？",
"title":"ドキュメント",
"error":"エラー",
"addTip":"コーパスに新しいドキュメントを追加",
"keepFilteredDocuments":"{0:plural('selected document')}のみを含む <i>新しい</i> コーパスを作りますか？",
"remove":"消去する",
"documentAuthor":"著者",
"selectOrFilterError":"行を選択するか検索ボックスに入力して、ひとつ以上のドキュメントを選択してください。",
"keepSelectedDocuments":"{0:plural('selected document')}のみを含む <i>新しい</i> コーパスを作りますか？",
"tokensCountLexical":"単語数",
"removeTip":"選択または絞り込みされたドキュメントを除いて新しいコーパスを作る",
"matchingDocuments":"一致したドキュメント： {count}",
"id":"ID",
"documentTitle":"タイトル",
"helpTip":"ドキュメントリストではコーパス内のドキュメントをテーブル形式で表示します。含まれる機能:</p><ul><li>ヘッダーをクリックすることでタイトル、単語数（トークン数）、異なり語数、比率による並び替え。</li><li>検索ボックス（デフォルトではフルテキスト、タイトル、著者フィールドが対象、？アイコンにカーソルを合わせると記法ヘルプが表示されます）</li></ul>",
"add":"追加する",
"downloadButton":"ダウンロード",
"newCorpus":"新しいコーパス",
"allSelectedError":"すべてのドキュメントを選択してしまっています。取り除くか保存するドキュメントのサブセットを選択してください。",
"reorderTip":"並べ替えられた順序に基づく新しいコーパスを作る（行をドラッグアンドドロップして並べ替えてください）",
"onlyOneError":"コーパスには一つのドキュメントしか含まれていません。ドキュメントを削除すると新しいコーパスを作成できません。",
"modify":"修正する",
"typeTokenRatioLexical":"比率",
"modifyTip":"このボタンをクリックすると、新しいドキュメントを加えたり、ドキュメントのサブセットを選択したり、ドキュメントを並べ直したりすることで、新しいコーパスを作ります。",
"reorderDocuments":"表示された設定に基づいて<i>新しい</i>コーパスを作成しますか？",
"keep":"残す",
"reorderOriginalError":"最初にコーパスを再設定してください（表の中で行をドラッグアンドドロップしてください）。"});
Ext.apply(Voyant.panel.Panel.i18n, {
"trend":"トレンド",
"relativeFreq":"相対（頻度）",
"colon":":",
"term":"単語",
"rawFreq":"カウント",
"loading":"読み込んでいます…",
"error":"エラー",
"info":"情報"});
Ext.apply(Voyant.panel.Bubbles.i18n, {
"soundTip":"サウンドを切り替える",
"sound":"サウンド",
"adaptation":" <a href=\"https://www.m-i-b.com.ar/letters/en/\" target=\"_blank\">Martin Ignacio Bereciartuaの<i>レター・ペア</i></a>を適用する。",
"title":"バブルズ",
"speedTip":"視覚化の速度を調整する",
"helpTip":"バブルズはドキュメント中の頻出単語を楽しく視覚化します。",
"speed":"速度"});
Ext.apply(Voyant.widget.CorpusDocumentSelector.i18n, {
"corpus":"コーパス",
"scale":"スケール"});
Ext.apply(Voyant.panel.Reader.i18n, {
"documentFrequency":"ドキュメントの頻度",
"limitedAccess":"これはアクセスが制限されたコーパスで、このツールの機能性は制限されています。",
"title":"本文",
"helpTip":"<p>本文ツールはコーパスの本文ビューを表示します。含まれる機能:</p><ul><li>単語にカーソルを合わせて出現頻度情報を表示</li><li>単語をクリックして下のグラフに分布情報を表示</li><li>下部の棒グラフがコーパス内での各ドキュメントの相対的分量を示す</li><li>検索ボックス（？アイコンにカーソルを合わせると記法ヘルプが表示されます）</li></ul>"});
Ext.apply(Voyant.VoyantCorpusApp.i18n, {
"fetchingCorpus":"コーパスを取得中",
"moreToolsTypeViz":"視覚化ツール",
"noPasswordGiven":"アクセスコードを入力してください。",
"passwordValidationError":"申し訳ありません、あなたのアクセスコードを認証している途中で予期しないエラーが起きました。",
"passwordRequiredMessage":"このコーパスにはアクセスコードが必要です",
"passwordRequiredTitle":"アクセスコードが必要",
"password":"アクセスコード",
"moreToolsScaleDocument":"ドキュメントツール",
"moreToolsTypeGrid":"グリッドツール",
"moreToolsType":"タイプ別",
"moreToolsTypeOther":"その他のツール",
"nonConsumptiveButton":"制限付きアクセス",
"moreToolsScaleCorpus":"コーパスツール",
"nonConsumptiveMessage":"もしくは、<i>制限付きアクセス</i>ボタンをクリックして機能が制限された状態で続行できます（このアクセスは非消費的で、一般的にあなたはコーパス本文を直接読むことはできませんが、コーパスから解析後のデータを得ることができます）。",
"passwordValidateButton":"認証する",
"moreToolsScale":"スケール別",
"badPassword":"申し訳ありません、それは認証されたアクセスコードではないようです。"});
Ext.apply(Voyant.panel.Bubblelines.i18n, {
"findTerm":"単語を探す",
"showTerm":"単語を表示する",
"corpusTooSmall":"このツールで使うにはコーパスが小さすぎます。",
"clearTerms":"クリア",
"removeTerm":"単語を消去する",
"hideTerm":"単語を隠す",
"title":"バブルライン",
"type":"視覚化",
"separateLines":"単語ごとにバブルラインを分割する",
"help":"バブルラインはコーパスの中でのある語の使用頻度と繰り返しを視覚化します。コーパスの中のそれぞれのドキュメントは等しい長さのセグメントに分割されて横軸に表されています。それぞれの語はバブルとして表され、バブルの大きさが、テキストが対応するセグメントに登場する頻度を表します。その語が登場する頻度が高いほどバブルの半径が大きくなります。",
"total":"合計",
"granularity":"粒度",
"options":"オプション"});
Ext.apply(Voyant.panel.CorpusTerms.i18n, {
"corpusComparisonDifference":"頻度比較",
"matchingTerms":"一致した語： {count}",
"corpusComparisonDifferenceTip":"これはこのコーパスと比較対象のコーパス間での、単語の相対頻度を比較したものです（比較対処のコーパスはツールオプションから選択できます）",
"emptyText":"一致する情報が見つかりませんでした。",
"termTip":"コーパスの中の語",
"title":"コーパスターム",
"relativePeakednessTip":"これはコーパスの中の語の相対頻度がどれだけのピーク（他の場所より高い部分）を持つかを表す統計的指標です",
"relativePeakedness":"尖度",
"noCorpusComparison":"比較対象のコーパスが選択されていません（ツールオプションから選択ができます）",
"rawFreqTip":"コーパス全体におけるこの語の総数（粗頻度）",
"relativeSkewness":"スキュー",
"relativeFreqTip":"コーパス全体におけるこの語の相対頻度（100万語あたり）",
"trendTip":"これはコーパスの中のそれぞれのドキュメントの中のそれぞれの語の相対頻度の傾向を表します",
"helpTip":"</p><p>コーパスタームでは、コーパス全体に出現する単語をテーブル形式で表示します。含まれる機能:</p><ul><li>ヘッダーをクリックすることで単語、語数（粗頻度）、相対頻度による並び替え。</li><li>ドキュメント間またはコーパス間で単語頻度の傾向を示すスパークライン</li><li>ヘッダー上にマウスを合わせると表示される矢印をクリックすることで行の追加が可能</li><li><li>検索ボックス（？アイコンにカーソルを合わせると記法ヘルプが表示されます）</li></ul>",
"relativeSkewnessTip":"これはコーパス中の語の相対頻度の対称性を表す統計的指標です"});
Ext.apply(Voyant.panel.NoTool.i18n, {
"notImplemented":"この <i>{0}</i> ツールは以前のヴァージョンの機能で、現在は実装されていません。実験的であったり、使いにくかったり、サポートされなくなった技術（Adobe FlashやJava Appletなど）に依存しているようなツール以外は、最終的に再実装される可能性もあります。 <i>{0}</i> ツールを使いたい場合は、旧バージョンを利用してください",
"badToolSpecified":"<i>{0}</i> ツールが存在しません。Voyant ツールのメインページに戻ります",
"currentButton":"現在のバージョンを使う",
"oldButton":"古いバージョンを使う",
"noToolSpecified":"ツールが指定されていません。Voyant ツールのメインページに戻ります",
"title":"そのようなツールは存在しません",
"error":"エラー"});
Ext.apply(Voyant.panel.CustomSet.i18n, {
"noSuchTool":"指定されたツール ({0}) は存在しません。",
"title":"カスタム・ビュー",
"helpTip":"これはカスタム・ビューです。"});
Ext.apply(Voyant.panel.CollocatesGraph.i18n, {
"cleaning":"クリーニング",
"releaseToRemove":"画面外にドラッグし、そのままリリースすると単語を削除",
"context":"コンテクスト",
"clearTerms":"クリア",
"title":"リンク",
"helpTip":"<p>リンクツールのコロケートグラフは、高頻度で近距離に出現する単語のネットワーク図を表示します。キーワードは青で、また近距離に出現する単語はオレンジで表示されます。含まれる機能</p><ul><li>単語にマウスカーソルを合わせると近距離での出現頻度を表示（全出現頻度ではない）</li><li>単語をダブルクリックするとさらに関連語を表示</li><li>検索ボックス（？アイコンにカーソルを合わせると記法ヘルプが表示されます）</li></ul></li></ul>"});
Ext.apply(Voyant.panel.CorpusCreator.i18n, {
"cancel":"キャンセル",
"accessModeWithoutPassword":"その他のコード",
"xpathGroupBy":"グループ化",
"reveal":"結果を表示する",
"OpenExisting":"既存のコーパスを開く",
"tableNoHeadersRow":"ヘッダー行がありません",
"accessOptionsText":"一つあるいは複数のパスワードを指定することもできます（パスワードごとにコンマで区切ってください）。",
"tableDocumentsRows":"各行のセルから",
"gearTip":"オプション",
"tokenizationWordBoundaries":"単純な語境界",
"numberEmpty":"少なくとも1つの列の数字が現在空白です。",
"tokenization":"トークン化",
"xpathContent":"コンテンツ",
"numbersNeedCommas":"複数の数字を分けるにはコンマを使用してください",
"tableDocumentsTable":"テーブル全体から",
"UploadLocal":"ファイルを選択してアップロードする（複数選択可）",
"helpTip":"このツールは３つのうちどれか１つの方法でコーパスを作成することができます。<ol><li>テキストボックスの中に直接入力するか、テキストをペーストして、<i>「結果を表示する」</i>をクリックする。もしもテキストボックスの各行にURLを入力した場合には、テキストがURLから抽出されるか、そうでなければそのコンテンツが１つのドキュメントとして扱われます。</li><li> <i>「開く」</i> をクリックすると既に存在しているコーパスを開きます。</li><li><i>アップロード</i>をクリックすると、１つかそれ以上のファイルをあなたのコンピュータからアップロードできます（CtrlかShiftキーを使うことで複数ファイルを選択することができます。</li></ol>",
"xmlOptionsText":"以下の対象に対して XPath 式を定義:",
"tableTitle":"タイトル",
"noTextProvided":"テキストがありません",
"tableContent":"コンテンツ",
"xpathDocuments":"ドキュメント",
"tokenizationAuto":"自動（強く推奨）",
"numbersCommasOnly":"コンマ区切り数値のみ",
"tableOptionsText":"ドキュメントをどのように抽出するかを指定してください（現在はMS ExcelのXLS, XLSXのみサポートされています)。より詳しくはコーパス作成と<a href=\"{0}\" target=\"voyantdocs\">表データ</a>についてのマニュアルを参照してください",
"PleaseSelectExisting":"コーパスが選択されていることを確認してください",
"inputFormat":"入力フォーマット",
"tableDocumentsColumns":"すべてのカラムから",
"accessModeWithoutPasswordText":"あなたが<i>アクセスパスワード</i>を指定すれば、パスワードのないユーザーにどのようなアクセスが可能かを指定することもできます。",
"tableContentText":"どのカラム番号がコンテンツを含むか（または、すべてのカラムを使うために空欄を残すか）を指定してください。一番左のカラムはカラム１です。コンマを使ってカラムを区切ったり、＋を用いることでカラムを連結して、複数のドキュメントを決定してください。例えば、”1+2,3”（実際には、引用符で囲む必要はありません）と指定すると、カラム１と２を１つのドキュメントに連結して、２つ目のドキュメントとしてカラム３を使うことになります。",
"numberZero":"0は無効です。最初の列は1です",
"inputFormatAuto":"自動判別（推奨）",
"unknownFiles":"不明な形式（エラーの可能性）",
"fileTypesWarning":"ファイルのタイプについての警告",
"accessModeNone":"なし",
"tokenizationOptions":"トークン化",
"advancedOptionsText":"下記の詳細なオプションに関するさらなる情報は、<a href=\"{0}\" target=\"voyantdocs\">コーパスを作成する</a>マニュアルを参照してください。",
"tableDocuments":"ドキュメント",
"fileTypesMessage":"互換性がないか、問題を起こしかねないような認識されない拡張子を持った１つかそれ以上のファイルがあります。",
"errorNotXmlContinue":"入力されたデータはXML形式ではないようです。操作を続けますか？",
"SelectExisting":"既存のコーパスを選択する",
"tableOptions":"テーブル",
"xmlOptions":"XML形式",
"Upload":"アップロードする",
"title":"テキストを追加する",
"error":"エラー",
"sureContinue":"操作を続けますか？",
"Open":"開く",
"badFiles":"非互換（エラーの可能性大）",
"emptyInput":"一つのURL、もしくは複数のURLを一行ずつ入力するか、あるいはテキスト全文を貼りつけてください",
"ok":"OK",
"accessPassword":"アクセスコード",
"adminPassword":"管理コード",
"accessModeNonConsumptive":"制限付き（非消費的）",
"tableMetadataText":"このオプションは、各行のセルからドキュメントを抽出する時だけ用いてください（このセクションの最初のオプションを見てください）。記法は前述のコンテンツオプションと同じで、コンマを用いてカラムを区切ったり、＋を用いて連結できます。",
"xpathAuthor":"著者",
"xpathTitle":"タイトル",
"pleaseProvideText":"テキストをテキストボックスに入力してください（または開くかアップロードするを選択してください）",
"invalidForm":"不正な値が使用されています。赤色で囲まれているフィールド上にマウスカーソルを移動し確認していください",
"tableAuthor":"著者",
"gearWinTitle":"オプション",
"uploadingCorpus":"コーパスをアップロードしています…",
"accessOptions":"アクセスマネジメント",
"tableNoHeadersRowText":"（ヘッダー行がある場合は）最初の行をスキップするかしないかを決定してください。ヘッダー行がある場合は、ドキュメントがカラム全体から抽出される時に（この場合は、タイトルフィールドが空欄になります）、それがドキュメントのタイトルを自動的に決定するために用いられます。"});
Ext.apply(Voyant.util.DetailedError.i18n, {
"error":"エラー"});
Ext.apply(Voyant.panel.Summary.i18n, {
"longest":"最長:",
"documentType":"<tpl for=\"types\"><a href=\"#\" onclick=\"return false\" class=\"document-type keyword\" voyant:recordid=\"{id}\" voyant:docindex=\"{docIndex}\">{type}</a> ({val})<tpl if=\"xindex < xcount\">, </tpl></tpl>",
"more":"さらに表示",
"mostFrequentWords":"コーパスの中で<b>最も頻度の高い語</b>は：",
"title":" コーパスの概要",
"numberOfTerms":"ドキュメント中の語数",
"lowest":"最少:",
"docsLength":"ドキュメントの長さ",
"corpusType":"<tpl for=\"types\"><a href=\"#\" onclick=\"return false\" class=\"corpus-type keyword\" voyant:recordid=\"{id}\">{type}</a> ({val})<tpl if=\"xindex < xcount\">, </tpl></tpl>",
"seeAll":"すべて",
"highest":"最多:",
"distinctiveWords":"<b>特徴語</b>（コーパスにおける残りの語と比べて）：",
"docsDensity":"語彙の密度",
"helpTip":"<p>コーパスの<i>概要</i>ツールはコーパスに関する概要を提供します。このツールで表示される要素をクリックすると、他のツールに反映されます。含まれる機能</p><ul><li>のべ語数と異なり語数、コーパス生成からの経過時間</li><li>最頻出語</li><li>複数のドキュメントからなるコーパスを対象に<ul><li>ドキュメントの長さと語彙の密度</li><li>各ドキュメントの特徴語（TF−IDFスコアに基づく）</li></ul></li></ul>",
"moreDistinctiveWords":"<a href=\"#\" onclick=\"return false\">残り {1} のうち {0} </a>",
"items":"項目",
"shortest":"最短:"});
Ext.apply(Voyant.panel.CorpusSet.i18n, {
"title":"コーパス・ビュー",
"helpTip":"これはデフォルトで、多目的のコーパスビューです。"});
Ext.apply(Voyant.widget.FontFamilyOption.i18n, {
"label":"フォントファミリー"});
Ext.apply(Voyant.panel.Subset.i18n, {
"publisherLabel":"出版社",
"sendToVoyantButton":"新しいVoyantコーパス",
"downloadButton":"ZIPアーカイブをダウンロード",
"sendToVoyantNoQuery":"設定されたクエリは今のところありませんが、あなたは<a href=\"{0}\" target=\"_blank\">新しいウィンドウで現在のコーパスを開くことができます。</a>.",
"lexicalLabel":"フルテキスト",
"noMatches":"現在の検索基準ではどのドキュメントにも一致しません。検索をまず修正してください。",
"titleLabel":"タイトル",
"authorLabel":"著者",
"title":"ワークセット・ビルダー"});
Ext.apply(Voyant.widget.DownloadFilenameBuilder.i18n, {
"titleLabel":"タイトル",
"authorLabel":"著者",
"availableLabel":"以下を除く：",
"enabledLabel":"以下を含む：",
"fieldLabel":"ファイル名",
"pubDateLabel":"日付"});
Ext.apply(Voyant.panel.Mandala.i18n, {
"add":"追加する",
"cancel":"キャンセル",
"clearTip":"すべてのマグネット（検索語）をクリアする",
"EditMagnet":"マグネットの編集",
"clear":"クリア",
"labelsTip":"ラベルの可視状態を切り替える",
"update":"アップデート",
"title":"マンダラ",
"addTip":"マグネット（検索語）を追加する",
"helpTip":"「マンダラ」は単語とドキュメントの関係を示すための視覚化です。各検索語（またはマグネット）は、相対頻度に基づいてドキュメントに紐づけられます。",
"remove":"消去",
"labels":"ラベル"});
Ext.apply(Voyant.widget.CorpusSelector.i18n, {
"chooseCorpus":"コーパスの選択"});
Ext.apply(Voyant.panel.DocumentTerms.i18n, {
"matchingTerms":"一致した単語： {count}",
"tfidfTip":"ここでの有意性は、語がコーパスのそれ以外の部分に比べてあるドキュメントの中でどの程度重要かを表現するための一般的な方法であるTF-IDFスコアによって測られます。",
"rawFreqTip":"このドキュメントの中のこの言葉の粗頻度",
"emptyText":"一致する情報が見つかりませんでした。",
"relativeFreqTip":"各ドキュメントの中のこの語の相対頻度",
"termTip":"単一の特定のドキュメントの中の言葉",
"zscore":"Zスコア",
"trendTip":"これは線形セグメントによってドキュメント中の語の分布を表すスパークライングラフです（デフォルトでは10の等幅のセグメント）",
"tfidf":"有意",
"title":"ドキュメントの語",
"helpTip":"<p>「ドキュメントの語」は各ドキュメント内に出現する単語をリスト化したものです。含まれる機能:</p><ul><li>ヘッダーをクリックすることで単語、語数（粗頻度）、相対頻度による並び替え。</li><li>ドキュメント間で単語頻度の傾向を示すスパークライン</li><li>ヘッダー上にマウスを合わせると表示される矢印をクリックすることで行の追加が可能</li><li><li>検索ボックス（？アイコンにカーソルを合わせると記法ヘルプが表示されます）</li></ul>",
"zscoreTip":"Zスコア（標準得点）は語の粗頻度を同じドキュメントの中の他の語の頻度と比較するために一般化した値です。<table><tbody><tr><td style=\"text-align: center; font-size: smaller; font-family: mono;\">語の頻度 - 語の頻度の平均<hr>語の頻度の標準偏差</td></tr></tbody></table>"});
Ext.apply(Voyant.data.model.Corpus.i18n, {
"hasNdocuments":"は{count}個のドキュメントを含みます。",
"daysAgo":"およそ {count}  日前",
"monthsAgo":"およそ {count}  カ月前",
"thisCorpus":"このコーパス",
"created":"生成されたのは",
"isEmpty":"は空です。",
"widthNwordsAndNTypes":"のべ語数 {words} <span class=\"info-tip\" data-qtip=\"every occurrence of every word (like multiple occurrences of &quot;the&quot;) is counted\">語</span>、異なり語数 {types} <span class=\"info-tip\" data-qtip=\"multiple occurrences of words (like &quot;the&quot;) are counted once\">語</span>",
"hoursAgo":"およそ {count}  時間前",
"minutesAgo":"およそ {count}  分前",
"minuteAgo":"およそ1分前",
"monthAgo":"およそ1カ月前",
"hourAgo":"およそ1時間前",
"failedCreateCorpus":"コーパスの生成に失敗しました",
"has1document":"は1個のドキュメントを含みます。",
"yearsAgo":"およそ {count} 年前",
"secondAgo":"およそ1秒前",
"now":"現在",
"yearAgo":"およそ1年前",
"secondsAgo":" {count}  秒前",
"dayAgo":"およそ1日前"});
Ext.apply(Voyant.panel.WordTree.i18n, {
"emptyText":"一致する情報が見つかりませんでした。",
"title":"ワードツリー"});
Ext.apply(Voyant.widget.DownloadFileFormat.i18n, {
"original":"オリジナル",
"VOYANTTip":"これはコンテンツの標準化されたバージョンです。ソースドキュメントがXMLで書かれていたならほぼオリジナルな内容になります。そしてそうでないソースドキュメントの多くは単純なHTMLになります。",
"fieldLabel":"ファイル形式",
"voyantXml":"Voyant XML",
"plainText":"プレーンテキスト",
"SOURCETip":"これを選ぶと、オリジナルのフォーマットでドキュメントソースをダウンロードすることになります。場合によっては、（１つのZIPファイルとして）ただ１つの保存用フォルダをダウンロードすることになります。",
"TXTTip":"これは各ドキュメントのプレーンテキストを提供します。"});
Ext.apply(Voyant.panel.ScatterSet.i18n, {
"title":"散布図",
"helpTip":"これは散布図で作業するために専門化されたビューです。"});
Ext.apply(Voyant.util.Toolable.i18n, {
"exportTitle":"エクスポート",
"exportError":"エクスポートエラー",
"exportDataTsvMessage":"下記データをコピーしてください。スプレッドシートやテキストファイルに貼り付け可能です。",
"exportViewFieldset":"画面（ツールとデータ）のエクスポート",
"exportSvgMessage":"<p>これはSVG形式画像のサムネイルです。右クリックまたはCTRLを押しながらクリックすると、フルサイズの画像を保存できます。</p><p>または、下記HTMLコードをコピーしてください</p>",
"exportDataJsonMessage":"下記データをコピーしてください。他のWebアプリケーションに利用できます。",
"plusTip":"このパネルの場所に別のツールを割り当て（現在のツールは置き換えられます）",
"gearTip":"このツールに関するオプションの設定",
"cancelTitle":"キャンセル",
"exportViewHtmlEmbed":"別のWebページにこの画面を埋め込むためのHTMLスニペット",
"exportGridCurrent":"現在のデータをエクスポート",
"exportSvgTitle":"SVGのエクスポート",
"maximizeTip":"新しいウインドウでこのツールを開く",
"exportGridCurrentTsv":"現在のデータをテキスト（タブ区切り）形式でエクスポート",
"exportVizTitle":"図のエクスポート",
"exportDataTitle":"データのエクスポート",
"optionsTitle":"オプション",
"exportBiblioTitle":"書誌情報をエクスポート",
"confirmTitle":"確認",
"moreHelp":"ヘルプをさらに表示",
"exportViewUrl":"この画面（ツールとデータ）のURL",
"helpTip":"このツールに関するヘルプはまだ用意されていません。このアイコンをクリックして<a href=\"http://docs.voyant-tools.org/\" target=\"_blank\">Voyantツール解説サイト</a>にアクセスしてください。",
"export":"エクスポート",
"exportDataHtmlMessage":"下記データをコピーしてください。HTMLに貼り付け可能です。またXMLとしても使用できます。",
"exportPngTitle":"PNGのエクスポート",
"exportPngMessage":"<p>これはPNG形式画像のサブネイルです。右クリックまたはCTRLを押しながらクリックすると、フルサイズの画像を保存できます。</p><p>または、下記HTMLコードをコピーしてください</p>",
"exportGridCurrentHtml":"現在のデータをHTML形式でエクスポート",
"exportViewEmbedMessage":"下のボックスに表示されるHTMLスニペットをコピー＆ペーストすることで別のWebページに埋め込むことができます。（例えばWordpressのような）CMSによっては、&lt;iframe&gt; タグを扱うためのプラグインが必要になります。",
"exportPng":"この図をPNG形式でエクスポート",
"reset":"リセット",
"exportViewBiblio":"この画面の書誌情報",
"exportViewEmbedTitle":"埋め込み用HTMLスニペット",
"exportNoFunction":"選択されたエクスポート機能は利用できません",
"exportGridCurrentJson":"現在のデータをJSON形式でエクスポート",
"exportSvg":"この図をSVG形式でエクスポート",
"saveTip":"URL、埋め込み可能なツール、データ、書誌情報のエクスポート"});
Ext.apply(Voyant.panel.TextualArc.i18n, {
"minRawFreqTip":"語の出現回数の最小値。デフォルトではパフォーマンスを改善するために2（=反復された単語）に設定されています。1にすると動作がかなり遅くなる可能性があります。",
"search":"フィルター",
"minRawFreq":"最小頻度",
"adaptation":"Inspired by W. Bradford Paley's <a href=\"http://textarc.org\" target=\"_blank\">TextArc</a>",
"title":"テクスチャルアーク",
"speedTip":"視覚化の速度を調整する",
"helpTip":"テクスチャルアークはドキュメントの中の単語を視覚化します。文書は、単語と、文書の順番通りの単語に従っているアークの重み付きの重心を含んでいます。",
"speed":"速度"});
Ext.apply(Voyant.panel.StreamGraph.i18n, {
"freqsMode":"使用頻度",
"freqsModeTip":"使用頻度をそのままの数で表示するか、（ドキュメントもしくはセグメントに対する）相対数で表示するかどうか決定する。",
"relativeFrequencies":"相対頻度",
"documents":"ドキュメント",
"documentSegments":"ドキュメントの区切り",
"clearTerms":"クリアー",
"title":"ストリームグラフ",
"rawFrequencies":"粗頻度",
"helpTip":"ストリームグラフは、コーパス（もしくはひとつのドキュメント）の中での語の使用頻度の変化を視覚化するものです。",
"segments":"区切り"});
Ext.apply(Voyant.notebook.util.Embed.i18n, {
"tryWidget":"以下のウィジェットの一つを試してください；",
"widgetNotRecognized":"このファイルを埋め込むことはできません（無効か、指定されたツールで埋め込まれていません）。"});
Ext.apply(Voyant.widget.ListEditor.i18n, {
"cancel":"キャンセル",
"editList":"リストの編集",
"new":"新しいリスト",
"editListMessage":"これは一語が一行に表示されるリストです",
"editListTitle":"リストの編集",
"label":"リスト：",
"none":"なし",
"ok":"保存",
"whiteListLabel":"ホワイトリスト："});
Ext.apply(Voyant.widget.DownloadOptions.i18n, {
"title":"ダウンロードオプション"});
Ext.apply(Voyant.widget.TotalPropertyStatus.i18n, {
"totalPropertyStatus":"{count:number(\"0,000\")}"});
Ext.apply(Voyant.panel.Phrases.i18n, {
"overlapNone":"なし（そのまま）",
"overlapTip":"これは重複しているフレーズにどのようにフィルターするか決定します。",
"matchingTerms":"{count}",
"overlapFreq":"頻出するフレーズを優先する",
"emptyText":"一致する情報が見つかりませんでした。",
"length":"長さ",
"termTip":"これはキーワードフレーズです（これは一般化された状態で、フレーズごとの出現とはわずかに異なります）。",
"termRawFreqTip":"この言葉がコーパス中に現れた回数",
"title":"フレーズ",
"lengthTip":"フレーズの長さの上下範囲（それぞれのレーズの単語数をどれくらいにするか）。",
"termRawFreq":"カウント",
"overlap":"重複処理",
"overlapLength":"長いフレーズを優先する",
"overlapMenu":"重複のフィルターを選択してください。",
"term":"トークン",
"helpTip":"<p>コーパスフレーズはコーパス全体の中で繰り返されるフレーズを一覧で見ることができます。<!-- 含まれる機能:</p> <ul><li>キーワード、共起語、共起回数による並び替え</li><li>検索ボックス（？アイコンにカーソルを合わせると記法ヘルプが表示されます）</li></ul>-->"});
Ext.apply(Voyant.panel.Trends.i18n, {
"relativeFrequencies":"相対頻度",
"documents":"ドキュメント",
"raw":"生データ",
"segmentsSlider":"セグメント",
"scale":"スケール",
"title":"トレンド",
"segments":"ドキュメントのセグメント",
"freqsMode":"頻度",
"freqsModeTip":"使用頻度をそのままの数で表示するか、（ドキュメントもしくはセグメントに対する）相対数で表示するかどうか決定する。",
"options":"オプション",
"rawFrequencies":"粗頻度",
"helpTip":"<p><i>トレンド</i>は一つまたは複数のコーパス（ドキュメント）を横断して、相対頻度をグラフ化します。含まれる機能</p><ul><li>検索ボックス（？アイコンにカーソルを合わせると記法ヘルプが表示されます）</li></ul></li></ul>",
"relative":"相関"});
Ext.apply(Voyant.widget.StopListOption.i18n, {
"cancel":"キャンセル",
"de":"ドイツ語",
"hi":"ヒンディー語",
"no":"ノルウェー語",
"auto":"自動判別",
"bg":"ブルガリア語",
"noEditAutoMessage":"自動判別ストップワードリストは編集できません。「新規リストの作成」など個別のストップワードリストを選択してください。",
"lt":"ラトビア語",
"lv":"リトアニア語",
"none":"なし",
"fr":"フランス語",
"hu":"ハンガリー語",
"br":"ブルトン語",
"editStopListTitle":"ストップワードリスト",
"hy":"アルメニア語",
"se":"スウェーデン語",
"ga":"アイルランド語",
"id":"インドネシア語",
"ok":"保存する",
"ca":"カタロニア語",
"new":"新規リストの作成",
"gl":"ガリシア語",
"el":"ギリシャ語",
"mu":"多言語",
"en":"英語",
"label":"ストップワード",
"cn":"中国語",
"it":"イタリア語",
"noEditAutoTitle":"ストップリストのエラーを編集する",
"es":"スペイン語",
"editStopListMessage":"これはストップワードリストです。単語ごとに改行してください",
"applyGlobally":"全体に適用",
"eu":"バスク語",
"editList":"リストの編集",
"ar":"アラビア語",
"th":"タイ語",
"cz":"チェコ語",
"ja":"日本語",
"ckb":"クルド語",
"fa":"ペルシャ語",
"ro":"ルーマニア語",
"nl":"オランダ語",
"tr":"トルコ語"});
Ext.apply(Voyant.panel.Catalogue.i18n, {
"sendToVoyantButton":"新しいVoyantコーパス",
"cancel":"キャンセル",
"select":"選択する",
"exportInProgress":"エクスポートするコーパスを準備してください…",
"facet.titleTitle":"タイトル",
"title":"カタログ",
"lexicalTitle":"単語",
"clickToOpenCorpus":"ポップアップウィンドウがブロックされているので、新しいコーパスにアクセスするために、 <a href=\"{0}\" target=\"_blank\" class=\"link\">ここ</a>をクリックしてください。",
"rawFreqs":"総出現回数（粗頻度）",
"facet.languageTitle":"言語",
"noMatches":"該当なし({0}のドキュメント中）",
"selectValidFacet":"絞り込み項目を選択してください。",
"plusFacetTip":"絞り込み項目を追加する",
"facet.collectionTitle":"コレクション",
"matchingDocuments":"一致したドキュメントの数",
"helpTip":"<i>カタログ</i>ツールは大型の、複数のドキュメントからなるコーパスの内容を探索するためのインターフェースを提供します。検索基準に基づいたサブセットも作成します。図書館データベースやオンラインストアに似た形式で、ドキュメントをフィルタリングできる機能です。",
"export":"エクスポート",
"downloadButton":"ダウンロード",
"facet.pubPlaceTitle":"出版地",
"queryMatches":"{0}のドキュメントが該当（{1}のドキュメント中）",
"facet.keywordTitle":"キーワード",
"exportTip":"選択したドキュメントから新しいVoyantコーパスを作る。",
"facet.authorTitle":"著者",
"closeFacetTip":"この絞り込み項目を消去する",
"selectFacet":"絞り込み項目を選択する",
"loadingSnippets":"テキストのスニペットを読み込んでいます…",
"facet.pubDateTitle":"出版データ",
"facet.publisherTitle":"出版社"});
Ext.apply(Voyant.panel.CollocatesSet.i18n, {
"title":"散布図",
"helpTip":"これは散布図で作業するために専門化されたビューです。"});
Ext.apply(Voyant.panel.MicroSearch.i18n, {
"title":"マイクロサーチ",
"loading":"単語を読み込んでいます…",
"helpTip":"このツールはコーパスの全体の概観を提示し、検索単語の分布を視覚化することができます。"});
Ext.apply(Voyant.panel.TopicContexts.i18n, {
"reset":"リセットする",
"title":"トピックコンテクスト",
"helpTip":"トピックコンテクスト"});
Ext.apply(Voyant.panel.BubblelinesSet.i18n, {
"title":"バブルラインスキン",
"helpTip":"これはバブルラインで作業するために専門化されたビューです。"});
Ext.apply(Voyant.panel.Knots.i18n, {
"findTerm":"単語を探す",
"settings":"設定",
"startAngle":"スタート",
"tangles":"回転数",
"showTerm":"単語を表示",
"sound":"サウンド",
"clearTerms":"クリア",
"removeTerm":"単語を消去",
"hideTerm":"単語を隠す",
"title":"ノット",
"type":"視覚化",
"noTermsFound":"ドキュメント内に単語が見つかりませんでした",
"speed":"速度",
"soundTip":"ノットのサウンドのオン・オフを切り替える",
"options":"オプション",
"context":"コンテキスト"});
Ext.apply(Voyant.VoyantApp.i18n, {
"serverResponseError":"サーバーがエラーを返しています：",
"error":"エラー",
"translatedBy":"小風尚樹(Naoki Kokaze), 佐藤正尚(Masanao Sato), 杉浦清人(Kiyoto Sugiura), 鈴木親彦(Chikahiko Suzuki), 王一凡(Yifan Wang), and 永崎研宣(Kiyonori Nagasaki)"});
Ext.apply(Voyant.panel.RezoViz.i18n, {
"noEntitiesForEdgeCount":"No entities were found. Would you like to reduce the minimum edge count to improve results?",
"loadingEntities":"読み込み中",
"minEdgeCount":"辺の数の下限",
"noEntities":"No entities to graph.",
"title":"RezoViz",
"stiffness":"剛性",
"people":"人物",
"friction":"摩擦",
"repulsion":"反発",
"reload":"再読み込み",
"organizations":"組織",
"locations":"場所",
"categories":"カテゴリ"});
Ext.apply(Voyant.widget.DocumentSelector.i18n, {
"cancel":"キャンセル",
"all":"すべて",
"selectAll":"すべて選択",
"documents":"ドキュメント",
"ok":"OK",
"selectNone":"すべて解除"});
Ext.apply(Voyant.panel.Contexts.i18n, {
"emptyText":"一致する情報が見つかりませんでした。",
"document":"ドキュメント",
"corpus":"コーパス",
"limitedAccess":"これはアクセス制限のあるコーパスです。ツールの機能に制限があります。",
"termTip":"コンテクスト内のキーワード",
"right":"右",
"title":"コンテクスト",
"expand":"範囲",
"documentTip":"出現元のドキュメント",
"left":"左",
"corpusTip":"コーパスモードにリセットする",
"rightTip":"キーワードの右側の後文脈",
"context":"コンテクスト",
"leftTip":"キーワードの左側の前文脈",
"position":"位置",
"positionTip":"ドキュメント内のキーワードの位置",
"helpTip":"コンテクスト・ツールの中のキーワードは、すべてのキーワードの出現を前後の短いテキスト（コンテクスト）とともに表示します。どのように語が異なったコンテクストで用いられているか詳しく研究するために役立ちます。含まれる機能:<p></p><ul><li>キーワードや左や右のコンテクストのキーワードによって、ドキュメントを並べ替える。</li><li>検索ボックス（？アイコンにカーソルを合わせると記法ヘルプが表示されます）</li></ul>"});
Ext.apply(Voyant.VoyantDefaultApp.i18n, {
"voyantIs":"<a href=\"./docs/#!/guide/about\">Voyantツールは、デジタルテキストの読解と分析のためのウェブ上の環境です。</a>",
"noViewKnownErrorTpl":"選択されたビュー({view}) は、前のVoyantのバージョンから移動してきていません（今後もすることはありません）。{additional} デフォルトのビューが代わりに用いられます。",
"convertSkinMsg":"コンバート・スキンはドキュメントのエクスポートに使います。これはドキュメントツールから機能的に用いることができます。",
"noViewErrorTitle":"指定されたビューはありません",
"helpTip":"Voyantツールは、デジタルテキストの読解と分析のためのウェブ上の環境です。<p></p>",
"noViewErrorTpl":" \"<i>{view}</i>\"という名前のビューはありません。デフォルトのビューが代わりに使われています。."});
Ext.apply(Voyant.widget.Facet.i18n, {
"emptyText":"該当なし"});
Ext.apply(Voyant.panel.ScatterPlot.i18n, {
"relFreq":"相対頻度",
"xAxis":"X軸",
"termsLabel":"語",
"summaryLabel":"要約",
"title":"散布図",
"nearby":"強調",
"remove":"消去",
"pca":"主成分分析",
"docSim":"ドキュメント類似度",
"noTermSelected":"単語が選択されていません。",
"freqsMode":"頻度",
"terms":"語数",
"tokenFreqTip":"<b>{0}</b><br><b>粗頻度</b><br>{1}<br><b>相対頻度</b><br>{2}",
"term":"語",
"docFreqTip":"<b>{0}</b><br><b>ワードの頻度</b><br>{1}",
"rawFrequencies":"粗頻度",
"dimension":"次元",
"helpTip":"<p>散布図はコーパスの中での語の相関を表します。これはそれぞれのドキュメント（それぞれが一つの次元を表す）における語の相関を簡単に視覚化できる三次元空間に単純化した統計的分析によるものです。</p>",
"ca":"対応分析",
"clusters":"クラスタ",
"pcTitle":"全変動に対する各成分の寄与率",
"relativeFrequencies":"相対頻度",
"addTerm":"単語を追加",
"numTerms":"語数",
"removeTerm":"<b>{0}</b>を消去",
"tfidf":"TF-IDF",
"analysis":"分析",
"fill":"Fill",
"loading":"読み込んでいます…",
"labels":"ラベル",
"freqsModeTip":"頻度を粗頻度・相対頻度・TF-IDFのどれで表すか選択して下さい",
"yAxis":"Y軸",
"pc":"PC（主成分）",
"nearbyTerm":"強調 <b>{0}</b>",
"docsLabel":"ドキュメントリスト",
"rawFreq":"粗頻度",
"caTitle":"全連関に対する各次元の寄与率",
"dimensions":"次元"});
Ext.apply(Voyant.panel.VoyantFooter.i18n, {
"voyantTools":"Voyantツール",
"privacy":"プライバシー",
"voyantLink":"<a href=\"http://docs.voyant-tools.org/\" target=\"_blank\">Voyantツール</a>",
"privacyMsg":"Voyant ツールの開発者は、どのツールがどのパラメータで呼び出されたかのデータを収集します（同一セッション内の複数リクエストを識別するためにIPアドレスも記録されます）。加えて、Google Analytics も使用します（Google のプライバシーポリシー、特に<em>ログ情報</em>の項を参照）。サイト側で記録されたデータと Google Analytics データは開発チームによって、デバッグやツールの改善、研究者にどう使われているかを理解するために使われます。また、このデータは匿名化された統計データとして研究目的に使用されます。Voyant ツールに送信されたテキストは作業セッション中やセッションにまたがるアクセスを維持するために保存されることに留意してください。収集されるデータと用途についての質問、コーパスの除外申請は Stéfan Sinclair までご連絡ください。詳細情報はこのリンクをクリックしてください。"});
Ext.apply(Voyant.widget.QuerySearchField.i18n, {
"querySearchTip":"<div>検索（エンター／リターンを押すことで検索が始まります） 以下の検索オプションは分かち書きをする言語の場合に有効</div> <ul style=\"margin-top: 3px; margin-bottom: 3px;\"> <li><b>coat</b> : <i>coat</i>と完全一致</li> <li><b>coat*</b> : <i>coat</i>で始まる語</li> <li><b>^coat*</b> : <i>coat</i>で始まるそれぞれの語</li> <li><b>*oat</b> : <i>oat</i>で終わる語</li> <li><b>^*oat</b> : <i>oat</i>で終わるそれぞれの語</li> <li><b>coat,jacket</b> : コンマで区切られた全単語と一致</li> <li><b>coat|jacket</b> : パイプで区切られた語いずれかと一致</li> <li><b>\"winter coat\"</b> : フレーズ「<i>winter coat</i>」と一致</li> <li><b>\"coat mittens\"~5</b> : <i>coat</i>と<i>mittens</i>の間に挟まれた5語</li> <li><b>^coat*,jacket|parka,\"coat mittens\"~5</b> : 複合的な構文</li></ul>",
"querySearchDocsModeTip":"<div>ドキュメント検索（エンター／リターンを押すことで検索が始まります） 以下の検索オプションは分かち書きをする言語の場合に有効</div> <ul style=\"margin-top: 3px; margin-bottom: 3px;\"> <li><b>coat</b> : <i>coat</i>と完全一致</li> <li><b>coat*</b> : <i>coat</i>で始まる語</li> <li><b>coat,jacket</b> : コンマで区切られた全単語と一致</li> <li><b>\"winter coat\"</b> : フレーズ「<i>winter coat</i>」と一致</li> <li><b>\"coat mittens\"~5</b> : <i>coat</i>と<i>mittens</i>の間に挟まれた5語</li> <li><b>+winter+coat</b> : プラス(+) から始まる全単語と一致</li> <li><b>+\"winter coat\"+mitten*</b> : 複合的な構文</li></ul>",
"querySearch":"検索",
"aggregateInDocumentsCount":"検索基準を満たすドキュメントの数です（計上されたドキュメントは、少なくとも検索語を一つ含んでいます）。"});
Ext.apply(Voyant.util.Localization.i18n, {
"de":"ドイツ語",
"thisLanguage":"日本語",
"autoRecommended":"自動判別（推奨）",
"en":"英語",
"hr":"クロアチア語",
"it":"イタリア語",
"languageTitle":"言語オプション",
"fr":"フランス語",
"ar":"アラビア語",
"bs":"ボスニア語",
"chooseLanguage":"インターフェースの言語",
"cz":"チェコ語",
"ja":"日本語",
"he":"ヘブライ語",
"ro":"ルーマニア語",
"sr":"セルビア語"});
