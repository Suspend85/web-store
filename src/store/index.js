import { createStore } from 'vuex'

import products from './products'
import cart from './cart'

const store = {
	modules: {
		products,
		cart
	},
	strict: process.env.NODE_ENV !== 'production'
}

export default createStore(store);
