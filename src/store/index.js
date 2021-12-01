import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 弹出框显示状态
    dialogFormVisible:false,

    // 分页数据
    paginationArticleInfo:{
      total:0,
      articleInfo:'',
      pageSize:[100, 200, 300, 400]
    },

    // 用户登录成功信息
    userinfo:'',

  },
  mutations: {
    getpaginationArticleInfo(state,info){
      state.paginationArticleInfo.total=info.total
      state.paginationArticleInfo.articleInfo=info.articleInfo
      console.log(state.paginationArticleInfo);
    },
    ChangeDialogFormVisible(state,info){
      state.dialogFormVisible=info
    },

    getUserinfo(state,info){
      state.userinfo=info
      
    },
  },
  actions: {
  },
  modules: {
  }
})
