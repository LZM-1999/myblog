<template>
    <div id="login">
        <el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="number">
            <el-input type="text" v-model="ruleForm2.number" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<style lang="less" scoped>
#login{
    width: 100%;
    height: 100%;
    background-color: darkgray;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    background-image:url('../../assets/backimg2.gif');

}
.demo-ruleForm{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items:flex-start;

    opacity: 0.8;
    border-radius: 10px;
    width: 400px;
    height: 300px;
    // background-color: snow;
}
</style>
<script>
import axios from 'axios';
  export default {
    data() {
    return {
        ruleForm2: {
          number:'admin',
          pass: '123456',
        }
    };
    },
    methods: {
      submitForm(formName) {
        //   console.log(formName);
        //   console.log(this.$refs.ruleForm2.validate());
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(valid);
            console.log(this.ruleForm2);
            axios.post(
                '/login',
                {data:this.ruleForm2}
            ).then(res=>{
                if(res.data=='400'){
                    this.$message.error('登录失败,请重新输入！')
                    
                }else{
                    this.$message.success('登录成功')
                    console.log(res.data);
                    this.$store.commit('getUserinfo', res.data[0])
                    console.log(this.$store.state.userinfo);
                    window.sessionStorage.setItem('token',this.$store.state.userinfo.token)
                    console.log(window.sessionStorage.getItem('token')); 
                    this.$router.push('/indexApp/art_Inf_Man')
                    
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>