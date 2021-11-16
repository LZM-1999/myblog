<template>
    <div id="Box0">
            <!-- 名片 -->
            <div class="businessCard">
                <div class="head_portrait"><img src="http://www.aswait.com/zb_users/theme/Lucky/style/image/avatar.png" alt=""></div>
                <img src="http://www.aswait.com/zb_users/theme/Lucky/style/image/profile-bg.jpg" alt="" class="backgroundImg">
                <div class="personalInfo">
                    <h2>李忠美</h2>
                    <div id="signature">世间无难事，只怕有心人！</div>
                    <p id="contactMe">联系我</p>
                    <ul class="quantityInfo">
                        <li>
                            <h2>2705</h2>
                            <p>文章</p>
                        </li>
                        <li>
                            <h2>1226</h2>
                            <p>评论</p>
                        </li>
                        <li>
                            <h2>56411427</h2>
                            <p>浏览</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 日期日历 -->
            <div class="dateCard">
                <DateCard></DateCard>
            </div>

            <!-- TAB，留言，标签，站点信息，友情链接，运行时间等功能模块 -->
            <!-- 其他模块 -->
            <div class="OrderCard">
                <div class="Card">
                    <div class="Title">
                        <div style="width:40px;height:40px;display: flex;border-right: 1px solid rgb(212, 212, 212);justify-content: center;align-items: center;"><i class="iconfont">&#xe685;</i></div>
                        <h3>Tab</h3>
                    </div>
                    <div class="List">
                        <ul class="sortLabel">
                            <li>最近更新</li>
                            <li>热门更新</li>
                            <li>站长推荐</li>
                        </ul>
                        <ul class="LabelInfo">
                            <li><a href="#">2021年5月份自我小结</a></li>
                            <li><a href="#">何为事业？</a></li>
                            <li><a href="#">个人亲身感受：舌尖上的中国</a></li>
                            <li><a href="#">PHP删除目录下的文件夹及所有文件</a></li>
                            <li><a href="#">2021年7月份自我小结</a></li>
                            <li><a href="#">2021年9月份自我小结</a></li>
                            <li><a href="#">电城撒网捕鱼记</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import DateCard from './datecard'
export default {
  data() {
      return {
      }
  },
  methods: {
  },
  components: {
      DateCard
  }
}
</script>


<style lang="less" scoped>
#Box0{
    width: 318px;
    height: 100%;
    margin: 15px 0px;
    
    // background-color: blanchedalmond;
}

.businessCard{
    position: relative;
    width: 100%;
    border: 1px solid rgb(212, 212, 212);
    border-radius: 5px;
    overflow: hidden;
    // height:450px;
    // margin: 20px 0px;
    // background-color: brown;
}

.head_portrait{
    width:100%;
    // height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    // border: black 1px solid;
    img{
        position: relative;
        top: 120px;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        box-shadow: 1px 1px 5px rgb(102, 102, 102);

    }
}
.backgroundImg{
    width: 100%;
    height: 150px;
    padding:20px 0px;
    // background-color: cornflowerblue;
}
.personalInfo{
    width: 100%;
    // height: 260px;
    padding-top: 50px;
    // background-color:cornsilk;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    #signature{
        margin: 10px 0px;
    }
    #contactMe{
        width: 200px;
        border-radius: 5px;
        color: #FFF;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(68, 68, 68);
        cursor: pointer;
    }
    .quantityInfo{
        margin: 20px 0px;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        
        li{
            margin: 0px 10px;
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
        }
        
    }
}

.dateCard{
    position: relative;
    width: 100%;
    border: 1px solid rgb(212, 212, 212);
    border-radius: 5px;
    overflow: hidden;
    height: 500px;
}
.OrderCard{
    width:100%;
    // height: 1600px;
    // background-color: brown;
}

.Card{
    margin: 10px 0px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid rgb(212, 212, 212);
    overflow: hidden;
    // background-color: cadetblue;
}

.Title{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    flex-direction: row;
    // background-color: rgb(172, 172, 172);
    box-shadow: 1px 1px 5px silver;
    margin-bottom: 5px;
    h3{
        padding-left: 10px;
    }
}
.List{
    width: 300px;
    // background-color: chocolate;
    margin-left: 8px;
}

.sortLabel{
    width: 100%;
    list-style: none;
    display: flex;
    background-color: rgb(228, 228, 228);
    li{
        width:100px;
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color: cornflowerblue;
        border: 1px solid rgb(204, 204, 204);
        padding: 10px 0px;
    }
}
.LabelInfo{
    width: 100%;
    // background-color: brown;
    display: flex;
    flex-direction: column;
    li{
        width: 100%;
        height: 30px;
        // background-color: rgb(184, 189, 189);
        border-bottom: 1px black dashed;
        padding: 10px 0px;
        display: flex;
        justify-content: left;
        align-items: center;
    }
}
</style>