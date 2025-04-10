<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="headerBlock">
    <RouterLink to="/"> <p>Main Page</p></RouterLink>
    <RouterLink to="/cart"> <p>Cart</p></RouterLink>
  </div>
</template>

<style>
.headerBlock {
  font-size: 26px;
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
}
</style>
