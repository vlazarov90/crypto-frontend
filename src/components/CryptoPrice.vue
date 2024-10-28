<template>
  <div class="container mt-5">
    <div class="text-center mb-4">
      <h1>Real-time Bitcoin Prices</h1>
      <p class="current-price" :class="priceDirection">
        Current Price: {{ price ? `$${price}` : 'Loading...' }}
      </p>
    </div>
    <PriceChart v-if="historicalData !== null" />
  </div>
</template>

<script>
import signalrService from "@/services/signalrService";
import PriceChart from './PriceChart.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { PriceChart },
  data() {
    return {
      price: null,
      previousPrice: null,
      lastPriceDirection: '',
    };
  },
  computed: {
    ...mapGetters(['historicalData',]),
    priceDirection() {
      if (this.previousPrice === null) return '';

      // Check the current price against the previous price
      if (this.price > this.previousPrice) {
        return 'text-success'; // Price increased
      } else if (this.price < this.previousPrice) {
        return 'text-danger'; // Price decreased
      }

      // If the price hasn't changed, return the last direction
      return this.lastPriceDirection;
    }
  },
  watch: {
    // Watch for changes in price
    price(newPrice) {
      if (this.previousPrice !== null) {
        // Update lastPriceDirection based on the new price
        if (newPrice > this.previousPrice) {
          this.lastPriceDirection = 'text-success';
        } else if (newPrice < this.previousPrice) {
          this.lastPriceDirection = 'text-danger';
        }
      }

      // Update previousPrice to the new price
      this.previousPrice = newPrice;
    }
  },
  methods: {
    ...mapActions(['fetchHistoricalData'])
  },
  mounted() {
    this.fetchHistoricalData();
    signalrService.start()
      .then(() => {
        signalrService.on("ReceivePriceUpdate", (price) => {
          this.previousPrice = this.price;
          this.price = JSON.parse(price).bpi.USD.rate;
        });
      })
      .catch(err => console.error("SignalR connection failed: ", err));
  }
};
</script>

<style scoped>
.current-price {
  font-size: 1.5rem;
  font-weight: bold;
}
.text-success { color: green; }
.text-danger { color: red; }
</style>