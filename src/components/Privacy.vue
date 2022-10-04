<template>
    <div>
        <div style="text-align:end">
            <input v-model="value">
            <button @click="search">검색</button>
        </div>
        <div>
            <button @click="sort">정렬</button>
            <button @click="sort2">반대 정렬</button>
        </div>
        <div style="border:black solid">
            <p v-for="(a,i) in findPhoneList" :key="i" style="text-align:left">
                {{a.id}}.이름:{{a.name}}<br>
                전화번호:{{a.number}}<br>
                <button @click="$router.push('/modify/'+(a.id))">수정</button>
                <button @click="deleteFnc(a.id)">삭제</button>
            </p>
        </div>
    </div>
</template>

<script>
    // import {mapState}from 'vuex'
     import {mapMutations}from'vuex'
    export default {
        name: "PriVacy",
        data(){
            return{
                name:'',
                number:'',
                id:'',
                value:'',
                findPhoneList:[],
            }
        },
        methods:{
             ...mapMutations(['saveLsPhoneList','deletePhoneList','setDefaultMaxId','loadPhoneList']),
            deleteFnc(id){
                this.deletePhoneList(id)
                this.saveLsPhoneList()
            },
            search(){
                this.name = this.value
                if(!this.name){
                    this.findPhoneList=this.$store.state.phoneList
                }else{
                    this.findPhoneList=[]
                    this.find(this.name)
                }
            },
            find(name){
                let pl = this.$store.state.phoneList.filter((item)=>{
                    return item.name.includes(name)||item.number.includes(name)
                })
                for (let i=0;i<pl.length;i++)
                    this.findPhoneList.push(pl[i])
            },
            sort(){
                this.findPhoneList.sort(function(a,b){
                    let x = a.name.toLowerCase();
                    let y = b.name.toLowerCase();
                    if(x > y){
                        return 1;
                    }if(y > x){return -1}
                    return 0;
                })
            },
            sort2(){
                this.findPhoneList.sort(function(a,b){
                    let x = a.name.toLowerCase();
                    let y = b.name.toLowerCase();
                    if(x < y){
                        return 1;
                    }if(y < x){return -1}
                    return 0;
                })
            }
        },
        created(){
            this.findPhoneList=this.$store.state.phoneList
            // this.setDefaultMaxId()
            // this.loadPhoneList();
        }
    }
</script>

<style scoped>

</style>