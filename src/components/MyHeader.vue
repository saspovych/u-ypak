<template>
	<header>
		<div class="wrapper">
			<img class="logo" src="../assets/HeaderLogo.png" alt="Ю-Упак">
			<nav>
				<ul>
					<li><a href="#about_us">О Компании</a></li>
					<li><a href="">Продукция</a></li>
					<li><a href="">Коробки на заказ</a></li>
					<li><a href="">Контакты</a></li>
				</ul>
			</nav>
		</div>
	</header>
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
ul {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
li:not(:last-child) {
	margin-right: 30px;
}
a {
	font-family: "SF Pro Display";
	font-size: 16px;
	font-weight: 400;
	color: #1F2125;
}
a:hover {
	text-decoration: underline;
}
header {
	border-bottom: 1px solid #E0E0E0;
}
.wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 88px;

}
.logo {
	line-height: 88px;
}
</style>