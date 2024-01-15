<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "normalize.css";
import "destyle.css";

export default {
  name: "App",
};
document.addEventListener('DOMContentLoaded', function() {
    // 要素の初期スタイル設定
    var elements = document.querySelectorAll('.scAnime0, .scAnime1, .scAnime2, .scAnime3, .scAnime4');
    elements.forEach(function(el) {
        el.style.visibility = 'hidden';
    });

    // スクロールイベントの処理
    function onScroll() {
        var windowHeight = window.innerHeight;
        elements.forEach(function(el) {
            var elementClassList = el.classList;
            var objectPosition = el.getBoundingClientRect().top + window.scrollY;
            var topWindow = window.scrollY;

            if (topWindow > objectPosition - windowHeight + 80) {
                if (elementClassList.contains('scAnime0')) elementClassList.add('scAnimation0');
                if (elementClassList.contains('scAnime1')) elementClassList.add('scAnimation1');
                if (elementClassList.contains('scAnime2')) elementClassList.add('scAnimation2');
                if (elementClassList.contains('scAnime3')) elementClassList.add('scAnimation3');
                if (elementClassList.contains('scAnime4')) elementClassList.add('scAnimation4');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll); // ページロード時にも一度実行
});

//   document.addEventListener('DOMContentLoaded', function() {

// document.querySelectorAll('.scAnime0').forEach(el => el.style.visibility = 'hidden');
// document.querySelectorAll('.scAnime1').forEach(el => el.style.visibility = 'hidden');
// document.querySelectorAll('.scAnime2').forEach(el => el.style.visibility = 'hidden');
// document.querySelectorAll('.scAnime3').forEach(el => el.style.visibility = 'hidden');
// document.querySelectorAll('.scAnime4').forEach(el => el.style.visibility = 'hidden');

// var addScrollAnimation = function(classToSelect, animationClass) {
//   window.addEventListener('scroll', function() {
//     var windowHeight = window.innerHeight,
//         topWindow = window.scrollY;
//     document.querySelectorAll(classToSelect).forEach(el => {
//       var objectPosition = el.getBoundingClientRect().top + topWindow;
//       if (topWindow > objectPosition - windowHeight + 80) {
//         el.classList.add(animationClass);
//       }
//     });
//   });
// };

// addScrollAnimation('.scAnime1', 'scAnimation1');
// addScrollAnimation('.scAnime2', 'scAnimation2');
// addScrollAnimation('.scAnime3', 'scAnimation3');
// addScrollAnimation('.scAnime4', 'scAnimation4');
// });

</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(to bottom, #B0D3E1, #1B6D92);
}
/* Global Styles */
body {
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.6;
}
p {
  font-size: 12px;
}
h1 {
  font-size: large;
}


/****************************************

スクロールアニメーション css

****************************************/
/* ====================================
	general animations
==================================== */

.scAnime0,
.scAnime1 {
    opacity: 0;
}
.scAnimation0 {
 -ms-animation-fill-mode:both;
 animation-fill-mode:both;
 -ms-animation-duration:0.5s;
 animation-duration:0.5s;
 -ms-animation-name: scAnime0;
 animation-name: scAnime0;
 /* animation-delay: 1s; */
 visibility: visible !important;
}

.hero__carousel.scAnimation0 {
	animation-delay: 0.5s;
}

@keyframes scAnime0 {
 0% { opacity: 0;}
 20% { opacity: 0;}
 100% { opacity: 1;}
}


/*下から*/
.scAnimation1 {
 -ms-animation-fill-mode:both;
 animation-fill-mode:both;
 -ms-animation-duration:0.5s;
 animation-duration:0.5s;
 -ms-animation-name: scAnime1;
 animation-name: scAnime1;
 visibility: visible !important;
}
@keyframes scAnime1 {
 0% { opacity: 0; -ms-transform: translateY(30px); transform: translateY(30px); }
 100% { opacity: 1; -ms-transform: translateY(0); transform: translateY(0); }
}

/*左から*/
.scAnimation2 {
	-ms-animation-fill-mode:both;
	animation-fill-mode:both;
	-ms-animation-duration:0.5s;
	animation-duration:0.5s;
	-ms-animation-name: scAnime2;
	animation-name: scAnime2;
	visibility: visible !important;
   }
@keyframes scAnime2 {
	0% { opacity: 0; -ms-transform: translateX(-20px); transform: translateX(-20px); }
	100% { opacity: 1; -ms-transform: translateX(0); transform: translateX(0); }
   }

/*右から*/
.scAnimation3 {
 -ms-animation-fill-mode:both;
 animation-fill-mode:both;
 -ms-animation-duration:0.5s;
 animation-duration:0.5s;
 -ms-animation-name: scAnime3;
 animation-name: scAnime3;
 visibility: visible !important;
}
@keyframes scAnime3 {
  0% { opacity: 0; -ms-transform: translateX(20px); transform: translateX(20px); }
 100% { opacity: 1; -ms-transform: translateY(0); transform: translateY(0); }
}

/*浮き上がる*/
.scAnimation4 {
	-ms-animation-fill-mode:both;
	animation-fill-mode:both;
	-ms-animation-duration:1.0s;
	animation-duration:1.0s;
	-ms-animation-name: scAnime4;
	animation-name: scAnime4;
	visibility: visible !important;
   }
   @keyframes scAnime4 {
	0% { opacity: 0;}
  20% { opacity: 0;}
	100% { opacity: 1; }
}
</style>
