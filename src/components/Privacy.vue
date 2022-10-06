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
                    <el-button type="primary" @click="centerDialogVisible = true">삭제</el-button>
                    <el-dialog
                            title="Warning"
                            :visible.sync="centerDialogVisible"
                            width="30%"
                            center>
                        <span>{{row.name}}의 전화 번호를 정말로  삭제하시겠습니까?</span>
                        <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">취소</el-button>
              <el-button type="primary" @click=" centerDialogVisible = false , centerDialogVisible2 = true">확인</el-button>
              </span>
                    </el-dialog>
                </template>
            </el-table-column>
        </el-table>
                <el-dialog title="Warning" :visible.sync="centerDialogVisible2" width="30%" center>
            <span>삭제할 전화번호를 입력해주세요</span><br>
            <input v-model="value2"><br>
            <el-button @click="centerDialogVisible2 = false">취소</el-button>
            <el-button type="primary" @click="check">확인</el-button>
        </el-dialog>
    </div>
</template>

<script>
    // import {mapState}from 'vuex'
    //  import {mapMutations}from'vuex'
    export default {
        name: "PriVacy",
        data(){
            return{
                name:'',
                number:'',
                id:'',
                value:'',
                value2:'',
                checkNumber:'',
                findPhoneList:[],
                centerDialogVisible: false,
                centerDialogVisible2: false
            }
        },

        methods:{
             // ...mapMutations(['saveLsPhoneList','deletePhoneList','setDefaultMaxId','loadPhoneList']),
            deleteFnc(id){
                this.$root.deletePhoneList(id)
                this.$root.saveLsPhoneList()
            },
            check(){
                 this.checkNumber = this.value2
                if(!this.checkNumber){
                    alert('삭제할 전화번호를 작성해주세요')
                }else{
                    this.$root.check({
                        number:this.checkNumber,
                        id:this.id
                    })
                    this.centerDialogVisible2 = false
                }
            },
            search(){
                this.name = this.value
                if(!this.name){
                    this.findPhoneList=this.$root.phoneList
                }else{
                    this.findPhoneList=[]
                    this.find(this.name)
                }
            },
            find(name){
                let pl = this.$root.phoneList.filter((item)=>{
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
            this.findPhoneList=this.$root.phoneList
        }
    }
</script>

<style scoped>

</style>