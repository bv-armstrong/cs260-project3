<template>
  <div class="container">
    <div class="wrapper">
      <h3>Title</h3>
      <input v-model="recipe.title">
      <p></p>
      <h3>Category</h3>
      <input v-model="recipe.category">
      <div class="recipe">
        <img class="recipe-image" :src="recipe.path"/>
        <div class="ingredients-list">
          <h3>Ingredients</h3>
          <textarea rows="5" v-model="ingredientsInput" placeholder="Input ingredients list, each ingredient on new line"/>
        </div>
      </div>
      <div class="steps">
        <h3>Steps</h3>
        <textarea rows="5" v-model="stepsInput" placeholder="Input steps, each on new line"/>
      </div>
      <button class="saveButton" @click.prevent="save">Save</button>
      <button class="deleteButton" @click.prevent="deleteRecipe">Delete</button>
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
      ingredientsInput: "",
      stepsInput: ""
    }
  },
  async created() {
    this.getRecipe();
  },
  methods: {
    async getRecipe() {
      try {
        let response = await axios.get("/api/recipes/" + this.$route.params.id);
        this.recipe = response.data;
        for (let ingredient of this.recipe.ingredients) {
          this.ingredientsInput += ingredient + "\n";
        }
        for (let step of this.recipe.steps) {
          this.stepsInput += step + "\n";
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async save() {
      try {
        let ingredientsList = this.ingredientsInput.trim().split(/\r?\n/);
        let stepsList = this.stepsInput.trim().split(/\r?\n/);
        let r2 = await axios.put('/api/recipes/'+this.recipe._id, {
          title: this.recipe.title,
          category: this.recipe.category,
          ingredients: ingredientsList,
          steps: stepsList
        });
        this.addItem = r2.data;
        await this.$router.push('/recipe/'+this.recipe._id);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteRecipe() {
      try {
        await axios.delete('/api/recipes/'+this.recipe._id);
        await this.$router.push('/');
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

.container {
  margin-top: 50px;
  margin-bottom: 50px;
}

textarea {
  width: 100%;
}

button {
  margin: 20px;
  padding: 5px;
  font-size: 20px;
  border-radius: 5px;
}

</style>