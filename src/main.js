import { createApp } from "vue";
import App from './App';
import store from './store';
import router from './router'

store.dispatch('products/load').then(() => {
	createApp(App)
	.use(store)
	.use(router)
	.mount('#app');
})

store.dispatch('cart/load');

import 'bootstrap/dist/css/bootstrap.min.css'



