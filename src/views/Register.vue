<template>
  <div class="container mt-5">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" required />
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword" required />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
      <div v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions(['register']),
    async registerUser() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match";
        return;
      }

      try {
        await this.register({ email: this.email, password: this.password });
        this.$router.push('/'); // Redirect to home or any other page
      } catch (error) {
        this.errorMessage = "Registration failed. Please try again.";
      }
    },
  },
};
</script>

<style>
/* Add any additional styles if needed */
</style>