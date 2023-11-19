<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="hero">
        <h1>Welcome to Our Company</h1>
        <p>Delivering Quality Services Since 20XX</p>
      </section>
      <section>
        <h2>About Us</h2>
        <p>We are a leading company in...</p>
      </section>
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>
      <!-- 他のセクションを追加 -->
    </main>
    <footer>
      <p>&copy; 2023 Our Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  // コンポーネントの定義
};
</script>

<style>
/* スタイルを追加 */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

header {
  background-color: #333;
  color: white;
  padding: 1em;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}

nav a {
  text-decoration: none;
  color: white;
  padding: 1em;
}

main {
  padding: 2em;
}

.hero {
  background-color: #ddd;
  padding: 2em;
  text-align: center;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1em;
}
</style>
