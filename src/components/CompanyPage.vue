<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="company">
        <p class="company-title">会社概要・事業概要のページだよ</p>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "CompanyPage",
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
.company {
  width: 100%;
  height: 500px;
  background-color: rgb(191, 242, 116);
}
</style>
