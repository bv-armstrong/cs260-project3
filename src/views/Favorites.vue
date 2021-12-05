<template>
  <div class="home">
    <h1>Favorites</h1>
    <RecipeList :recipes="recipes"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeList from '@/components/RecipeList'
import axios from "axios";

export default {
  name: 'Favorites',
  components: {
    RecipeList
  },
  data() {
    return {
      recipes: []
    }
  },
  created() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      try {
        let response = await axios.get("/api/recipes");
        let currentUser = await axios.get('/api/users/' + this.$root.$data.user._id);
        this.recipes = response.data.filter(recipe => currentUser.data.favorites.indexOf(recipe._id) >= 0);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.home {
  margin-top: 50px;
}

#search {
  margin-left: 15px;
}
</style>