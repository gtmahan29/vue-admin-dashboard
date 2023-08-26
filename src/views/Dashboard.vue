<template>
  <main class="dashboard">
    <div class="content-top">
      <AnalysisBox path="/products" :title="'مجموع فروش'" :stats="stats.sales" />
      <AnalysisBox path="/products" :title="'مجموع سفارش'" :stats="stats.customers" />
      <AnalysisBox path="/products" :title="'تعداد مشتریان'" :stats="stats.orders" />
    </div>
    <QuickDraft />
  </main>
</template>

<script setup>
import QuickDraft from '../components/QuickDraft.vue';
import AnalysisBox from '../components/AnalysisBox.vue';
import Chart from '../components/Chart.vue';
import { reactive } from 'vue';

const stats = reactive({
  sales: {
    value: 5000,
    comparison: 1.5
  },
  orders: {
    value: 1000,
    comparison: -1.2
  },
  customers: {
    value: 500,
    comparison: 2
  },
})

const name = 'Dashboard'
</script>

<style lang="scss">
.dashboard {
  height: 100vh;

  .content-top {
    width: 100%;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
}
</style>
