<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/SideBar.vue'
</script>

<template>
  <div class="content">
    <Sidebar />
    <RouterView />
  </div>
</template>

<style lang="scss">
@import './assets/main.scss';

.content {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem 4rem;
  }
}
</style>


