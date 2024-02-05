<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <div class="top-hero">
        <div class="top-heroBackImg">
          <!-- <div class="top-logo">
            <img src="../assets/growlogo.png" />
          </div> -->
          <div
            class="top-scrolldown"
            @click="scrollToSection('top-philosophy')"
          >
            <span>Scroll</span>
          </div>
        </div>
      </div>
      <section class="top-philosophy" id="top-philosophy">
        <section class="heading">
          <MenuTitle :headingText="title[0]" :headingSubText="subTitle[0]" />
        </section>
        <div class="top-textBox">
          <p class="top-text">
            「自分の可能性に気づく経験」や「人の力」を伸ばすことが本当に「環境」に依存するものであるならば、
            誰もが教育を受けられる環境が整えられるべきです。
          </p>
          <p class="top-markup">
            弊社ではエンジニアになる準備を<br />全面的に支援できる環境を整えております。
          </p>
        </div>
        <div class="top-read">
          <a @click="goToPage('Philosophy')" class="top-read-text">
            READ MORE ＞＞
          </a>
        </div>
      </section>
      <section class="top-company">
        <section class="heading">
          <MenuTitle :headingText="title[1]" :headingSubText="subTitle[1]" />
        </section>
        <div class="top-companyImg">
          <img src="../assets/business01.jpg" />
        </div>
        <div class="top-textBox">
          <p class="top-text">
            弊社ではシステムエンジニアリングサービス、Web制作・システム開発、エンジニア育成事業を進めており、お客様のご要望に沿った最適なサービスを提供します
          </p>
        </div>
        <div class="top-read">
          <a @click="goToPage('Company')" class="top-read-text">
            READ MORE ＞＞
          </a>
        </div>
      </section>
      <section class="top-employee">
        <section class="heading">
          <MenuTitle :headingText="title[2]" :headingSubText="subTitle[2]" />
        </section>
        <div class="top-employeeImg">
          <img src="../assets/whole.jpg" />
        </div>
        <div class="top-textBox">
          <p class="top-text">
            GROWは、行動力と自走力の人たちの集まりです。<br />個性や自分の人生を大事にしながらも、手を取り合い、一人では実現できない理想に挑んでいるメンバーを紹介します。
          </p>
        </div>
        <div class="top-read">
          <a @click="goToPage('Employee')" class="top-read-text">
            READ MORE ＞＞
          </a>
        </div>
      </section>
      <section class="top-contact">
        <div class="top-buttonWrap">
          <button class="top-button" @click="goToPage('Contact')">
            お問い合わせはこちら
          </button>
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const title = ref(["企業理念", "事業内容", "社員紹介"]);
const subTitle = ref(["VISION", "BUSINESS", "EMPLOYEE"]);

const router = useRouter();

const goToPage = (pageName) => {
  router.push({ name: `${pageName}Page` });
};
const scrollToSection = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  sectionElement.scrollIntoView({ behavior: "smooth" });
};

onMounted(() => {
  // Scroll to the top of the window when the component is mounted
  window.scrollTo(0, 0);
});
</script>
<style>
/* 基本設定 */
.wrap {
  display: flex;
  /* height: 100vh; */
  position: relative;
  overflow: hidden;
  background-attachment: scroll;
}

.main {
  overflow: auto;
  /*IE(Internet Explorer)・Microsoft Edgeへの対応*/
  -ms-overflow-style: none;
  /*Firefoxへの対応*/
  scrollbar-width: none;
}

/*Google Chrome、Safariへの対応*/
.main::-webkit-scrollbar {
  display: none;
}

.top-textBox {
  margin: 0 15px 30px;
  padding: 30px 0 0 0;
}

.top-text {
  font-size: 18px;
}

.top-markup {
  margin-top: 10px;
  font-size: 22px;
  text-align: center;
  color: #1b6d92;
}

.top-read {
  display: flex;
  margin: 20px 10px 0 0;
  justify-content: flex-end;
}

.top-read a {
  text-decoration: underline;
}

.top-read a {
  font-size: 14px;
  cursor: pointer;
}

.top-read a:hover {
  opacity: 0.7;
}

