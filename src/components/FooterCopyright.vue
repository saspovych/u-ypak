<template>
	<div class="footer_copyright">
		<div class="wrapper">
			<div class="all_on_protect">Все права защищены</div>
			<div class="privacy_policy">
				<a href="#">Условия и положения</a>
				<a href="#">Политика конфиденциальности</a>
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
.footer_copyright {
	padding: 30px 0;

	background: #E0E0E0;
}
.footer_copyright .wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.all_on_protect {
	font-family: "Inter";
	font-size: 16px;
	line-height: 147%;
	color: #1F2125;
}
a {
	font-family: "Inter";
	font-size: 16px;
	line-height: 147%;
	text-decoration: underline;
	color: #1F2125;
}
a:not(:last-child) {
	margin-right: 50px;
}

@media screen and (max-width: 768px) {
	.footer_copyright {
		padding: 30px 0;

		background: #E0E0E0;
	}
	.footer_copyright .wrapper {
		flex-direction: column;
	}
	.all_on_protect {
		order: 2;
	}
	a,
	.all_on_protect {
		font-size: 12px;
	}
	a:not(:last-child) {
		margin-right: 0;
	}
	.privacy_policy {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		order: 1;
		margin-bottom: 30px;
	}
}
</style>