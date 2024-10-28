<template>
  <div class="container mt-5">
    <h2 class="text-center">Login</h2>
    <form @submit.prevent="handleSubmit" class="w-50 mx-auto">
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="email"
          id="email"
          class="form-control"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>
    <p class="text-center mt-3">
      Don't have an account? <router-link to="/register">Register here</router-link>
    </p>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'LoginPage',
  setup() {
    const router = useRouter();
    const store = useStore();
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      await store.dispatch('login', { email: email.value, password: password.value });
      if (store.getters.isAuthenticated) {
        router.push('/'); // Redirect to home page if authenticated
      } else {
        // Optionally handle error here (e.g., show a message)
        console.error('Login failed. Please check your credentials.');
      }
    };

    return { email, password, handleSubmit }; // Return handleSubmit here
  },
};
</script>

<style scoped>
/* You can add any additional styling here */
</style>