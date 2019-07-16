<template>
    <div>
    <h1>UserProfile</h1>

        Hello User {{$route.params.id}}

        <ul>
            <li>{{userData.email}}</li>
            <li>{{userData.phone}}</li>
            <li>{{userData.website}}</li>
        </ul>
        <router-link :to="postsLink">Posts</router-link>
        <router-link :to="nextUserLink">Next User</router-link>

    </div>
</template>

<script>
    export default{
        name: 'UserProfile',
        data () {
            return {
                userData: {}
            }   
        },
        methods:{
            fetchData(){
                fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
                .then((res) => {return res.json()})
                .then((data) => {this.userData = data;})
            }
        },

        computed: {
            postsLink(){
                return `/user/${this.$route.params.id}/posts`;
            },
            nextUserLink(){
                return `/user/${parseInt(this.$route.params.id)+1}`
            }
        },


        watch: {
            '$route': 'fetchData'
        },

        created() {
            this.fetchData();
            
        },
    }
</script>