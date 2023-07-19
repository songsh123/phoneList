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
     import {mapActions} from 'vuex'
     import {mapGetters} from 'vuex'
     import {mapMutations} from 'vuex'
    export default {
        name: "ModiFy",
        computed:{
            ...mapGetters(['readPhoneList'])
            // readPhoneList
        },
        data(){
            return{
                name:'',
                number:'',
                id:'',
            }
        },
        methods:{
             ...mapActions(['updatePhoneList','']),
            ...mapMutations(['saveLsPhoneList']),
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
            },
        },
        created(){
            window.vm=this
            // const phone = this.readPhoneList(this.$route.params.id)
            const phone = this.readPhoneList(this.$route.params.id)
            console.log(this.$route.params.id)
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