<template>
  <div class="titleBox wow animated fadeInUp">
    <h2 class="menuTitle">{{ props.headingText }}</h2>
    <p class="menuSubTitle">{{ props.headingSubText }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['headingText','headingSubText']);
</script>

<style>
.titleBox {
  position: relative;
}

.menuTitle {
  font-size: 30px;
  font-weight: bold;
  padding-left: 20px;
  z-index: 10;
  line-height: 2.7;
}

.menuSubTitle {
  font-size: 45px;
  font-weight: bold;
  padding-left: 110px;
  opacity: 0.5;
  color: #7a808689;
  position: absolute;
  top: 0;
  line-height: 1;
  z-index: 1;
}
</style>
