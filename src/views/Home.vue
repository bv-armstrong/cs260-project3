<template>
  <div class="home">
    <form>
      <label for="search">Search (recipe titles or ingredients):</label>
      <input id="search" v-model="searchText"/>
    </form>
    <RecipeList :recipes="recipes"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeList from '@/components/RecipeList'

export default {
  name: 'Home',
  components: {
    RecipeList
  },
  data() {
    return {
      searchText: ''
    }
  },
  computed: {
    recipes() {
      return this.$root.$data.recipes.filter(recipe =>
          recipe.title.toLowerCase().search(this.searchText.toLowerCase()) >= 0 ||
          recipe.ingredients.find(section => section.sectionIngredients.toString().search(this.searchText.toLowerCase()) >= 0) !== undefined
      );
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