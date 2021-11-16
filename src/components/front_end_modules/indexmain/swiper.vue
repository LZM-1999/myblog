<template>
  <el-carousel :interval="2000" arrow="" height="400px">
    <h2 class="tip">个人项目展示:</h2>
    <el-carousel-item v-for="(item,index) in swiperInfo" :key="index" :label="item.project_name">
      <div class="project" @click="router()">
        <img :src="item.project_img" alt="点击查看">
      </div>
      
    </el-carousel-item>
  </el-carousel>

</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      swiperInfo:'',
      arr:[1,2,3]
    }
  },
  methods: {
    getSwipwer(){
      axios.get(
        '/getSwipwer'
      ).then(res=>{
        console.log(res);
        this.swiperInfo=res.data
        console.log(this.swiperInfo);
      })
    },
    router(){
      this.$router.push('/original')
    }
  },
  created(){
    this.getSwipwer()
  },
  mounted() {
  },
}
</script>

<style lang="less">
.project{
  // width: 1500rem;
  width: 90%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10rem 0rem;
  // margin: 10rem !important;
  img{
    width: 95%;
    height: 95%;
  }
}
.tip{
  position: absolute;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.651);
  margin: 5rem 5rem;
  border-radius: 3rem;
  color:tomato;
  font-size: 30rem;
  // border: tomato;
}
.el-carousel{
  width: 100%;
  // width: 100%;
  margin: 10rem;
  box-shadow: 1rem 1rem 20rem rgb(201, 201, 201);
  background-color: rgb(240, 240, 240);
  

}
.el-carousel__arrow{
  background-color: rgba(255, 99, 71, 0.719) !important;
}
.el-carousel__button{
  background-color: tomato;
  border-radius: 5rem;
  margin-bottom: 10rem;

}
.el-carousel__item{
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-carousel__item:nth-child(2n) {
  // background-color: #99a9bf;
  cursor: pointer;
}

.el-carousel__item:nth-child(2n+1) {
  // background-color: #d3dce6;
  cursor: pointer;
}
// 超小
@media screen and (max-width: 767rem){
    .el-carousel{
      width: 100%;
    }
    .el-carousel__button{
      background-color: tomato;
      width: 10rem !important;
      height: 30px !important;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }
}
// 小
@media screen and (min-width: 768rem){
  .el-carousel{
      width: 750rem;
  }
}
// 中
@media screen and (min-width: 992rem){
  .el-carousel{
      width: 970rem;
  }
}
// 大
@media screen and (min-width: 1200rem){
  .el-carousel{
      width: 1170rem;
  }
}
</style>