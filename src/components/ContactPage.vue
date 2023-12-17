<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="p-contact">
        <div class="p-contact__inner">
          <h2 class="p-contact__heading">お問い合わせ</h2>
          <form action="" method="post">
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
      <!-- <Footer /> -->
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/SideHeader.vue";
// import Footer from "@/components/common/Footer.vue";

export default {
  name: "ContactPage",
  components: {
    Header,
    // Footer,
  },
};
</script>

<style>
.wrap {
  display: flex;
  height: 100%;
}

.main {
  width: 50%;
}

.p-contact {
  width: 100%;
  height: 100%;
  background-color: rgb(191, 242, 116);
}

.p-contact__inner {
  max-width: 445px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 40px 20px;
}

.p-contact__heading {
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}
.p-contact__heading::before {
  content: "CONTACT";
  position: absolute;
  right: -150px;
  top: -19px;
  font-size: 30px;
  font-weight: bold;
  color: #bfbebe;
  letter-spacing: 0.05em;
  z-index: -1;
}

.p-contact__submit {
  text-align: center;
  margin-top: 20px;
}

form {
  padding: 0 10px;
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
  width: 250px;
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
</style>
