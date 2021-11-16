<template>
    <div id="el-input">
        <el-input placeholder="请输入内容" v-model="inputInfo" class="input-with-select" style="background:transparent">
            <el-select v-model="selectInfo" slot="prepend" placeholder="请选择">
            <el-option label="标题" value="title"></el-option>
            <el-option label="标签" value="label"></el-option>
            <el-option label="作者" value="author"></el-option>

            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="select"></el-button>
        </el-input>
          <!-- 添加按钮 -->
          <el-button type="danger" @click="isformShow" id="ADD">添加</el-button>
          <!-- {{this.$store.state.dialogFormVisible = true}} -->
          <!-- 添加数据 -->
          <el-dialog title="添加文章" :visible.sync="this.$store.state.dialogFormVisible" custom-class='dialog' v-if="this.$store.state.dialogFormVisible" :center='true' :fullscreen='false' :show-close="false">
            <AddArticle :message='this.$store.state.dialogFormVisible'></AddArticle>
            <div slot="footer" class="dialog-footer">
            </div>
          </el-dialog>
    </div>
</template>

<style lang="less">


.el-dialog{
  /* overflow: scroll; */
  overflow:visible;
}
.el-input__inner{
  background:transparent !important;
}
.el-input__suffix{
  // background-color: rgba(255, 255, 255, 0.178) !important;
  background:transparent !important;
}
.el-input__inner{
  // color: #fff;
}
#el-input{
    /* margin: 10rem 0rem; */
    height: 10%;
    width: 600rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background:transparent !important
}
#ADD{
    margin: 0rem 10rem;
}
.dialog{
  width: 1000rem !important;
  height: 700rem;
  
}
  .input-with-select{
    background:transparent !important;
  }
  .el-select .el-input {
    width: 100rem;
    background:transparent !important;
  }
  .el-input{
    background:transparent !important;
  }
  .el-textarea__inner,.el-input__inner {
    background: transparent !important;
}

@media screen and (max-width: 767rem){
  #el-input{
    width: 100%;
  }
}
</style>

<script>
import AddArticle from './AddModle/addArticle.vue'
import axios from 'axios'
export default {
  data() {
    return {
      // 表单和弹出框的状态控制
      dialogTableVisible: false,
      dialogFormVisible: false,
      // 查询条件
      selectInfo:'label',
      // 查询内容
      inputInfo:'',
    }
  },
  components:{
      AddArticle
  },
  methods: {
    isformShow(){
      this.$store.commit('ChangeDialogFormVisible',true)
    },
    select(){
      console.log(this.selectInfo);
      axios({
          method:'post',
          url:'/ConditionQuery',
          data:{
            QueryCondition:this.selectInfo,
            InputInfo:this.inputInfo
          }
      }).then(res=>{
          this.$store.commit('getpaginationArticleInfo',res.data)
          console.log(res.data);
      })
    }
  },
  mounted() {

  },
}
</script>