<template>
	<section ref="about_us" class="middle_banner">
		<div class="middle_banner_gray"></div>
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
.middle_banner {
	position: relative;

	height: 100vh;

	background: url("../assets/homepage_middle_banner.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.middle_banner_gray {
	position: absolute;
	left: 0;
	top: 0;

	width: 100%;
	height: 100%;

	background: linear-gradient(180deg, rgba(0, 0, 0, 0.1036) 0%, rgba(0, 0, 0, 0.0962) 100%);
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
	margin-right: 2.5%;
	width: 170px;
	height: 100%;

	background-color: rgba(8, 166, 82, 0.85);

	font-family: "Inter";
	font-weight: 600;
	font-size: 24px;
	line-height: 135%;
	writing-mode: vertical-rl;
	text-orientation: upright;
	color: #FFFFFF;
}

@media screen and (max-width: 768px) {

	.middle_banner_info {
		padding: 30px 15px 35px;
	}
	.middle_banner_title {
		margin-bottom: 20px;

		font-size: 20px;
		line-height: 24px;
	}
	.about_us_description {
		font-size: 14px;
		line-height: 18px;
	}
	.about_us {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		width: 95%;

		background: rgba(255, 255, 255, 0.83);
		backdrop-filter: blur(16px);

		text-align: center;
	}
	.about_us_section_title {
		display: none;
	}
}
</style>