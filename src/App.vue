<template>
  <div id="app">
    <div id="nav" class="col d-flex justify-content-center">
      <!-- Image and text -->
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            src="./assets/bugsbee-8.png"
            width="40"
            height="40"
            class="d-inline-block align-top"
            alt
          >
          <img
            src="./assets/bugsbutterfly-8.png"
            width="40"
            height="40"
            class="d-inline-block align-top"
            alt
          >
          <img
            src="./assets/bugsladybug-8.png"
            width="40"
            height="40"
            class="d-inline-block align-top"
            alt
          >
          Bug Log List and Application
          <img
            src="./assets/bugsladybug-8.png"
            width="40"
            height="40"
            class="d-inline-block align-top"
            alt
          >
          <img
            src="./assets/bugsbutterfly-8.png"
            width="40"
            height="40"
            class="d-inline-block align-top"
            alt
          >
          <img
            src="./assets/bugsbee-8.png"
            width="40"
            height="40"
            class="d-inline-block align-top"
            alt
          >
        </a>
      </nav>
    </div>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">Details</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
