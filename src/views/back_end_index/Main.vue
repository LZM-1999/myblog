<template>  
    <el-container id="Main">
        <router-view></router-view>
    </el-container>
</template>

<style lang="less" scoped>
#Main{
    display: flex;
    flex-direction: column;
    height: 98%;
    box-shadow: 1px -1px 10px silver;
}
</style>

<script>
export default {
    data() {
        return {
            
        }
    },
    components:{
    }
}
</script>