<template>
  <div class="container mt-5">
    <h1 class="text-center">Welcome to Crypto Dashboard</h1>
    <crypto-price />
  </div>
</template>

  
  <script>
  import CryptoPrice from '../components/CryptoPrice.vue';
  
  export default {
    name: 'HomePage',
    components: {
      CryptoPrice,
    },
  };
  </script>
  
  <style scoped>
  /* Style the Home page if needed */
  </style>