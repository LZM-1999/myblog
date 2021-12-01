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


import IndexArticle from './Main/index_article.vue'
import IndexSiteInfo from './Main/index_site_info.vue'
export default {
    data() {
        return {
            data:''
        }
    },
    methods:{
       
    },
    components:{
        IndexArticle,
        IndexSiteInfo
    },
    mounted() {
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
    width: 100%;
    margin: 30px 0px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-bottom: 100px;
}

.content{
    // width: 840px;
    // height: 100%;
    // border-right: 1px solid rgb(218, 218, 218);
    display: flex;
    justify-content: center;
}
.personalInfo{
    // width: 360px;
    display: flex;
    justify-content: center;
    // height: 100%;
}

</style>