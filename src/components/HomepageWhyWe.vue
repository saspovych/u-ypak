<template>
	<section class="why_we">
		<div class="wrapper">
			<div class="why_we_text_info">
				<h3 class="why_we_title">Почему именно мы?</h3>
				<div class="why_we_list">
					<div class="why_we_item">
						<div class="why_we_item_title_container">
							<span class="why_we_item_number">01</span>
							<h4 class="why_we_item_title">Поддержка</h4>
						</div>
						<p class="why_we_item_description">
							Наши консультанты помогут вам разобраться в особенностях нашей компании. Они так же помогут подобрать индивидуальное решение именно для вас.
						</p>
					</div>
					<div class="why_we_item">
						<div class="why_we_item_title_container">
							<span class="why_we_item_number">02</span>
							<h4 class="why_we_item_title">Опыт</h4>
						</div>
						<p class="why_we_item_description">
							Уже много лет наша компания успешно производит упаковку любого вида, для самых разных решений.
						</p>
					</div>
					<div class="why_we_item">
						<div class="why_we_item_title_container">
							<span class="why_we_item_number">03</span>
							<h4 class="why_we_item_title">Сервис</h4>
						</div>
						<p class="why_we_item_description">
							Наша компания воплотит в жизнь любую конструкторскую идею упаковки из картона в высоком качестве и в очень быстрые сроки.
						</p>
					</div>
				</div>
			</div>
			<div class="why_we_img">
				<img src="../assets/why_we_img.jpg" alt="Собака">
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
.why_we .wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 115px 0;
}
.why_we_text_info {
	margin-right: 50px;
}
.why_we_title {
	margin-bottom: 60px;

	font-size: 28px;
	line-height: 135%;

	color: #1F2125;
}
.why_we_item {
	margin-bottom: 30px;
}
.why_we_item_title_container {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}
.why_we_item_number {
	color: rgba(8, 166, 82, 0.85);
}
.why_we_item_title {
	color: #1F2125;
}
.why_we_item_number,
.why_we_item_title {
	margin-right: 20px;

	font-size: 20px;
	line-height: 135%;
}
.why_we_item_description {
	margin-left: 40px;

	font-size: 18px;
	line-height: 147%;
	color: #62696C;
}

@media screen and (max-width: 768px) {
	.why_we .wrapper {
		flex-direction: column;
		padding: 60px 0;
	}
	.why_we_text_info {
		margin-right: 0;
		order: 2;

		text-align: center;
	}
	img {
		width: 300px;
		order: 1;
	}
	.why_we_title {
		margin-top: 40px;

		font-size: 24px;
		line-height: 27px;
	}
	.why_we_item {
		margin-bottom: 30px;
	}
	.why_we_item_title_container {
		justify-content: center;
	}
	.why_we_item_title {
		margin-right: 0;
	}
	.why_we_item_description {
		margin-left: 0;
	}
}
</style>