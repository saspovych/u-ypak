<template>
	<div class="top_banner">
		<div class="opacity_block">
			<div class="wrapper">
				<div class="top_banner_info">
					<h2 class="top_banner_title">Ю-Упак - это полный цикл производства упаковки из всех видов картона</h2>
					<my-button>Подобрать упаковку</my-button>
				</div>
			</div>
		</div>
	</div>


	<section class="help_pick">
		<div class="wrapper">
			<h3 class="help_title">Поможем подобрать индивидуальный вариант упаковки для вас</h3>
			<form>
				<my-input placeholder="Имя*" />
				<my-input type="number" placeholder="Номер телефона*" />
				<my-input type="email" placeholder="E-mail*" />
				<my-button>Отправить</my-button>
			</form>
		</div>
	</section>



	<section id="about_us" class="middle_banner">
		<div class="about_us">
			<div class="wrapper">
				<div class="middle_banner_info">
					<h3 class="middle_banner_title">Наша компания</h3>
					<p class="about_us_description">
						ООО “ЮНА” - это полный цикл производства упаковки из всех видов картона.
					</p>
					<p class="about_us_description">
						Основная цель компании - учитывая интересы наших клиентов, обеспечить отличный сервис и качество производимой продукции.
					</p>
					<p class="about_us_description">
						Быстрые сроки изготовления, качество продукции, удобный сервис, обеспечивают нам большое количество заказов и довольных клиентов.
					</p>
					<my-button>Заказать упаковку</my-button>
				</div>
			</div>
		</div>
		<div class="about_us_section_title">О НАС</div>
	</section>



	<section class="box_to_order">
		<div class="wrapper">
			<h3 class="to_order_title">Сделаем коробки которые вам нужны</h3>
			<ul class="box_list">
				<li class="box_list_items">
					<figure>
						<img src="../assets/Говрокороба.jpg" alt="Гофрокороба">
						<figcaption>Гофрокороба</figcaption>
					</figure>
				</li>
				<li class="box_list_items">
					<figure>
						<img src="../assets/Коробки_по_применению.jpg" alt="Коробки по применению">
						<figcaption>Коробки по применению</figcaption>
					</figure>
				</li>
				<li class="box_list_items">
					<figure>
						<img src="../assets/Коробки_с_печатью.jpg" alt="Коробки с печатью">
						<figcaption>Коробки с печатью</figcaption>
					</figure>
				</li>
				<li class="box_list_items">
					<figure>
						<img src="../assets/Переплетной_картон.jpg" alt="Изделия из переплетного картона">
						<figcaption>Изделия из переплетного картона</figcaption>
					</figure>
				</li>
			</ul>
			<div class="go_to_catalog_block">
				<a href="" class="go_to_catalog">Перейти в каталог </a>
				<span class="arrow">🡒</span>
			</div>
		</div>
	</section>
</template>

<script>
	import MyButton from "@/components/UI/MyButton.vue";
	import MyInput from "@/components/UI/MyInput.vue";
	export default {
		components: {
			MyButton, MyInput,
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
/* Все стили необходимые для топ баннера */
.top_banner {
	position: relative;

	height: calc(100vh - 88px);

	background-image: url("../assets/homepage_top_banner.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.opacity_block {
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);

	width: 65%;

	background: rgba(255, 255, 255, 0.48);
}
.top_banner_info {
	padding: 60px 47px 47px 0;
}
.top_banner_title {
	margin-bottom: 55px;

	font-weight: 600;
	font-size: 36px;
	line-height: 135%;
	color: #1F2125;
}
/* Все стили необходимые для топ баннера */



/* Все стили необходимые для секции помощи */
.help_pick .wrapper {
	padding: 85px 0;
}
.help_title {
	margin-bottom: 40px;

	font-size: 28px;
	line-height: 135%;
	color: #1F2125;
}
form {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
/* Все стили необходимые для секции помощи */





/* Все стили необходимые для мидл баннера */
.middle_banner {
	position: relative;

	height: calc(100vh - 88px);

	background-image: url("../assets/homepage_middle_banner.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.about_us {
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);

	width: 55%;

	background-color: #FFFFFF;
}
.middle_banner_info {
	padding: 77px 15px 78px 0;
}
.middle_banner_title {
	margin-bottom: 30px;

	font-size: 28px;
	line-height: 135%;
	color: #1F2125;
}
.about_us_description {
	font-size: 18px;
	line-height: 147%;
	color: #62696C;
}
.about_us_description:not(:last-child) {
	margin-bottom: 20px;
}
.about_us_description:last-child {
	margin-bottom: 40px;
}
.about_us_section_title {
	position: absolute;
	top: 0;
	right: 0;

	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 7.5%;
	width: 170px;
	height: 100%;

	background-color: rgba(8, 166, 82, 0.85);

	font-family: Inter;
	font-weight: 600;
	font-size: 24px;
	line-height: 135%;
	writing-mode: vertical-rl;
	text-orientation: upright;
	color: #FFFFFF;
}
/* Все стили необходимые для мидл баннера */



/* Все стили необходимые для секции кастомных коробок */
.box_to_order {
	padding: 82px 0 89px 0;
}
.to_order_title {
	margin-bottom: 67px;

	font-size: 28px;
	line-height: 135.3%;
	color: #1F2125;
}
.box_list {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
figure {
	position: relative;
}
figure {
	width: 75%;
	height: 75%;
}
figure img {
	width: 100%;
	height: 100%;
}
figcaption {
	position: absolute;
	left: 0;
	bottom: 0;

	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 65px;

	background-color: rgba(98, 105, 108, 0.85);

	font-weight: 600;
	font-size: 16px;
	text-align: center;
	color: #FFFFFF;
}
.go_to_catalog_block {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 45px;
}
.go_to_catalog {
	position: relative;

	margin-right: 5px;

	font-weight: 600;
	font-size: 20px;
	line-height: 135%;
	text-decoration: underline;
	color: #1F2125;
}
.go_to_catalog:hover {
	text-decoration: none;
}
.arrow {
	font-size: 22px;
}
/* Все стили необходимые для секции кастомных коробок */

</style>
