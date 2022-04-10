import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

export const strict = false

const store = () => new Vuex.Store({
  state:{
    keywordInfo: null,
    locale: 'ko'
  },
  mutations:{
    SET_TOKEN:function(state, token){
      state.token=token
    },
    SET_KEYWORD_INFO: (state, keywordInfo) => {
      state.keywordInfo = keywordInfo
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