<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="p-contact">
        <div class="titleBox wow animated fadeInUp">
          <h2 class="menuTitle1">お問い合わせ</h2>
          <p class="menuSubTitle2">CONTACT</p>
        </div>
        <div class="p-contact__inner wow animated fadeInUp">
          <form @submit.prevent="submitForm">            <div class="p-contact__box">
              <label for="name">お名前</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="p-contact__box">
              <label for="company">企業名</label>
              <input type="text" id="company" name="company" />
            </div>
            <div class="p-contact__box">
              <label for="email">メールアドレス</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="p-contact__box">
              <label for="phone">電話番号</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div class="p-contact__box">
              <label for="inquiry">お問い合わせ内容</label>
              <textarea id="inquiry" name="inquiry" required></textarea>
            </div>
            <div class="p-contact__submit">
              <button type="submit">送信</button>
            </div>
          </form>
          <div v-if="message">{{ message }}</div>
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";


const name = ref('');
const company = ref('');
const email = ref('');
const phone = ref('');
const inquiry = ref('');
const message = ref('');

const submitForm = async () => {
  try {
    const response = await fetch('/api/submit.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: name.value,
        company: company.value,
        email: email.value,
        phone: phone.value,
        inquiry: inquiry.value,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      message.value = data.message;
    } else {
      message.value = 'お問い合わせの送信に失敗しました。';
    }
  } catch (error) {
    console.error('エラー:', error);
    message.value = 'エラーが発生しました。';
  }
};

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

.p-contact {
  width: 100%;
  min-height: calc(100vh - 50px);
  padding-bottom: 50px;
  background-color: #f6f1f1;
  padding-top: 100px;
}

.p-contact__inner {
  /* max-width: 445px; */
  width: 100%;
  height: 100%;
  padding: 40px 20px;
}

.p-contact__submit {
  text-align: center;
  margin-top: 20px;
}

form {
  padding: 0 10px;
  font-size: 18px;
}

input {
  border: 1px solid;
  width: 100%;
  border-radius: 5px;
}

label {
  display: block;
  margin: 10px 0 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 3px 10px;
  margin-bottom: 10px;
  border: 1px solid #000;
  border-radius: 7px;
}

textarea {
  height: 250px;
}

button {
  width: 150px;
  height: 35px;
  padding: 2px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin: auto;
  font-size: 14px;
}

button:hover {
  background-color: gray;
}

footer {
  height: 50px;
  position: relative;
  bottom: 0;
  width: 100%;
}

.menuTitle1 {
  font-size: 30px;
  font-weight: bold;
  padding-left: 20px;
  z-index: 10;
  line-height: 2.7;
}

.menuSubTitle2 {
  font-size: 45px;
  font-weight: bold;
  padding-left: 170px;
  opacity: 0.5;
  color: #7a808689;
  position: absolute;
  top: 0;
  line-height: 1;
  z-index: 1;
}

@media screen and (max-width: 767px) {
  form {
    padding: 0 0px;
    font-size: 16px;
  }

  .p-contact__inner {
    width: 100%;
    height: 100%;
    padding: 20px 20px;
  }

  .menuTitle1 {
    font-size: 24px;
    font-weight: bold;
    padding-left: 20px;
    z-index: 10;
    line-height: 2.4;
  }

  .menuSubTitle2 {
    font-size: 35px;
    font-weight: bold;
    padding-left: 140px;
    opacity: 0.5;
    color: #7a808689;
    position: absolute;
    top: 0;
    line-height: 1;
    z-index: 1;
  }
}
</style>
