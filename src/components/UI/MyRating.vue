<template>
	<div>
		<div class="stars_group">
			<svg v-for="i in 5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.00008 0L9.87103 5.75819L15.9256 5.75819L11.0273 9.31695L12.8983 15.0751L8.00008 11.5164L3.10187 15.0751L4.97282 9.31695L0.0746102 5.75819L6.12913 5.75819L8.00008 0Z" fill="#62696C"/>
			</svg>
		</div>
	</div>
</template>

<script>
	export default {
		name: "my-rating",
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
svg {
	cursor: pointer;
}
svg:not(:last-child) {
	margin-right: 5px;
}
svg:hover path {
	fill: yellow;
}
</style>