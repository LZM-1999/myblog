<template>
    <el-dropdown @command="handleCommand">
        <el-container>
            <span class="el-dropdown-link" id="UserBox">
                {{this.$store.state.userinfo.user_name}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <img src="http://www.aswait.com/zb_users/theme/Lucky/style/image/avatar.png" alt="" class="UserHeardImg">
        </el-container>
       
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="抱歉！系统维护未开放">个人中心</el-dropdown-item>
          <el-dropdown-item command="抱歉！系统维护未开放">设置</el-dropdown-item>
          <el-dropdown-item command="out">退出</el-dropdown-item>
          <el-dropdown-item command="抱歉！系统维护未开放" disabled>待开发</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
</template>

<style lang="less" scoped>
  #UserBox{ 
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FFF;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .UserHeardImg{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow: 1px 1px 10px rgb(163, 163, 163);
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        if(command == 'out'){
          window.sessionStorage.clear('token')
          this.$router.replace('/login')
        }else{
          this.$message('系统消息： ' + command);
        }

      }
    }
  }
</script>