Vue.component('count-box', {

    data: function () {
        return {
          count: 0,
        }

        
      },

    props:{
        boxname:{
            type:String,
            required: true,
        },
        styleObject: {
            type: Object,
            required: true,
        },
        currentStatus: {
            type: Boolean,
        },
    },
    methods: {
        countClick() {
            this.count++;
            this.$emit('change_color');
        },
    },

    template: `
    <div class="box" v-bind:style="[currentStatus ? styleObject : {}]">
        <button v-on:click = "countClick()">{{boxname}} : {{count}}</button>
    </div>
    `

})

window.addEventListener('load', () =>{

    window.vue = new Vue({
    
        el: "#app",
 
        data: { 
            styleObject: {
                'background-color': 'red',
              },
            currentNumber: 0,
        },
        
        methods: {
           
           setColor(number){
                this.currentNumber = number;
           }

        },


    })
    
    
});
