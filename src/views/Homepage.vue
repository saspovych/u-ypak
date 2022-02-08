<template>
	<homepage-top-banner />
	<homepage-help-pick />
	<homepage-middle-banner />
	<homepage-box-to-order />
	<homepage-bottom-banner />
	<homepage-why-we />
	<homepage-f-a-q />
</template>

<script>
	import HomepageTopBanner from "@/components/HomepageTopBanner.vue";
	import HomepageHelpPick from "@/components/HomepageHelpPick.vue";
	import HomepageMiddleBanner from "@/components/HomepageMiddleBanner.vue";
	import HomepageBoxToOrder from "@/components/HomepageBoxToOrder.vue";
	import HomepageBottomBanner from "@/components/HomepageBottomBanner.vue";
	import HomepageWhyWe from "@/components/HomepageWhyWe.vue";
	import HomepageFAQ from "@/components/HomepageFAQ.vue";
	export default {
		components: {
			HomepageTopBanner, HomepageHelpPick,
			HomepageMiddleBanner, HomepageBoxToOrder,
			HomepageBottomBanner, HomepageWhyWe,
			HomepageFAQ,
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>

</style>
