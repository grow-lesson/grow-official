<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="p-company fadeUp">
        <section class="p-company__top">
          <MenuTitle :headingText="title" :headingSubText="subTitle" />
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
                  <p class="p-company__detali">本社</p>
                  <p class="p-company__detali">〒150-0002</p>
                  <p class="p-company__detali">
                    東京都渋谷区渋谷 1-11-3 第一小山ビル 6F
                  </p>
                  <br />
                  <p class="p-company__detali">名古屋営業所</p>
                  <p class="p-company__detali">〒464-0067</p>
                  <p class="p-company__detali">
                    愛知県名古屋市千種区池下1-6-20 チサンマンション池下403
                  </p>
                </div>
              </li>
              <li class="p-company__item">
                <div class="p-company__introduction">
                  <h2 class="p-company__subheading">設立</h2>
                  <p class="p-company__detali">2020年4月6日</p>
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
                  <p class="p-company__detali">
                    システムエンジニアリングサービス事業
                  </p>
                  <p class="p-company__detali">Web制作</p>
                  <p class="p-company__detali">システム受託開発</p>
                  <p class="p-company__detali">
                    プログラミング学習サービス事業
                  </p>
                  <p class="p-company__detali">インフラ事業</p>
                  <p class="p-company__detali">通信事業</p>
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

<script setup>
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";
import MenuTitle from "@/components/common/MenuTitle.vue";
import { ref, computed, onMounted } from "vue";

const currentPhotoIndex = ref(0);
const title = ref("事業内容");
const subTitle = ref("BUSINESS");

const photos = ref([
  { src: require("@/assets/business01.jpg"), alt: "写真1" },
  { src: require("@/assets/business02.jpg"), alt: "写真2" },
  { src: require("@/assets/business03.jpg"), alt: "写真3" },
]);

const titles = ref(["SES事業", "Web制作/システム開発", "エンジニア育成事業"]);

const articles = ref([
  "即戦力となるエンジニアをお客様の悩みに沿ってマッチングを行うサービスです。 短期間から長期間までお客様のニーズに合わせて、適材適所のエンジニアを提供いたします。 お気軽にお問い合せ頂ければ、ヒアリングをさせて頂き、ご要望にあった人材を提供させていただきます。",
  "LPなどの簡単なWebサイトから、業務システムまで、お客様のご要望に沿った形をご提案しながら作り上げていきます。また、お客様のご要望だけでなく、市場動向、流行り、適切な費用対効果を含め社会的ニーズに提案をさせていただきます。",
  "会社に属して働く環境から個人が仕事をするという世の中の流れの中で、戦っていける人材を育成いたします。特にエンジニアは今後も需要が高まる職業です。問題解決をするスキルも必要になり、単なるエンジニアではなく人としての育成を含め、未来で戦っていける人材育成を行います。",
]);

const currentPhoto = computed(() => photos.value[currentPhotoIndex.value]);
const currentArticle = computed(() => articles.value[currentPhotoIndex.value]);

function changeTab(direction) {
  if (direction === "prev") {
    currentPhotoIndex.value =
      (currentPhotoIndex.value - 1 + photos.value.length) % photos.value.length;
  } else if (direction === "next") {
    currentPhotoIndex.value =
      (currentPhotoIndex.value + 1) % photos.value.length;
  }
}

function changeTabByTitle(index) {
  currentPhotoIndex.value = index;
}

onMounted(() => {
  // Scroll to the top of the window when the component is mounted
  window.scrollTo(0, 0);
});
</script>

<style>
.wrap {
  display: flex;
}

.main {
  width: 50%;
}

@media screen and (max-width: 1180px) {
  .main {
    width: 100%;
  }
}

.p-company {
  max-width: 100%;
  padding-top: 100px;
  padding-bottom: 70px;
  background-color: #eae7e7;
}

.p-company__content {
  padding-top: 60px;
}

.p-company__top {
  position: relative;
  font-weight: bold;
  animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 1;
}

.selected-title {
  background-color: #777;
  text-align: center;
  color: #fff;
}
.selected-title:hover {
  opacity: 1 !important;
}

.p-company__select {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  width: 100%;
}
.p-company__select h2 {
  cursor: pointer;
  border: 1px solid #777;
  padding: 10px 0;
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
  align-items: center;
  height: 100%;
  position: relative;
}
.demophoto img {
  width: 100%;
  height: 500px;
  object-fit: cover;
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
  background-color: transparent !important;
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
@media screen and (max-width: 767px) {
  .header {
    display: none;
  }

  .wrap {
    flex-direction: column;
  }

  .main {
    width: 100%;
  }
  .p-company {
    max-width: 100%;
    padding-top: 100px;
    padding-bottom: 50px;
    background-color: #eae7e7;
  }
  .p-company__article {
    font-size: 14px;
    line-height: 2;
    padding: 20px;
  }
  .p-company__subheading {
    font-weight: 900;
    font-size: 16px;
  }

  .p-company__detali {
    padding-left: 20px;
    font-weight: 300;
    font-size: 14px;
  }

  .p-company__item {
    border-bottom: 1px solid #cccdce;
    padding: 5px 0;
  }

  h2 {
    padding: 8px 0px;
    font-size: 10px;
  }

  .selected-title {
    background-color: #777;
    text-align: center;
    max-height: 100%;
    color: #fff;
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
    font-size: 25px;
    color: #fff;
    background-color: transparent !important;
  }

  .demophoto img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>
