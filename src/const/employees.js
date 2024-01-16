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
    position: 'エンジニア',
    image: 'hinata.png',
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
    position: 'エンジニア ※業務委託',
    image: 'black.png',
    introduce: '「喋れる強強エンジニア」を目指しています！',
    joiningReason:
      "株式会社GROWのビジョンやフレンドリーな社風に魅力を感じ、成長の機会を求めて入社しました。",
    motivation: "新しい技術や課題に取り組むことで、常にやりがいを感じています。",
    growth:
      "入社当初は技術的な課題に苦しみましたが、先輩方のサポートを受けながら着実にスキルを向上させ、自分でも驚くほど成長できました。",
    companyAtmosphere:
      "株式会社GROWはチームワークが重視され、オープンな雰囲気が漂っています。同僚たちと協力してプロジェクトを進める中で、クリエイティブでポジティブなエネルギーを感じています。"
  },
];

export default employees;