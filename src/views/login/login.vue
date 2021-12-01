<template>
    <div id="login">
        <el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <h2>欢迎使用博客登录系统！</h2>
          <span>用户：user（前台） admin（后台）      密码：123456 </span>
        <el-form-item label="账号" prop="number">
            <el-input type="text" v-model="ruleForm2.number" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
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
    background-color: snow;
}
</style>
<script>
import axios from 'axios';
  export default {
    data() {
    return {
        ruleForm2: {
          number:'user',
          pass: '123456',
        }
    };
    },
    methods: {
      // 提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post(   //调用登录接口
                '/login',
                {data:this.ruleForm2}
            ).then(res=>{
                if(res.data=='400'){ //登录失败
                    this.$message.error('登录失败,请重新输入！')
                }else{                //登录成功
                    this.$store.commit('getUserinfo', res.data[0])//提交至共享仓库
                    window.sessionStorage.setItem('token',this.$store.state.userinfo.token)  //记录token
                    // 判断是否有路由拦截
                    if(this.$route.query.redirect){
                      if(this.$route.query.redirect.indexOf('front') ==''){//是跳转去后台
                        if(this.$store.state.userinfo.authority=='admin'){
                        this.$message.success('博客管理平台登录成功！')
                        this.$router.push(this.$route.query.redirect); // 跳转至前一页，this.$route.query.redirect是获取上面传递过来的值
                        }else{
                          this.$message.success('登录成功！欢迎回家~')
                          this.$router.push(this.$route.query.redirect); // 跳转至前一页，this.$route.query.redirect是获取上面传递过来的值
                        } 
                      }else{//跳转去前台
                        if(this.$store.state.userinfo.authority=='admin'){
                        this.$message.success('博客管理平台登录成功！')
                        this.$router.push('/indexApp/art_Inf_Man')//管理员调整
                        }else{
                          this.$message.success('登录成功！欢迎回家~')
                          this.$router.push('/frontindex')//普通用户跳转
                        } 
                      }
                    }else{
                      if(this.$store.state.userinfo.authority=='admin'){
                        this.$message.success('博客管理平台登录成功！')
                        this.$router.push('/indexApp/art_Inf_Man')//管理员调整
                      }else{
                        this.$message.success('登录成功！欢迎回家~')
                        this.$router.push('/frontindex')//普通用户跳转
                      } 
                    }
                    
                    
                                      
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>