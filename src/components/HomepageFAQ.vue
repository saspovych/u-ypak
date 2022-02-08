<template>
	<section class="homepage_faq">
		<div class="wrapper">
			<h3 class="faq_title">Ответим на ваши вопросы</h3>
			<div class="faq_container">
				<div class="faq_item">
					<h4 class="faq_item_title">Можете ли вы разработать конструкцию коробки "с нуля"?</h4>
					<div class="faq_item_hidden_block">
						<p class="faq_item_description">
							Да, благодаря работе наших опытных дизайнеров мы можем разработать контур высечки коробки согласно ваших размеров.
						</p>
					</div>
				</div>
				<div class="faq_item">
					<h4 class="faq_item_title">Какая плотность бумаги/картона используется в производстве?</h4>
					<div class="faq_item_hidden_block">
						<p class="faq_item_description">
							Для производства коробок используется огромный ассортимент мелованных односторонних и двухсторонних картонов. Картоны могут быть целлюлозные, макулатурные, дизайнерские, с крафтоборотом и тп. Диапозон плотностей от 190 до 420 гр/м кв. Так же производим микрогофру и слимованные (многослойные) картоны.
						</p>
					</div>
				</div>
				<div class="faq_item">
					<h4 class="faq_item_title">Можно ли сделать такую коробку как на сайте, только в другом размере?</h4>
					<div class="faq_item_hidden_block">
						<p class="faq_item_description">
							Да, мы можем изготовить индивидуальную коробку по вашим размерам. Но важно понимать, что существуют определённые ограничения в размере печатного листа.
						</p>
					</div>
				</div>
				<div class="faq_item">
					<h4 class="faq_item_title">Подходит ли ваша продукция для хранения продуктов питания?</h4>
					<div class="faq_item_hidden_block">
						<p class="faq_item_description">
							Да. У нас есть упаковка, специально предназначенная для хранения продуктов питания. Вы можете заказать индивидуальные размеры для вашей продукции, заполнив специальную форму на нашем сайте
						</p>
					</div>
				</div>
				<div class="faq_item">
					<h4 class="faq_item_title">Коробки отдаёте в собранном виде?</h4>
					<div class="faq_item_hidden_block">
						<p class="faq_item_description">
							Самосборные (без склейки) конструкции коробок отдаём в разобранном виде. Коробки со склейкой отдаём склеенными на 1 или 3 или 6 точек склейки, но в сложенном виде. Объёмные конструкции отдаём собранными, но оговаривать это надо отдельно и согласовывать в первую очередь логистику.
						</p>
					</div>
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
		},
		methods: {
			showHiddenBlock() {
				const faqItemTitles = document.querySelectorAll(".faq_item_title");
				faqItemTitles.forEach(item => {
					item.addEventListener("click", () => {
						// Пока что проверка останется, после того как я добавлю описание к каждому пункту,
						// этот If можно будет убрать
						if(!(item.nextElementSibling.querySelector(".faq_item_description").textContent === "")) {
							item.classList.toggle("active");
							item.nextElementSibling.classList.toggle("show");
						}
					})
				})
			}
		},
		mounted() {
			this.showHiddenBlock();
		}
	}
</script>

<style scoped>
.homepage_faq {
	padding: 60px 0;
}
.faq_title {
	margin-bottom: 60px;

	font-family: "Inter", sans-serif;
	font-size: 28px;
	line-height: 135%;
	text-align: center;
	color: #1F2125;
}
.faq_container {
	box-shadow: 1px 0px 23px rgba(0, 0, 0, 0.1);
	border: 1px solid #E0E0E0;
	border-radius: 5px;

	overflow: hidden;
}
.faq_item {
	padding: 20px 30px;

	cursor: pointer;
}
.faq_item:not(:last-child) {
	border-bottom: 1px solid #E0E0E0;
}
.faq_item_title {
	position: relative;

	padding-left: 60px;

	font-size: 20px;
	line-height: 135%;

	color: #1F2125;
}
.faq_item_title::before {
	content: "˅";

	position: absolute;
	top: 0;
	left: 0;

	font-size: 26px;

	transform: rotate(-90deg);
}
.faq_item_title.active::before {
	transform: none;
}
.faq_item_hidden_block {
	display: none;
}
.faq_item_hidden_block.show {
	display: block;
}
.faq_item_description {
	padding: 20px 0px 0px 60px;

	font-size: 18px;
	line-height: 147%;

	color: #62696C;
}

@media screen and (max-width: 768px) {
	.faq_item_title::before {
		top: 30%;
		transform: translateY(-30%), rotate(-90deg);
	}
	.homepage_faq {
		padding: 0;
	}
	.faq_item_title {
		padding-left: 30px;

		font-size: 12px;
	}
	.faq_item_description {
		padding: 20px 0px 0px 30px;

		font-size: 11px;
	}
}
</style>