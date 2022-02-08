<template>
	<footer>
		<footer-contacts />
		<footer-navigation />
		<footer-copyright />
	</footer>
</template>

<script>
	import FooterContacts from "@/components/FooterContacts.vue";
	import FooterNavigation from "@/components/FooterNavigation.vue";
	import FooterCopyright from "@/components/FooterCopyright.vue";
	export default {
		components: {
			FooterContacts, FooterNavigation, FooterCopyright
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>

</style>