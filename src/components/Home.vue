<template>
    <div>
        <h1>전화번호 부</h1>
        <router-link to="/create">추가</router-link>
        <privacy></privacy>
    </div>

</template>

<script>

    import Privacy from '@/components/Privacy'
    export default {
        name: "HoMe",
        components:{
            Privacy
        },
        data(){
            return{



            }
        },
        methods:{

        },

    }
</script>

<style scoped>

</style>