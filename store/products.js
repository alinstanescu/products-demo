import { defineStore } from 'pinia'
import productsData from '@/data/products.json'

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: productsData.products,
        categories: productsData.categories
    }),
    actions: {
        setProducts(products) {
            this.products = products
        },
        setCategories(categories) {
            this.categories = categories
        }
    }
})
