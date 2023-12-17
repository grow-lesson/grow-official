<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="employee">
        <div class="employee-head">
          <div class="employee-shadowBox">
            <h1 class="employee-shadow">EMPLOYEE</h1>
          </div>
          <div class="employee-titleBox">
            <h1 class="employee-title">社員紹介</h1>
          </div>
        </div>
        <div class="employee-main">
          <ul class="employee-list">
            <li class="employee-item">
              <a @click="goToEmployeeDetailPage" class="employee-link">
                <div class="employee-profile">
                  <div class="employee-imageBox">
                    <img src="../assets/black.png" alt="" class="employee-image">
                  </div>
                  <div class="employee-work">
                    <div class="employee-nameBox">
                      <p class="employee-name">高橋 有希</p>
                    </div>
                    <div class="employee-subNameBox">
                      <p class="employee-subName">Takahashi Yuki</p>
                    </div>
                    <div class="employee-descriptionBox">
                      <p class="employee-description">フロントエンジニア</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="employee-item">
              <a @click="goToEmployeeDetailPage" class="employee-link">
                <div class="employee-profile">
                  <div class="employee-imageBox">
                    <img src="../assets/black.png" alt="" class="employee-image">
                  </div>
                  <div class="employee-work">
                    <div class="employee-nameBox">
                      <p class="employee-name">高橋 有希</p>
                    </div>
                    <div class="employee-subNameBox">
                      <p class="employee-subName">Takahashi Yuki</p>
                    </div>
                    <div class="employee-descriptionBox">
                      <p class="employee-description">フロントエンジニア</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="employee-item">
              <a @click="goToEmployeeDetailPage" class="employee-link">
                <div class="employee-profile">
                  <div class="employee-imageBox">
                    <img src="../assets/black.png" alt="" class="employee-image">
                  </div>
                  <div class="employee-work">
                    <div class="employee-nameBox">
                      <p class="employee-name">高橋 有希</p>
                    </div>
                    <div class="employee-subNameBox">
                      <p class="employee-subName">Takahashi Yuki</p>
                    </div>
                    <div class="employee-descriptionBox">
                      <p class="employee-description">フロントエンジニア</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="pageNation-box">
            <ul class="pageNation-list">
            <li class="pageNation-item">
              <button class="pageNation-button">
              <div class="pageNation-previous"></div>
              </button>
            </li>
            <li class="pageNation-item">
              <button class="pageNation-button">
                <div class="pageNation-numberBox">
                  <p class="pageNation-number">01</p>
                </div>
              </button>
            </li>
            <li class="pageNation-item">
              <button class="pageNation-button">
              <div class="pageNation-next"></div>
              </button>
            </li>
          </ul>
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
import { useRouter } from 'vue-router';

export default {
  name: "EmployeePage",
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();

    // Vue Routerを使用してページ間の遷移を行うメソッド
    const goToEmployeeDetailPage = () => {
      router.push({ name: "EmployeeDetailPage" });
    };

    return {
      goToEmployeeDetailPage,
    };
  },
};
</script>

<style>
.wrap {
  display: flex;
}

.main {
  width: 50%;
}

.employee {
  width: 100%;
  padding: 60px 0;
  background-color: rgb(205, 205, 205);
}

.employee-head{
  width: 90%;
  margin: 0 auto;
  position: relative;
}

.employee-titleBox{
  width: 150px;
  height: 80px;
  position: relative;
}

.employee-title{
font-weight: bold;
font-size: 37px;
position: absolute;
bottom: 0;
}

.employee-shadowBox{
  height: 80px;
  position: absolute;
  left: 115px;
  bottom: 0;
}

.employee-shadow{
  line-height: 80px;
  font-size: 75px;
  font-weight: bold;
  color: rgb(157, 157, 157,0.5);
  font-style: italic;
}

.employee-link {
  cursor: pointer;
}

.employee-main{
  margin-top: 60px;
}

.employee-list{
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.employee-item{
  width: 48.5%;
}

.employee-item:nth-child(n+3) {
  margin-top: 20px;
}

.employee-image{
  width: 100%;
  border-radius: 20px 20px 0 0;
}

.employee-name{
  font-size: 25px;
  font-weight: bold;
}

.employee-subName{
  font-size: 18px;
}

.employee-descriptionBox{
  margin-top: 15px;
}

.employee-description{
  font-size: 18px;
}

.employee-work{
  background-color: azure;
  padding: 20px;
  border-radius: 0 0 20px 20px;
}

.pageNation-box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-top: 60px;
}

.pageNation-list{
  display: flex;
}

.pageNation-item{
  background-color: azure;
  width: 30px;
  height: 30px;
  border: solid 1px black;
}

.pageNation-item:nth-child(n+2){
  margin-left: 15px;
}

.pageNation-previous {
  position: relative;
  display: inline-block;
  padding: 10px;
}

.pageNation-numberBox{
  width: 30px;

}

.pageNation-number{
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.pageNation-previous::before {
  content: '';
  width: 10px;
  height: 10px;
  border-top: solid 2px #949494;
  border-right: solid 2px #949494;
  position: absolute;
  left: 10px;
  top: 8px;
  transform: rotate(-135deg);
}

.pageNation-next {
  position: relative;
  display: inline-block;
  padding: 10px;
}

.pageNation-next::before {
  content: '';
  width: 10px;
  height: 10px;
  border-top: solid 2px #949494;
  border-right: solid 2px #949494;
  position: absolute;
  left: 8px;
  top: 8px;
  transform: rotate(45deg);
}

</style>
