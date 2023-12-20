<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <div class="top-contents">
        <div class="top-hero">
        </div>
        <section class="top-philosophy">
          <div class="heading">
            <h2 class="heading-title">企業理念</h2>
            <div class="heading-engTitle">VISION</div>
          </div>
          <div class="top-imgWrap">
            <div class="top-philosophyImg"></div>
          </div>
          <div class="top-read">
            <p>ReadMore>></p>
          </div>
        </section>
        <section class="top-company">
          <div class="heading">
            <h2 class="heading-title">事業内容</h2>
            <div class="heading-engTitle">BUSINESS</div>
          </div>
          <div class="top-imgWrap">
            <div class="top-companyImg"></div>
          </div>
          <div class="top-read">
            <p>ReadMore>></p>
          </div>
        </section>
        <section class="top-employee">
          <div class="heading">
            <h2 class="heading-title">社員紹介</h2>
            <div class="heading-engTitle">EMPLOYEE</div>
          </div>
          <div class="top-imgWrap">
            <div class="top-employeeImg"></div>
          </div>
          <div class="top-read">
            <p>ReadMore>></p>
          </div>
        </section>
        <section class="top-accomplishment">
          <div class="heading">
            <h2 class="heading-title">実績</h2>
            <div class="heading-engTitle">ACHIEVEMENTS</div>
          </div>
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
            <p>ReadMore>></p>
          </div>
        </section>
        <section class="top-contact">
          <div class="top-buttonWrap">
            <button class="top-button">お問い合わせはコチラ</button>
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

export default {
  name: "TopPage",
  components: {
    Header,
    Footer,
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
  position: relative;
  text-align: center;
  padding: 24px 0;
}

.heading-title {
  position: absolute;
  top: 35px;
  left: 20px;
  font-size: 25px;
  font-weight: bold;
}

.heading-engTitle {
  font-size: 32px;
  font-weight: bold;
  font-style: italic;
  opacity: 0.2;
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
}</style>
