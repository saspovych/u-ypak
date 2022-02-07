<template>
	<button>
		<slot></slot>
	</button>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
button {
	padding: 15px 20px;

	background-color: rgba(8, 166, 82, 0.85);
	border: none;
	outline: none;
	border-radius: 5px;

	font-family: 'Inter', sans-serif;
	font-size: 16px;

	color: #FFFFFF;

	cursor: pointer;
}
</style>