<template>
	<aside>
		<catalog-sidebar-menu />
		<catalog-sidebar-params />
	</aside>
</template>

<script>
	import CatalogSidebarMenu from "@/components/CatalogSidebarMenu.vue";
	import CatalogSidebarParams from "@/components/CatalogSidebarParams.vue";
	export default {
		components: {
			CatalogSidebarMenu, CatalogSidebarParams
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
aside {
	width: 270px;
}
</style>