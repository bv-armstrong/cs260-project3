<template>
  <div class="home">
    <h1>Favorites</h1>
    <RecipeList :recipes="recipes"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeList from '@/components/RecipeList'

export default {
  name: 'Favorites',
  components: {
    RecipeList
  },
  computed: {
    recipes() {
      return this.$root.$data.recipes.filter(recipe => recipe.isFavorite);
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