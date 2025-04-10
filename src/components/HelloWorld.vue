<script setup>
import { onMounted } from "vue";
import { useClothesStore } from "../../entities/store";
const clothes = useClothesStore();
import ProductCard from "./ProductCard.vue";
onMounted(() => {
  clothes.fetchClothes();
});
</script>
<template>
  <div v-if="clothes.items" class="list">
    <div v-for="item in clothes.items" :key="item.id">
      <ProductCard
        :id="item._id"
        :title="item.title"
        :imageUrl="item.imageUrl"
        :price="item.price"
      />
    </div>
  </div>
  <div v-else>loading</div>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
}
</style>
