<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <MenuTitle :headingText="title" :headingSubText="subTitle"/>
      <section class="p-employeeDetail">
        <div class="p-employeeDetail__inner">
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
import MenuTitle from "@/components/common/MenuTitle.vue";
import employees from "@/const/employees.js";

const route = getCurrentInstance().appContext.config.globalProperties.$route;
const employee = ref(employees[Number(route.params.id) - 1]);

const title = ref("社員詳細");
const subTitle = ref("EMPLOYEE");


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

.p-employeeDetail__title {
  font-size: 32px;
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
  font-size: 32px;
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
