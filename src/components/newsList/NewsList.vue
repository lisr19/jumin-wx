<template>
    <scroll :data="dataList" :scrollX="scrollX" class="news-list-wrapper" ref="scroll">
        <ul class="list-content">
            <li class="list-item" v-for="(item,index) in dataList" :key="index+bannerImgNum" @click="handleListClick(index+bannerImgNum)">
                <img :src="item.coverImg" class="list-item-img"/>
                <div class="list-item-context">
                    <p class="list-item-content">{{item.title}}</p>
                    <p class="list-item-date">{{item.date}}</p>
                </div>
            </li>
        </ul>
    </scroll>
</template>

<script>
import Scroll from '../../base/Scroll'
export default {
    props:{
        dataList:{
            type:Array
        },
        bannerImgNum:{
            type:Number,
            default:3
        }
    },
    created(){
        console.log(this.bannerImgNum)
    },
    activated(){
        this.$nextTick(()=>{
            this.$refs.scroll.refresh()
        })
    },
    data(){
        return {
            scrollX:false,
        }
    },
    components:{
        Scroll,
    },
    methods:{
        handleListClick(id){
            this.$emit('newsClick',id)
        }
    },
}
</script>

<style scoped>
.news-list-wrapper{
    width:7.5rem;
    height:48vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-top:.2rem;
    background-color:#fff;
}

.list-content{
    width:7.5rem;
    display: inline-flex;
    flex-direction: column;
}
.list-item{
    height:1.92rem;
    display: flex;
    align-items: flex-start;
    border-bottom: .02rem solid rgba(239,239,239,1)
}
.list-item-img{
    height:1.32rem;
    width:2.32rem;
    margin:.32rem .26rem 0 .12rem;
    border-radius:4px;
}

.list-item-context{
    display: flex;
    height:1.36rem;
    flex:1;
    flex-direction: column;
    justify-content: space-between;
    margin-top:.32rem;
}
.list-item-content{
    flex:1;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.34rem;
}

.list-item-date{
    font-size:.2rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(207,207,207,1);
    line-height:.28rem;
}
</style>
