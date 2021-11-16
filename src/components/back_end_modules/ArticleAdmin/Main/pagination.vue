<template>
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      :page-size= '10'
      :total="paginationArticleInfo.total"
      @current-change='currentChange'
      @size-change='sizeChange'>
    </el-pagination>
</template>

<style lang="less">
.el-pagination{
    // margin: 10rem;
}
.el-pagination__total{
    color: #fff !important;
}
.el-pagination__jump{
    color: #fff !important;
}
.btn-next{
    // background:transparent !important;
    background-color: rgba(255, 255, 255, 0.178) !important;
}
.number{
    background-color: rgba(255, 255, 255, 0.178) !important;
}
.btn-prev{
    background-color: rgba(255, 255, 255, 0.178) !important;
}
</style>
<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            start:0,
            limit: 10,
            paginationInfo:{
                page:0,
                Limit:10
            }
        }
    }, 
    computed:{
        ...mapState(['paginationArticleInfo'])
    },
    methods:{
        // currentPage 改变时会触发
        currentChange(val=1){
            console.log(val);
            this.start=val
            this.paginationInfo.page=this.start
            this.paginationInfo.Limit=this.limit
            axios({
                method:'post',
                url:'/pagination/',
                data:this.paginationInfo
            }).then(res=>{
                console.log(res.data);
                this.$store.commit('getpaginationArticleInfo', res.data)
            })
        },
        // pageSize 改变时会触发
        sizeChange(val){
            this.limit=val
            this.paginationInfo.page=this.start
            this.paginationInfo.Limit=this.limit
            axios({
                method:'post',
                url:'/pagination/',
                data:this.paginationInfo
            }).then(res=>{
                console.log(res.data);
                this.$store.commit('getpaginationArticleInfo', res.data)
            })
        }
    },
    mounted() {
        this.currentChange()
    },
}
</script>