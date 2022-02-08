<template>
	<section class="top_banner">
		<div class="opacity_block">
			<div class="wrapper">
				<div class="top_banner_info">
					<h2 class="top_banner_title">Ю-Упак - это полный цикл производства упаковки из всех видов картона</h2>
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


@media screen and (max-width: 768px) {
	.top_banner {
		height: calc(100vh - 75px);
	}
	.opacity_block {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		width: 95%;
	}
	.top_banner_info {
		padding: 30px 20px 50px 20px;
		text-align: center;
	}
	.top_banner_title {
		margin-bottom: 30px;

		font-size: 26px;
	}
}
</style>