<template>
  <div id="app"> 
   <search v-on:SearchRequested = "handleSearch"></search>
   <p v-if="isLoading" >Loading</p>
   <preview :gifs="gifs"></preview>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Preview from './components/Preview.vue'
export default {
  name: 'app',
  components: { Search, Preview },

  data(){
    return{
      gifs: [],
      isLoading: true,
    }
  },

  methods:{
    getUrl(url){

      fetch(url)
          .then((res) => {return res.json()})
          .then((res) => {

              this.gifs=res.data;
              this.isLoading = false;

      })

    },
    handleSearch(query){
      this.gifs = [];
      this.isLoading = true;

      this.getUrl(`https://api.giphy.com/v1/gifs/search?api_key=Dcwv2WVANppPX2X24Jl0Qw2WfZVACmLA&q=${query}&limit=25&offset=0&rating=G&lang=en`);
    }
  },

  created(){
    const url ='http://api.giphy.com/v1/gifs/trending?api_key=Dcwv2WVANppPX2X24Jl0Qw2WfZVACmLA';
    this.getUrl(url);
    
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

</style>
