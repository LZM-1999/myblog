<template>
  <div id="frontindex">
    <Header></Header>
    <router-view></router-view>

    <Footer></Footer>
    <HoverToolbar></HoverToolbar>
  </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
import HoverToolbar from './HoverToolbar.vue'
import "../../assets/CSS/iconfont.css";

export default {
    data() {
        return {
            
        }
    },
    methods:{

    },
    components:{
      Header,
      Footer,
      HoverToolbar
    }
}
</script>

<style lang="less">
// 超小
@media screen and (max-width: 767rem){

}
// 小
@media screen and (min-width: 768rem){
  
}
// 中
@media screen and (min-width: 992rem){

}
// 大
@media screen and (min-width: 1200rem){
 
}
#frontindex{
    width: 100%;
    height: 100%;
}
</style>