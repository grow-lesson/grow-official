<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <div class="top-contents">
        <section class="top-philosophy">
          <p class="top-philosophy-title">企業理念のスペースだよ</p>
        </section>
        <section class="top-company">
          <p class="top-company-title">会社概要・事業内容のスペースだよ</p>
        </section>
        <section class="top-employee">
          <p class="top-employee-title">社員紹介のスペースだよ</p>
        </section>
        <section class="top-accomplishment">
          <p class="top-accomplishment-title">案件実績のスペースだよ</p>
        </section>
        <section class="top-contact">
          <p class="top-contact-title">お問い合わせのスペースだよ</p>
        </section>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "TopPage",
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
.top-philosophy {
  width: 100%;
  height: 500px;
  background-color: rgb(191, 242, 116);
}
.top-company {
  width: 100%;
  height: 500px;
  background-color: rgb(243, 172, 81);
}
.top-employee {
  width: 100%;
  height: 500px;
  background-color: rgb(234, 111, 150);
}
.top-accomplishment {
  width: 100%;
  height: 500px;
  background-color: rgb(118, 108, 185);
}
.top-contact {
  width: 100%;
  height: 500px;
  background-color: rgb(151, 156, 143);
}
</style>
