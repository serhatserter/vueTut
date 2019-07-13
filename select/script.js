Vue.component('BoxBlock', {

    data:function () {
        return {
            contentdisplay: "none"
        }
    },

    props:{
        boxhead:{
            type:String,
            required: true,
        },
        boxintro:{
            type:String,
            required: true,
        },
        boxcontent:{
            type:String,
            required: true,
        },
    },
    methods: {
        link(getstr){
            if(this.contentdisplay=="none") this.contentdisplay="block";
            else this.contentdisplay="none";
        }
    },

    template: `

    <div class="boxback" @click="link(contentdisplay)">
        <h3 class="boxHead">{{boxhead}}</h3>
        <h4 class="boxIntro">{{boxintro}}</h4>
        
        <div class="content" v-bind:style = "{display: contentdisplay}">
            <p>{{boxcontent}}</p>
        </div>
    </div>


    `

})

window.addEventListener('load', () =>{

    window.vue = new Vue({
    
        el: "#maindiv",
 
        data: { 

        },
        
        methods: {

        },

        computed: {            

        }

    })
        
});