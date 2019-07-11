window.addEventListener('load', () =>{

window.vue = new Vue({

    el: "#app",
    data: {
        isloading: true,
    },

    created(){
        fetch('./data.json')
            .then((res) => {return res.json()})
            .then((res) => {console.log(res)})
    }
})



});