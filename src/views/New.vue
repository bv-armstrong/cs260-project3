<template>
  <div class="newRecipeBox">
    <h1>New Recipe</h1>
    <div class="form">
      <input v-model="title" placeholder="Title">
      <p></p>
      <input list="categories" v-model="category" placeholder="Category">
      <datalist id="categories">
        <option value="Breakfast" />
        <option value="Main Dish" />
        <option value="Dessert" />
        <option value="Other" />
      </datalist>
      <p></p>
      <input type="file" name="photo" @change="fileChanged">
      <p></p>
      <textarea rows="10" v-model="ingredients" placeholder="Input ingredients list, each ingredient on new line"/>
      <p></p>
      <textarea rows="10" v-model="steps" placeholder="Input steps, each step on a new line (do not include step numbers)"/>
      <p></p>
      <button @click.prevent="upload">Upload</button>
    </div>
    <p id="success" v-if="addItem">Success!</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "New.vue",
  data() {
    return {
      title: "",
      category: "",
      file: null,
      ingredients: "",
      steps: "",
      addItem: null
    }
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        let ingredientsList = this.ingredients.trim().split(/\r?\n/);
        let stepsList = this.steps.trim().split(/\r?\n/);
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/recipes', {
          title: this.title,
          path: r1.data.path,
          category: this.category,
          ingredients: ingredientsList,
          steps: stepsList,
          createdBy: this.$root.$data.user._id
        });
        this.addItem = r2.data;
        this.title = "";
        this.category = "";
        this.file = null;
        this.ingredients = "";
        this.steps = "";
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.form > * {
  width: 90%;
  max-width: 700px;
}

button {
  margin-bottom: 50px;
}

#success {
  color: green;
  font-size: 2em;
}

h1 {
  margin-top: 50px;
}
</style>