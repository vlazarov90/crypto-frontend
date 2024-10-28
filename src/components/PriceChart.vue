<template>
    <div>
      <LineChart :data="chartData" :chartOptions="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import { mapGetters } from 'vuex'
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    TimeScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  } from 'chart.js';
  
  // Register the required scales and components
  ChartJS.register(CategoryScale, LinearScale, TimeScale, PointElement, LineElement, Filler, Tooltip, Legend);
  
  export default {
    components: {
      LineChart: Line,
    },
    computed: {
      ...mapGetters(['historicalData']),
      chartData() {
        if (!this.historicalData || !this.historicalData.bpi) {
          return {
            labels: [],
            datasets: [
              {
                label: 'Bitcoin Price',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: []
              }
            ]
          };
        }
  
        const bpiArray = Object.entries(this.historicalData.bpi).map(([date, price]) => ({ date, price }));
  
        return {
          labels: bpiArray.map(entry => entry.date),
          datasets: [
            {
              label: 'Bitcoin Price',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: bpiArray.map(entry => entry.price)
            }
          ]
        };
      }
    },
    data() {
      return {
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'time', // Ensure you're using 'time' for date values
              time: {
                unit: 'day' // Adjust as needed
              }
            },
            y: {
              beginAtZero: true
            }
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .chart-container {
    position: relative;
    height: 400px;
  }
  </style>