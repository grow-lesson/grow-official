<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <MenuTitle :headingText="title" :headingSubText="subTitle"/>
      <section class="p-contact">
        <div class="p-contact__inner">
          <form action="../../../php/contact.php" method="post" netlify>
            <div class="p-contact__box">
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
              <button type="submit">確認画面へ</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";
import MenuTitle from "@/components/common/MenuTitle.vue";

const title = ref("お問い合わせ");
const subTitle = ref("CONTACT");

</script>

<style>
.wrap {
  display: flex;
}

.main {
  width: 50%;
}

@media screen and (max-width: 767px) {
  .main {
    width: 100%;
  }
}

.p-contact {
  width: 100%;
  min-height: calc(100vh - 50px);
  padding-bottom: 50px;
  background-color: #f6f1f1;
}

.p-contact__inner {
  /* max-width: 445px; */
  width: 100%;
  height: 100%;
  padding: 100px 20px 40px;
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
  background-color: #0056b3;
}

footer {
  height: 50px;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
