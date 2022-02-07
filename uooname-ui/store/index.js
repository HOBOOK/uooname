import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

export const strict = false

const store = () => new Vuex.Store({
  state:{
    nameInfo: null
  },
  mutations:{
    SET_TOKEN:function(state, token){
      state.token=token
    },
    SET_NAME_INFO: (state, nameInfo) => {
      state.nameInfo = nameInfo
    }
  },
  actions:{

  },
  getters: {
  }


})

export default store