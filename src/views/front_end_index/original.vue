<template>
    <div class="Box0">
        <div class="Box1">
            <div class="content">
                <IndexArticle></IndexArticle>
            </div>

            <div class="personalInfo">
                <IndexSiteInfo></IndexSiteInfo>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

import IndexArticle from './Main/index_article.vue'
import IndexSiteInfo from './Main/index_site_info.vue'
export default {
    data() {
        return {
            data:''
        }
    },
    methods:{
        getimg(){
            axios.get(
                'api/'
            ).then(res=>{
                console.log(res);
                this.data=res
            })
        }
    },
    components:{
        IndexArticle,
        IndexSiteInfo
    },
    mounted() {
        this.getimg()
    },
}
</script>

<style lang="less" scoped>
.Box0{
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(240, 240, 240);
}
.Box1{
    width: 1200px;
    margin: 30px 0px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding-bottom: 100px;
}

.content{
    width: 840px;
    // height: 100%;
    border-right: 1px solid rgb(218, 218, 218);
    display: flex;
    justify-content: right;
}
.personalInfo{
    width: 360px;
    display: flex;
    justify-content: center;
    // height: 100%;
}
.img{
    width: 50px;
    height: 50px;
}
</style>