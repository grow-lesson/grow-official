<template>
  <div>
    <footer class="footer">
      <p class="footer-text">
        &copy; 2023 GROW 学習サイト. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Footer */
.footer {
  background-color: #333;
  padding: 20px;
  text-align: center;
}

.footer-text {
  color: #fff;
}

/* スマホ版 */
@media (max-width: 648px) {
  .footer-text {
    font-size: small;
  }
}
</style>
