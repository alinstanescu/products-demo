import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cart: [],
        };
    },
    persist: {
        storage: persistedState.localStorage,
    },
    actions: {
        addToCart(product) {
            this.cart.push({ ...product, quantity: 1 })
        },
        removeProductFromCart(id) {
            const productIdx = this.cart.findIndex(product => product.id == id);
            if (productIdx != -1) {
                this.cart.splice(productIdx, 1);
            }
        }
    },
})