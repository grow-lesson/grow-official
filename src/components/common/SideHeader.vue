<template>
  <header class="header">
    <div class="header-container">
      <p class="header-title">株式会社GROW</p>
      <nav class="header-nav">
        <ul class="header-list">
          <li class="header-item"><a @click="goToPhilosophyPage" class="header-link">企業理念</a></li>
          <li class="header-item"><a @click="goToCompanyPage" class="header-link">会社概要・事業概要</a></li>
          <li class="header-item"><a @click="goToEmployeePage" class="header-link">社員紹介</a></li>
          <li class="header-item"><a @click="goToAccomplishmentPage" class="header-link">案件実績</a></li>
          <li class="header-item"><a @click="goToContactPage" class="header-link">お問い合わせ</a></li>
        </ul>
      </nav>
    </div>
  </header>
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

    const goToAccomplishmentPage = () => {
      router.push({ name: "AccomplishmentPage" });
    };

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
      goToPhilosophyPage,
      goToCompanyPage,
      goToEmployeePage,
      goToEmployeeDetailPage,
      goToAccomplishmentPage,
      goToContactPage,
    };
  },
};
</script>

<style scoped>
.header {
  width: 50%;
}

.header-container {
  height: 100%;
  display: flex;
  background-color: #2c3e50;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header-title {
  font-size: 24px;
  color: #ecf0f1;
  margin-bottom: 20px;
}

.header-nav {
  text-align: center;
}

.header-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.header-item {
  font-size: 16px;
  color: #bdc3c7;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.header-item:hover {
  color: #ecf0f1;
}

/* メニューアイテムごとに余白を追加 */
.header-item:not(:last-child) {
  margin-right: 15px;
}
</style>


