<template>
  <div class="container">
    <div class="wrapper">
      <h1>{{ recipe.title }}</h1>
      <p v-if="creator">Created by {{this.creator}}</p>
      <form>
        <button v-if="favorite" @click.prevent="toggleFavorite">Unmark as favorite</button>
        <button v-else @click.prevent="toggleFavorite">Mark as favorite</button>
      </form>
      <div class="recipe">
        <img class="recipe-image" :src="recipe.path"/>
        <div class="ingredients-list">
          <h3>Ingredients</h3>
          <ul>
            <li v-for="ingredient in recipe.ingredients" :key="ingredient">
              {{ ingredient }}
            </li>
          </ul>
        </div>
      </div>
      <div class="steps">
        <ol>
          <li v-for="step in recipe.steps" :key="step">{{ step }}</li>
        </ol>
      </div>
      <router-link :to="'/edit/recipe/'+recipe._id">Edit</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Recipe.vue",
  data() {
    return {
      recipe: {},
      creator: "",
      favorite: false
    }
  },
  async created() {
    this.getRecipe();
  },
  methods: {
    setFavorite: async function () {
      let currentUser = await axios.get('/api/users/' + this.$root.$data.user._id);
      this.favorite = currentUser.data.favorites.indexOf(this.recipe._id) >= 0;
    },
    async getRecipe() {
      try {
        let response = await axios.get("/api/recipes/" + this.$route.params.id);
        this.recipe = response.data;
        if (this.recipe.createdBy) {
          let creatorResponse = await axios.get('/api/users/' + this.recipe.createdBy);
          this.creator = creatorResponse.data.name;
        }
        await this.setFavorite();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async toggleFavorite() {
      try {
        this.favorite = !this.favorite;
        await axios.put('/api/favorite', {
          personId: this.$root.$data.user._id,
          recipeId: this.recipe._id,
          favorite: this.favorite
        });
        await this.setFavorite();
      } catch (error) {
        console.log(error);
      }
    }
  }
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