<template>
    <div id="Box0">
        <ul class="article_list" v-for="data in article " :key="data">
            <li class="articleInfo">
                <img :src="data.img_url" alt="" class="img">
                <div id="Box1">
                    <h2>{{data.title}}</h2>
                    <div id="Box2">
                        <ul class="parameter">
                            <li>时间:</li>
                            <li>人围观</li>
                            <li>次吐槽</li>
                        </ul>
                    </div>
                    <div class="text">{{data.text.substring(0,100)}}...</div>
                </div>
            </li>
        </ul>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[15, 30, 45, 60]"
        :page-size="15"
        :page-count="17"
        layout="total, sizes, prev, pager, next, jumper"
        :total="article.length"
        background="true"
        >
        </el-pagination>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            article:'',
            currentPage1: 1,
            currentPage2: 2,
            currentPage3: 3,
            currentPage4: 4
        }
    },
    methods: {
        getIndexArticle(){
            axios.get(
                'api/'
            ).then(res=>{
                
                this.article=res.data
                console.log(this.article);
            })
        },

        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    mounted() {
        this.getIndexArticle()
    },
}
</script>

<style lang="less" scoped>
#Box0{
    width: 820px;
    color: rgb(104, 104, 104);
}

.article_list{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.articleInfo{
    width: 100%;
    height: 175px;
    padding: 20px 0px;
    display: flex;
    flex-direction: row;
    // margin: 0px 10px;
    border-bottom: 1px solid rgb(204, 204, 204);
}
#Box1{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
}




.parameter{
    list-style: none;
    display: flex;
    flex-direction: row;
    li{
        padding-right:20px;
    }
}
.img{
    width: 200px;
    height: 175px;
}
.text{
    width: 580px;
    // height: 100px;
    // overflow: hidden;
}

.el-pagination{
    margin: 20px 0px 20px 0px;
}
</style>