<template>
	<div>
		<span @click="productRedirect">Товар с id: {{id}}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: 2,
			}
		},
		methods: {
			productRedirect() {
				this.$router.push({path: `/product/${this.id}`});
			},
		}
	}
</script>

<style scoped>

</style>