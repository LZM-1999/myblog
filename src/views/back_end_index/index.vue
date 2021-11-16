<template>
<div id="index">
    <div class="headers">
        <p>xiaomei-博客后台管理系统</p>
        <div class="user">
          <User></User>
        </div>
    </div>
    <div id="container">
        <!-- 左侧菜单栏 -->
        <div class="aside" width="200rem">
            <Menu></Menu>
        </div>
        <!-- 右侧内容 -->
        <div class="main">
            <Main></Main>
        </div>
    </div>
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
body{
    font-size: 20rem;
  }
.headers{
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60rem;
  border-bottom: 1px silver solid;

  p{
    font-size: 23rem;
  }
}
.aside{
  height: 100%;
  width: 10%;  
  border-right: 1px silver solid;

}
.main{
  height: 100%;
  width: 90%;
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
  display: flex;
  flex-direction: column;
  // justify-content: center;
}
#container{
  height: 95%;
  width: 100%;
  display: flex;
}
// 超小
@media screen and (max-width: 767px){
  .headers{
    height:120rem;
    background-color: tomato;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .user{
      // position: absolute;
      align-self:right;
      
    }
  }
  .container{
    position: static !important;
  }
  .aside{
    position: fixed;
    z-index: 10;
    bottom: 0px;
    height: 40px;
    width: 100%;
    background-color: tomato;
  }
  .main{
    width: 100%;
    // height: 100%;
  }
}
</style>
