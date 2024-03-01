<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="success">
        <div class="success-message wow animated fadeInUp">
          <h1>ご連絡いただき、誠にありがとうございます！</h1>
          <p>
            お問い合わせいただいた内容を確認いたしました。<br />担当者が3営業日以内にご連絡を差し上げますので、今しばらくお待ちください。
          </p>
          <router-link class="btn" to="/">トップページに戻る</router-link>
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";

onMounted(() => {
  // Scroll to the top of the window when the component is mounted
  window.scrollTo(0, 0);
});
</script>

<style>
/* .bg {
  position: fixed;
    width: 555px;
    height: 100vh;
    background: linear-gradient(to bottom, #B0D3E1, #1B6D92);
} */
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

.success {
  width: 100%;
  min-height: calc(100vh - 50px);
  padding-bottom: 50px;
  background-color: #f6f1f1;
  padding-top: 90px;
}

.success-message {
  text-align: center;
  padding: 0 50px;
}

.success-message h1 {
  color: #333;
  font-size: 24px;
}

.success-message p {
  color: #666;
  margin: 20px 0;
}

.success-message ul {
  text-align: left;
  list-style: none;
  padding: 0;
}

.success-message li {
  margin-bottom: 10px;
}

.btn {
  width: 150px;
  height: 35px;
  padding: 10px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin: auto;
  font-size: 14px;
}
@media screen and (max-width: 1180px) {
 .success-message {
  text-align: center;
  padding: 0 20px;
}

.success-message h1 {
  color: #333;
  font-size: 20px;
}
}


</style>
