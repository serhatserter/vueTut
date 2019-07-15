<template>
    <div>
        <ul>
            <li v-for= "(gif,index) in gifs" :key="index">
                <img :src="gif.images.fixed_height_small.url" /></li>
        </ul>
    </div>
</template>

<script>
    export default{
        props: {
            gifs: {
                type: Array,
                required: false,
                default: [],
            }
        }
    }

</script>

<style>

    li{
        list-style: none;
        float: left;
        margin: 20px;
    }

</style>