<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="accomplishment">
        <p class="accomplishment-title">案件実績のページだよ</p>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "AccomplishmentPage",
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
.accomplishment {
  width: 100%;
  height: 500px;
  background-color: rgb(191, 242, 116);
}
</style>
