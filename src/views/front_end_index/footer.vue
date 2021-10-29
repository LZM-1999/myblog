<template>
    <div class="Box0">
        <div class="Box1">
            <ul class="Link">
                友情链接：
                <li>@李忠美</li>
                <li>@熊草原</li>
                <li>@李忠美</li>
                <li>@熊草原</li>
                <li>@李忠美</li>
                <li>>@熊草原</li>
            </ul>

            <div class="Copyright_Link">
                <p>Design by LiZhongMei CopyRight © 2021</p>
                <div><a href="#">Back</a><a href="#">Me</a><a href="#">Sitemap</a></div>
            </div>
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
.Box0{
    font-size: 14px;
    width: 100%;
    height: 120px;
    background-color: rgb(56, 56, 56);
    display: flex;
    justify-content: center;
    align-items: center;
}
.Box1{
    width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.Link{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    list-style: none;
    color:#ffffff;
    li{
        color:#8d8c8c;
        transition: color 0.2s;
    }
    li:hover{
        color:#ffffff;
        cursor: pointer;
    }
}
.Copyright_Link{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color:#ffffff;
    a{
        padding: 5px;
        color:#8d8c8c;
        transition: color 0.2s;
    }
    a:hover{
        color:#ffffff;
    }
}
</style>