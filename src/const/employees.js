const employees = [
  {
    id: 1,
    name: "松原 勇志",
    joiningDay: "2021",
    position: "エンジニア",
    image: "matsubara.jpeg",
    introduce: "GROW × 自分 = Infinity(無限大)",
    joiningReason:
      "「未経験からエンジニアを目指せる」と銘打った企業はいくつもありました。その中で起業したてでありながらも、代表の方やすでに働きはじめている社員がIT分野のみならず多方面に活躍している話を受け、自由さとより大きなビジョンを見せてくれる会社だと感じたので、入社を決断しました。",
    motivation:
      "自身で設定したキャリアプランを達成したときにやりがいを感じます。本人の意思や努力を尊重してくれる環境なので、「⚪年⚪月までにこのスキルを扱う業務に携わる」と設定した時に自身の努力は勿論のこと、営業担当の方や同じ立場のエンジニアも含めて惜しまない支援をしてくれるので、心強いです。",
    growth:
      "「自分発信」を率先して出来るようになりました。入社以前は、与えられた課題を必死にこなしていくような日々でしたが、今では「このシステムはこのように改善しよう」「この課題のためにプロジェクトを発足しよう」などと自発的な行動を取るように成長出来ました。",
    companyAtmosphere:
      "年齢層も若く、非常に風通しの良い環境であるのは入社当時から感じていました。今では、現場で実務をこなすエンジニアも増え、皆がそれぞれ自身の目標を掲げて意識高く活動しているので、「向上したい」「変わりたい」と思える人こそ必要な仲間達だと感じています。",
  },
  {
    id: 2,
    name: "田丸 太一",
    joiningDay: "2022",
    position: "エンジニア",
    image: "tamaru.jpeg",
    introduce: "自分が生きた証が誰かの糧になれる、後悔のない人生に",
    joiningReason:
      "周りの誰よりも大学を卒業してからの人生に不安と葛藤がありました。ただ漠然と誰かによって敷かれたレールの上を走り、可もなく不可もない普通の人生で終わりたくないと想いから未経験からでも常に挑戦ややりがいのある企業を探していました。GROWは井上代表をはじめ、入社している方々が自由に活動し、自分の挑戦したい夢や目標を持ち続けているところに魅力を感じ入社を決断いたしました。",
    motivation:
      "自分の過去の経験を生かして、やりたい事業があると伝えることでサポートをしてくれるため常に挑戦し続ける事がやりがいだと感じています。",
    growth:
      "エンジニアとしてのスキルも飛躍的に向上し後輩たちにサポートができるようになった事です。また、社会人として大事な「周りに愛される人間性」とは何か教えていただきました。入社したての頃は利己主義な部分があり、周りを見れていない事で迷惑をかけることが多かったですが色々な方々と関わるきっかけを与えていただき改善できていると感じます。",
    companyAtmosphere:
      "個性的な方が良い意味で多いです。自分の夢や目標がない、将来に不安を抱えている人はとても良い刺激をもらえる環境だと思います。年齢層も比較的若い方が多いのでアットホームに接してくれる人が多いところも魅力の一つだと思います。",
  },
  {
    id: 3,
    name: "日向 一樹",
    joiningDay: "2022",
    position: "エンジニア",
    image: "hinata.png",
    introduce: `If you can dream it, you can do it!
    (夢見ることができれば、それは実現できる)`,
    joiningReason:
      "私は技術を使って世界に影響を与えたいと思い、このIT会社に魅力を感じました。最先端の技術に触れることができ、イノベーションを推進する環境がここにはあります。",
    motivation:
      "プロジェクトごとに新しい課題に取り組むことができ、それを解決する過程で自己成長を実感できます。また、製品やサービスが社会にポジティブな影響を与えることを目の当たりにすると、大きなやりがいを感じます。",
    growth:
      "技術スキルだけでなく、チームワークやプロジェクト管理の能力も向上しました。また、複雑な問題を解決するための戦略的思考も養われています。",
    companyAtmosphere:
      "GROWの文化は、常に学び、成長し続けることを促しています。仲間たちは支え合い、刺激し合う環境があり、非常にポジティブで刺激的です。このような環境は、仕事の質を高めるだけでなく、プライベートな成長にもつながっています。",
  },
  {
    id: 4,
    name: "原田 和也",
    joiningDay: "2021",
    position: "エンジニア",
    image: "harada.jpeg",
    introduce: "適切な選択ができるエンジニアを目指しています",
    joiningReason:
      "GROWには教育カリキュラムが充実しており、スキルアップをしていくために入職しました。",
    motivation: "新しいことに挑戦し、できることが増えることです",
    growth:
      "コードを読んでどんな処理が走っているか、どこを修正すればよいかわかるようになりました。",
    companyAtmosphere: "質問等するにも話しやすい環境だと思います。",
  },
  {
    id: 5,
    name: "菅野 祥輝",
    joiningDay: "2022",
    position: "エンジニア",
    image: "kanno.png",
    introduce: "人は失敗から学ぶものである。失敗がなければ、成長もない。",
    joiningReason:
      "この会社を選んだ理由は、常に挑戦できる環境があるからです。自分の技術的限界を押し広げることができると思いました。私のキャリアを成長させるための理想的な場所だと思いました。",
    motivation:
      "最もやりがいを感じる瞬間は、困難な課題に直面し、それを乗り越えたときです。初めは難しく感じる問題でも、解決策を見つけ出す過程は非常に充実しています。",
    growth:
      "入社当時に比べて、私が最も成長したと感じるのは対応力です。チャレンジを経験することで、予期せぬ状況にも迅速かつ効果的に対応できるようになりました。この能力は、日々の業務以外にも活かせていると思います。",
    companyAtmosphere:
      "GROWメンバーの雰囲気は非常にフレンドリーで、チームメイトとは仕事以外でも多くの時間を共有しています。定期的に開催される飲み会やゴルフなどがあり、このような楽しい時間は、職場での生産性にも良い影響を与えています。",
  },
  {
    id: 6,
    name: "松永 卓也",
    joiningDay: "2022",
    position: "エンジニア",
    image: "matsunaga.jpeg",
    introduce: "未経験でもエンジニアになれることを身をもって証明していきます！",
    joiningReason:
      "友人がGrowで自分のやりたいことを仕事にしていることに憧れて自分を変えるために入社しました。",
    motivation:
      "Growにはまだまだ課題が沢山ありますが、その課題を自分の力や提案で乗り越えて行くことはとてもやりがいを感じます！",
    growth:
      "社内外で色んな人と関わる機会が増えたためコミュニケーション能力が格段に上がりました！",
    companyAtmosphere:
      "全体的に若いということもあり、アクティブな方が多くて自分も釣られてアクティブになっていくのを感じます！",
  },
  {
    id: 7,
    name: "山岸 陸斗",
    joiningDay: "2022",
    position: "エンジニア",
    image: "yamagishi.jpeg",
    introduce: "信頼されるバックエンドエンジニアを目指してます",
    joiningReason:
      "私がこの企業を選んだ主な理由は、ここならば自分の力次第で様々なことに挑戦し、成長することができると思い入社致しました。",
    motivation:
      "入社当初と比較して自身の成長が見受けられる点が挙げられます。特に、Webの知識が飛躍的に向上し、これまでの経験を通じてプロジェクトにおいて積極的に貢献できるようになりました。",
    growth:
      "入社当初と比較して、最も顕著に成長できた分野はWebの知識です。入社直後は基本的な理解しかなかったWeb技術や開発に関するスキルが、経験を通じて飛躍的に向上しました。",
    companyAtmosphere:
      "同僚たちは年齢が近く、オープンでコミュニケーションがしやすい雰囲気があります。情報共有が活発であり、お互いに学び合いながら成長できる環境が整っています。",
  },
  {
    id: 8,
    name: "北澤 弦太",
    joiningDay: "2023",
    position: "エンジニア",
    image: "kitazawa.jpeg",
    introduce: "窮すれば通ず",
    joiningReason: "私には、どんな業界でもいまや必須の「IT」という分野で優れたサービスやシステムを自分自身の手で作り出したいという思いがあり、SEを目指し転職、入社でした。未経験で、なおかつ、全く違う建設業という業界からの転職だったので、とにかく技術を吸収し成長させてくれる企業を探しておりましたそんな中、GROWに出会い、面接等を通じ「デビューすること」に重きを置いていること、エンジニアになる準備を全面的に支援できる体制が整ってることを感じ、入社の決め手になりました。",
    motivation: "自身のやりたいことができること、です。もちろん全て叶うというわけではありませんが、月1回の1on1の面談や、営業担当との細かなヒアリングから、どういう方向性に向かいたいのか、そのために必要な物は何なのか、という指針を定めそれに向かって進める事です。",
    growth: "私は入社してから、一年が経とうとしている頃なのですが、やはり一番は自身のエンジニアとしての技術力の向上です。入社当時は、ITの事など右も左もわからないといった未経験者でしたが、現在、保険の営業支援システムの開発というプロジェクトに末席ではありますが、参画しており、転職活動時から抱いていた、システムを自分自身の手で作り出すといった想いを叶えています。",
    companyAtmosphere: "年齢層も若く、同じく未経験からのデビューや中途入社などの方も多いので、向上心に溢れている印象です。また、仲間同士で勉強会やレクリエーションを主催する方も多く、やりたい事があったら素直に手を挙げられる環境なので、周囲を巻き込み自発的に行動を起こして行きたい、または、そんな人になりたいという人には、素晴らしい環境だと思います。",
  },
  {
    id: 9,
    name: "高橋 有希",
    joiningDay: "2023",
    position: "エンジニア",
    image: "takahashi.jpeg",
    introduce: `為せば成る
    為さねば成らぬ何事も`,
    joiningReason:
      "GROWは設立から数年しか経っていないので、会社を大きくしていく一員になりたいと思い入社しました。",
    motivation:
      "GROWは「成長したい」「頑張りたい」と思っている人を応援してくれますしチャンスも与えてくれます。任せられた仕事を達成した時、逆に応援する立場になって仲間が成長出来た時にやりがいを感じます。",
    growth:
      "自分の夢ややりたいことを積極的に発信していけるようになりました。GROWでは多種多様なスキルや人脈を持った人が多く在籍しているので、何かのキッカケでチャンスを掴めるように自分のことを周囲に知ってもらうという事が大事だと感じました。",
    companyAtmosphere:
      "普段は別々の案件先で仕事をしているのですが、業務後に集まって勉強会を開いたり食事に行ったりと、先輩後輩問わず親しみやすい雰囲気です！",
  },
  {
    id: 10,
    name: "藤井 優子",
    joiningDay: "2023",
    position: "エンジニア",
    image: "fujii.jpeg",
    introduce: "好きなことを全力で",
    joiningReason:
      "自分の持っている専門知識を活用した機械学習やアプリを作りたいと思い、エンジニアを志しました。内定前に社員の方と話す機会を設けてくださり、お話しさせていただく中で信頼できる方々だと思ったのを覚えています。入社時に「やりたいことはどんどん発言して、チャレンジして欲しい！」と言っていただいたことが入社の決め手になりました。",
    motivation:
      "自分で新しくものを作っていけることや、新しい技術を活かせたことが実感しやすいのがエンジニアのよいところであり、エンジニアとして生きていく上でのやりがいになると思います。新しい技術を学びやすい時代でもあるので、どんどん知識を身につけて成長していきたいです。",
    growth:
      "まずはIT業界や技術について知識がついた部分です。未経験での入社でしたが、カリキュラム担当者をはじめ、分からないことはすぐに聞ける環境なので歩みを止めることなく学ぶことができました。カリキュラムを終了すると今度は後輩に知識を伝えていく番になります。知識や技術の使い方はもちろん、わかりやすく伝えることや話し方を考えるなど、コミュニケーションのとりかたも考えるきっかけとなりました。また、grow社員にはさまざまなバックボーンをもった方や素敵な夢を持った人がいます。勉強会など話せる機会も多く、さまざまな考えに触れられることから人としても成長できたと感じています。",
    companyAtmosphere:
      "入社当初は緊張していましたが、勉強会に誘ってくれたり、飲み会などの交流の場が多くあったり、社員の皆さんと話す機会が多くあることからすんなり馴染めました。初めての場所は不安になることも多くあると思いますが、そんな気持ちもオープンに話すとわかってくれる人ばかりなので安心してください！",
  },
  {
    id: 11,
    name: "土屋 暖乃",
    joiningDay: "2023",
    position: "エンジニア",
    image: "tuchiya.jpeg",
    introduce: "学ぶ事を怠らないエンジニアを目指してます！",
    joiningReason:
      "自分に何かスキルを身につけたくて、前々から興味があったIT系企業の面接をいくつか受けましたがGROWは1番印象に残る面接でした。SE知識ゼロでも1から学べる、何を学ぶのも自由なところに惹かれて入社しました。",
    motivation:
      "SEの知識ゼロの状態で入社したので、初めて完成したものを見たときはとても達成感がありました。SEの世界は知れば知るほど広いので、知識がどんどん増えていくところにもやりがいを感じます。",
    growth:
      "入社するまで自分から勉強をする機会がなく、わからないことについて調べようとしても知りたい事が出てこなかったりしました。今では調べ方を工夫していろんな角度から調べたり、AIを使って調べたりと、勉強する力や学習の進め方の点で成長できました。",
    companyAtmosphere:
      "年齢関係なくみんなフレンドリーです。事務所に行くといつも誰かしら勉強してるのでモチベーションも上がります。わからないことを質問しても快く聞いてくれて、理解できるまで丁寧に教えてくれます。",
  },
  {
    id: 12,
    name: "佐々木 凌",
    joiningDay: "2022",
    position: "エンジニア ※弊社子会社所属",
    image: "sasakiryo.jpeg",
    introduce: "癖の強いエンジニアを目指しています！",
    joiningReason:
      "前職の時にコロナの影響を受けたのがITとの出会いでした。当時web広告などで「アプリ開発」などが出ておりどうやって作るんだろうと思いプロゲートなどを触っていくうちに、それまでのIT業界に抱いてた漠然としたイメージが払拭されITに魅了されていきました。その中で転職活動中に井上さんと出会い、GROWなら初心者からでもエンジニアを目指せると伺い入社を決めました。",
    motivation:
      "困った時にたくさん調べてようやく解決できた時や、現場で詰まった作業などが一気に進んだときにやりがいを感じます。",
    growth:
      "GROWに入社する前はオンラインスクールで勉強したりしてたのですが、実際にGROWのカリキュラムを通して学んだことの方が圧倒的に自分の身についてるなと思いました。現在も勉強中ではありますが、現場で実際に使用するコマンドやその意味、なぜここで使うのか,WEBサイトなど見てどういうふうに組み立ててコードを書いてるのかみたりしています。",
    companyAtmosphere:
      "わからないとこなどあれば勉強会で教え合ったり、定期的に勉強会など開催してるので調べてもわからないところはどんどん聞いて解決しやすいのがGROWの魅力だと思います。また、何かやりたいことなどあれば自主的に進んでやらせてもらえるのも大きな魅力だと思います。",
  },
  {
    id: 13,
    name: "福井 涼太",
    joiningDay: "2021",
    position: "エンジニア ※弊社子会社所属",
    image: "fukui.jpeg",
    introduce: "自分の強みややりたいことを常に探求していきたい",
    joiningReason: "もともとIT系の業界に興味があってモダンな環境に身を置きたいという思いがあったので東京に上京して仕事をしたいなと考えていました。たくさんの企業さんと面接していく中でGROWは自分のやりたいことやどのように成長していきたいかなどをしっかり聞いてサポートをしてくれるという印象があったため入社を決めました。また対面で面談をした際に実際に働いているエンジニアの方とお話しできたことも入社を決める要因になりました。",
    motivation: "自分は現在サーバー構築の業務を行っているので直接作成したアプリを見たり、顧客と顔を合わせるということもないのですが、それでも開発チームが作業する環境を整えたり、インフラの経験がない中自分で調べてチームメンバーの役に立てた時にやりがいを感じます。",
    growth: "個人的にはコミュニケーション能力だと思います。エンジニアとしてのスキルももちろんですが、自分の考えを言語化する能力だったり、怖気づかないで会話する能力がGROWに入社する前と一番変わったことかなと思います。",
    companyAtmosphere: "行動力がめちゃくちゃあるなと思います。社員同士で勉強会を企画したり、それぞれ目指すスキルが似ている社員同士で情報共有したりしているので仲間同士で和気藹々と高めあえる環境だと思います。定期的に面談で自分のやりたいことなどのヒアリングがあり、その人にあった活躍の仕方をサポートしてくれると思います。",
  },
  {
    id: 14,
    name: "金森 翔",
    joiningDay: "2023",
    position: "エンジニア ※業務委託",
    image: "kanamori.jpg",
    introduce: "多角的に見てベストなコーディングを意識しています",
    joiningReason:
      "今後のキャリアについて悩んでいた時に、お声がけいただきました。エンジニアとして活躍しながら、自分のやりたいこととの親和性があり、2軸で活動できています。",
    motivation:
      "淡々と仕事をこなしながら、やりたいことができているので、安定しながら挑戦できることですかね。収入に関しても大きく変化し、心の余裕もできてきました。",
    growth:
      "現場の違う仲間とコミュニケーションを取りながら仕事ができるので、別の視点や領域の知識を得られ、幅広い考え方ができるようになれるなと感じています。",
    companyAtmosphere:
      "みんな気さくに話しかけてくれたり、イベントごとでも全員が楽しめるような雰囲気です。こんな組織があるんだと最初びっくりしたのを覚えてます。",
  },
  {
    id: 15,
    name: "東 一虎",
    joiningDay: "2021",
    position: "ディレクター",
    image: "higashi.jpg",
    introduce: "小さな改善の積み重ねが会社全体の重要な生産性を生み出す",
    joiningReason:
      "代表取締役のお人柄や社名「GROW」に込められた想い、SESのため職場環境を変えやすいことに魅力を感じ入社しました。特に代表から「自分が会社で儲けようとは思っていない。若い人が自社で成長してステップアップしていってもらいたい」とお聞きしたことが大きな動機になりました。",
    motivation:
      "私はディレクターなのですが、以前の職場も含め業務改善へ積極的に取り組んできたので、それがうまくいくと「よし！」とやりがいを感じます。2024年1月現在の現場では業務内容があまり整理されていなかったことも手伝って、改善後はチーム全員の定時が1時間短縮となりました。",
    growth:
      "前職でメンタルをやられていたのですが、社内・現場ともに人に恵まれかなり回復できました。現場では途中でプレイングマネージャーへの昇格オファーをいただき、現在は貴重な経験を積めています。",
    companyAtmosphere:
      "皆さんいい方で色々なタイプの人がいます。20代が圧倒的に多く、「将来ITエンジニアとして活躍したい」と思っている方が多いのですが、キラキラしていたり堅実に一歩ずつ進んでいたりと様々です。",
  },
];

export default employees;