.top-read-text {
  letter-spacing: 1px;
}

/* ヒーローイメージ */
.top-hero {
  background-color: #b7b7b7;
}

.top-heroBackImg {
  position: relative;
  width: 100%;
  height: 90vh;
  /* 変数をサポートしていないブラウザのフォールバック */
  height: calc(var(--vh, 1vh) * 90);
  background-image: url(./../assets/images/hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 37.5vw;
}

.top-logo {
  position: absolute;
  display: none;
  top: 20px;
  left: 20px;
}

.top-scrolldown {
  /*描画位置※位置は適宜調整してください*/
  position: absolute;
  bottom: 2%;
  right: 50%;
  /*矢印の動き1秒かけて永遠にループ*/
  animation: arrowmove 1.7s ease-in-out infinite;
  cursor: pointer;
}

/*下からの距離が変化して全体が下→上→下に動く*/
@keyframes arrowmove {
  0% {
    bottom: -1%;
  }

  50% {
    bottom: 2%;
  }

  100% {
    bottom: -1%;
  }
}

/*Scrollテキストの描写*/
.top-scrolldown span {
  /*描画位置*/
  position: absolute;
  left: -22px;
  bottom: 10px;
  /*テキストの形状*/
  color: #146c94;
  font-size: 1rem;
  letter-spacing: 0.05em;
  /*縦書き設定*/
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}

/* 矢印の描写 */
.top-scrolldown:before {
  content: "";
  /*描画位置*/
  position: absolute;
  bottom: 0;
  right: -6px;
  /*矢印の形状*/
  width: 2px;
  height: 20px;
  background: #146c94;
  transform: skewX(-31deg);
}

.top-scrolldown:after {
  content: "";
  /*描画位置*/
  position: absolute;
  bottom: 0;
  right: 0;
  /*矢印の形状*/
  width: 2px;
  height: 60px;
  background: #146c94;
}

/* 企業理念 */
.top-philosophy {
  width: 100%;
  padding: 60px 20px;
  background-color: #d1d1d1;
}

/* 事業内容 */
.top-company {
  width: 100%;
  padding: 60px 20px;
  background-color: #e5e5e5;
}

.top-companyImg {
  padding: 30px 0 0 0;
}

.top-companyImg img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
}

/* 社員紹介 */
.top-employee {
  width: 100%;
  padding: 60px 20px;
  background-color: #d1d1d1;
}

.top-employeeImg {
  padding: 30px 0 0 0;
}

.top-employeeImg img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  /* object-position: 50% 100%; */
}

/* お問い合わせ */
.top-contact {
  width: 100%;
  padding: 20px 0 20px 0;
  background-color: #e5e5e5;
}

.top-buttonWrap {
  width: 100%;
  padding: 20px 0;
  text-align: center;
}

.top-button {
  width: 300px;
  height: 50px;
  padding: 2px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin: auto;
  font-size: 14px;
  transition: all 0.5s;
}

.top-button:hover {
  background-color: gray;
}

@media (min-width: 1181px) {
  .main {
    width: 50%;
  }

  .top-heroBackImg {
    width: 100%;
  }
}

@media (min-width: 422px) and (max-width: 1180px) {
  .main {
    width: 100%;
  }

  .top-logo {
    display: block;
  }

  .top-logo img {
    max-width: 200px;
  }

  .top-contact {
    padding: 20px 0 50px 0;
  }
}
@media (min-width: 375px) and (max-width: 1180px) {
  .top-heroBackImg {
    width: 100%;
    height: 77vw;
  }
  .main {
    margin-top: 64px;
  }
}

@media (max-width: 421px) {
  .top-textBox {
    margin: 0;
  }
  .top-text {
  font-size: 16px;
}

.top-markup {
  margin-top: 10px;
  font-size: 18px;
}
  .top-philosophy__text {
    font-size: 14px;
  }

  .top-philosophy__markup {
    font-size: 18px;
  }

  .top-logo {
    display: block;
  }

  .top-logo img {
    max-width: 180px;
  }

  .top-read p {
    font-size: 10px;
  }
}
</style>
