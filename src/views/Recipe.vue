<template>
  <div class="container">
    <div class="wrapper">
      <h1>{{ recipe.title }}</h1>
      <form>
        <p>Favorite: </p>
        <input id="favoriteBox" type="checkbox" v-model="recipe.isFavorite">
      </form>
      <div class="recipe">
        <img class="recipe-image" :src="'/images/'+recipe.img"/>
        <div class="ingredients-list">
          <h3>Ingredients</h3>
          <div v-for="ingredientSection in recipe.ingredients" :key="ingredientSection.sectionHeading">
            <h4 v-show="ingredientSection.sectionHeading !== undefined">{{ ingredientSection.sectionHeading }}</h4>
            <ul>
              <li v-for="ingredient in ingredientSection.sectionIngredients" :key="ingredient">
                {{ ingredient }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="steps">
        <ol>
          <li v-for="step in recipe.steps" :key="step">{{ step }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recipe.vue",
  data() {
    return {
      recipe: {},
    }
  },
  created() {
    this.recipe = this.$root.$data.recipes.find(recipe => recipe.id === parseInt(this.$route.params.id));
    if (this.recipe.isFavorite === undefined) {
      this.recipe.isFavorite = false;
    }
  },
}
</script>

<style scoped>
img {
  width: 100%;
  object-fit: cover;
}

.recipe-image {
  box-shadow: 5px 3px 20px gray;
  margin: 20px 0;
  max-height: 250px;
}

.steps {
  margin-top: 50px;
  margin-bottom: 50px;
}

.recipe-image {
  width: 50%;
  max-height: 500px;
}

.recipe {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ingredients-list {
  margin-top: 20px;
  margin-left: 25px;
  width: 50%;
}

.recipe, .steps {
  font-size: 1.5em;
}

.steps {
  padding-left: 10%;
  padding-right: 10%;
}

li {
  margin-bottom: .3em;
}

.container {
  min-height: 660px;
  display: flex;
  justify-content: center;
  text-align: start;
}

.wrapper {
  width: 75%;
  min-width: 300px;
}

form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

form p {
  font-size: 25px;
  margin: 0 10px 0 0;
}

form input {
  width: 25px;
  height: 25px;
}
</style>