import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/store'
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });

// import el from "element-ui/src/locale/lang/el";


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    data() {
        return {
            maxId: 1,
            phoneList: [
                {id: 0, name: 'ssh', number: 1541}
            ],

        }
    },
    methods: {

        setDefaultMaxId() {
            let maxId = localStorage.getItem('maxId');
            if (!maxId) {
                maxId = this.phoneList.length + 1;
            }
            this.maxId = maxId
        },
        loadPhoneList() {
            const lsPhoneList = localStorage.getItem("phoneList")
            if(lsPhoneList){
                this.phoneList = JSON.parse(lsPhoneList)
            }
        },
        createPhoneList(obj) {
            let phoneData =this.phoneList.some((item)=>item.number === obj.number)
            if (phoneData){
                alert('이미저장된 번호입니다.')
                return;
            }
            this.phoneList.push(obj)
            obj.id = this.maxId
            this.increaseMaxId()
        },
        increaseMaxId() {
            this.maxId++;
            this.saveLsPhoneList()
        },
        readPhoneList(id) {
            let pl = this.phoneList.find((item)=>{
                return item.id == id
            })
            if (pl){
                return pl
            }
        },
        updatePhoneList(obj) {
            let pl = this.phoneList.findIndex((item) => item.id === obj.id)
            if (pl >= 0) {
                this.phoneList.splice(pl,1,{
                    name: obj.name,
                    number: obj.number,
                    id: obj.id,

                })
            }
            this.saveLsPhoneList()
        },
        deletePhoneList(id) {
            for (let i = 0; i < this.phoneList.length; i++) {
                if (this.phoneList[i].id == id) {
                    this.phoneList.splice(i, 1);
                }
                this.saveLsPhoneList()
            }
        },
        saveLsPhoneList(){
            localStorage.setItem("phoneList", JSON.stringify(this.phoneList))
        },
        check(obj){
            for(let i=0;i<this.phoneList.length;i++)
                if(this.phoneList[i].number == obj.number){
                    this.phoneList.splice(i, 1);
                }
                //  else{
                //     alert('전화번호가 일치하지않습니다.')
                //     return
                // }
            this.saveLsPhoneList()
        }
    },
    created() {
        this.setDefaultMaxId()
        this.loadPhoneList();
    }
}).$mount('#app')
