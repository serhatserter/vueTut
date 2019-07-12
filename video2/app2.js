Vue.component('VueCart', {
  
  props:{
    cart: {
      type: Array,
      required: true,
    },
    title:{
      type: String,
      required: true,
    },
    type:{
      type: String,
      required: true,
    }
  },
  methods: {
    removeFromCart(index) {
      return this.cart.splice(index, 1);
    },
    changeCart(index){
     const item =  this.removeFromCart(index);
     this.$emit('itemchangedoncart', item[0], this.type);
    }
  },
  computed: {
    cartTotal() {
      let total = 0;
      this.cart.forEach((item) => {
        total += parseFloat(item.price, 10);
      });
      return total.toFixed(2);
    },

  },
  template:`
  <div class = "cart-wrapper">
    <h2>{{title}}</h2>
    <p v-if="!cart.length">No item in cart.</p>
    <div class="cart">
        <div class="item" v-for="(item, index) in cart">
          <div class="image">
            <a v-bind:href="item.url">
              <img v-bind:src="item.image" />
            </a>
          </div>
          <div class="info">
            <h4>{{item.name}}</h4>
            <p class="seller">by {{item.seller}}</p>
            <p class="status available" v-if="item.isAvailable">In Stock</p>
            <p class="shipping" v-if="item.isEligible">Eligible for FREE Shipping & FREE Returns</p>
            <a href="#" v-on:click="removeFromCart(index)">Delete</a>
            <a href="#" class="secondary" v-on:click="changeCart(index)" v-if="type == 'shoppingCart'">Save for later</a>
            <a href="#" class="secondary" v-on:click="changeCart(index)" v-if="type == 'savedCart'">Move to Cart</a>
          </div>
          <p class="price">\${{item.price}}</p>
          
        </div>
        <div class="subtotal">
          Subtotal ({{cart.length}} items): <span class="price">\${{cartTotal}}</span>
        </div>
      </div>
  </div>
  
  `
});

window.addEventListener('load', () =>{

window.vue = new Vue({

    el: "#app",
    data: {
        isLoading: true,
        cart: [],
        saved: [],
    },

    methods: {

      handleItemChange(){
        console.log("...");
      }

      },

    created(){
        fetch('./data.json')
            .then((res) => {return res.json()})
            .then((res) => {

                this.isLoading = false;
                this.cart = res.cart;
                this.saved = res.saved;

            })

    }
})



});