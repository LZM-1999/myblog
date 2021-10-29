<template>
    <ul class="HoverBOX">
        <li><i class="iconfont">&#xe60e;</i></li>
        <li><i class="iconfont">&#xe6b6;</i></li>
        <li><i class="iconfont">&#xe613;</i></li>
        <li><i class="iconfont">&#xe610;</i></li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
             
        }
    },
}
</script>

<style lang="less" scoped>
.HoverBOX{
    position: fixed;
    right: 50px;
    z-index: 10;
    top: 50%;

    width: 40px;
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
    li{
        width: 40px;
        height: 40px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: black 2px 2px 5px;
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