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
    height: 100%;
    background-color: rgb(100, 100, 100);
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    list-style: none;
    li{
      padding: 20px 10px;
    }
    li:hover{
      background-color:rgb(148, 148, 148);
      cursor: pointer;
    }
}
.active{
  color: bisque;
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