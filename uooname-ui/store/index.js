import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

export const strict = false

const store = () => new Vuex.Store({
  state:{
    nameInfo: null,
    locale: 'ko'
  },
  mutations:{
    SET_TOKEN:function(state, token){
      state.token=token
    },
    SET_NAME_INFO: (state, nameInfo) => {
      state.nameInfo = nameInfo
    },
    SET_LOCALE: (state, locale) => {
      state.locale = locale
    }
  },
  actions:{

  },
  getters: {
  }


})

export default store