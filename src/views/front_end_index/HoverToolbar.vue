<template>
    <ul class="HoverBOX">
        <li><a href="#a_top"><i class="iconfont">&#xe60e;</i></a></li>
        <li @click="router()"><i class="iconfont">&#xe6b6;</i></li>
        <li @click="router()"><i class="iconfont">&#xe613;</i></li>
        <li><a href="#a_butoom"><i class="iconfont">&#xe610;</i></a></li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
             
        }
    },
    methods:{
        router(){
            this.$router.push('/indexmain')
        }
    }
}
</script>

<style lang="less" scoped>
.HoverBOX{
    position: fixed;
    right: 20rem;
    z-index: 10;
    bottom: 50px;

    width: 30px;
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
    li{
        width: 30px;
        height: 30px;
        border-radius: 5rem;
        overflow: hidden;
        box-shadow: black 2rem 2rem 5rem;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    li:hover{
        cursor: pointer;
        background-color: rgb(90, 90, 90);
    }
}
</style>