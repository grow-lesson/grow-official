<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="employeeDetail">
        <p class="employeeDetail-title">社員紹介詳細のページだよ</p>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "EmployeeDetailPage",
  components: {
    Header,
    Footer,
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
.employeeDetail {
  width: 100%;
  height: 500px;
  background-color: rgb(191, 242, 116);
}
</style>
