<template>
<div id="index">
    <el-header>
        <p>xiaomei-博客后台管理系统</p>
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
import User from './User.vue'
import Menu from './Menu.vue'
import Main from './Main.vue'
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
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5% !important;
  box-shadow: -1px -1px 10px silver;
  p{
    font-size: 23px;
  }
}
.el-aside{
  height: 100%;
}
.el-main{
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
#index{
  height: 100%;
  width: 100%;
  background-image: url('../../assets/backimg4.gif');
}
#container{
  height: 95%;
}
</style>
