<template>
	<div class="accordion_container">
		<div class="accordion_wrapper">
			<h5 class="accordion_title active">
				{{title}}
			</h5>
			<div class="hidden_block show">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "my-accordion",
		props: {
			title: {
				type: String,
				required: true,
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
.accordion_container {
	border-bottom: 1px solid #E0E0E0;
}
.accordion_wrapper {
	padding: 20px 23px;
}
.accordion_title {
	position: relative;

	font-weight: 600;
	font-size: 16px;
	line-height: 105%;
	color: #1F2125;

	cursor: pointer;
}
.accordion_title:hover {
	color: #08A652;
}
.accordion_title.active {
	margin-bottom: 15px;
}
.accordion_title.active::after {
	content: "˅";

	transform: rotate(-180deg);
}
.accordion_title::after {
	content: "˅";

	position: absolute;
	top: 0;

	margin-left: 10px;

	font-size: 20px;

	transform: rotate(0deg);
}
.hidden_block {
	display: none;
}
.hidden_block.show {
	display: block;
}
</style>