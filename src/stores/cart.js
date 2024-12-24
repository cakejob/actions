import { defineStore } from "pinia";

export const useStore = defineStore("storeId", {
  state: () => {
    return {
      count: 1,
      cart: [],
    };
  },
  getters: {
    doubleCount(state) {
      return state.count + 1;
    },
    countCart(state) {
      return state.cart + 1;
    },
  },
  actions: {
    addCart(product, count) {
      this.cart.push({ ...product, qty: count });
    },
  },
});
