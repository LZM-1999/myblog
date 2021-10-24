<template>
    <el-dropdown @command="handleCommand">
        <el-container>
            <span class="el-dropdown-link" id="UserBox">
                李忠美<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <img src="http://www.aswait.com/zb_users/theme/Lucky/style/image/avatar.png" alt="" class="UserHeardImg">
        </el-container>
       
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">黄金糕</el-dropdown-item>
          <el-dropdown-item command="b">狮子头</el-dropdown-item>
          <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
          <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
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
        this.$message('click on item ' + command);
      }
    }
  }
</script>