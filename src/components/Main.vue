<template>  
    <el-container id="Main">
        <BreadNav></BreadNav>
        <Input></Input>
        <Table></Table>
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
import BreadNav from './Main/breadcrumbNav.vue'
import Input from './Main/InputCom.vue'
import Table from './Main/TableCom.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        BreadNav,
        Input,
        Table
    }
}
</script>