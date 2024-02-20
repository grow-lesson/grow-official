<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="employeeDetail">
        <MenuTitle :headingText="title" :headingSubText="subTitle" />
        <div class="employeeDetail__inner">
          <div class="employeeDetail__container">
            <h3 class="employeeDetail__title wow animated fadeInUp">
              {{ employee.introduce }}
            </h3>
            <figure class="employeeDetail__image wow animated fadeInUp">
              <img
                :src="require(`@/assets/images/${employee.image}`)"
                alt="ダミー画像"
              />
            </figure>
            <h4 class="employeeDetail__post">{{ employee.description }}</h4>
            <div class="employeeDetail__additionalInfo">
              <div class="wrapBox wow animated fadeInUp">
                <h4>入社理由</h4>
                <p>{{ employee.joiningReason }}</p>
              </div>
              <div class="wrapBox wow animated fadeInUp">
                <h4>やりがい</h4>
                <p>{{ employee.motivation }}</p>
              </div>
              <div class="wrapBox wow animated fadeInUp">
                <h4>入社当時と比べて成長できた部分</h4>
                <p>{{ employee.growth }}</p>
              </div>
              <div class="wrapBox wow animated fadeInUp">
                <h4>株式会社GROWや仲間の雰囲気について</h4>
                <p>{{ employee.companyAtmosphere }}</p>
              </div>
            </div>
            <div class="employeeDetail__backBtn">
              <a @click="goToEmployeePage()">戻る</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";
import MenuTitle from "@/components/common/MenuTitle.vue";
import employees from "@/const/employees.js";
import { useRouter } from "vue-router";

const route = getCurrentInstance().appContext.config.globalProperties.$route;
const employee = ref(employees[Number(route.params.id) - 1]);

const title = ref("社員詳細");
const subTitle = ref("EMPLOYEE");

const router = useRouter();

const itemsPerPage = 6; // 1ページあたりの表示数

// Vue Routerを使用してページ間の遷移を行うメソッド
const goToEmployeePage = () => {
  const currentPageNumber = Math.ceil((Number(route.params.id)) / itemsPerPage);
  router.push({ name: "EmployeePage", query: { page: currentPageNumber } });
};

onMounted(() => {
  // Scroll to the top of the window when the component is mounted
  window.scrollTo(0, 0);
});
</script>

<style>
.wrap {
  display: flex;
  /* height: 100%; */
}

.main {
  width: 50%;
}

img {
  width: 100%;
}

@media screen and (max-width: 1180px) {
  .main {
    width: 100%;
  }
}

.employeeDetail {
  width: 100%;
  min-height: calc(100vh - 50px);
  padding-bottom: 50px;
  background-color: #f6f1f1;
  padding-top: 100px;
}

.employeeDetail__inner {
  width: 100%;
  height: 100%;
  background-color: #f6f1f1;
  padding: 50px 20px 40px;
}

.employeeDetail__title {
  white-space: pre-wrap;
}

.employeeDetail__image {
  margin: 0 auto;
  text-align: center;
}

.employeeDetail__post {
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}

.employeeDetail__post {
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}

/* 追加した部分のスタイル */
.employeeDetail__additionalInfo {
  margin-top: 40px;
}

.employeeDetail__additionalInfo h4 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  padding: 5px 10px;
  color: #494949;
  background: #f4f4f4;
  border-left: solid 5px #7db4e6;
  border-bottom: solid 3px #d7d7d7;
}

.employeeDetail__additionalInfo p {
  font-size: 18px;
  margin-top: 10px;
  padding: 0 10px;
}

.employeeDetail__backBtn {
  margin-top: 45px;
  text-align: center;
}

.employeeDetail__backBtn a {
background-color: #7db4e6;
    padding: 10px 45px;
    font-size: 14px;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
    border: 1px solid #7db4e6;
    transition: all 0.5s;
  }
  .employeeDetail__backBtn a:hover {
    background-color: #fff;
    color: #7db4e6;
    border: 1px solid;
}

footer {
  height: 50px;
  position: relative;
  bottom: 0;
  width: 100%;
}

h3 {
  text-align: center;
  position: relative;
  font-weight: 600;
  margin-bottom: 45px;
  padding: 10px;
  border-radius: 10px;
  background: #eee;
  font-size: 30px;
}

h3:before,
h3:after {
  position: absolute;
  content: "";
  border-radius: 50%;
  background: #eee;
}

h3:before {
  bottom: -15px;
  left: 30px;
  width: 30px;
  height: 30px;
}

h3:after {
  bottom: -30px;
  left: 50px;
  width: 15px;
  height: 15px;
}

@media (max-width: 767px) {
h3 {
  font-size: 24px;
}
.employeeDetail__additionalInfo h4 {
  font-size: 16px;
}
.employeeDetail__additionalInfo p {
  font-size: 14px;
  margin-top: 10px;
  padding: 0 10px;
}

}
</style>
