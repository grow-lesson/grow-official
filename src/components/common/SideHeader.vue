<template>
  <div>
    <header class="header">
      <div class="header-container">
        <div class="header-logoWrap">
          <img src="./../../assets/growlogo.png">
        </div>
        <nav class="header-nav">
          <ul class="header-list">
            <li class="header-item"><a @click="goToTopPage" class="header-link">Top</a></li>
            <li class="header-item"><a @click="goToPhilosophyPage" class="header-link">企業理念</a></li>
            <li class="header-item"><a @click="goToCompanyPage" class="header-link">事業内容</a></li>
            <li class="header-item"><a @click="goToEmployeePage" class="header-link">社員紹介</a></li>
            <!-- <li class="header-item"><a @click="goToAccomplishmentPage" class="header-link">案件実績</a></li> -->
            <li class="header-item"><a @click="goToContactPage" class="header-link">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="header-blank"></div>
    <div class="hamburger-menu">
      <input type="checkbox" id="menu-btn-check">
      <label for="menu-btn-check" class="menu-btn"><span></span></label>
      <div class="menu-content">
        <ul class="menu-list">
          <li class="menu-item"><a @click="goToTopPage" class="header-link">Top</a></li>
          <li class="menu-item"><a @click="goToPhilosophyPage" class="header-link">企業理念</a></li>
          <li class="menu-item"><a @click="goToCompanyPage" class="header-link">事業内容</a></li>
          <li class="menu-item"><a @click="goToEmployeePage" class="header-link">社員紹介</a></li>
          <!-- <li class="menu-item"><a @click="goToAccomplishmentPage" class="header-link">案件実績</a></li> -->
          <li class="menu-item"><a @click="goToContactPage" class="header-link">お問い合わせ</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';


export default {
  name: "SideHeader",
  setup() {
    const isMobile = ref(false);
    const showMenu = ref(false);
    const router = useRouter();

    const checkMobileScreen = () => {
      isMobile.value = window.innerWidth <= 834;
    };

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    // Vue Routerを使用してページ間の遷移を行うメソッド
    const goToTopPage = () => {
      router.push({ name: "TopPage" });
    };

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

    // const goToAccomplishmentPage = () => {
    //   router.push({ name: "AccomplishmentPage" });
    // };

    const goToContactPage = () => {
      router.push({ name: "ContactPage" });
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

    return {
      isMobile,
      showMenu,
      toggleMenu,
      goToTopPage,
      goToPhilosophyPage,
      goToCompanyPage,
      goToEmployeePage,
      goToEmployeeDetailPage,
      // goToAccomplishmentPage,
      goToContactPage,
    };
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 555px;
  height: 100vh;
  background: linear-gradient(to bottom, #B0D3E1, #1B6D92);
}

.header-blank{
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
  position: fixed;
  top: 0;
  right: 5px;
  display: flex;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  z-index: 90;
}

.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
  content: '';
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


#menu-btn-check:checked~.menu-btn span {
  background-color: rgba(255, 255, 255, 0);
  /*メニューオープン時は真ん中の線を透明にする*/
}

#menu-btn-check:checked~.menu-btn span::before {
  bottom: 0;
  transform: rotate(45deg);
}

#menu-btn-check:checked~.menu-btn span::after {
  top: 0;
  transform: rotate(-45deg);
}

#menu-btn-check {
  display: none;
}

/* */
.menu-content {
  width: 50%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 100%;
  /*leftの値を変更してメニューを画面外へ*/
  z-index: 89;
  background-color: #3584bb;
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

#menu-btn-check:checked~.menu-content {
  left: 50%;
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
  .header-blank{
    display: none;
  }
}
</style>


