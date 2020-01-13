<template>
    <div class="swiper-wrapper">
        <v-swipe 
            :autoplay="autoplayTime" 
            :indicator-color="dotsColor" 
            :loop="loop" 
            :show-indicators="showDots" 
            :touchable="touchable" 
        >
            <v-swipe-item v-for="(item,index) in dataList" :key="index" @click="swipeClick(index)" >
                <div :style="imgClass">
                    <img :src="item.coverImg" :style="imgClass"/>
                </div>
                <div class="banner-content-wrapper">
                    <p class="banner-content">
                        {{item.title}}
                    </p>
                </div>
            </v-swipe-item>
        </v-swipe>
    </div>    
</template>

<script>
import {Swipe,SwipeItem} from 'vant'

export default {
    //传入props控制banner运行状态
    props:{
        dataList:{
            type:Array
        },
        autoplayTime:{
            type:Number,
            default:4500
        },
        dotsColor:{
            type:String,
            defalut:"#1989fa"
        },
        loop:{
            type:Boolean,
            default:true
        },
        showDots:{
            type:Boolean,
            default:true
        },
        touchable:{
            type:Boolean,
            default:true
        },
        width:{
            type:String
        },
        height:{
            type:String
        }

    },
    mounted(){
        console.log(this.dataList)
    },
    components:{
        vSwipe:Swipe,
        vSwipeItem:SwipeItem
    },
    methods:{
        swipeClick(index){
            this.$emit('swipeClick',index)
        }
    },
    computed:{
        imgClass(){
            return {
                width:this.width,
                height:this.height
            }
        }
    }
}
</script>

<style scoped>
.swipe-item{
    width:7rem;
    height:3rem;
}
.swipe-item-img{
    width:7rem;
    height:3rem;
}

.banner-content-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    width:7.26rem;
    height:0.86rem;
    z-index:99;
    position: fixed;
    bottom:0px;
    text-align:center;
    background-color:rgba(2, 2, 2, 0.5)
}
.banner-content{
    margin:0px;
    width:6.8rem;
    height:.68rem;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:.34rem;
}

</style>
