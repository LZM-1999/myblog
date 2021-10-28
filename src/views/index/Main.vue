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