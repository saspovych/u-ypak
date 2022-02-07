import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/views/Homepage.vue";
import Catalog from "@/views/Catalog.vue";
import Product from "@/views/Product.vue";

const routes = [
	{
		path: "/",
		component: Homepage,
	},
	{
		path: "/catalog",
		component: Catalog,
	},
	{
		path: "/product/:id",
		component: Product,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;