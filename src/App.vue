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
:root {
	--slider-bg: #F5F5F5;
	--slider-connect-bg: #08A652;
	--slider-height: 4px;

	--slider-handle-bg: #FFFFFF;
	--slider-handle-border: 3px solid #08A652;
	--slider-handle-width: 14px;
	--slider-handle-height: 14px;
	--slider-handle-shadow: none;
	--slider-handle-shadow-active: none;
}
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