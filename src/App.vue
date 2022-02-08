<template>
	<my-header />
	<router-view />
	<my-footer />
</template>

<script>
	import MyHeader from "@/components/MyHeader.vue";
	import MyFooter from "@/components/MyFooter.vue"
	export default {
		components: {
			MyHeader, MyFooter
		},
		data() {
			return {

			}
		}
	}
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
a {
	text-decoration: none;
}
ul {
	list-style-type: none;
}
.wrapper {
	width: 95%;
	margin: 0 auto;
}
body {
	font-family: "SF Pro Display";
}





@media screen and (max-width: 360px) {
	.wrapper {
		width: 95%;
		margin: 0 auto;
	}
}


@font-face {
	font-family: "SF Pro Display";
	src: url("fonts/SFProDisplay-Medium.ttf");
}
</style>