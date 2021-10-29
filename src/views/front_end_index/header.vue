<template>
    <div class="BOX0">
        <div class="BOX1">
            <div class="BOX2" >
                <div class="trademark">
                    <h1 id="trademarkName">程序员小美</h1>
                    <div id="trademarkTitle">前端道路努力摸索的小白</div>
                </div>
                
            </div>

            <ul class="Menu">
                <router-link tag="li" to="/indexmain" active-class="router_active"><i class="iconfont">&#xe62d;</i>首页</router-link>
                <router-link tag="li" to="/original" active-class="router_active"><i class="iconfont">&#xe612;</i>创作</router-link>
                <li><i class="iconfont">&#xe60f;</i>项目</li>
                <li><i class="iconfont">&#xe834;</i>关于</li>
                <li><i class="iconfont">&#xe685;</i>相册</li>
                <li><i class="iconfont">&#xe603;</i>登录</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{

    },
    components:{

    }
}
</script>

<style lang="less" scoped>
.BOX0{
    font-size: 14px;
    color: rgb(207, 207, 207);
    background-color: white;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
}
.BOX1{
    width: 1200px;
    // height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.BOX2{
    height: 100%;
    display: flex;
    flex-direction: row;
}
.trademark{
    margin-right: 20px;
    // width: 125px;
    cursor: pointer;
    // font-family:cursive;
    text-shadow: rgb(155, 155, 155) 5px 5px 2px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    a{
        color: #fff;
    }
}
#trademarkName{
    // font-size: 25px;
    color: tomato;
}
#trademarkTitle{
    color: #000;
}
.Navbar{
    list-style: none;
    display: flex;
    flex-direction: row;
    li{
        padding: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s;
    }
    li:hover{
        background-color: rgb(123, 159, 192);
        cursor: pointer;
    }
}
.Menu{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content:right;
    align-items: center;

    li{
        height: 30px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-items: center;
        transition: background-color 0.3s;
        color: #000;
    }
    li:hover{
        background-color: rgb(123, 159, 192);
        cursor: pointer;
    }
}

.el-tooltip{
    height: 100%;
    background-color: rgb(56, 56, 56);
    border: none;
    color:#fff;
    border-radius: 0;
     display: flex;
    justify-content: center;
    align-items: center;
}
.el-tooltip:hover{
    color:#fff;
}
.router_active{
    color: tomato;
}
</style>