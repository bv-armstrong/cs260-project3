<template>
  <div class="wrapper">
    <div class="recipe-list">
      <router-link v-for="recipe in recipes" :key="recipe._id" :to="'/recipe/'+recipe._id">
        <div class="image-link-container">
          <img :src="recipe.path">
          <h3 class="image-text">{{ recipe.title }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeList.vue",
  props: {
    recipes: Array
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}

.recipe-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 300px;
  width: 75%;
}

.recipe-list a img {
  height: 15em;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid gray;
}

.image-link-container {
  box-shadow: 5px 3px 20px gray;
  border: 1px solid gray;
  border-radius: 10px;
}

.recipe-list a:hover, .recipe-list a:visited:hover {
  opacity: 0.8;
  text-decoration: none;
  color: #333;
}

.recipe-list a {
  color: #333;
  text-decoration: none;
  width: 300px;
  margin: 40px;
}

.recipe-list a h3 {
  margin: 10px 15px;
}

img {
  width: 100%;
  object-fit: cover;
}
</style>