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
              <img src="https://placehold.jp/150x150.png" alt="ダミー画像" />
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
      <!-- <Footer /> -->
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/SideHeader.vue";
// import Footer from "@/components/common/Footer.vue";

export default {
  name: "EmployeeDetailPage",
  components: {
    Header,
    // Footer,
  },
};
</script>

<style>
.wrap {
  display: flex;
  height: 100%;
}

.main {
  width: 50%;
}

.p-employeeDetail {
  width: 100%;
  height: 100%;
  background-color: rgb(191, 242, 116);
}

.p-employeeDetail__inner {
  max-width: 445px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 40px 20px;
}

.p-employeeDetail__container {
  margin-top: 30px;
}

.p-employeeDetail__image {
  margin: 0 auto;
  text-align: center;
}

.p-employeeDetail__heading {
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}
.p-employeeDetail__heading::before {
  content: "EMPLOYEE";
  position: absolute;
  right: -170px;
  top: -18px;
  font-size: 30px;
  font-weight: bold;
  color: #bfbebe;
  letter-spacing: 0.05em;
  z-index: -1;
}
.p-employeeDetail__title {
  font-size: 24px;
  position: relative;
  margin-bottom: 50px;
  font-weight: 600;
}
.p-employeeDetail__title::after {
  content: "Takahashi Yuki";
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  color: #000;
}
.p-employeeDetail__post {
  color: #000;
  font-size: 14px;
  font-weight: bold;
}
.p-employeeDetail__text {
  color: #000;
  font-size: 14px;
  padding: 0 10px;
  margin-top: 5px;
}
.p-employeeDetail-Career__title {
  color: #000;
  font-size: 14px;
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
  font-size: 14px;
  line-height: 1;
}
.p-employeeDetail-Career__text {
  color: #000;
  font-size: 14px;
}
.p-employeeDetail-Career__tagBox {
  display: flex;
  gap: 5px;
}
.p-employeeDetail-Career__tag {
  background-color: #e0dede;
  padding: 2px 30px;
  font-size: 12px;
  border-radius: 5px;
  font-weight: bold;
}
.p-employeeDetail__backBtn {
  margin-top: 20px;
}
.p-employeeDetail__backBtn a {
  background-color: #000;
  padding: 7px 18px;
  font-size: 12px;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
}
</style>
