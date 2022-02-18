<template>
	<div>
		<span>Сортировка: </span>
		<select name="" id="">
			<option value="">По умолчанию</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: "my-select",
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
span {
	margin-right: 10px;

	font-size: 18px;
	line-height: 147%;
	color: #62696C;
}
select {
	-webkit-appearance: button;
 -webkit-user-select: none;
  background-position: center right;
  background-repeat: no-repeat;
}
</style>