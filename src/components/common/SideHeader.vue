<template>
  <header class="header">
    <div class="header-container">
      <nav class="header-nav">
        <ul class="header-list">
          <li class="header-item"><a @click="goToTopPage" class="header-link">Top</a></li>
          <li class="header-item"><a @click="goToPhilosophyPage" class="header-link">企業理念</a></li>
          <li class="header-item"><a @click="goToCompanyPage" class="header-link">事業内容</a></li>
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
      goToTopPage,
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
  width: 555px;
}
.header-container {
  height: 100%;
  background-color: #2c3e50;
  padding: 170px 20px 20px;
  display: flex;
  justify-content: center;
}

.header-list {
  display: grid;
  grid-template-rows: repeat(3,1fr);
  grid-template-columns: repeat(2,1fr);
  list-style: none;
  padding: 0;
  margin: 0;
}

.header-item {
  width: 200px;
  font-size: 16px;
  color: #bdc3c7;
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

@media (max-width: 1180px) {
  .header {
    display: none;
  }
}
</style>


