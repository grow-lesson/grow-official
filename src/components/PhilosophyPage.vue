<template>
  <div class="l-wrap">
    <Header />
    <main class="l-main">
      <section class="l-main__inner">
        <section class="philosophy philosophy__item">
          <section class="philosophy__ttl">
            <h1 class="philosophy__title">企業理念</h1>
            <h2 class="philosophy__subtitle">VISION</h2>
          </section>
          <section class="philosophy__photo">
            <div class="demoPhoto">
              <img src="" class="philosophy__hero" alt="写真" />
            </div>
          </section>
          <section class="philosophy__txt">
            <p class="philosophy__text">
              <!-- #B0D3E1#1B6D92#27A7CC -->
              「どうせ無理、やっても失敗する」<br class="br-sp" />ではなく、<br
                class="br-sp"
              />「やったらいける！どうやろうか？」<br /><br />
              SES業界は、全くの他業界へ出向をさせ、<br
                class="br-sp"
              />若い未来を潰している状況にあります。<br />
              しかし当社の出向先はPC必須や制作案件など<br
                class="br-sp"
              />PCを操作する現場がほとんどです。<br />
              制作をこなすことで実務ベースでスキルが向上するとともに<br />
              インプットとアウトプットを素早く行うことで<br
                class="br-sp"
              />習得したことを確実に定着させます。<br /><br />
              <span style="color: #27a7cc"
                >・物事を前向きに捉える<br />・相手の立場に立って考える<br />・他者の考えを尊重し、手を取り合って物事を進めていく</span
              ><br />
              このような視点や人との向き合い方が豊かで<br
                class="br-sp"
              />誇りある人生の実現に必要であると考えております。<br /><br />
              「自分の可能性に気づく経験」や「人の力」を伸ばすことが<br />本当に「環境」に依存するものであるならば、<br />
              誰もが教育を受けられる環境が整えられるべきです。<br /><br /><span
                style="color: #1b6d92"
                >弊社ではエンジニアになる準備を<br
                  class="br-sp"
                />全面的に支援できる環境を整えております。</span
              >
            </p>
          </section>
        </section>
        <section class="message philosophy__item">
          <h1 class="message__title philosophy__title philosophy__ttl">代表挨拶</h1>
          <h2 class="message__subtitle philosophy__subtitle philosophy__ttl">MESSAGE</h2>
          <section class="message__photo">
            <img
              src="../assets/inoue.jpg"
              class="message__inoue"
              alt="代表顔写真"
            />
          </section>
          <section class="message__txt">
            <p class="message__text philosophy__text">
              皆様には平素よりご高配を賜り、誠にありがとうございます。<br /><br />
              当社は2020年という新型コロナウイルス感染拡大の中で<br
                class="br-sp"
              />事業をスタートさせました。<br />
              以来SESの課題解決、有望な人財育成を行いつつ<br />常に柔軟な発想で事業にチャレンジしてまいりました。<br /><br />

              形のないものを提供するIT・SESサービスでは<br />お客様のご要望をしっかりとヒアリングすることが<br />最適なサービスを提供することにつながります。<br />
              つまり大切なのは人と人とのつながりです。<br /><br />

              おかげさまで創業からまる4年が経ちました。<br />
              存続させていただけているのも、皆様のお力添えのおかげです。<br />
              今後も「未来の人財を育てるIT企業」として世の中に<br />貢献できるように今後もたゆまぬ努力を続けてまいります。<br /><br />
              引き続き、当社をご支援賜りますよう、<br
                class="br-sp"
              />何卒よろしくお願い申し上げます。<br /><br />
            </p>
            <p class="message__name">代表 井上裕之</p>
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
  // methods:
  // window.addEventListener("scroll", function () {
  //     const philosophy = document.querySelector(".p-philosophy");
  //     const message = document.querySelector(".p-message");
  //     const scroll = window.pageYOffset;
  //     if (scroll > -10) {
  //       philosophy.style.opacity = "1";
  //       philosophy.style.zIndex = "1";
  //     } else {
  //       philosophy.style.opacity = "0";
  //       philosophy.style.zIndex = "-1";
  //     }
  //     if (scroll > 300) {
  //       message.style.opacity = "1";
  //       message.style.zIndex = "1";
  //     } else {
  //       message.style.opacity = "0";
  //       message.style.zIndex = "-1";
  //     }
  // })
};
</script>

<style>
.l-wrap {
  display: flex;
}

.l-main {
  background-color: #f6f1f1;
}

.philosophy__ttl {
  position: relative;
  font-weight: bold;
  animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.br-sp {
  display: none;
}

.philosophy__title {
  font-size: 30px;
  padding-top: 100px;
  padding-left: 20px;
  position: absolute;
  z-index: 10;
}

.philosophy__subtitle {
  font-size: 45px;
  padding-top: 80px;
  padding-left: 105px;
  opacity: 0.5;
  color: #7a8086;
  position: absolute;
  font-style: italic;
  z-index: 1;
}
.philosophy__photo {
  padding-top: 160px;
  animation-name: fadeUpAnime;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  text-align: center;
}

.demoPhoto {
  background-color: black;
  width: 90%;
  height: 150px;
  border-radius: 35px;
  margin-left: 5%;
}
/* .philosophy__hero {
  background-color: black;
  width: 90%;
  height: auto;
  border-radius: 35px; */
/* } */

.philosophy__text {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
  font-size: 12px;
  font-size: 1.2rem;
  text-align: center;
  padding-top: 20px;
}

.message__title {
  padding-top: 140px;
}

.message__subtitle {
  padding-top: 120px;
  padding-left: 115px;
}
.message__photo {
  padding-top: 200px;
  animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  text-align: center;
}
.message__inoue {
  border-radius: 35px;
  width: 90%;
  height: 60%;
  object-fit: cover;
  object-position: 100% 5%;
}

.message__name {
  text-align: right;
  padding: 0 20px 20px 0;
  font-size: 20px;
  animation-name: fadeUpAnime;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@media (max-width: 1179px) {
  .l-main {
    width: 100%;
  }
}
@media (min-width: 1180px) {
  .l-main {
    width: 50%;
  }
}
@media (max-width: 421px) {
  .br-sp {
    display: block;
  }
}
@media (max-width: 580px) {
  .philosophy__text {
    font-size: 12px;
  }
  .message__name {
    font-size: 12px;
  }
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
