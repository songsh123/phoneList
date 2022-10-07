import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maxId: 1,
    phoneList: [
      {id: 0, name: 'ssh', number: 1541}
    ],
      centerDialogVisible: false,
      centerDialogVisible2: false
  },
  getters: {
  },
  mutations: {
    setDefaultMaxId(state) {
      let maxId = localStorage.getItem('maxId');
      if (!maxId) {
        maxId = state.phoneList.length ++;
      }
      return state.maxId = maxId
    },
    loadPhoneList(state) {
      const lsPhoneList = localStorage.getItem("phoneList")
      if(lsPhoneList){
        return state.phoneList = JSON.parse(lsPhoneList)
      }
    },
    createPhoneList(state,obj) {
      let phoneData = state.phoneList.some((item)=>item.number === obj.number)
      if (phoneData){
        alert('이미저장된 번호입니다.')
        return;
      }
      state.phoneList.push(obj)
      obj.id = state.maxId
    },

    readPhoneList(state,id) {
      let pl = state.phoneList.find((item)=>{
        return item.id == id
      })
      if (pl){
        return pl
      }
    },
    updatePhoneList(state, obj) {
      let pl = state.phoneList.findIndex((item) => item.id === obj.id)
      if (pl >= 0) {
        state.phoneList.splice(pl,1,{
          name: obj.name,
          number: obj.number,
          id: obj.id,
        })
      }
    },
    deletePhoneList(state,id) {
      for (let i = 0; i < state.phoneList.length; i++) {
        if (state.phoneList[i].id == id) {
          state.phoneList.splice(i, 1);
          // saveLsPhoneList(state.phoneList)
        }
      }
    },
    check(state,obj){
      for(let i=0;i<state.phoneList.length;i++)
        if(state.phoneList[i].number == obj.number){
          state.phoneList.splice(i, 1);
        }
      //  else{
      //     alert('전화번호가 일치하지않습니다.')
      //     return
      // }
    },
    saveLsPhoneList(state){
      localStorage.setItem("phoneList", JSON.stringify(state.phoneList))
    },

  },
  actions: {
    deletePhoneList({commit}, id){
      commit('deletePhoneList',id);
    },
    updatePhoneList({commit, obj}){
      commit('updatePhoneList',obj);
    },
    readPhoneList({commit}, id){
      commit('readPhoneList',id);
    },
    createPhoneList({commit}, obj){
      commit('createPhoneList',obj);
    },
    loadPhoneList({commit}){
      commit('loadPhoneList')
    },
    setDefaultMaxId({commit}){
      commit('setDefaultMaxId')
    },
  },
  modules: {
  },
})

// const saveLsPhoneList = (jsonPhoneList) =>{
//   localStorage.setItem("phoneList", jsonPhoneList)
// }