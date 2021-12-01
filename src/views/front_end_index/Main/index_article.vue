<template>
    <div id="Box0" v-if="article != ''">
        <ul class="article_list" v-for="(data,index) in article " :key="index" ref="article_list" >
            <li class="articleInfo">
                <div class="imgBox">
                    <img :src="isloadStart[index] ? data.img_url : imgsrc " alt="" class="img">
                </div>
                <div id="Box1">
                    <h2>{{data.title}}</h2>
                    <div id="Box2">
                        <ul class="parameter">
                            <li>时间:{{data.publish_time}}</li>
                            <li>围观:{{data.viewing_counts}}</li>
                            <li>吐槽:{{data.comment_count}}</li>
                        </ul>
                    </div>
                    <div class="text">{{data.text.substring(0,70)}}...</div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            article:false,
            currentPage1: 1,
            currentPage2: 2,
            currentPage3: 3,
            currentPage4: 4,
            isloadStart:[],
            isSroll:false,
            imgsrc:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F01%2F20180801230124_hyFUW.thumb.1000_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639747912&t=29547cd80d6871577d262ec249a421fb'
        }
    },
    
    methods: {
        getIndexArticle(){
            axios.get(
                'api/'
            ).then(res=>{
                this.article=res.data
                return this.article
            }).then(()=>{
                this.$nextTick(()=>{
                    this.article_list()
                })
            }).then(()=>{
                this.addScrollListenter()
            })
        },
        // 懒加载
        article_list(){
                var listArr=this.$refs.article_list
                var that=this
                var lenght=listArr.length
                if(that.isloadStart.length<lenght){
                    for(let a=0;a<listArr.length;a++){
                        that.isloadStart.push(false)
                    }
                }
                for(let i=0;i<listArr.length;i++){
                    let offsetTop=listArr[i].offsetTop
                    let clientHeight=document.documentElement.clientHeight
                    let scrollTop=document.documentElement.scrollTop
                    let isshow=offsetTop-scrollTop-clientHeight
                    if(isshow<0){
                        let sett=setTimeout(() => {
                            that.isloadStart.splice(i,1,true)
                            clearTimeout(sett)
                        }, 1000);
                    }
                }
                // 都有图片了
                if(this.isloadStart.includes(false) !=true){
                   that.isSroll=true
                }
                
                
        },
        addScrollListenter(){
            let setf=this
            document.addEventListener('scroll',setf.article_list,false)

        },
    },
    mounted() {
        this.getIndexArticle()
        // this.addScrollListenter()
        
    },
    updated(){
        if(this.isSroll){
            document.removeEventListener('scroll',this.article_list,false)
        }
    }
}
</script>

<style lang="less" scoped>
#Box0{
    font-size: 20rem;
    width: 900rem;
    color: rgb(104, 104, 104);
}

.article_list{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.articleInfo{
    width: 100%;
    height: 175rem;
    padding: 20rem 0rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    // margin: 0rem 10rem;
    border-bottom: 1rem solid rgb(204, 204, 204);
}
#Box1{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    justify-content: space-around;
    margin-left: 10rem;
}




.parameter{
    list-style: none;
    display: flex;
    flex-direction: row;
    li{
        padding-right:20rem;
    }
}
.imgBox{
    height: 100%;
    width:20% ;
}
.img{
    width: 100%;
    height: 100%;
}
.text{
    width: 100%;
    // height: 100rem;
    // overflow: hidden;
}

.el-pagination{
    margin: 20rem 0rem 20rem 0rem;
}

@media screen and (max-width: 767px){
    #Box0{
        width: 1400rem;
    }
    .articleInfo{
        height: 500rem;
    }
    .imgBox{
        width: 30%;
        // height: 80%;
    }
}
</style>