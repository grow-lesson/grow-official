<template>
  <div class="l-wrap">
    <Header />
    <main class="l-main">
      <section class="l-main__inner">
        <section class="p-philosophy p-philosophy__item">
          <section class="p-philosophy__ttl">
            <h1 class="p-philosophy__title">企業理念</h1>
            <h2 class="p-philosophy__subtitle">VISION</h2>
          </section>
          <section class="p-philosophy__photo">
            <div class="demoPhoto"><img src="" alt="写真" /></div>
          </section>
          <section class="p-philosophy__txt">
            <p class="p-philosophy__text">
              「どうせ無理、やっても失敗する」<br />ではなく、<br />「やったらいける！どうやろうか？」<br /><br />
              SES業界は、全くの他業界へ出向をさせ、<br />若い未来を潰している状況にあります。<br />
              しかし当社の出向先はPC必須や制作案件など<br />PCを操作する現場がほとんどです。<br />
              制作をこなすことで実務ベースでスキルが向上するとともに<br />
              インプットとアウトプットを素早く行うことで<br />習得したことを確実に定着させます。<br /><br />
              <span style="color: rgb(17, 0, 255)"
                >・物事を前向きに捉える<br />・相手の立場に立って考える<br />・他者の考えを尊重し、手を取り合って物事を進めていく</span
              ><br />
              このような視点や人との向き合い方が<br />豊かで誇りある人生の実現に必要であると考えております。<br /><br />
              「自分の可能性に気づく経験」や「人の力」を伸ばすことが<br />本当に「環境」に依存するものであるならば、<br />
              誰もが教育を受けられる環境が整えられるべきです。<br /><br /><span
                style="color: rgb(7, 1, 100)"
                >弊社ではエンジニアになる準備を全面的に<br />支援できる環境を整えております。</span
              >
            </p>
          </section>
        </section>
        <section class="p-message p-philosophy__item">
          <h1 class="p-message__title p-philosophy__ttl">代表挨拶</h1>
          <h2 class="p-message__subtitle p-philosophy__ttl">MESSAGE</h2>
          <section class="p-message__photo">
            <div class="demoPhoto">
              <img src="src/assets/inoue.jpg" alt="写真" />
            </div>
          </section>
          <section class="p-message__txt">
            <p class="p-message__text">
              皆様には平素よりご高配を賜り、誠にありがとうございます。<br /><br />
              当社は2020年という新型コロナウイルス感染拡大の中で<br />事業をスタートさせました。<br />
              以来SESの課題解決、有望な人財育成を行いつつ<br />常に柔軟な発想で事業にチャレンジしてまいりました。<br /><br />

              形のないものを提供するIT・SESサービスでは<br />お客様のご要望をしっかりとヒアリングすることが<br />最適なサービスを提供することにつながります。<br />
              つまり大切なのは人と人とのつながりです。<br /><br />

              おかげさまで創業からまる4年が経ちました。<br />
              存続させていただけているのも、皆様のお力添えのおかげです。<br />
              今後も「未来の人財を育てるIT企業」として<br />世の中に貢献できるように今後もたゆまぬ努力を続けてまいります。<br /><br />
              引き続き、当社をご支援賜りますよう、<br />何卒よろしくお願い申し上げます。<br /><br />
            </p>
            <p class="p-message__name">代表 井上裕之</p>
          </section>
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
  methods:
window.addEventListener("scroll", function () {
    const philosophy = document.querySelector(".p-philosophy");
    const message = document.querySelector(".p-message");
    const scroll = window.pageYOffset;
    if (scroll > -10) {
      philosophy.style.opacity = "1";
      philosophy.style.zIndex = "1";
    } else {
      philosophy.style.opacity = "0";
      philosophy.style.zIndex = "-1";
    }
    if (scroll > 300) {
      message.style.opacity = "1";
      message.style.zIndex = "1";
    } else {
      message.style.opacity = "0";
      message.style.zIndex = "-1";
    }
  })
}
</script>

<style>
.l-wrap {
  display: flex;
}
.l-main {
  width: 445px;
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
  font-size: 1.6rem;
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
  font-size: 15px;
  font-size: 0.9rem;
  text-align: center;
  padding-top: 20px;
}

.p-message__title {
  font-size: 25px;
  font-size: 1.6rem;
  padding-top: 140px;
  padding-left: 20px;
  position: absolute;
  z-index: 10;
}

.p-message__subtitle {
  font-size: 40px;
  padding-top: 115px;
  padding-left: 100px;
  opacity: 0.5;
  color: #7a8086;
  position: absolute;
  font-weight: 800;
  font-style: italic;
  z-index: 1;
}
.p-message__photo {
  padding-top: 210px;
  animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.p-message__txt {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
  font-size: 15px;
  font-size: 0.9rem;
  text-align: center;
  padding-top: 20px;
}
.p-message__name {
  text-align: right;
  padding: 0 20px 20px 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
