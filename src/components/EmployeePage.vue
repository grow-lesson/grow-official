<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="employee">
        <p class="employee-title">社員紹介のページだよ</p>
        <a @click="goToEmployeeDetailPage" class="employee-link">社員紹介詳細のページに飛ぶよ</a>
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
  height: 500px;
  background-color: rgb(191, 242, 116);
}
.employee-link {
  color: blue;
  cursor: pointer;
}
</style>
