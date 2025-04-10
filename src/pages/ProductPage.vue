<template>
  <img class="image" :src="clothes.item.imageUrl" />
  <div v-for="image in clothes.item.additionalImages" :key="image">
    <img class="image" :src="image" />
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useClothesStore } from "../../entities/store";
const route = useRoute(); // Получаем объект маршрута
const productId = route.params.id; // Извлекаем параметр id
const clothes = useClothesStore();
onMounted(() => {
  console.log("mounted with productId:", productId);
  clothes.fetchItem(productId);
});
</script>
