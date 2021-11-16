<template>
    <div id="recommendBox">
        <div class="recommend">
            <h1>精选</h1>
            <div class="recommendCar" >
                <div class="Car" v-for="(Item,index) in SelectedInfo" :key="index" @click="router()">
                    <img :src="Item.img_url" alt="">
                    <p>label:{{Item.label}}</p>
                    <span>title:{{Item.title}}</span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            SelectedInfo:''
        }
    },
    methods:{
        getSelectedInfo(){
            axios.get(
            '/getSelected'
            ).then(res=>{
                this.SelectedInfo=res.data
                console.log(this.SelectedInfo);
            })
        },
        router(){
            this.$router.push('/original')
        }
    },
    mounted(){
        this.getSelectedInfo()
    }
}
</script>

<style lang="less" scoped>
#recommendBox{
    width: 1519rem;
    // width: 100%;
    // height: 1500rem;
    background-color: rgb(240, 240, 240);
    // margin: 10rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.recommend{
    width: 95%;
    height: 400px;
    // background-color: tomato;
    display: flex;
    margin: 10rem 0rem;
    flex-direction: column;
    align-items: center;
    h1{
        margin: 10rem  0rem;
        font-size: 30rem;
    }
}
.recommendCar{
    // background-color: yellow;
    width: 1400rem;
    height: 300px;
    border-top: 5rem solid tomato;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.Car{
    width: 32%;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    flex-wrap: nowrap;
    border-radius: 5rem;
    cursor: pointer;
    transition: box-shadow 0.5s ,transform 0.3s;
    font-size: 16rem;
    img{
        width: 95%;
        height: 70%;
    }
    p{
        margin: 10rem 0rem;
    }
}
.Car:hover{
    box-shadow: 5rem 5rem 10rem silver;
    transform: translateX(5rem) translateY(5rem);
}
// 超小
@media screen and (max-width: 767rem){
    #recommendBox{
      width: 100%;
    }
    .recommendCar{
      width: 100%;
    }
}
// 小
@media screen and (min-width: 768rem){
  #recommendBox{
      width: 750rem;
  }
  .recommendCar{
      width: 750rem;
  }
}
// 中
@media screen and (min-width: 992rem){
  #recommendBox{
      width: 970rem;

  }
  .recommendCar{
      width: 970rem;
  }
}
// 大
@media screen and (min-width: 1200rem){
  #recommendBox{
      width: 1170rem;
  }
  .recommendCar{
      width: 1170rem;
  }
}
</style>