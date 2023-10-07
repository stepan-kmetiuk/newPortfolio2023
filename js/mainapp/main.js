
import Vue from 'vue';
import App from './components/main-component.vue'

window.axios = require('axios');


var app = new Vue({
	el: '#app',
	render: h => h(App)
});



