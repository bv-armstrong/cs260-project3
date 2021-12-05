<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link v-if="this.$root.$data.user !== undefined" class="navbar-brand" to="/"><span class="nav-link">BV-Armstrong Recipes</span></router-link>
      <router-link v-else class="navbar-brand" to="/login/"><span class="nav-link">BV-Armstrong Recipes</span></router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div v-if="this.$root.$data.user !== undefined" class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <router-link to="/"><span class="nav-link">Home</span></router-link>
          <router-link to="/favorites/"><span class="nav-link">Favorites</span></router-link>
          <router-link to="/recipes/new/"><span class="nav-link">New Recipe</span></router-link>
        </ul>

      </div>
    </nav>

    <div class="page-container">
      <router-view/>
    </div>

    <div class="footer">
      <div class="footer-content">
        <p>©2021 Bryson Armstrong</p>
        <p>All photos used are under public domain.</p>
        <p class="p-long">GitHub Source Code:
          <a class="footer-link"
             href=" https://github.com/bv-armstrong/cs260-recipes">
            https://github.com/bv-armstrong/cs260-recipes
          </a>
        </p>
        <p class="p-short"><a class="footer-link"
                              href=" https://github.com/bv-armstrong/cs260-recipes">GitHub</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    if (this.$root.$data.user === undefined && this.$route.name !== "Login") {
      try {
        this.$router.push('/login/');
      } catch (error) {
        console.log("");
      }
    }
  },
  // computed: {
  //   isLoggedIn() {
  //     return this.$root.$data.user !== undefined;
  //   }
  // }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav nav:hover {
  margin-bottom: 50px;
}

.bg-dark {
  background-image: linear-gradient(to right, #333, #777);
}

.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
  color: #D1E8E2;
  text-decoration: none;
}

.navbar-dark .navbar-nav {
  color: #fff;
}

.navbar-dark .navbar-nav .router-link-exact-active .nav-link {
  font-weight: bold;
  color: #116466 !important;
}

.footer {
  background-color: #333;
  color: #aaa;
  display: flex;
  justify-content: center;
}

.footer-content {
  padding-top: 25px;
  padding-bottom: 25px;
}

.footer-link {
  color: #a9a;
}

.footer-link:visited {
  color: #aaa;
}

.footer-link:hover, .footer-link:visited:hover {
  color: #555;
  text-decoration: none;
}

.p-long {
  visibility: collapse;
  padding: 0;
  height: 0;
  margin: 0;
}

.p-short a {
  text-decoration: underline;
}

@media only screen and (min-width: 961px) {

  .p-long {
    visibility: visible;
  }

  .p-short {
    visibility: collapse;
  }

  .page-container {
    min-height: 655px;
  }

}

</style>
