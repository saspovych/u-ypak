<template>
	<div class="content">
		<catalog-products-layout />
	</div>
</template>

<script>
	import CatalogProductsLayout from "@/components/CatalogProductsLayout.vue";
	export default {
		components: {
			CatalogProductsLayout,
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
.content {
	margin-bottom: 150px;
}
</style>