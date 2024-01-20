<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <div class="top-contents">
        <div class="top-hero">
        </div>
        <section class="top-philosophy">
          <section class="heading">
            <MenuTitle :headingText="title[0]" :headingSubText="subTitle[0]" />
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
            <MenuTitle :headingText="title[1]" :headingSubText="subTitle[1]" />
          </section>
          <div class="top-companyImg">
            <img src="../assets/business01.jpg">
          </div>
          <div class="top-philosophy__textBox">
            <p class="top-philosophy__text">弊社ではエンジニアリングサービス、Web制作・システム開発、エンジニア育成事業を進めており、お客様のご要望に沿った最適なサービスを提供する
            </p>
          </div>
          <div class="top-read">
            <a @click="goToCompanyPage">
              <p>ReadMore>></p>
            </a>
          </div>
        </section>
        <section class="top-employee">
          <section class="heading">
            <MenuTitle :headingText="title[2]" :headingSubText="subTitle[2]" />
          </section>
          <div class="top-employeeImg">
            <img src="../assets/whole.jpg">
          </div>
          <div class="top-read">
            <a @click="goToEmployeePage">
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
import MenuTitle from "@/components/common/MenuTitle.vue";
import { ref } from 'vue';
import { useRouter, } from 'vue-router';

const title = ref([
  "企業理念",
  "事業内容",
  "社員紹介",
]);
const subTitle = ref([
  "VISION",
  "BUSINESS",
  "EMPLOYEE",
]);
console.log(title)
export default {
  name: "TopPage",
  components: {
    Header,
    Footer,
    MenuTitle
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
      title,
      subTitle,
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

.top-hero {
  width: 100%;
  height: 100vh;
  /* 変数をサポートしていないブラウザのフォールバック */
  height: calc(var(--vh, 1vh) * 100);
  background-image: url(./../assets/hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #333333;
}

.top-imgWrap {
  width: 100%;
  height: auto;
}


.top-philosophy {
  width: 100%;
  height: 430px;
  padding: 30px;
  background-color: #b7b7b7;
}

.top-philosophy__textBox {
  margin: 0 15px 30px;
  padding: 30px 0 0 0;
}

.top-philosophy__text {
  font-size: 20px;
}

.top-philosophy__markup {
  margin-top: 10px;
  font-size: 24px;
  text-align: center;
  color: #1b6d92;
}

.top-company {
  width: 100%;
  height: 610px;
  padding: 30px;
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

.top-employee {
  width: 100%;
  height: 510px;
  padding: 30px;
  background-color: #b7b7b7;
}

.top-employeeImg {
  padding: 30px 0 0 0;
}

.top-employeeImg img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: 50% 100%;
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

.top-read p {
  font-size: 15px;
}

.top-read p:hover {
  color: #0056b3;
}

.top-buttonWrap {
  width: 100%;
  padding: 20px 0;
  text-align: center;
}

.top-button {
  width: 200px;
  height: 35px;
  padding: 2px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin: auto;
  font-size: 14px;
}

.top-button:hover {
  background-color: #0056b3;
}

@media (min-width: 1181px) {

  .top-companyImg,
  .top-employeeImg {
    width: 90%;
    margin: 0 auto;
  }

}

@media (min-width: 1181px) {
  .main {
    width: 50%;
  }
}

@media (min-width: 422px) and (max-width: 1180px) {
  .main {
    width: 100%;
  }
}


@media (max-width: 421px) {
  .top-philosophy__text {
    font-size: 14px;
  }

  .top-philosophy__markup {
    font-size: 18px;
  }

  .top-read p {
    font-size: 10px;
  }
}
</style>
