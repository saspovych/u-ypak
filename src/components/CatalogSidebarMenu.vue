<template>
	<div class="sidebar_menu_wrapper">
		<div class="menu_title">
			<h4 class="title">Меню</h4>
		</div>
		<my-accordion :title="'Гофрокороба'">
			<my-list
			:items="['4х клапанные коробки',
							 'Самосборные коробки',
							 'Кашированные коробки',
							 'Крупногабаритная тара']"
			/>
		</my-accordion>
		<my-accordion :title="'Коробки по применению'">
			<my-list
				:items="['Для скалад',
								 'Для пиццы',
								 'Для мяса и птицы',
								 'Лотки для овощей',
								 'Кондитерские лотки',
								 'Для напитков',
								 'Для одежды и обуви',
								 'Для техники',
								 'Для детских товаров',
								 'Для подарков']"
			/>
		</my-accordion>
		<my-accordion :title="'Коробки с печатью'">
			<my-list
				:items="['4х клапанные коробки',
								 'Самосборные коробки',
								 'Кашированные коробки',
								 'Коробки с флексопечатью',
								 'Из переплетного картона',
								 'Для подарков',
								 'Новогодние коробки',
								 'Из картона хром-эрзац']"
			/>
		</my-accordion>
		<my-accordion :title="'Коробки для подарков'">
			<my-list
				:items="['Самосборные коробки',
								 'Кашированные коробки',
								 'Коробки с флексопечатью',
								 'Из переплетного картона',
								 'Коробки для подарков',
								 'Новогодние коробки',
								 'Из картона хром-эрзац']"
			/>
		</my-accordion>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			showHiddenBlock() {
				const listItems = document.querySelectorAll(".accordion_title");
				listItems.forEach(item => {
					item.addEventListener("click", () => {
						item.classList.toggle("active");
						item.nextElementSibling.classList.toggle("show");
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
.sidebar_menu_wrapper {
	margin-bottom: 30px;

	border: 1px solid #E0E0E0;
}
.menu_title {
	padding: 15px 23px;

	border-bottom: 1px solid #E0E0E0;

	font-weight: 500;
	font-size: 24px;
	line-height: 135%;
	color: #1F2125;
}
</style>