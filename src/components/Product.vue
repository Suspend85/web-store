<template>
	<div v-if="hasProduct">
		<h1>{{ product.title }} </h1>
    <h3>Осталось: {{ product.rest }} шт.</h3>
    <router-link to="/">Back to products</router-link>
		<hr>
    <button v-if="inCart(product.id)" @click="remove(product.id)" type="button" class="btn btn-danger">
      Remove
    </button>
    <button v-else @click="add(product.id)" type="button" class="btn btn-success">
      Add to cart
    </button>
		<div class="alert alert-success">
			price {{ product.price }}
		</div>
	</div>
  <app-e-404 v-else/>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppE404 from '@/components/E404';

export default {
  components: { AppE404 },
  computed: {
    ...mapGetters('products', { productById: 'current' }),
    ...mapGetters('cart', [ 'inCart' ]),
    id () {
      return parseInt(this.$route.params.id)
    },
    validId(){
      return /^[1-9]+\d*$/.test(this.id);
    },
    product() {
      return this.productById(this.id)
    },
    hasProduct (){
      return this.product !== undefined;
    }
  },
  methods: {
    ...mapActions('cart', [ 'add', 'remove' ]),
  }
}
</script>