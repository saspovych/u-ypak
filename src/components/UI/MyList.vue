<template>
	<div class="list">
		<span class="list_item" v-for="item in items">
			{{item}}
			<br>
		</span>
	</div>
</template>

<script>
	export default {
		name: "my-list",
		props: {
			items: {
				type: Array,
				required: true,
			}
		}
	}
</script>

<style scoped>
.list_item {
	margin: 7px 0px;

	font-size: 14px;
	line-height: 19px;
	color: #62696C;

	cursor: pointer;
}
.list_item:hover {
	text-decoration: underline;
}
</style>