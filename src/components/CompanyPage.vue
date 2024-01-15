<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="p-company fadeUp">
        <section class="p-company__top">
          <h1 class="p-company__toptitle">事業内容</h1>
          <h2 class="p-company__subtitle">BUSINESS</h2>
        </section>
        <div class="p-company__content">
          <section class="p-company__photo">
            <div class="p-company__inner">
              <div class="p-company__select">
                <h2
                  :class="{ 'selected-title': currentPhotoIndex === 0 }"
                  @click="changeTabByTitle(0)"
                >
                  {{ titles[0] }}
                </h2>
                <h2
                  :class="{ 'selected-title': currentPhotoIndex === 1 }"
                  @click="changeTabByTitle(1)"
                >
                  {{ titles[1] }}
                </h2>
                <h2
                  :class="{ 'selected-title': currentPhotoIndex === 2 }"
                  @click="changeTabByTitle(2)"
                >
                  {{ titles[2] }}
                </h2>
              </div>
            </div>
            <div class="demophoto">
              <img :src="currentPhoto.src" :alt="currentPhoto.alt" />
              <button @click="changeTab('prev')" class="arrow arrow-left">
                &lt;
              </button>
              <button @click="changeTab('next')" class="arrow arrow-right">
                &gt;
              </button>
            </div>
            <p class="p-company__article">{{ currentArticle }}</p>
          </section>

          <section class="p-company__text">
            <h1 class="p-company__title">会社概要</h1>
            <ul class="p-company__box">
              <li class="p-company__item">
                <h2 class="p-company__subheading">株式会社GROW</h2>
              </li>
              <li class="p-company__item">
                <div class="p-company__introduction">
                  <h2 class="p-company__subheading">代表</h2>
                  <p class="p-company__detali">井上裕之</p>
                </div>
              </li>
              <li class="p-company__item">
                <div class="p-company__introduction">
                  <h2 class="p-company__subheading">住所</h2>
                  <p class="p-company__detali">〒150-0002</p>
                  <p class="p-company__detali">
                    東京都渋谷区渋谷 1-11-3 第一小山ビル 6F
                  </p>
                </div>
              </li>
              <li class="p-company__item">
                <div class="p-company__introduction">
                  <h2 class="p-company__subheading">設立</h2>
                  <p class="p-company__detali">令和２年４月６日</p>
                </div>
              </li>
              <li class="p-company__item">
                <div class="p-company__introduction">
                  <h2 class="p-company__subheading">資本金</h2>
                  <p class="p-company__detali">200万</p>
                </div>
              </li>
              <li class="p-company__item">
                <div class="p-company__introduction">
                  <h2 class="p-company__subheading">事業概要</h2>
                  <p class="p-company__detali">Web制作</p>
                  <p class="p-company__detali">システム受託開発</p>
                  <p class="p-company__detali">
                    プログラミング学習サービス事業
                  </p>
                  <p class="p-company__detali">
                    システムエンジニアリングサービス事業
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section class="p-company__bottom">
            <div class="p-company__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6529180127523!2d139.69986828907926!3d35.66092206043595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b589a5da221%3A0x826ed45ad30a43f4!2z56ys5LiA5bCP5bGx44OT44Or!5e0!3m2!1sja!2sjp!4v1705345121624!5m2!1sja!2sjp"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "CompanyPage",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      currentTab: "company-info",
      photos: [
        { src: require("@/assets/business01.jpg"), alt: "写真1" },
        { src: require("@/assets/business02.jpg"), alt: "写真2" },
        { src: require("@/assets/business03.jpg"), alt: "写真3" },
      ],
      titles: [
        "エンジニアリングサービス",
        "Web制作/システム開発",
        "エンジニア育成事業",
      ],
      articles: [
        "即戦力になるエンジニアをお客様の悩みに沿ってマッチングさせるサービスです。 短期間から長期間までお客様のニーズに合わせて、適材適所のエンジニア人材を提供いたします。 お気軽にお問合せ頂ければ、ヒアリングさせて頂き、ご要望にあった人材を提供いたします。",
        "LPなどの 簡単なサイトから、業務システムまで、お客様のご要望に沿った形を提案しながら作り上げていきます。また、お客様のご要望だけでなく、市場動向、流行り、適切な費用対効果を含め社会的ニーズに提案をさせて頂きます。",
        "会社に属して働く環境から個人が仕事をするという世の中の流れの中で、戦っていける人材を育成致します。特にエンジニアは今後も需要が高まる職業です。問題解決をするスキルも必要になります。単なるエンジニアではなく人としての育成を含め、未来で戦っていける人材育成を目指します。",
      ],
      currentPhotoIndex: 0,
    };
  },
  computed: {
    currentPhoto() {
      return this.photos[this.currentPhotoIndex];
    },

    currentArticle() {
      return this.articles[this.currentPhotoIndex];
    },
  },
  methods: {
    changeTab(direction) {
      if (direction === "prev") {
        this.currentPhotoIndex =
          (this.currentPhotoIndex - 1 + this.photos.length) %
          this.photos.length;
      } else if (direction === "next") {
        this.currentPhotoIndex =
          (this.currentPhotoIndex + 1) % this.photos.length;
      }
    },
    changeTabByTitle(index) {
      this.currentPhotoIndex = index;
    },
  },
};
</script>

