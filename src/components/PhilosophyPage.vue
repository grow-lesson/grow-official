<template>
  <div class="l-wrap">
    <Header />
    <main class="l-main">
      <section class="l-main__inner p-philosophy">
        <section class="p-philosophy__ttl">
          <h1 class="p-philosophy__title">企業理念</h1>
          <h2 class="p-philosophy__subtitle">VISION</h2>
        </section>
        <section class="p-philosophy__photo">
          <div class="demoPhoto"><img src="" alt="写真" /></div>
        </section>
        <section class="p-philosophy__txt">
          <p class="p-philosophy__text">
            <span style="font-size: 1.5em"
              >GROWは皆様と一緒に<br />エンジニアデビューを目指します! </span
            ><br /><br />
            SES業界の課題は、全くの他業界へ出向をさせ、<br />
            若い未来を潰しているところです。<br /><br />
            弊社の出向先は<br />PC必須や、制作案件をこなすなど様々です。<br />
            制作を沢山こなすことで<br />実務ベースでスキルが向上するとともに<br />
            インプットしたことを早々にアウトプットすることで<br />習得をより円滑にしています。<br /><br />
            <span style="color: rgb(0, 110, 255)"
              >弊社はエンジニアになる準備を<br />全面的に支援できる体制を整えています。</span
            ><br /><br />
            メンターは現役エンジニアがつくことが大半ですが、<br />
            弊社は教育に特化したエンジニアをアサインしており、<br />
            的確なFBができるようにしています。<br /><br />この難しい時代で、<br />
            皆さんと高め合い独立していく事を願っています。<br /><br />
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
  methods: {
    // handleScroll(event) {
    //   const content = this.$el.querySelector(".l-main");
    //   content.scrollTop += event.deltaY;
    // },
  },
};
</script>

<style>
.l-wrap {
  display: flex;
}
.l-main {
  width: 445px;
  animation-name: fadeUpAnime;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.p-philosophy {
  width: 100%;
  background-color: rgb(211 211 211 / 83%);
}
.p-philosophy__ttl {
  position: relative;
  font-weight: bold;
  animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
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
  font-weight: 800;
  font-style: italic;
  z-index: 1;
}
.p-philosophy__photo {
  padding-top: 180px;
  animation-name: fadeUpAnime;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

.demoPhoto {
  background-color: black;
  width: 100%;
  height: 150px;
}

.p-philosophy__txt {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.p-philosophy__text {
  padding-top: 20px;
  text-align: center;
}
.p-philosophy__name {
  text-align: right;
  padding: 0 20px 20px 0;
}

@keyframes fadeUpAnime {
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
