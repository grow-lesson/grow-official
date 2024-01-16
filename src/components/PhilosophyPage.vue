<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="main__inner">
        <section class="philosophy__item">
          <section class="philosophy__ttl">
            <MenuTitle :headingText="title" :headingSubText="subTitle"/>
          </section>
          <section class="philosophy__txt">
            <p class="philosophy__text scAnimation1">
              「どうせ無理、やっても失敗する」<br class="br-sp" />ではなく、<br class="br-sp"/>「やったらいける！どうやろうか？」<br /><br />
              SES業界は、全くの他業界へ出向をさせ、<br class="br-sp"/>若い未来を潰している状況にあります。<br />
              しかし当社の出向先はPC必須や制作案件など<br class="br-sp"/>PCを操作する現場がほとんどです。<br />
              制作をこなすことで実務ベースでスキルが向上するとともに<br />
              インプットとアウトプットを素早く行うことで<br class="br-sp"/>習得したことを確実に定着させます。
            </p>
            <br /><br />
            <p class="philosophy__text--block scAnimation1">
              ・物事を前向きに捉える<br />・相手の立場に立って考える<br />・他者の考えを尊重し、手を取り合って物事を進めていく
            </p>
            <p class="philosophy__text philosophy__text--two scAnimation1">
              このような視点や人との向き合い方が豊かで<br class="br-sp"/>誇りある人生の実現に必要であると考えております。<br /><br /><br />
              「自分の可能性に気づく経験」や「人の力」を伸ばすことが<br />本当に「環境」に依存するものであるならば、<br />
              誰もが教育を受けられる環境が整えられるべきです。<br /><br /><span style="color: #1b6d92">弊社ではエンジニアになる準備を<br class="br-sp"/>全面的に支援できる環境を整えております。</span>
            </p>
          </section>
        </section>
        <section class="philosophy__item">
          <section class="philosophy__ttl">
            <MenuTitle :headingText="introduce" :headingSubText="missionTitle"/>
          </section>
            <section class="philosophy__photo scAnimation1">
            <img src="../assets/images/inoue.jpg" class="philosophy__inoue" alt="代表顔写真"/>
          </section>
          <section class="philosophy__txt--message">
            <p class="philosophy__text--message philosophy__text scAnimation1 scAnime1">
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
              引き続き、当社をご支援賜りますよう、<br class="br-sp"/>何卒よろしくお願い申し上げます。<br /><br />
            </p>
            <p class="philosophy__name scAnimation1 scAnime1">代表 井上裕之</p>
          </section>
        </section>
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

const title = ref("企業理念");
const subTitle = ref("VISION");

const introduce = ref("代表挨拶");
const missionTitle = ref("MISSION");

</script>

<style>
.wrap {
  display: flex;
}

.main {
  background-color: #f6f1f1;
  line-height: 2.6;
}

.main__inner{
  padding: 0 20px;
  font-size: 18px;
}
.philosophy__ttl {
  position: relative;
  font-weight: bold;
  /* animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0; */
}
.br-sp {
  display: none;
}

.philosophy__txt {
  text-align: center;
}

.philosophy__text {
  /* animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0; */
  font-size: 20px;
  text-align: center;
  padding-top: 180px;
}

.philosophy__text--block {
  /* animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0; */
  font-size: 20px;
  color: #27a7cc;
  padding-bottom: 30px;
  display: inline-block;
  text-align: left;
}

.philosophy__text--two {
  padding-top: 0px;
}

.philosophy__title--message {
  padding-top: 140px;
}

.philosophy__subtitle--message {
  padding-top: 110px;
  padding-left: 115px;
  color: #7a808689;
}
.philosophy__photo {
  padding-top: 220px;
  /* animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0; */
  text-align: center;
}
.philosophy__inoue {
  border-radius: 35px;
  width: 70%;
  object-fit: cover;
  object-position: 100% 5%;
}
.philosophy__text--message {
  padding-top: 60px;
}
.philosophy__name {
  text-align: right;
  padding: 0 20px 200px 0;
  font-size: 20px;
  /* animation-name: fadeUpAnime;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  opacity: 0; */
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
  .philosophy__text--block {
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
