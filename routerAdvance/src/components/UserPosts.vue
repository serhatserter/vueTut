<template>
    <div>
    <h1>UserPosts</h1>

        <div v-for="(post,index) in posts" :key="index">
            <h4>{{post.title}} </h4>
            <p>{{post.body}}</p> 
            <hr />       
        </div>

    </div>
</template>

<script>
    export default{
        name: 'UserPosts',
        data () {
            return {
                posts: {}
            }   
        },

        computed: {

        },

        created() {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`)
            .then((res) => {return res.json()})
            .then((data) => {this.posts = data;})
            
        },
    }
</script>