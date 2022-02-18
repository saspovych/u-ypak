<template>
	<header>
		<div class="wrapper">
			<img class="logo" @click="goToHomepage" src="../assets/HeaderLogo.png" alt="Ю-Упак">
			<div class="header_navigation">
				<nav>
					<ul>
						<li><a href="/#about_us">О Компании</a></li>
						<li><a href="" @click.prevent="goToCatalog">Продукция</a></li>
						<li><a href="/#box_to_order">Коробки на заказ</a></li>
						<li><a href="#contacts">Контакты</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goToCatalog() {
				this.$router.push("/catalog");
			},
			goToHomepage(anchor) {
				this.$router.push(`/`);
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

	cursor: pointer;
}


@media screen and (max-width: 768px) {
	.header_navigation {
		display: none
	}
	.logo {
		height: 73px;
	}
}
</style>