<template>
        <div class="boxback" @click="link(contentdisplay)">
        <h3 class="boxHead">{{boxhead}}</h3>
        <h4 class="boxIntro">{{boxintro}}</h4>
        
        <div class="content" v-bind:style = "{display: contentdisplay}">
            <p>{{boxcontent}}</p>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                contentdisplay: "none",
                posts: this.posts,
            }
        },
        
        methods:{
            link(getstr){
                if(this.contentdisplay=="none") this.contentdisplay="block";
                else this.contentdisplay="none";
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
    }

</script>

<style>
.boxback{
    background-color: lightgray;
    text-align: center; 
    padding: 20px;
}
.boxback:hover{
    background-color: cornflowerblue;
    color: whitesmoke;
    
}
.content{
    height: 100px;
    background-color: whitesmoke;
}
</style>