<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="contact">
        <p class="contact-title">お問い合わせのページだよ</p>
        <p class="contact-title">お問い合わせのページだよ</p>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "ContactPage",
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
.contact {
  width: 100%;
  height: 500px;
  background-color: rgb(191, 242, 116);
}
</style>
