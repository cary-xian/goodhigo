import { createStore } from 'vuex'
export default createStore({
  state: {
    location:'定位失败',
    username:'未登录，请登录',
    msglist:[
      {name:'test1'},
      {name:'test2'},
      {name:'test3'}
     ],
     msgnum:0
  },
  getters: {
      show(state){
        return state.location;
      },
      showMsg(state){
         return state.msglist;
      },
      showname(state){
        return state.username;
      }
  },
  mutations: {
      saveLocalInfo(state,value){
          state.location=value;
      },
      setMsgNum(state,value){
          state.msgnum=value;
      }
  },
  actions: {
  },
  modules: {
  }
})
