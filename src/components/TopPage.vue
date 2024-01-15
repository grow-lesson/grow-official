<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <div class="top-contents">
        <div class="top-hero">
        </div>
        <section class="top-philosophy">
          <section class="heading">
            <h2 class="heading-title">企業理念
              <span class="heading-endTitle">VISION</span>
            </h2>
          </section>
          <div class="top-philosophy__textBox">
            <p class="top-philosophy__text">「自分の可能性に気づく経験」や「人の力」を伸ばすことが本当に「環境」に依存するものであるならば、
              誰もが教育を受けられる環境が整えられるべきです。
            </p>
            <p class="top-philosophy__markup">弊社ではエンジニアになる準備を<br>全面的に支援できる環境を整えております。</p>
          </div>
          <div class="top-read">
            <a @click="goToPhilosophyPage">
              <p>ReadMore>></p>
            </a>
          </div>
        </section>
        <section class="top-company">
          <section class="heading">
            <h2 class="heading-title">事業内容
              <span class="heading-endTitle">BUSINESS</span>
            </h2>
          </section>
          <div class="top-imgWrap">
            <div class="top-companyImg"></div>
          </div>
          <div class="top-read">
            <a @click="goToCompanyPage">
              <p>ReadMore>></p>
            </a>
          </div>
        </section>
        <section class="top-employee">
          <section class="heading">
            <h2 class="heading-title">社員紹介
              <span class="heading-endTitle">EMPLOYEE</span>
            </h2>
          </section>
          <div class="top-imgWrap">
            <div class="top-employeeImg"></div>
          </div>
          <div class="top-read">
            <a @click="goToEmployeePage">
              <p>ReadMore>></p>
            </a>
          </div>
        </section>
        <section class="top-accomplishment">
          <section class="heading">
            <h2 class="heading-title">実績
              <span class="heading-endTitleLittle">ACHIEVEMENTS</span>
            </h2>
          </section>
          <ul>
            <li>
              <article>
                <div class="accomplishment-flex">
                  <div class="accomplishment-img"></div>
                  <div class="accomplishment-block">
                    <p>2023.01</p>
                    <p>
                      てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li>
              <article>
                <div class="accomplishment-flex">
                  <div class="accomplishment-img"></div>
                  <div class="accomplishment-block">
                    <p>2023.01</p>
                    <p>
                      てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと
                    </p>
                  </div>
                </div>
              </article>
            </li>
          </ul>
          <div class="top-read">
            <a @click="goToAccomplishmentPage">
              <p>ReadMore>></p>
            </a>
          </div>
        </section>
        <section class="top-contact">
          <div class="top-buttonWrap">
            <button class="top-button" @click="goToContactPage">お問い合わせはコチラ</button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";
import { useRouter } from 'vue-router';

export default {
  name: "TopPage",
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    // Vue Routerを使用してページ間の遷移を行うメソッド

    const goToPhilosophyPage = () => {
      router.push({ name: "PhilosophyPage" });
    };

    const goToCompanyPage = () => {
      router.push({ name: "CompanyPage" });
    };

    const goToEmployeePage = () => {
      router.push({ name: "EmployeePage" });
    };

    const goToEmployeeDetailPage = () => {
      router.push({ name: "EmployeeDetailPage" });
    };

    const goToAccomplishmentPage = () => {
      router.push({ name: "AccomplishmentPage" });
    };

    const goToContactPage = () => {
      router.push({ name: "ContactPage" });
    };
    return {
      goToPhilosophyPage,
      goToCompanyPage,
      goToEmployeePage,
      goToEmployeeDetailPage,
      goToAccomplishmentPage,
      goToContactPage,
    };
  },
};
</script>

<style>
.wrap {
  display: flex;
  /* height: 100vh; */
  position: relative;
  overflow: hidden;
  background-attachment: scroll;
}

.main {
  width: 420px;
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

.heading {
  padding: 10px 0 10px 20px;
}

.heading-title {
  position: relative;
  font-size: 25px;
  font-weight: bold;
}

.heading-endTitle {
  position: absolute;
  top: -12px;
  left: 75px;
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  opacity: 0.3;
}

.heading-endTitleLittle {
  position: absolute;
  top: -12px;
  left: 25px;
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  opacity: 0.3;
}

.top-hero {
  width: 100%;
  height: 100vh;
  /* 変数をサポートしていないブラウザのフォールバック */
  height: calc(var(--vh, 1vh) * 100);
  /* background-image: url(./../assets/test1.jpg);
  background-repeat: no-repeat;
  background-size: cover; */
  background-color: #333333;
}

.top-imgWrap {
  width: 100%;
  height: auto;
}

.top-philosophy {
  width: 100%;
  height: 330px;
  background-color: #b7b7b7;
}

.top-philosophy__textBox {
  margin: 10px 15px;
}

.top-philosophy__text {
  font-size: 16px;
}

.top-philosophy__markup {
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
  color: #1b6d92;
}

.top-philosophyImg {
  width: 100%;
  height: 150px;
  background-color: #000;
}

.top-company {
  width: 100%;
  height: 380px;
  background-color: #e5e5e5;
}

.top-companyImg,
.top-employeeImg {
  width: 100%;
  height: 200px;
  background-color: #000;
}

.top-employee {
  width: 100%;
  height: 380px;
  background-color: #b7b7b7;
}

.top-accomplishment {
  width: 100%;
  height: 500px;
  background-color: #e5e5e5;
}

.top-contact {
  width: 100%;
  height: auto;
  background-color: #b7b7b7;
}

.top-title {
  padding: 0 0 0 20px;
}

.top-read {
  display: flex;
  margin: 20px 10px 0 0;
  justify-content: flex-end;
}

.top-buttonWrap {
  width: 100%;
  text-align: center;
}

.top-button {
  padding: 10px 20px;
  background-color: aqua;
  border: 1px solid #222222;
  border-radius: 12px;
}

.accomplishment-flex {
  display: flex;
  margin-top: 24px;
}

.accomplishment-img {
  width: 230px;
  background-color: aqua;
}

.accomplishment-block {
  padding: 15px 10px;
  width: 300px;
  background-color: gainsboro;
}

.accomplishment-block p {
  font-size: 11px;
}

.accomplishment-block p:nth-child(2) {
  margin-top: 20px;
}

@media (max-width: 1180px) {
  .main {
    width: 100%;
  }
}
</style>
