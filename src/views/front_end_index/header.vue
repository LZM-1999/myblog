<template>
    <div class="BOX0" id="a_top">
        <div class="BOX1">
            <div class="BOX2" >
                <div class="trademark">
                    <div id="trademarkName">程序员小美</div>
                    <div id="trademarkTitle">前端道路努力摸索的小白</div>
                </div>
                
            </div>

            <ul class="Menu">
                <router-link tag="li" to="/indexmain" active-class="router_active"><i class="iconfont">&#xe62d;</i>首页</router-link>
                <router-link tag="li" to="/original" active-class="router_active"><i class="iconfont">&#xe612;</i>创作</router-link>
                <li><i class="iconfont">&#xe60f;</i>项目</li>
                <li><i class="iconfont">&#xe834;</i>关于</li>
                <li><i class="iconfont">&#xe685;</i>相册</li>
                <li @click="routerLogin()"><i class="iconfont">&#xe603;</i><User></User></li>
                
                
            </ul>
        </div>
    </div>
</template>

<script>
import User from '../back_end_index/User.vue'
export default {
    data() {
        return {
            
        }
    },
    methods:{
        routerLogin(){
            this.$router.push('/login')
        }
    },
    components:{
        User
    }
}
</script>

<style lang="less" scoped>

.BOX0{
    font-size: 14rem;
    color: rgb(207, 207, 207);
    // background-color: black;
    border-bottom:5rem solid tomato;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    box-shadow: 5rem 5rem 10rem rgb(238, 238, 238);
}
.BOX1{
    width: 1519rem;
    // background-color: blanchedalmond;
    // height: 65rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.BOX2{
    height: 100%;
    display: flex;
    flex-direction: row;
}
.trademark{
    margin-right: 20rem;
    // width: 125rem;
    cursor: pointer;
    // font-family:cursive;
    text-shadow: rgb(155, 155, 155) 5rem 5rem 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    a{
        color: #fff;
    }
}
#trademarkName{
    font-size: 35rem;
    font-weight: bold;
    color: tomato;
}
#trademarkTitle{
    color: #000;
    font-size: 20rem;
}
.Navbar{
    list-style: none;
    display: flex;
    flex-direction: row;
    li{
        padding: 24rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s;
    }
    li:hover{
        background-color: rgb(219, 219, 219);
        cursor: pointer;
    }
}
.Menu{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    font-size: 20rem;
    
    li{
        height: 30px;
        padding: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        align-items: center;
        transition: box-shadow 0.3s ,transform 0.3s;
        color: #000;
        font-size: 20rem;
        // background-color: rgb(241, 241, 241);

    }
    li:hover{
        // background-color: tomato ;
        cursor: pointer;
        box-shadow: 5rem 5rem 10rem silver;
        transform: translateX(1rem) translateY(1rem);
    }
}

.el-tooltip{
    height: 100%;
    background-color: rgb(56, 56, 56);
    border: none;
    color:#fff;
    border-radius: 0;
     display: flex;
    justify-content: center;
    align-items: center;
}
.el-tooltip:hover{
    color:#fff;
}
.router_active{
    color: tomato;
    box-shadow: 2rem 2rem 5rem rgb(201, 201, 201);
}
// @media screen and (max-width: 580rem){
//     .BOX0{
//         width: 581rem;
//     }
// }
// 超小
@media screen and (max-width: 767px){
    .BOX1{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .BOX0{
      height: 40px;
    }
    .Menu{
        position: fixed;
        z-index: 9;
        bottom: 0px;
        width: 100%;
        background-color:tomato;
        li{
            flex: 1;
        }
    }
    .router_active{
        color: rgb(255, 255, 255) !important;
    }

}
// 小
@media screen and (min-width: 768rem){
  .BOX1{
      width: 750rem;
  }
  
}
// 中
@media screen and (min-width: 992rem){
  .BOX1{
      width: 970rem;
  }
}
// 大
@media screen and (min-width: 1200rem){
  .BOX1{
      width: 1170rem;
  }
}
</style>