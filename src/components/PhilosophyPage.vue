<template>
  <div class="l-wrap" @wheel="handleScroll">
    <Header />
    <main class="l-main">
      <section class="l-main__inner p-philosophy">
        <section class="p-philosophy__ttl">
          <h1 class="p-philosophy__title">企業理念</h1>
          <h2 class="p-philosophy__subtitle">VISION</h2>
        </section>
        <section>
          <img src="" alt="写真" />
          <div class="demoPhoto"></div>
        </section>
        <section>
          <p class="p-philosophy__text">
            あああ<br />aaa<br />あああ<br />aaa<br />あああ<br />aaa<br />あああ<br />aaa<br />あああ<br />aaa<br />あああ<br />aaa<br />あああ<br />aaa<br />あああ<br />aaa
          </p>
          <p class="p-philosophy__name">代表 井上裕之</p>
        </section>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "PhilosophyPage",
  components: {
    Header,
    Footer,
  },
  methods:{
    handleScroll(event){
      const content = this.$el.querySelector('.l-main');
      content.scrollTop += event.deltaY;
    },
  },
};
</script>

<style>
.l-wrap {
  display: flex;
}
.l-main {
  width: 445px;
}
.p-philosophy {
  width: 100%;
  background-color: rgb(211 211 211 / 83%);
}
.p-philosophy__ttl {
  position: relative;
  font-weight: bold;
}
.p-philosophy__title {
  font-size: 25px;
  padding-top: 100px;
  padding-left: 20px;
  position: absolute;
  z-index: 10;
}
.p-philosophy__subtitle {
  font-size: 40px;
  padding-top: 75px;
  padding-left: 95px;
  opacity: 0.5;
  color: #7a8086;
  position: absolute;
  font-weight:800;
  font-style: italic;
  z-index: 1;
}
img {
  margin-top: 200px;
  width: 100%;
}
.demoPhoto {
  background-color: black;
  width: 100%;
  height: 150px;
}
.p-philosophy__text {
  padding-top: 20px;
  text-align: center;
}
.p-philosophy__name {
  text-align: right;
  padding: 0 20px 20px 0;
}

.l-main{
animation-name:fadeUpAnime;
animation-duration:0.7s;
animation-fill-mode:forwards;
opacity:0;
}

@keyframes fadeUpAnime{
  from {
    opacity: 0;
  transform: translateY(50px);
  }

  to {
    opacity: 1;
  transform: translateY(0);
  }
}
</style>
