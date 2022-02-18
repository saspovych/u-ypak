<template>
<section class="box_to_order" id="box_to_order">
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
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
.box_to_order {
	padding: 80px 0;
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

@media screen and (max-width: 768px) {
	.box_to_order {
		padding: 40px 0 45px ;
	}
	.to_order_title {
		margin-bottom: 35px;

		text-align: center;
	}
	.box_list {
		flex-direction: column;
	}
	figure {
		width: 100%;
		height: 100%;

		margin-bottom: 40px;
	}
	.go_to_catalog_block {
		margin-top: 20px;
	}
}

</style>