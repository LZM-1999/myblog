<template>
<el-form :model="form"  ref="form" label-width="100px" class="demo-ruleForm" id="updateform">
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
    <el-input type="textarea" v-model="form.text" maxlength='1000px' minlength='100px' size="medium" rows="14"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="updateForm('form')">确认修改</el-button>
    <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<style lang="less" scoped>
// .demo-ruleForm{
//     height: 100px !important;
// }
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
          text:''
        },
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
      };
    },
    methods: {
      updateForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(valid);
            console.log(this.form.publish_time);
            
            axios.post(
              'http://127.0.0.1:5000/update/article/',
              {
                data:this.form,
              }
            ).then(res=>{
              console.log(res);
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
      }
    },
    mounted() {
        console.log(this.message);
        this.form=this.message
    },
    created(){

    },
    updated() {

    }
  }
</script>