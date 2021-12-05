<template>
  <div class="home">
    <form>
      <label for="search">Search (recipe titles or ingredients):</label>
      <input id="search" v-model="searchText"/>
    </form>
    <RecipeList :recipes="recipesFiltered"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeList from '@/components/RecipeList'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    RecipeList
  },
  data() {
    return {
      searchText: '',
      recipes: []
    }
  },
  created() {
    this.getRecipes();
  },
  computed: {
    recipesFiltered() {
      return this.recipes.filter(recipe =>
          recipe.title.toLowerCase().search(this.searchText.toLowerCase()) >= 0 ||
          recipe.ingredients.toString().search(this.searchText.toLowerCase()) >= 0
      );
    }
  },
  methods: {
    async getRecipes() {
      try {
        let response = await axios.get("/api/recipes");
        this.recipes = response.data;
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