<template>
	<div class="layout">
		<div class="product_item" v-for="i in 18">
			<div class="product_item_wrapper">
				<img src="../assets/box.png" alt="Коробка">
				<my-rating />
				<p class="product_name">Гофрокороб 200*120*120 мм Т-23 бурый</p>
				<div class="button_price">
					<my-button class="product_button">Купить</my-button>
					<span class="price">6.86₽</span>
				</div>
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
.layout {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-row-gap: 30px;
	margin-left: 30px;
}
.product_item_wrapper {
	padding: 20px;
}
.product_item {
	width: 270px;
	height: 367px;

	background: #FFFFFF;
	box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.1);
}
img {
	margin-bottom: 20px;
}
.product_name {
	margin: 17px 0;

	font-weight: 500;
	font-size: 18px;
	line-height: 123%;
	color: #1F2125;
}
.button_price {
	display: flex;
	align-items: center;
}
.product_button {
	padding: 6px 40px;
	margin-right: 22px;

	font-family: SF Pro Display;
	font-size: 18px;
	line-height: 147%;
}
.price {
	font-weight: 500;
	font-size: 18px;
	line-height: 135%;
	color: #62696C;
}
</style>