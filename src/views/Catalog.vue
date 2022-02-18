<template>
	<div class="wrapper">
		<my-history class="catalog_history" />
		<div class="catalog_content">
			<catalog-sidebar />
			<catalog-content class="products_layout" />
		</div>
	</div>
</template>

<script>
	import CatalogSidebar from "@/components/CatalogSidebar.vue";
	import CatalogContent from "@/components/CatalogContent.vue";
	export default {
		components: {
			CatalogSidebar,
			CatalogContent
		},
		data() {
			return {

			}
		},
		methods: {
			goToProductPage() {
				this.$router.push({path: `/product/${this.id}`});
			},
		}
	}
</script>

<style scoped>
.catalog_content {
	display: flex;
}
.catalog_history {
	margin: 40px 0;
}
.products_layout {
	width: 100%;
}
</style>