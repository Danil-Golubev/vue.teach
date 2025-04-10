<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
defineProps({
  id: String,
  title: String,
  price: Number,
  imageUrl: String,
});
</script>
<template>
  <RouterLink :to="`/product/${id}`">
    <div class="mainBlock">
      <img class="image" :src="imageUrl" />
      <p>{{ title }}</p>
      <p>{{ price }}</p>
    </div>
  </RouterLink>
</template>

<style>
.image {
  width: 100%;
}
.mainBlock {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding-bottom: 20px;
}
</style>
