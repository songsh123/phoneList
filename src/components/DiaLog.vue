<template>
    <div>
        <el-dialog title="Warning" :visible.sync="$store.state.centerDialogVisible" width="30%" center>
            <span> 전화 번호를 정말로  삭제하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="$store.state.centerDialogVisible = false">취소</el-button>
              <el-button type="primary" @click="$store.state.centerDialogVisible = false , $store.state.centerDialogVisible2 = true">확인</el-button>
              </span>
        </el-dialog>
    <el-dialog title="Warning" :visible.sync="$store.state.centerDialogVisible2" width="30%" center>
        <span>삭제할 전화번호를 입력해주세요</span><br>
        <input v-model="value2"><br>
        <el-button @click="$store.state.centerDialogVisible2 = false">취소</el-button>
        <el-button type="primary" @click="check2">확인</el-button>
    </el-dialog>
    </div>
</template>

<script>
    import {mapMutations}from'vuex'
    export default {
        name: "DiaLog",
        data(){
            return{
                value2:'',
                checkNumber:'',
                number:'',
                id:''
            }
        },
        methods:{
            ...mapMutations(['saveLsPhoneList','check']),
            check2(){
                this.checkNumber = this.value2
                if(!this.checkNumber){
                    alert('삭제할 전화번호를 작성해주세요')
                }else{
                    this.check({
                        number:this.checkNumber,
                        id:this.id
                    })
                    this.$store.state.centerDialogVisible2 = false
                    this.saveLsPhoneList();
                }
            },
        }
    }
</script>

<style scoped>

</style>