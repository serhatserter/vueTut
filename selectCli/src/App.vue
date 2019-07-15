<template>
  <div id="app">
        <div id="maindiv">
        
        <div v-for="(blocks,index) in posts" :key="index">
            <box-block 
                v-bind:boxhead = "blocks.boxhead"
                v-bind:boxintro = "blocks.boxintro" 
                v-bind:boxcontent = "blocks.boxcontent"
            ></box-block>
            <br>
        </div>
          
    </div>
  </div>
</template>

<script>
import BoxBlock from './components/BoxBlock.vue'
export default {
  name: 'app',
  components: { BoxBlock },

  data () {
    return {
      posts: [],
    }
  },
  
  created(){
    fetch('src/datas/dataBlog.json')
        .then((res) => {return res.json()})
        .then((res) => {

            this.posts = res;

        })
  }
}
</script>

<style>
body {
    height: 100%;
    margin: 0;
    background-color: cornflowerblue;
    
}

#maindiv{
    display: block;
    width: 60%;
    background-color: whitesmoke;
    padding: 20px;
    
}

p{
    color:black;
    padding: 10px;

}
</style>
