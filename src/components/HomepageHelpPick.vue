<template>
	<section class="help_pick">
		<div class="wrapper">
			<h3 class="help_title">Поможем подобрать индивидуальный вариант упаковки для вас</h3>
			<form>
				<my-input placeholder="Имя*" />
				<my-input type="number" placeholder="Номер телефона*" />
				<my-input type="email" placeholder="E-mail" />
				<my-button>Отправить</my-button>
			</form>
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
.help_pick .wrapper {
	padding: 85px 0;
}
.help_title {
	margin-bottom: 40px;

	font-size: 28px;
	line-height: 135%;
	color: #1F2125;
}
form {
	display: flex;
	justify-content: space-between;
	align-items: center;
}


@media screen and (max-width: 768px) {
	.help_pick .wrapper {
		padding: 45px 0;
	}
	.help_title {
			margin-bottom: 20px;

		font-size: 24px;
		line-height: 26px;
		text-align: center;
	}
	form {
		flex-direction: column;
	}
	input:not(:last-child) {
		margin-bottom: 20px;
	}
	input:last-child {
		margin-bottom: 40px;
	}
}
</style>