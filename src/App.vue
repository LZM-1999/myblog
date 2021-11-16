<template>
<div id="app">
      <router-view></router-view>
      <!-- <Index></Index> -->
</div>
</template>

<script>
// import Index from './views/index.vue'
export default {
  data() {
    return {
    }
  },
  components:{
    // Index
  }
}
</script>

<style lang="less">
*{
  font-family:cursive;
  // background-color: none !important;
  
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
  display: flex;
  flex-direction: row;
  // align-items: center;
  justify-content: center;
}
</style>
