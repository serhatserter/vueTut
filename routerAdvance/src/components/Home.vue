<template>
<div>
    <div v-for="(user,index) in users" :key=index >
        <user-item :user=user ></user-item>
    </div>
</div>
</template>

<script>

    import UserItem from './UserItem.vue'
    export default{
        name: 'Home',
        data () {
            return {
                users: []
            }   
        },

        created() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {return res.json()})
            .then((users) => {this.users = users})
            
        },
        components:{
            UserItem
        }
    }
    
</script>

<style>
</style>