<template>
<el-form :model="form"  ref="form" label-width="100px" class="demo-ruleForm">
  <el-form-item label="标题" prop="title">
    <el-input v-model="form.title"></el-input>
  </el-form-item>

  <el-form-item label="标签" prop="label">
    <el-select v-model="form.label" placeholder="请选择标签">
      <el-option label="个人博客" value="个人博客"></el-option>
      <el-option label="个人日记" value="个人日记"></el-option>
    </el-select>
  </el-form-item>
  
  <el-form-item label="创造时间" required>
    <el-col :span="11">
      <el-form-item prop="publish_time">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.publish_time" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>

  <el-form-item label="正文" prop="text">
    <el-input type="textarea" v-model="form.text"  rows="5"></el-input>
  </el-form-item>

  <el-form-item label="上传图片" prop="file">
    <!-- action="http://47.243.248.226:5000/reqFlies" -->
    <el-upload
    class="upload-demo"
    ref="upload"
    action="http://127.0.0.1:5000/reqFlies"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :on-success="success"
    :auto-upload="false"
    :data="article_id"
    list-type="picture-card"
    >
      
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，不超过3张</div>
    </el-upload>


    <el-dialog :visible.sync="dialogVisible" size="tiny" :append-to-body='true'>
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </el-form-item>

  <el-form-item class="operation">
    <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
    <el-button @click="resetForm('form')">重置</el-button>
    <el-button @click="cancel">取消</el-button>
  </el-form-item>
  
</el-form>
</template>
<style lang="less" scoped>
.operation{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
<script>
import axios from 'axios'
  export default {
    // 处理显示状态
    props:['message'],
    data() {
      return {
        form: {
          title: '',
          label: '',
          publish_time: '',
          text:'',
          file:''
        },
        fileList: [],
        dialogImageUrl: '',
        dialogVisible: false,
        article_id:{
          ID:''
        },
        imglist:'',
        imgurl:'',
        files:''
      };
    },
    methods: {
      // 文件提交
      submitUpload(article_id) {
        this.$refs.upload.submit(article_id);
      },
      // 文件移除
      handleRemove(fileList) {
        console.log( fileList);
      },
      // 文件上传
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;//图片显示的资源地址
        this.dialogVisible = true;//图片是否显示
      },
      // 文件上传成功的回调
      success(){
        alert("上传成功！")
      },

      // handleFiles() {
      //   var imgs = document.querySelectorAll(".fileElem");
      //   console.log(imgs[0].files);
      // },

      // 提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post(
              '/insert/article/',
              {data:this.form}
            ).then(res=>{
              console.log(res.data);
              this.article_id.ID=res.data
              this.submitUpload(this.article_id.ID)
              return true
            }).then(res=>{
              console.log(res);
              this.$store.state.dialogFormVisible=false
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 控制表单关闭
      cancel(){
        this.$store.state.dialogFormVisible=false
      }
    },
    mounted() {
      console.log(this.message);
      
    }
  }
</script>