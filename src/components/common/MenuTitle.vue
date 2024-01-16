<template>
  <h1 class="menuTitle">{{ props.headingText }}</h1>
  <h2 class="menuSubTitle">{{ props.headingSubText }}</h2>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['headingText','headingSubText']);
</script>

<style>
.menuTitle {
  font-size: 30px;
  padding-top: 100px;
  padding-left: 20px;
  position: absolute;
  z-index: 10;
}

.menuSubTitle {
  font-size: 45px;
  padding-top: 70px;
  padding-left: 105px;
  opacity: 0.5;
  color: #7a808689;
  position: absolute;
  font-style: italic;
  z-index: 1;
}
</style>
