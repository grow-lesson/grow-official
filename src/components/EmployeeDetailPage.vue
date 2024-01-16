<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="p-employeeDetail">
        <div class="p-employeeDetail__inner">
          <h2 class="p-employeeDetail__heading">社員詳細</h2>
          <div class="p-employeeDetail__container">
            <h3 class="p-employeeDetail__title">{{ employee.introduce }}</h3>
            <figure class="p-employeeDetail__image">
              <img :src="require(`@/assets/images/${employee.image}`)" alt="ダミー画像" />
            </figure>
            <h4 class="p-employeeDetail__post">{{ employee.description }}</h4>
            <div class="p-employeeDetail__additionalInfo">
              <h4>入社理由</h4>
              <p>{{ employee.joiningReason }}</p>

              <h4>やりがい</h4>
              <p>{{ employee.motivation }}</p>

              <h4>入社当時と比べて成長できた部分</h4>
              <p>{{ employee.growth }}</p>

              <h4>株式会社GROWや仲間の雰囲気について</h4>
              <p>{{ employee.companyAtmosphere }}</p>
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

<script setup>
import { ref,getCurrentInstance } from 'vue';
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";
import employees from "@/const/employees.js";

const route = getCurrentInstance().appContext.config.globalProperties.$route;
const employee = ref(employees[Number(route.params.id) - 1]);
console.dir(employee.value.name);


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
  background-color: #f6f1f1;
}

.p-employeeDetail__inner {
  /* max-width: 445px; */
  width: 100%;
  height: 100%;
  background-color: #f6f1f1;
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

.p-employeeDetail__post {
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}

.p-employeeDetail__title {
  font-size: 36px;
  position: relative;
  margin-bottom: 30px;
  font-weight: 600;
  text-align: center;
}

.p-employeeDetail__post {
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}

/* 追加した部分のスタイル */
.p-employeeDetail__additionalInfo {
  margin-top: 40px;
}

.p-employeeDetail__additionalInfo h4 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}

.p-employeeDetail__additionalInfo p {
  font-size: 18px;
  margin-top: 10px;
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
