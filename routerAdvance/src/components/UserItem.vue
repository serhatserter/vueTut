<template>
<div>
    <p>
        <router-link :to="profileLink">
        Name: {{user.name}} - Username: {{user.username}}
        </router-link>
    </p>
</div>
</template>

<script>

    export default{
        name: 'UserItem',
        props:{
            user:{
                type: Object, 
                required: true,
            },
        },
        computed: {
            profileLink(){
                return `/user/${this.user.id}`
            }
        },

    }
    
</script>

<style>
</style>