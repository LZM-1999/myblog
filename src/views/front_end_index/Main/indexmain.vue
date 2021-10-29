<template>
    <div id="indexmain">
        <Swiper></Swiper>
        <Recommend></Recommend>
    </div>
</template>

<script>
import Swiper from '../../../components/front_end_modules/indexmain/swiper.vue'
import Recommend from '../../../components/front_end_modules/indexmain/recommend.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Swiper,
        Recommend
    }
}
</script>

<style lang="less" scoped>
#indexmain{
    width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: column;
}
</style>