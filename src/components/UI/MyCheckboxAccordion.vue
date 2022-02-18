<template>
	<div v-for="title in this.titleList">
		<h5>
			<my-checkbox-list :list="[`${title}`]"/>
		</h5>
		<div class="more">
			<my-checkbox-list
				v-for="item in this.list[this.titleList.indexOf(title)]"
				:list="[`${item}`]"
				:title="title"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		name: "my-checkbox-accordion",
		data() {
			return {

			}
		},
		props: {
			titleList: {
				type: Array,
				required: true,
			},
			list: {
				type: Array,
				required: true,
			},
		},
	}
</script>

<style scoped>
.more {
	margin: 10px 0 0 25px;
}
</style>