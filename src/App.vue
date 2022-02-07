<template>
	<MyHeader />
	<router-view />
</template>

<script>
	import MyHeader from "@/components/MyHeader.vue";
	export default {
		components: {
			MyHeader,
		},
		data() {
			return {

			}
		}
	}
</script>

<style>

</style>