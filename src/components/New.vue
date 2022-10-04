<template>
    <div>
        <h1>전화번호부 추가</h1>
        <a @click="$router.push('/')">Home</a>
        <p style="text-align:left">
            이름: <input v-model="name"><br>
            전화번호: <input v-model="number"><br>
            <button @click="save">저장</button>
        </p>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "NeW",
        data() {
            return {
                name: '',
                number: '',
            }
        },
        methods:{
            ...mapMutations(['createPhoneList','saveLsPhoneList']),
            save(){
                if(!this.name){
                    alert('이름을 입력하세요')
                }else if(!this.number){
                    alert('전화번호를 작성하세요')
                }else{
                    this.createPhoneList({
                        name:this.name,
                        number:this.number
                    })
                    this.increaseMaxId()
                    this.$router.push('/')
                }
            },
            increaseMaxId() {
                this.$store.state.maxId++;
                this.saveLsPhoneList()
            },
        }

    }
</script>

<style scoped>

</style>