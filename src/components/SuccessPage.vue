<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <div>
        <h2>お問い合わせが送信されました。</h2>
        <p>ご連絡いただきありがとうございます。</p>
        <router-link to="/">トップページに戻る</router-link>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";

onMounted(() => {
  // Scroll to the top of the window when the component is mounted
  window.scrollTo(0, 0);
});
</script>

<style>
.wrap {
  display: flex;
}

.main {
  width: 50%;
}

@media screen and (max-width: 1180px) {
  .main {
    width: 100%;
  }
}

</style>
