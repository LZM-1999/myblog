<template>
<div id="app">
    <el-header>
      <h2 style="color:#FFF">小美哥博客后台管理系统</h2>
      <div>
        <User></User>
      </div>
    </el-header>
  <el-container id="container">
    <!-- 左侧菜单栏 -->
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
    <!-- 右侧内容 -->
      <el-main>
        <Main></Main>
      </el-main>
  </el-container>
</div>
</template>

<script>
import User from './components/User.vue'
import Menu from './components/Menu.vue'
import Main from './components/Main.vue'
export default {
  data() {
    return {
      
    }
  },
  components:{
    User,
    Menu,
    Main
  }
}
</script>

<style lang="less">
.el-header{
  background-color: rgb(80, 80, 80);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5% !important;
}
.el-aside{
  height: 100%;
}
.el-main{
  background-color: rgb(200, 200, 200);
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
html{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
}
#app{
  height: 100%;
  width: 100%;
}
#container{
  height: 95%;
  background-color: blanchedalmond;
}
</style>
