<template>
	<input type="text">
</template>

<script>
	export default {
		name: "my-input",
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
input {
	padding: 12px 35px;

	border: 1px solid #E0E0E0;
	border-radius: 5px;

	font-family: SF Pro Display;
	font-size: 18px;
	line-height: 147%;

	color: #1F2125;
}
input:focus {
	outline: none;
}
input::placeholder {
	color: #BBC4CA;
}
</style>