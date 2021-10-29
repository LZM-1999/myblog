<template>  
    <el-container id="RouterShow">
        <Input></Input>
        <Table></Table>
    </el-container>
</template>

<style lang="less" scoped>
#RouterShow{
    display: flex;
    flex-direction: column;
    height: 98%;
}
</style>

<script>
import Input from '../../../components/back_end_modules/ArticleAdmin/Main/InputCom.vue'
import Table from '../../../components/back_end_modules/ArticleAdmin/Main/TableCom.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Input,
        Table
    }
}
</script>