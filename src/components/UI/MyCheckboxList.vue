<template>
	<div class="checkbox_list">
		<ul>
			<li v-for="item in this.list">
				<my-input :id="item + title" type="checkbox" />
				<label :for="item + title">{{item}}</label>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "my-checkbox-list",
		data() {
			return {

			}
		},
		props: {
			list: {
				type: Array,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
		},
	}
</script>

<style scoped>
li {
	margin-bottom: 5px;
}
input {
	display: none;
}
label {
	display: flex;
	align-items: center;

	font-size: 16px;
	line-height: 19px;
	color: #62696C;
}
label::before {
	content: "";

	display: inline-block;
	width: 18px;
	height: 18px;
	margin-right: 15px;

	background: #FFFFFF;
	border: 1px solid #E0E0E0;
	border-radius: 2px;
}
input:checked ~ label::before {
	content: "";

	background: #08A652;
	background-image: url("../../assets/galochka_ti_shas_umresh.png");
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 70% 70%;
}
</style>