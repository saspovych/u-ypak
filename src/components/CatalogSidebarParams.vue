<template>
	<div class="sidebar_params_wrapper">
		<div class="params_title">
			<h4 class="title">Параметры</h4>
		</div>
		<my-accordion :title="'Цена'">
			<my-ranger :propValue="[0, 1000]" :minVal="0" :maxVal="1000" :mySymbol="'₽'"/>
		</my-accordion>
		<my-accordion :title="'Длина'">
			<my-ranger :propValue="[0, 2500]" :minVal="0" :maxVal="2500" :mySymbol="'мм'"/>
		</my-accordion>
		<my-accordion :title="'Ширина'">
			<my-ranger :propValue="[0, 1500]" :minVal="0" :maxVal="1500" :mySymbol="'мм'"/>
		</my-accordion>
		<my-accordion :title="'Высота'">
			<my-ranger :propValue="[0, 1500]" :minVal="0" :maxVal="1500" :mySymbol="'мм'"/>
		</my-accordion>
		<my-accordion :title="'Слойность картона'">
			<my-checkbox-accordion
				:titleList="['Трехслойный', 'Пятислойный', 'Микрогофрокартон']"
				:list="[['Т-21', 'Т-22', 'Т-23', 'Т-24', 'Т-25', 'Т-26', 'Т-27'],
									['П-21', 'П-22', 'П-23', 'П-24', 'П-25', 'П-26'],
									['Т-21', 'Т-22', 'Т-23', 'Т-24']]"
			/>
		</my-accordion>
		<my-accordion :title="'Цвет'">
			<my-checkbox-list :list="['Белый', 'Бурый', 'Бело-бурый']"/>
		</my-accordion>
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
.sidebar_params_wrapper {
	border: 1px solid #E0E0E0;
}
.params_title {
	padding: 15px 23px;

	border-bottom: 1px solid #E0E0E0;

	font-weight: 500;
	font-size: 24px;
	line-height: 135%;
	color: #1F2125;
}
</style>