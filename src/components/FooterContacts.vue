<template>
	<section class="contacts" id="contacts">
		<div class="wrapper">
			<h3 class="contacts_title">Местоположение и контакты</h3>
			<div class="contacts_container">
				<div class="contacts_map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.85293382161!2d37.27839450084865!3d55.89990978141507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54091d735d8af%3A0x97264fb50c2394d5!2z0YPQuy4g0KHQstC10YLQu9Cw0Y8sINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sIDE0MzQ0Mg!5e0!3m2!1sru!2sru!4v1644326123275!5m2!1sru!2sru" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
				</div>
				<div class="contacts_info">
					<p class="contacts_data">
						<b>Адрес: </b>143442, Московская обл. г. Красногорск, Аристово, ул. Светлая, 19, пом. 2339
					</p>
					<p class="contacts_data">
						<b>Email:</b> korobka@gmail.com<br>  korobka@help.ru
					</p>
					<p class="contacts_data">
						<b>Номер:</b> +7 (983) 456-56-65<br>  +7 (983) 456-56-65
					</p>
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
		}
	}
</script>

<style scoped>
.contacts {
	padding: 60px 0 130px 0;
}
.contacts_title {
	font-size: 28px;
	line-height: 135%;
	color: #1F2125;
}
.contacts_container {
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
}
.contacts_info {
	margin-top: 15px;
}
.contacts_data {
	font-size: 14px;
	color: #1F2125;
}
.contacts_data:not(:last-child) {
	margin-bottom: 20px;
}
b {
	margin-right: 15px;

	font-size: 20px;
}
br {
	display: none;
}

@media screen and (max-width: 768px) {
	.contacts_container {
		flex-direction: column;
		margin-top: 0;
	}
	iframe {
		width: 300px;
	}
	.contacts {
		padding: 40px 0 50px 0;
	}
	.contacts_title {
		margin-bottom: 35px;

		text-align: center;
	}
	.contacts_info {
		margin-top: 30px;
	}
	.contacts_data {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		text-align: center;
	}
	.contacts_data:not(:last-child) {
		margin-bottom: 20px;
	}
	b {
		margin: 0 0 10px 0;
	}
	br {
		display: inline-block;
	}
	.contacts_map {
		display: flex;
		justify-content: center;
	}
}
</style>