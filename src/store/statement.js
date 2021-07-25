import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    data: []
  },
  getters:{
    lists: (state) => state.data,
  },
  mutations: {
    fetch (state, { res }){
        state.data = res.data
    },
    add(state, { payload }){
      state.data.push(payload)
    }
  },
  actions: {
      fetchList({ commit }){
          let res = {
              data:[
                  {
                    date: "2021-07-24",
                    type:"รายรับ",
                    amount: 10000,
                    information: "เงินเดือน"
                  },
                  {
                    date: "2021-07-25",
                    type:"รายจ่าย",
                    amount: 100,
                    information: "ค่าอาหาร"
                  }
              ]
          }
          commit("fetch",{ res })
      },
      addList({ commit }, payload){
        commit('add', { payload })
      }
  },
  modules: {
  }
})