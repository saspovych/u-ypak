import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/views/Homepage.vue";
import Catalog from "@/views/Catalog.vue";

const routes = [
	{
		path: "/",
		component: Homepage,
	},
	{
		path: "/catalog",
		component: Catalog,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;