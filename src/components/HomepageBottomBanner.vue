<template>
	<section class="bottom_banner">
		<div class="bottom_banner_gray"></div>
		<div class="bottom_banner_conteiner">
			<div class="wrapper">
				<div class="bottom_banner_info">
					<h3 class="bottom_banner_title">Нужна уникальная упаковка? Разработаем её для вас!</h3>
					<p class="bottom_banner_description">
						Воплощение любых конструкторских идей от простых до самых сложных упаковочных решений
					</p>
					<my-button>Подобрать упаковку</my-button>
				</div>
			</div>
		</div>
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
.bottom_banner {
	position: relative;

	height: 100vh;

	background-image: url("../assets/homepage_bottom_banner.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.bottom_banner_gray {
	position: absolute;
	left: 0;
	top: 0;

	width: 100%;
	height: 100%;

	background: linear-gradient(91.25deg, rgba(0, 0, 0, 0.53) 0.83%, rgba(0, 0, 0, 0.04) 98.14%);
}
.bottom_banner_conteiner {
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);

	width: 55%;
}
.bottom_banner_title {
	margin-bottom: 36px;

	font-size: 36px;
	line-height: 135%;
	color: #FFFFFF;
}
.bottom_banner_description {
	margin-bottom: 50px;

	font-size: 18px;
	line-height: 147%;
	color: #FFFFFF;
}

@media screen and (max-width: 768px) {
	.bottom_banner_conteiner {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		width: 95%;
		padding: 20px 10px 30px;

		background: rgba(255, 255, 255, 0.83);
		backdrop-filter: blur(16px);

		text-align: center;
	}
	.bottom_banner_title {
		font-size: 24px;
		color: #1F2125;
	}
	.bottom_banner_description {
		font-size: 18px;
		color: #1F2125;
	}
}
</style>