<template>
<div class="wrapper">
  <h1>Welcome to BV-Armstrong Recipes</h1>
  <p>Please enter a username to begin.</p>
  <form v-on:submit.prevent="login">
    <label for="usernameBox">Username:</label>
    <input id="usernameBox" v-model="username" />
    <input type="submit" value="Submit">
  </form>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: ""
    }
  },
  methods: {
    async login() {
      try {
        let r = await axios.post('/api/persons', {
          name: this.username
        });
        this.$root.$data.user = r.data;
        await this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 50px;
}

label {
  margin-right: 20px;
}
</style>