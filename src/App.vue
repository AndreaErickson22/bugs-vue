<template>
  <div id="app">
    <div id="nav" class="col d-flex justify-content-center">
      <!-- Image and text -->
      <nav class="navbar navbar-light">
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
    <router-link to="/details">Details</router-link>
    <router-view/>
  </div>
</template>

<style>
router-link {
  color: black;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #171311;
  background-color: #42f1f4;
  width: 100%;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
