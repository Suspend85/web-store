export default {
	namespaced: true,
	state: {
		items: []
	},
	getters: {
		all: state => state.items,
		current: state => id => state.items.find(item =>item.id == id),
	},
	mutations: {
		setItems(state, products) {
			state.items = products;
		}
	},
	actions: {
		async load({ commit }){
			try {
				let res = await fetch('http://faceprog.ru/reactcourseapi/products/all.php');
				let products = await res.json();
				commit('setItems', products)
			}
			catch (e){
				console.log(e);
			}
		}
	}
}

function stub(){
	return [
		{"id":100,"title":"Iphone 200","price":12000,"rest":10},
		{"id":101,"title":"Samsung AAZ8","price":22000,"rest":5},
		{"id":103,"title":"Nokia 3310","price":5000,"rest":2},
		{"id":105,"title":"Huawei ZZ","price":15000,"rest":8}
	];
}

