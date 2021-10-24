<template>
    <div id="el-input">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select" >
            <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="标题" value="1"></el-option>
            <el-option label="作者" value="2"></el-option>
            <el-option label="日期" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" ></el-button>
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

<style>
.el-dialog{
  /* overflow: scroll; */
  overflow:visible;
}
#el-input{
    /* margin: 10px 0px; */
    height: 10%;
    width: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
#ADD{
    margin: 0px 10px;
}
.dialog{
  width: 1000px !important;
  height: 700px;
}
  .el-select .el-input {
    width: 100px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

<script>
import AddArticle from '../AddModle/addArticle.vue'
// import axios from 'axios'
export default {
  data() {
    return {
       dialogTableVisible: false,
        dialogFormVisible: false,
        input5:'',
        select:'',
        formLabelWidth: '120px',
        switch:''
    }
  },
  components:{
      AddArticle
  },
  methods: {
    isformShow(){
      this.$store.state.dialogFormVisible = true
    }
  },
  mounted() {
    console.log(1);
  },
}
</script>