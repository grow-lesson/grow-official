<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="p-employeeDetail">
        <div class="p-employeeDetail__inner">
          <h2 class="p-employeeDetail__heading">社員詳細</h2>
          <div class="p-employeeDetail__container">
            <h3 class="p-employeeDetail__title">高橋 有希</h3>
            <figure class="p-employeeDetail__image">
              <img src="../assets/images/kanno.png" alt="ダミー画像" />
            </figure>
            <h4 class="p-employeeDetail__post">エンジニア</h4>
            <p class="p-employeeDetail__text">
              ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
            </p>
            <div class="p-employeeDetail-Career">
              <h4 class="p-employeeDetail-Career__title">実績</h4>
              <ul class="p-employeeDetail-Career__box">
                <li class="p-employeeDetail-Career__item">
                  <p class="p-employeeDetail-Career__date">2023.01〜</p>
                  <p class="p-employeeDetail-Career__text">
                    ダミーテキストダミーテキストダミーテキスト
                  </p>
                  <div class="p-employeeDetail-Career__tagBox">
                    <div class="p-employeeDetail-Career__tag">HTML</div>
                    <div class="p-employeeDetail-Career__tag">CSS</div>
                    <div class="p-employeeDetail-Career__tag">Vue.js</div>
                  </div>
                </li>

                <li class="p-employeeDetail-Career__item">
                  <p class="p-employeeDetail-Career__date">2023.07〜</p>
                  <p class="p-employeeDetail-Career__text">
                    ダミーテキストダミーテキストダミーテキスト
                  </p>
                  <div class="p-employeeDetail-Career__tagBox">
                    <div class="p-employeeDetail-Career__tag">React.js</div>
                  </div>
                </li>

                <li class="p-employeeDetail-Career__item">
                  <p class="p-employeeDetail-Career__date">2023.07〜</p>
                  <p class="p-employeeDetail-Career__text">
                    ダミーテキストダミーテキストダミーテキスト
                  </p>
                  <div class="p-employeeDetail-Career__tagBox">
                    <div class="p-employeeDetail-Career__tag">React.js</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="p-employeeDetail__backBtn">
              <a href="">戻る</a>
            </div>
          </div>
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
  name: "EmployeeDetailPage",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.wrap {
  display: flex;
  /* height: 100%; */
}

.main {
  width: 50%;
}

@media screen and (max-width: 767px) {
  .main {
    width: 100%;
  }
}

.p-employeeDetail {
  width: 100%;
  min-height: calc(100vh - 50px);
  padding-bottom: 50px;
  background-color: #fff;
}

.p-employeeDetail__inner {
  /* max-width: 445px; */
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 100px 20px 40px;
}

.p-employeeDetail__container {
  margin-top: 30px;
}

.p-employeeDetail__image {
  margin: 0 auto;
  text-align: center;
}

.p-employeeDetail__heading {
  font-size: 30px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

.p-employeeDetail__heading::before {
  content: "EMPLOYEE";
  position: absolute;
  right: -255px;
  top: -28px;
  font-size: 45px;
  font-weight: bold;
  color: #bfbebe;
  letter-spacing: 0.05em;
  z-index: -1;
}

.p-employeeDetail__title {
  font-size: 36px;
  position: relative;
  margin-bottom: 30px;
  font-weight: 600;
  text-align: center;
}

.p-employeeDetail__title::after {
  content: "Takahashi Yuki";
  position: absolute;
  top: 46px;
  left: 0;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #000;
}

.p-employeeDetail__post {
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}

.p-employeeDetail__text {
  color: #000;
  font-size: 16px;
  padding: 0 10px;
  margin-top: 5px;
}

.p-employeeDetail-Career__title {
  color: #000;
  font-size: 18px;
  margin-top: 30px;
  font-weight: bold;
}

.p-employeeDetail-Career__item {
  padding: 10px 10px 20px;
}

.p-employeeDetail-Career__item:not(:last-child) {
  border-bottom: 1px solid;
}

.p-employeeDetail-Career__date {
  color: #000;
  font-size: 16px;
  line-height: 1;
}

.p-employeeDetail-Career__text {
  color: #000;
  font-size: 16px;
}

.p-employeeDetail-Career__tagBox {
  display: flex;
  gap: 5px;
}

.p-employeeDetail-Career__tag {
  background-color: #e0dede;
  padding: 2px 10px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: bold;
}

.p-employeeDetail__backBtn {
  margin-top: 20px;
}

.p-employeeDetail__backBtn a {
  background-color: #000;
  padding: 7px 18px;
  font-size: 14px;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
}

footer {
  height: 50px;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
