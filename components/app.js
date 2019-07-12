Vue.component('count-box', {

    data: function () {
        return {
          count: 0,
          colorChange: 'red',
        }

        
      },

    props:{
        boxname:{
            type:String,
            required: true,
        }
    },
    methods: {
        countClick() {
            this.count++;
            this.$emit('changeCl');
        },
    },

    template: `
    
    <div class="box" v-bind:style="styleObject">
    <button   v-on:click = "countClick()">{{boxname}} : {{count}}</button>
    </div>
    
    `

})

window.addEventListener('load', () =>{

    window.vue = new Vue({
    
        el: "#app",
 
        data: { 
            styleObject: {
                color: 'red',
                fontSize: '13px'
              },
        },
        
        methods: {
           setColor(){
           
           }
        },
    
        computed: {
        },


    })
    
    
});