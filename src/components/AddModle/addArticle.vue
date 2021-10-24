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


        // 表单验证
        // rules: {
        //   name: [
        //     { required: true, message: '请输入活动名称', trigger: 'blur' },
        //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        //   ],
        //   region: [
        //     { required: true, message: '请选择活动区域', trigger: 'change' }
        //   ],
        //   date1: [
        //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        //   ],
        //   date2: [
        //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        //   ],
        //   type: [
        //     { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        //   ],
        //   resource: [
        //     { required: true, message: '请选择活动资源', trigger: 'change' }
        //   ],
        //   desc: [
        //     { required: true, message: '请填写活动形式', trigger: 'blur' }
        //   ]
        // }
        article_id:{
          ID:''
        },
        imglist:'',
        imgurl:'',
        files:''
      };
    },
    methods: {
      // 文件上传
      submitUpload(article_id) {
        console.log(article_id);
        this.$refs.upload.submit(article_id);
      },
      handleRemove(fileList) {
        console.log( fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      success(){
        alert("上传成功！")
      },

      handleFiles() {
        var imgs = document.querySelectorAll(".fileElem");
        console.log(imgs[0].files);
        // alert('hhh')
        // if (!files.length) {
        //     this.fileList ='No files selected!';
        // } else {
        //     this.fileList='上传的图片为:'
        //         this.imglist=files

        //         this.imgurl = window.URL.createObjectURL(files[0]);
        //         // img.onload = function () {
        //         //     window.URL.revokeObjectURL(this.src);
        //         // }
        //         // li.appendChild(img);
        //         // var info = document.createElement("span");
        //         // info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
        //         // li.appendChild(info);
        //     }
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(valid);
            console.log(this.form.publish_time);
            axios.post(
              'http://127.0.0.1:5000/insert/article/',
              {data:this.form}
            ).then(res=>{
              console.log(res.data);
              this.article_id.ID=res.data
              console.log(this.article_id.ID);
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
 
      resetForm(formName) {
        console.log(formName);
        this.$refs[formName].resetFields();
      },

      cancel(){
        this.$store.state.dialogFormVisible=false
      }
    },
    mounted() {
      console.log(this.message);
      
    },
    updated() {
      // this.form=this.$store.state.articleInfo

      // console.log(this.form);
    },
    created() {
      
    },
  }
</script>