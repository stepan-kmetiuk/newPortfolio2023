<template>
	<div class="col-12 col-md-7 col-xl-8 main-content">
		{{dc}}
	</div>
</template>

<script>

	export default {
		data: function () {
			return {
				dc: 'Lorem1'
			}
		}
	}
</script>

<style lang="scss">
	.main-content {
		background-color: green;
	}
</style>