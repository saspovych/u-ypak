<template>
	<div class="input_block">
		<my-input
			class="input"
			:value="`${value[0] + this.mySymbol}`"
			:placeholder="`${this.minVal + this.mySymbol}`"
		/>
		<my-input
			class="input"
			:value="`${value[1] + this.mySymbol}`"
			:placeholder="`${this.maxVal + this.mySymbol}`"
		/>
	</div>
	<Slider v-model="value" :tooltips="false" :min="this.minVal" :max="this.maxVal" :step="1"/>
</template>

<script>
	import Slider from '@vueform/slider';
	import "@vueform/slider/themes/default.css";
	export default {
		components: {
			Slider,
		},
		name: "my-ranger",
		data() {
			return {
				value: this.propValue,
			}
		},
		props: {
			propValue: {
				type: Array,
				required: true,
			},
			minVal: {
				type: Number,
				required: true,
			},
			maxVal: {
				type: Number,
				required: true,
			},
			mySymbol: {
				type: String,
				required: true,
			},
		}
	}
</script>

<style scoped>
.input_block {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}
input {
	width: 100px;
	padding: 5px 12px;
}
input:not(:last-child) {
	margin-right: 25px;
}
</style>