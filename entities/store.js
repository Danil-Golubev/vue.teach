// src/stores/clothesStore.js
import { defineStore } from "pinia";

export const useClothesStore = defineStore("clothes", {
  state: () => ({
    items: [],
    item: {},
  }),
  actions: {
    async fetchClothes() {
      const res = await fetch(
        "https://merchmarket-backend.onrender.com/getItems"
      );
      this.items = await res.json();
    },
    async fetchItem(id) {
      const res = await fetch(
        `https://merchmarket-backend.onrender.com/item/${id}`
      );
      this.item = await res.json();
    },
  },
});
