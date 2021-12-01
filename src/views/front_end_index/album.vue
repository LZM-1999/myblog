<template>
    <div class="albumBox">
        <div class="album">
            <div class="item" v-for="(data,index) in imgesdata" :key="index" ref="item">
                <img :src="data.download_url" alt="" class="img">
            </div>
        </div>
        <!-- <img :src="data.download_url" alt="" class="img" v-for="data in imgesdata" :key="data.id"> -->
        <!-- <button @click="getdata()" class="button">获取更多</button>
        
         -->
        <!-- {{imgesdata}} -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            imgesdata:[],
            stopGetImgesdata:0,
            page:0,
            limit:20,
        }
    },
    methods:{
        getdata(){
            axios.get(
                        `https://picsum.photos/v2/list?page=${this.page+1}&limit=${this.limit}`
                    ).then(res=>{
                        let [...a]=res.data
                        // console.log(a);
                        // this.imgesdata.splice(this.imgesdata.length,0,res.data)
                        this.imgesdata.splice(this.imgesdata.length,0,...a)

                        console.log(res.data);
                        console.log(this.imgesdata);
                    })
        },
        async getImgesdata(){
            return axios.get(
                `https://picsum.photos/v2/list?page=${this.page+1}&limit=${this.limit}`
            ).then(res=>{
                this.imgesdata.splice(this.imgesdata.length,0,...res.data)
                return
                    // window.onresize = ()=>{
                    //     this.fall(items)
                    // }
            }).then(()=>{
                this.$nextTick(()=>{
                    setTimeout(async()=>{
                        var items = document.querySelectorAll('.item'); // 获取所有的外层元素
                        console.log(items);
                        await this.fall(items) 
                        
                        this.DynamicLoading()
                    },2000)
                    
                })
            })
        },
        fall(){
            
            this.stopGetImgesdata+=1
            var items = document.querySelectorAll('.item'); // 获取所有的外层元素
            console.log(items);
            // var album=this.$refs.item
            
            // const minGap = 10; // 最小间距，让每一列的最小空隙可以自定义，避免太过拥挤的情况发生。但是，会通过计算得到真实的间距。
            const gap=5;
            
            const itemWidth = items[0].clientWidth; // 每一项的宽度，即当前每一个图片容器的宽度。保证每一列都是等宽不等高的。
            // const scrollBarWidth = this.getScrollbarWidth();    // 获取滚动条的宽度
            // const pageWidth = window.innerWidth - scrollBarWidth; // 获取当前页面的宽度 = window.innerWidth - 滚动条的宽度
            const pageWidth = document.querySelector('.album').clientWidth+15
            // alert(itemWidth)
            // alert(pageWidth)
            const column = Math.floor(pageWidth / (itemWidth)); // 实际列数=页面宽度/(图片宽度+最小间距)
            // alert(column)
            // const gap = (pageWidth - itemWidth * column) / column/2; // 计算真实间距 = (页面宽度- 图片宽度*实际列数)/实际列数/2
            
            const heightArr = []; // 定义一个空数组，保存最低高度。

            for (let i = 0; i < items.length; i++) {
             // 遍历所有的外层容器
             const height = items[i].offsetHeight;
             // 如果当前处在第一行
             if (i < column) {
                 // 直接设置元素距离上部的位置和距离左边的距离。

                 items[i].style.cssText = `top: ${gap}px;`+`left: ${(itemWidth+gap) * i +gap*3.5}px`;
                 // 保存当前元素的高度。
                 heightArr.push(height);
             } else {
                 // 不是第一行的话，就进行比对。
                 let minHeight = heightArr[0]; // 先保存第一项的高度
                 let minIndex = 0; // 保存第一项的索引值
                 for (let j = 0; j < heightArr.length; j++) {
                     // 通过循环遍历比对，拿到最小值和最小值的索引。
                     if (minHeight > heightArr[j]) {
                         minHeight = heightArr[j];
                         minIndex = j;
                     }
                 }
                 // 通过最小值为当前元素设置top值，通过索引为当前元素设置left值。
                 items[i].style.cssText = `top: ${minHeight+gap}px; left: ${(itemWidth+gap) * minIndex+gap*3.5}px`;
                 // 并修改当前索引的高度为当前元素的高度
                 heightArr[minIndex] = minHeight + gap + height;
                }
            }

        },
        DynamicLoading(){
            let albumBox=document.querySelector('.albumBox')
            let that=this
            
            albumBox.addEventListener('scroll',function(){
                let isget=albumBox.scrollTop +albumBox.clientHeight-albumBox.scrollHeight
                console.log(albumBox.scrollTop +albumBox.clientHeight-albumBox.scrollHeight);
                console.log(albumBox.scrollHeight+'滚动条高度加距离顶部');

                if(isget>=0){
                    console.log(23);
                    that.getImgesdata()
                    // alert('加载下一页!')
                    
                }
            })
            albumBox.removeEventListener('sscroll')
            
            
        }
    },
    components:{

    },
    mounted(){
        this.$nextTick(()=>{
            this.getImgesdata()
        })
        // this.DynamicLoading()


    },
}
</script>
<style lang="less" scoped>
.button{
    position: fixed;
}
.albumBox{
    position: relative;
    width: 100%;
    background-color: rgb(255, 255, 255);
    overflow: auto;
    height: 100%;
    display: flex;
    justify-content: center;
}
.album{
    width: 1250rem;
    position: absolute;
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
    // overflow:visible;
    height: 100%;
    // background-color:red;
    
    // display: flex;
    // flex-direction: column;
    // flex-wrap: wrap;

    // column-count: 6;
    // column-gap: 0;
}
.item{
    position: absolute;
    z-index: 0;
    // border: 1rem solid black;
    // padding: 2rem;
    width: 300rem;
    // flex: 1;
    // height: 20rem;
    background-color: rgba(245, 222, 179, 0);
    display:block;
    // box-sizing: border-box;
    counter-increment: item-counter;
}
// .item:nth-child(4n){
//     order: 4;
// }
// .item:nth-child(4n+1){
//     order: 1;
// }
// .item:nth-child(4n+2){
//     order: 2;
// }
// .item:nth-child(4n+3){
//     order: 3;
// }
.item::after{
    position: absolute;
    // display: block;
    top: 2rem;
    left: 2rem;
    width: 24rem;
    height: 24rem;
    text-align: center;
    line-height: 24rem;
    background-color: black;
    color: white;
    content:counter(item-counter);
}
.img{
    width: 100%;
    height: auto;
    border-radius: 5px;
    // display: block;
}

</style>
