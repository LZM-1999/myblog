<template>
    <div id="InfoExamine">
        <h1>数据可视化</h1>
        <!-- <ul>
            <li>网站浏览量月度统计图</li>
            <li>网站结构树状图</li>
            <li>文章发布量月度统计图</li>
            <li>评论增加量月度统计图</li>
            <li>用户省分地区分布图</li>
            <li>用户年龄分布图</li>
            <li>时钟地球</li>
            <li></li>
            <li></li>
            <li></li>
        </ul> -->
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        
    },
    components:{

    },
    mounted() {
        alert("抱歉信息审核模块暂未开放！")
        this.$router.replace({path:'/indexApp/art_Inf_Man'})
    },
}
</script>

<style lang="less" scoped>
#InfoExamine{
    width: 100%;
    height: 100%;
    background-color: coral;
}
</style>