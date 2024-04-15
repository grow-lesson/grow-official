<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="main__inner">
        <MenuTitle :headingText="title" :headingSubText="subTitle" />
        <section class="philosophy__item">
          <section class="philosophy__ttl">
          </section>
          <section class="philosophy__txt">
            <p class="philosophy__text">
              「どうせ無理、やっても失敗する」ではなく、<br class="br-pc"/>「やったらいける！どうやろうか？」<br /><br />
              SES業界は、全くの他業界へ出向をさせ、若い未来を潰している状況にあります。<br />
              しかし当社の出向先はPC必須や制作案件などPCを操作する現場がほとんどです。<br /><br class="br-sp" />
              制作をこなすことで実務ベースでスキルが向上するとともに<br class="br-pc"/>
              インプットとアウトプットを素早く行うことで習得したことを確実に定着させます。
            </p>
            <br />
            <p class="philosophy__text--block">
              ・物事を前向きに捉える<br />・相手の立場に立って考える<br />・他者の考えを尊重し、手を取り合って物事を進めていく
            </p>
            <p class="philosophy__text philosophy__text--two">
              このような視点や人との向き合い方が<br class="br-sp" /><br
                class="br-pc"
              />豊かで誇りある人生の実現に<br
                class="br-tb"
              />必要であると考えております。<br /><br /><br />
              「自分の可能性に気づく経験」や「人の力」を伸ばすことが<br class="br-pc"/>本当に環境に依存するものであるならば、<br class="br-pc"/>
              誰もが教育を受けられる環境が整えられるべきです。<br /><br /><span
                style="color: #1b6d92"
                >弊社ではエンジニアになる準備を<br
                  class="br-sp"
                />全面的に支援できる環境を整えております。</span
              >
            </p>
          </section>
        </section>
        <section class="philosophy__item">
          <section class="philosophy__ttl">
            <MenuTitle
              :headingText="introduce"
              :headingSubText="missionTitle"
            />
          </section>
          <section class="philosophy__photo">
            <img
              src="../assets/images/inoue.jpg"
              class="philosophy__inoue"
              alt="代表顔写真"
            />
          </section>
          <section class="philosophy__txt--message">
            <p class="philosophy__text--message philosophy__text">
              皆様には平素よりご高配を賜り、誠にありがとうございます。<br /><br />
              当社は2020年という新型コロナウイルス感染拡大の中で事業をスタートさせました。<br />
              以来SESの課題解決、有望な人財育成を行いつつ<br />常に柔軟な発想で事業にチャレンジしてまいりました。<br /><br />

              形のないものを提供するIT・SESサービスではお客様のご要望を<br class="br-pc" />しっかりと<br
                class="br-tb"
              />ヒアリングすることが最適なサービスを提供することにつながります。<br /><br />
              つまり大切なのは人と人とのつながりです。<br /><br />

              おかげさまで創業からまる4年が経ちました。<br />
              存続させていただけているのも、皆様のお力添えのおかげです。<br /><br
                class="br-sp"
              />
              今後も「未来の人財を育てるIT企業」として世の中に<br
                class="br-sp"
              />貢献できるように<br class="br-pc"/>たゆまぬ努力を続けてまいります。<br /><br />
              引き続き、当社をご支援賜りますよう、<br
                class="br-sp"
              />何卒よろしくお願い申し上げます。<br /><br />
            </p>
            <p class="philosophy__name">代表 井上裕之</p>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/common/SideHeader.vue";
import Footer from "@/components/common/Footer.vue";
import MenuTitle from "@/components/common/MenuTitle.vue";

const title = ref("企業理念");
const subTitle = ref("VISION");

const introduce = ref("代表挨拶");
const missionTitle = ref("MISSION");

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
  background-color: #f6f1f1;
}

.main__inner {
  padding: 100px 0px 0;
  font-size: 18px;
  line-height: 2.6;
}
.philosophy__ttl {
  position: relative;
}
.br-sp {
  display: none;
}
.br-tb {
  display: none;
}
.br-pc {
  display: none;
}
.philosophy__txt {
  text-align: center;
  animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.philosophy__item {
  padding: 0 20px;
}

.philosophy__text {
  font-size: 18px;
  text-align: center;
  padding-top: 60px;
}

.philosophy__text--block {
  font-size: 18px;
  color: #27a7cc;
  padding-bottom: 30px;
  display: inline-block;
  text-align: left;
}

.philosophy__text--two {
  padding-top: 0px;
  margin-bottom: 60px;
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
  padding-top: 20px;
  text-align: center;
}
.philosophy__inoue {
  /* border-radius: 35px; */
  width: 80%;
  object-fit: cover;
  object-position: 100% 5%;
}
.philosophy__text--message {
  padding-top: 60px;
}
.philosophy__name {
  text-align: right;
  padding: 0 20px 90px 0;
  font-size: 20px;
}
@media (min-width: 1181px) {
  .main {
    width: 50%;
  }
  .br-pc {
    display: block;
  }
}

@media (min-width: 422px) and (max-width: 1180px) {
  .main {
    width: 100%;
  }
  .br-tb {
    display: block;
  }
  .philosophy__name {
    font-size: 14px;
  }
  .philosophy__text {
    font-size: 14px;
  }
  .philosophy__text--block {
    font-size: 14px;
  }
  .philosophy__text {
  text-align: left;
}
}

@media (max-width: 421px) {
  .br-sp {
    display: block;
  }
  .philosophy__name {
    font-size: 14px;
  }
  .philosophy__text {
    font-size: 14px;
  }
  .philosophy__text--block {
    font-size: 12px;
  }
  .philosophy__text {
  text-align: left;
  }
}
</style>