<style>
.wrap {
  display: flex;
}

.main {
  width: 50%;
}

.p-company {
  max-width: 100%;
  background-color: #eae7e7;
}

.p-company__content {
  padding-top: 180px;
}

.p-company__top {
  position: relative;
  font-weight: bold;
  animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 1;
}

.p-company__toptitle {
  font-size: 25px;
  font-size: 1.6rem;
  padding-top: 100px;
  padding-left: 20px;
  position: absolute;
  z-index: 10;
}

.p-company__subtitle {
  font-size: 40px;
  padding-top: 75px;
  padding-left: 95px;
  opacity: 0.5;
  color: #7a8086;
  position: absolute;
  font-weight: 800;
  font-style: italic;
  z-index: 1;
}

.selected-title {
  background-color: #777;
  line-height: 50px;
  text-align: center;
  max-height: 50px;
  color: #fff;
}

.p-company__select {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  width: 100%;
}

.p-company__inner {
}

.p-company__photo {
  width: 100%;
}

.p-company__article {
  font-size: 20px;
  line-height: 2;
  padding: 25px;
}


.p-company__title {
  font-size: 25px;
  font-size: 1.6rem;
  font-weight: bold;
  padding-top: 50px;
  padding-left: 20px;
}

.p-company__introduction {
}

.p-company__box {
  padding: 0 20px;
}

.p-company__item {
  border-bottom: 1px solid #cccdce;
  padding: 10px 0;
}

.p-company__li:last-child {
  border-bottom: none;
}

.p-company__subheading {
  font-weight: 900;
  font-size: 18px;
}

.p-company__detali {
  padding-left: 30px;
  font-weight: 300;
  font-size: 16px;
}

.p-company__map {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.p-company__map iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.p-company__bottom {
  padding: 20px;
}

.demophoto {
  display: flex;
  justify-content: center;
  /* 水平方向に中央に配置 */
  align-items: center;
  /* 垂直方向に中央に配置 */
  height: 100%;
  /* 親要素に対して高さ100%で占める */
  position: relative;
}
.demophoto img {
  width: 100%;
}

.photo-container {
  position: relative;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  font-size: 36px;
  color: #fff;
}

.arrow-left {
  left: 0;
}

.arrow-right {
  right: 0;
}

.fadeUp {
  animation-name: fadeUpAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.p-company__select h2:hover,
.p-company__select h2:focus {
  opacity: 0.7;
}

/*SPレスポンシズ */
@media screen and (max-width: 768px) {
  .header {
    display: none;
  }

  .wrap {
    flex-direction: column;
  }

  .main {
    width: 100%;
  }
}
</style>
