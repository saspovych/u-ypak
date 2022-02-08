<template>
	<div class="footer_navigation">
		<div class="wrapper">
			<div class="navigation">
				<nav>
					<ul>
						<div class="catalog">
							<li class="navigation_title">Каталог</li>
							<li><a href="#">Гофрокороба</a></li>
							<li><a href="#">Коробки по применению</a></li>
							<li><a href="#">Коробки с печатью</a></li>
						<li><a href="#">Коробки для подарков</a></li>
						</div>
						<div class="info">
						<li class="navigation_title">Информация</li>
							<li><a href="#">О нас</a></li>
							<li><a href="#">Команда</a></li>
							<li><a href="#">Доставка</a></li>
							<li><a href="#">Наш сервис</a></li>
						</div>
						<div class="contacts">
							<li class="navigation_title">Адрес и контакты</li>
							<li>+7 (983) 456-56-65</li>
							<li>+7 (983) 456-56-65</li>
							<li>korobka@gmail.com</li>
							<li>korobka@help.ru</li>
						</div>
					</ul>
				</nav>
			</div>
			<div class="footer_logo">
				<img src="../assets/HeaderLogo.png" alt="Ю-Упак">
			</div>
		</div>
	</div>
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
.footer_navigation {
	padding: 45px 0 65px 0;

	border-top: 1px solid #E0E0E0;
}
.footer_navigation .wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
ul {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	grid-gap: 20px 60px;
}
li:not(:first-child) {
	margin-bottom: 10px;
}
li:last-child {
	margin-bottom: 0;
}
li,
a {
	font-size: 14px;
	line-height: 19px;
	color: #1F2125;
}
.navigation_title {
	margin-bottom: 30px;

	font-size: 20px;
	line-height: 135%;
	color: #62696C;
}

@media screen and (max-width: 768px) {
	.footer_navigation .wrapper {
		flex-direction: column;
	}
	ul {
		grid-gap: 20px;
	}
	img {
		margin-top: 25px;
	}
}
</style>