<template>
    <div>
        <div style="text-align:end">
            <input v-model="value">
            <button @click="search">검색</button>
        </div>
        <div>
            <el-button @click="sort" type="primary">정렬</el-button>
            <el-button @click="sort2" type="warning">반대 정렬</el-button>
        </div>
        <el-table :data="findPhoneList" style="width: 100%; font-size:20px;" >
            <el-table-column   label="Id">
                <template slot-scope="{row}">
                    {{row.id}}
                </template>
            </el-table-column>
            <el-table-column label="Name">
                <template slot-scope="{row}">
                    {{row.name}}
                </template>
            </el-table-column>
            <el-table-column label="Number">
                <template slot-scope="{row}">
                    {{row.number}}
                </template>
            </el-table-column>
            <el-table-column label="Option">
                <template slot-scope="{row}">
                    <el-button type="primary" @click="$router.push('/modify/'+(row.id))">수정</el-button>
                    <el-button type="primary" @click="deletFnc">삭제</el-button>
                </template>
            </el-table-column>
        </el-table>
        <DiaLog></DiaLog>
<!--        <div>-->
<!--            <button @click="changeLocaleEn">영어버전</button>-->
<!--            <button @click="changeLocaleKo">한국어버전</button>-->
<!--            <button @click="changeLocaleJp">일어버전</button>-->
<!--            <p>{{ $t("textBanana") }}</p>-->
<!--            <p>{{ $t("textApple") }}</p>-->
<!--        </div>-->
    </div>
</template>

<script>
    import DiaLog from '@/components/DiaLog'
    // import {mapState}from 'vuex'
     import {mapMutations}from'vuex'
    export default {
        name: "PriVacy",
        components:{
            DiaLog
        },
        data(){
            return{
                name:'',
                number:'',
                id:'',
                value:'',
                findPhoneList:[],
                stringBanana: this.$i18n.t("textBanana"),
                stringApple: this.$i18n.t("textApple"),

            }
        },
        methods:{
             ...mapMutations(['saveLsPhoneList','deletePhoneList','setDefaultMaxId','loadPhoneList']),
            changeLocaleEn(){
                 this.$i18n.locale = "en";
            },
            changeLocaleKo(){
              this.$i18n.locale = "ko";
            },
            changeLocaleJp(){
                this.$i18n.locale = "jp";
            },
            deletFnc(){
                 // this.deletePhoneList(id)
                 this.$store.state.centerDialogVisible = true
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
        }
    }
</script>

<style scoped>
</style>
