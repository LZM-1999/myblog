<template>
    <div id="recommendBox">
        <div class="recommend">
            <h1>精选</h1>
            <div class="recommendCar">
                <div class="Car"></div>
                <div class="Car"></div>
                <div class="Car"></div>
            </div>
        </div>
        
    </div>
</template>

<style lang="less" scoped>
#recommendBox{
    width: 100%;
    height: 1500px;
    background-color: tomato;
 
    display: flex;
    flex-direction: column;
    align-items: center;
}
.recommend{
    width: 90%;
    height: 400px;
    background-color: wheat;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.recommendCar{
    background-color: yellow;
    width: 95%;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.Car{
    width: 30%;
    height: 90%;
    background-color: rgb(168, 168, 168);
    
}
</style>