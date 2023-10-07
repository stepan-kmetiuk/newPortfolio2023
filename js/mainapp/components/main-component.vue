<template>
	<div class="row" id="app">
		<app-sidebar></app-sidebar>
		<app-content></app-content>
		<div class="col-12 col-md-2"></div>
	</div>
</template>

<script>
	import SideBar from './SideBar.vue'
	import Content from './Content.vue'

	export default {
		data: function () {
			return {

			}
		},
		components: {
			'app-sidebar' : SideBar,
			'app-content' : Content
		}
	}
</script>

<style lang="scss">

  </style>