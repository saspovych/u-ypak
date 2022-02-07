<template>
	<MyHeader />
	<router-view />
</template>

<script>
	import MyHeader from "@/components/MyHeader.vue";
	export default {
		components: {
			MyHeader,
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
	width: 85%;
	margin: 0 auto;
}






@font-face {
	font-family: "SF Pro Display";
	src: url("fonts/SFProDisplay-Medium.ttf");
}
</style>