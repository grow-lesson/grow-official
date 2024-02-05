<template>
  <div>
    <header class="header">
      <div class="header-container">
        <div class="header-logoWrap">
          <img src="./../../assets/growlogo.png" />
        </div>
        <nav class="header-nav">
          <ul class="header-list">
            <li @click="goToTopPage" class="header-item">
              <a class="header-link">Top</a>
            </li>
            <li @click="goToPhilosophyPage" class="header-item">
              <a class="header-link">企業理念</a>
            </li>
            <li @click="goToCompanyPage" class="header-item">
              <a class="header-link">事業内容</a>
            </li>
            <li @click="goToEmployeePage" class="header-item">
              <a class="header-link">社員紹介</a>
            </li>
            <!-- <li @click="goToAccomplishmentPage" class="header-item"><a class="header-link">案件実績</a></li> -->
            <li @click="goToContactPage" class="header-item">
              <a class="header-link">お問い合わせ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="header-blank"></div>
    <div class="hamburger-menu">
      <figure class="logo">
        <img src="../../assets/logo.jpg" />
      </figure>
      <input type="checkbox" id="menu-btn-check" />
      <label for="menu-btn-check" class="menu-btn"><span></span></label>
      <div class="menu-content">
        <ul class="menu-list">
          <li @click="goToTopPage" class="menu-item">
            <a class="header-link">Top</a>
          </li>
          <li @click="goToPhilosophyPage" class="menu-item">
            <a class="header-link">企業理念</a>
          </li>
          <li @click="goToCompanyPage" class="menu-item">
            <a class="header-link">事業内容</a>
          </li>
          <li @click="goToEmployeePage" class="menu-item">
            <a class="header-link">社員紹介</a>
          </li>

          <!-- <li @click="goToAccomplishmentPage" class="menu-item"><a class="header-link">案件実績</a></li> -->
          <li @click="goToContactPage" class="menu-item">
            <a class="header-link">お問い合わせ</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const isMobile = ref(false);
const router = useRouter();

const checkMobileScreen = () => {
  isMobile.value = window.innerWidth <= 834;
};

const goToTopPage = () => {
  router.push({
    name: "TopPage",
  });
};

const goToPhilosophyPage = () => {
  router.push({
    name: "PhilosophyPage",
  });
};

const goToCompanyPage = () => {
  router.push({
    name: "CompanyPage",
  });
};

const goToEmployeePage = () => {
  router.push({
    name: "EmployeePage", query: { page: 1 }
  });
};

// const goToAccomplishmentPage = () => {
//  router.push({ name: "AccomplishmentPage" });
// };

const goToContactPage = () => {
  router.push({
    name: "ContactPage",
  });
};

const handleResize = () => {
  checkMobileScreen();
};

onMounted(() => {
  checkMobileScreen();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>

.hamburger-menu {
      position: fixed;
    z-index: 999;
    background: white;
    height: 64px;
    width: 100%;
    display: flex;
    padding: 0 12px;
    justify-content: space-between;
    align-items: center;
}
.logo img {
  width: 50px;
}
.header {
  position: fixed;
  width: 555px;
  height: 100vh;
  /* background: linear-gradient(to bottom, #B0D3E1, #1B6D92); */
}

.header-blank {
  padding-left: 555px;
}

.header-container {
  width: 555px;
  padding: 80px 70px 0;
}

.header-logoWrap {
  width: 180px;
}

.header-logoWrap img {
  width: 100%;
}

.header-nav {
  margin-top: 40px;
}

.header-list {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  margin: 0;
}

.header-item {
  width: 200px;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 20px;
  border-bottom: 1px solid #bdc3c7;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
}

.header-item::after {
  position: absolute;
  right: 0px;
  content: ">";
}

.header-item:hover {
  color: #ecf0f1;
}

/* メニューアイテムごとに余白を追加 */
.header-item:not(:last-child) {
  margin-right: 15px;
}

.menu-btn {
    display: flex;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
  content: "";
  display: block;
  height: 2px;
  width: 25px;
  border-radius: 2px;
  background-color: #4d4d4d;
  position: absolute;
}

.menu-btn span:before {
  bottom: 8px;
}

.menu-btn span:after {
  top: 8px;
}

#menu-btn-check:checked ~ .menu-btn span {
  background-color: rgba(255, 255, 255, 0);
  /*メニューオープン時は真ん中の線を透明にする*/
}

#menu-btn-check:checked ~ .menu-btn span::before {
  bottom: 0;
  transform: rotate(45deg);
}

#menu-btn-check:checked ~ .menu-btn span::after {
  top: 0;
  transform: rotate(-45deg);
}

#menu-btn-check {
  display: none;
}

/* */
.menu-content {
  width: 80%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 100%;
  /*leftの値を変更してメニューを画面外へ*/
  z-index: 89;
  background: linear-gradient(to bottom, #b0d3e1, #1b6d92);
  transition: all 0.5s;
  /*アニメーション設定*/
}

.menu-content ul {
  left: 50%;
  padding: 70px 15px 0;
}

.menu-content ul li {
  border-bottom: solid 1px #ffffff;
  list-style: none;
}

.menu-content ul li a {
  display: block;
  width: 100%;
  font-size: 15px;
  box-sizing: border-box;
  color: #ffffff;
  text-decoration: none;
  padding: 9px 15px 10px 0;
  position: relative;
}

.menu-content ul li a::before {
  content: "";
  width: 7px;
  height: 7px;
  border-top: solid 2px #ffffff;
  border-right: solid 2px #ffffff;
  transform: rotate(45deg);
  position: absolute;
  right: 11px;
  top: 16px;
}

#menu-btn-check:checked ~ .menu-content {
  left: 50%;
}

.menu-item {
  cursor: pointer;
}

@media (min-width: 1181px) {
  .hamburger-menu {
    display: none;
  }
}

@media (max-width: 1180px) {
  .header {
    display: none;
  }

  .header-blank {
    display: none;
  }
}

@media (min-width: 1920px) {
  .header {
    width: 38.542vw;
  }

  .header-blank {
    padding-left: 38.542vw;
  }

  .header-container {
    width: 38.542vw;
    padding: 5.556vw 4.861vw 0;
  }

  .header-logoWrap {
    width: 12.5vw;
  }

  .header-nav {
    margin-top: 2.778vw;
  }

  .header-item {
    width: 13.889vw;
    font-size: 1.111vw;
    margin-bottom: 1.389vw;
  }

  .header-item:not(:last-child) {
    margin-right: 1.042vw;
  }

  .menu-btn {
    right: 0.347vw;
    height: 4.167vw;
    width: 4.167vw;
  }

  .menu-btn span,
  .menu-btn span:before,
  .menu-btn span:after {
    height: 0.139vw;
    width: 1.736vw;
    border-radius: 0.139vw;
  }

  .menu-btn span:before {
    bottom: 0.556vw;
  }

  .menu-btn span:after {
    top: 0.556vw;
  }

  .menu-content ul {
    padding: 4.861vw 1.042vw 0;
  }

  .menu-content ul li a {
    font-size: 1.042vw;
    padding: 0.625vw 1.042vw 0.694vw 0;
  }

  .menu-content ul li a::before {
    width: 0.486vw;
    height: 0.486vw;
    right: 0.764vw;
    top: 1.111vw;
  }
}
</style>
