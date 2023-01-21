<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div class="col col-sm-4 mb-3 mt-3" v-for="pr in productList" :key="pr.id">
				<div class="card">
					<div class="card-body">
						<h3>{{ pr.title }}</h3>
						<div>{{ pr.price }}</div>
						<router-link :to="{ name: 'product', params: { id: pr.id } }">Read more</router-link>
						<hr>
            <button v-if="inCart(pr.id)" @click="remove(pr.id)" type="button" class="btn btn-danger">
              Remove
            </button>
            <button v-else @click="add(pr.id)" type="button" class="btn btn-success">
              Add to cart
            </button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters('products', { productList: 'all' }),
		...mapGetters('cart', [ 'inCart' ])
	},
	methods: {
		...mapActions('cart', [ 'add', 'remove' ])
	}
}
</script>