<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="employee">
        <div class="employee-head">
          <h1 class="employee__title">社員紹介</h1>
          <h2 class="employee__subtitle">EMPLOYEE</h2>
        </div>
        <div class="employee-main">
          <div class="employee-mainInner">
            <ul class="employee-list">
              <li v-for="(employee, index) in employees" :key="index" class="employee-item">
                <a @click="goToEmployeeDetailPage" class="employee-link">
                  <div class="employee-profile">
                    <div class="employee-imageBox">
                      <img :src="employee.image" alt="" class="employee-image">
                    </div>
                    <div class="employee-work">
                      <div class="employee-nameBox">
                        <p class="employee-name">{{ employee.name }}</p>
                      </div>
                      <div class="employee-subNameBox">
                        <p class="employee-subName">{{ employee.subName }}</p>
                      </div>
                      <div class="employee-descriptionBox">
                        <p class="employee-description">{{ employee.description }}</p>
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
                  <div class="pageNation-numberBox">
                    <p class="pageNation-number">02</p>
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
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";

const employees = ref([
  {
    name: '松原 勇志',
    subName: 'Matsubara yushi',
    description: 'フロントエンジニア',
    image: './assets/images/matsubara.jpeg'
  },
  {
    name: '田丸 太一',
    subName: 'Tamaru taichi',
    description: 'フロントエンジニア',
    image: '../assets/tamaru.jpeg'
  },
  {
    name: '日向 一樹',
    subName: 'Hinaka kazuki',
    description: 'フロントエンジニア',
    image: './assets/images/hinata.png'
  },
  {
    name: '福井 涼太',
    subName: 'Fukui ryota',
    description: 'フロントエンジニア',
    image: '../assets/images/fukui.jpeg'
  },
  {
    name: '原田 和也',
    subName: 'Harada kazuya',
    description: 'フロントエンジニア',
    image: '../assets/images/harada.jpeg'
  },
  {
    name: '佐々木 凌',
    subName: 'Sasaki ryo',
    description: 'フロントエンジニア',
    image: '../assets/images/sasakiryo.jpeg'
  },
  {
    name: '菅野 祥輝',
    subName: 'Kanno syoki',
    description: 'フロントエンジニア',
    image: '../assets/images/kanno.png'
  },
  {
    name: '佐々木 敬太郎',
    subName: 'Sasaki keitaro',
    description: 'フロントエンジニア',
    image: '../assets/images/keitaro.png'
  },
  {
    name: '松永 卓也',
    subName: 'Matsunaga takuya',
    description: 'フロントエンジニア',
    image: '../assets/images/matsunaga.jpeg'
  },
  {
    name: '山岸 陸斗',
    subName: 'Yamagishi rikuto',
    description: 'フロントエンジニア',
    image: '../assets/images/yamagishi.jpeg'
  },
  {
    name: '北澤 弦太',
    subName: 'Kitazawa genta',
    description: 'フロントエンジニア',
    image: '../assets/images/kitazawa.jpeg'
  },
  {
    name: '高橋 有希',
    subName: 'Takahashi Yuki',
    description: 'フロントエンジニア',
    image: '../assets/images/takahashi.jpeg'
  },
  {
    name: '藤井 優子',
    subName: 'Fujii yuko',
    description: 'フロントエンジニア',
    image: '../assets/images/fujii.jpeg'
  },
  {
    name: '土屋 暖乃',
    subName: 'Tuchiya nonno',
    description: 'フロントエンジニア',
    image: '../assets/images/tuchiya.jpeg'
  },
  {
    name: '金森 翔',
    subName: 'Kanamori sho',
    description: 'フロントエンジニア',
    image: '../assets/images/black.png'
  },
  // 新しい従業員のデータを追加
  {
    name: '新しい従業員1',
    subName: 'SubName1',
    description: '職種1',
    image: '../assets/images/new_employee1.jpeg'
  },
  {
    name: '新しい従業員2',
    subName: 'SubName2',
    description: '職種2',
    image: '../assets/images/new_employee2.jpeg'
  },
]);

const router = useRouter();

// Vue Routerを使用してページ間の遷移を行うメソッド
const goToEmployeeDetailPage = () => {
  router.push({ name: "EmployeeDetailPage" });
};

</script>

<style>
.wrap {
  display: flex;
}

@media (max-width: 1179px) {
  .main {
    width: 100%;
  }
}

@media (min-width: 1180px) {
  .main {
    width: 50%;
  }
}
@media (min-width: 580px) {
  .employee-list{
  display: none;
}
}
@media (max-width: 580px) {
  .employee-list{
  display: none;
}
}

.employee-mainInner{
  width: 580px;
  margin: 0 auto;
}


.employee {
  width: 100%;
  padding: 60px 0;
  background-color: #f6f1f1;
}

.employee-head{
  position: relative;
  font-weight: bold;
  animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  width: 90%;
  margin: 0 auto;
  position: relative;
}

.employee-titleBox{
  width: 150px;
  height: 80px;
  position: relative;
}
.employee__title {
  font-size: 30px;
  padding-top: 100px;
  padding-left: 20px;
  position: absolute;
  z-index: 10;
}

.employee__subtitle {
  font-size: 45px;
  padding-top: 70px;
  padding-left: 105px;
  opacity: 0.5;
  color: #7a8086;
  position: absolute;
  font-style: italic;
  z-index: 1;
}

.employee-link {
  cursor: pointer;
}

.employee-main{
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
  margin-top: 160px;
}

.employee-list{
  width: 96%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.employee-item{
  width: 270px;
  margin-top: 20px;
}


.employee-image{
  width: 100%;
  height: 165px;
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
  padding: 18px;
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
@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
