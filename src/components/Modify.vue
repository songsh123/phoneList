<template>
    <div>
        <h1>전화번호부 수정</h1>
        <a @click="$router.push('/')">Home</a>
        <p style="text-align:left">
            {{id}}이름: <input v-model="name"><br>
            전화번호: <input v-model="number"><br>
            <button @click="save">저장</button>
        </p>
    </div>
</template>

<script>
     import {mapMutations} from 'vuex'
    export default {
        name: "ModiFy",
        data(){
            return{
                name:'',
                number:'',
                id:'',
            }
        },
        methods:{
             ...mapMutations(['updatePhoneList','saveLsPhoneList','readPhoneList']),
            save(){
                if(!this.name){
                    alert('이름을 작성해주세요')
                }else if(!this.number){
                    alert('전화번호를 입력해주세요')
                }else{
                    this.updatePhoneList({
                        name:this.name,
                        number:this.number,
                        id:this.id
                    })
                    this.saveLsPhoneList()
                    this.$router.push('/')
                }
            }
        },
        created(){
            const phone = this.readPhoneList(this.$route.params.id)
            if(phone){
                this.name=phone.name
                this.number=phone.number
                this.id=phone.id
            }
        }
    }
</script>

<style scoped>
</style>