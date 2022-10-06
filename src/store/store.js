import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maxId: 1,
    phoneList: [
      {id: 0, name: 'ssh', number: 1541}
    ],
  },
  getters: {
  },
  mutations: {
    // CREATE_PHONELIST(state,obj) {
    //   let phoneData = state.phoneList.some((item) => item.number === obj.number)
    //   if (phoneData) {
    //     alert('이미저장된 번호입니다.')
    //     return;
    //   }
    //   state.phoneList.push(obj)
    //   obj.id = state.maxId
    // }
  },
  actions:{
    // createPhoneList({commit},obj){
    //   commit('CREATE_PHONELIST',obj);
    // }
  },
  modules: {
  },
})
