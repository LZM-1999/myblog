<template>
  <div id="Menu">
        <router-link tag="li" to='/indexApp/art_Inf_Man' active-class="active">
          <i class="el-icon-location"></i>
          信息管理
        </router-link>

        <router-link tag="li" to='/indexApp/DataVisualization' active-class="active">
          <i class="el-icon-location"></i>
          数据可视化
        </router-link>

        <router-link tag="li" to='/indexApp/InfoExamine' active-class="active">
          <i class="el-icon-location"></i>
          信息审核
        </router-link>

        
  </div>
</template>

<style lang="less" scoped>
#Menu{
  
  font-size: 16rem;
    color: rgb(255, 255, 255);
    height: 100%;
    // background-color: rgb(100, 100, 100);
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    list-style: none;
    // border-right: 1rem solid rgba(245, 245, 245, 0.363);
    li{
      padding: 20rem 10rem;
      margin: 10rem 10rem;
      font-size: 16rem;
    }
    li:hover{
      // background-color:rgb(148, 148, 148);
      box-shadow: 5rem 5rem 10rem silver;
      cursor: pointer;
    }
}
.active{
  box-shadow: 5rem 5rem 10rem silver;
}

@media screen and (max-width: 767px){
  #Menu{
    
    width: 100%;
    flex: 1;
    li{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0;
      margin: 0;
      
    }
  }
}

</style>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      Message(){
        alert("抱歉！系统维护未开放")
      }
    }
  }
</script>