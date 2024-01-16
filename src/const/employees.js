const employees = [
  {
    id: 1,
    name: '松原 勇志',
    joiningDay: '2021',
    position: 'エンジニア',
    image: 'matsubara.jpeg',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"
  },
  {
    id: 2,
    name: '田丸 太一',
    joiningDay: '2022',
    position: 'エンジニア',
    image: 'tamaru.jpeg',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"
  },
  {
    id: 3,
    name: '日向 一樹',
    joiningDay: '2022',
    position: 'フロントエンドエンジニア',
    image: 'hinata.png',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "私は技術を使って世界に影響を与えたいと思い、このIT会社に魅力を感じました。最先端の技術に触れることができ、イノベーションを推進する環境がここにはあります。",
    motivation: "プロジェクトごとに新しい課題に取り組むことができ、それを解決する過程で自己成長を実感できます。また、製品やサービスが社会にポジティブな影響を与えることを目の当たりにすると、大きなやりがいを感じます。",
    growth:
      "技術スキルだけでなく、チームワークやプロジェクト管理の能力も向上しました。また、複雑な問題を解決するための戦略的思考も養われています。",
    companyAtmosphere:
      "GROWの文化は、常に学び、成長し続けることを促しています。仲間たちは支え合い、刺激し合う環境があり、非常にポジティブで刺激的です。このような環境は、仕事の質を高めるだけでなく、プライベートな成長にもつながっています。"
  },
  {
    id: 4,
    name: '原田 和也',
    joiningDay: '2021',
    position: 'エンジニア',
    image: 'harada.jpeg',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"

  },
  {
    id: 5,
    name: '菅野 祥輝',
    joiningDay: '2022',
    position: 'エンジニア',
    image: 'kanno.png',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"

  },
  {
    id: 6,
    name: '松永 卓也',
    joiningDay: '2022',
    position: 'エンジニア',
    image: 'matsunaga.jpeg',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"
  },
  {
    id: 7,
    name: '山岸 陸斗',
    joiningDay: '2022',
    position: 'エンジニア',
    image: 'yamagishi.jpeg',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"
  },
  {
    id: 8,
    name: '北澤 弦太',
    joiningDay: '2023',
    position: 'エンジニア',
    image: 'kitazawa.jpeg',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"
  },
  {
    id: 9,
    name: '高橋 有希',
    joiningDay: '2023',
    position: 'エンジニア',
    image: 'takahashi.jpeg',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"
  },
  {
    id: 10,
    name: '藤井 優子',
    joiningDay: '2022',
    position: 'エンジニア',
    image: 'fujii.jpeg',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"
  },
  {
    id: 11,
    name: '土屋 暖乃',
    joiningDay: '2023',
    position: 'エンジニア',
    image: 'tuchiya.jpeg',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"
  },
  {
    id: 12,
    name: '佐々木 凌',
    joiningDay: '2022',
    position: 'エンジニア ※弊社子会社所属',
    image: 'sasakiryo.jpeg',
  },
  {
    id: 13,
    name: '福井 涼太',
    joiningDay: '2021',
    position: 'エンジニア ※弊社子会社所属',
    image: 'fukui.jpeg',
  },
  {
    id: 14,
    name: '金森 翔',
    joiningDay: 'Kanamori sho',
    position: 'フロントエンドエンジニア ※業務委託',
    image: 'kanamori.jpg',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "今後のキャリアについて悩んでいた時に、お声がけいただきました。エンジニアとして活躍しながら、自分のやりたいこととの親和性があり、2軸で活動できています。",
    motivation: "淡々と仕事をこなしながら、やりたいことができているので、安定しながら挑戦できることですかね。収入に関しても大きく変化し、心の余裕もできてきました。",
    growth:
      "現場の違う仲間とコミュニケーションを取りながら仕事ができるので、別の視点や領域の知識を得られ、幅広い考え方ができるようになれるなと感じています。",
    companyAtmosphere:
      "みんな気さくに話しかけてくれたり、イベントごとでも全員が楽しめるような雰囲気です。こんな組織があるんだと最初びっくりしたのを覚えてます。"
  },
];

export default employees;