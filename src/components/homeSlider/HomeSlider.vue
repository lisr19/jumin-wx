<template>
    <div>
        <scroll :data="dataList" :scrollX="scrollX" class="slider-wrapper" ref="wrapper">
            <ul class="slider-content">
                <li class="slider-item" v-for="(item,index) in dataList" :key="index" @click="handleClick(item.to)">
                    <img :src="item.img" class="slider-item-img" 
                        :style="computedStyle(index)"
                    />
                    <p class="slider-item-text">{{item.text}}</p>
                </li>
            </ul>
        </scroll>
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'

export default {
    data(){
        return {
            scrollX:true,
            dataList:[
                {
                    img:require("../../../static/img/icon/indus_park.png"),
                    text:"园区产业",
                    to:"industry_park"
                },
                {
                    img:require("../../../static/img/icon/company.png"),
                    text:"入驻企业",
                    to:"settled_enterprises"
                },
                {
                    img:require("../../../static/img/icon/invest.png"),
                    text:"招商引资",
                    to:'investment'
                },
                {
                    img:require("../../../static/img/icon/park_set.png"),
                    text:"园区配套",
                    to:'park_supporting'
                },
                {
                    img:require("../../../static/img/icon/honor.png"),
                    text:"荣誉展览",
                    to:'outstanding_firm'
                },
                {
                    img:require("../../../static/img/icon/default.png"),
                    text:"入驻指南",
                    to:'entry_guide'
                }
            ]
        }
    },
    components:{
        Scroll,
    },
    activated(){
        this.$nextTick(()=>{
            this.$refs.wrapper.refresh()
        })
    },
    methods:{
        computedStyle(index){
            if(index===2){
                return {
                    height:'.64rem',
                    paddingTop:'0.1rem',
                    paddingBottom:'.21rem'
                }
            }else{
                return
            }
        },
        handleClick(to){
            this.$emit('sliderClick',to)
        }
    }
}
</script>

<style>
.slider-wrapper{
    height:2rem;
    width: 7.5rem;
    background-color:#FFF;   
    overflow: hidden;
}
.slider-content{
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    height:1.68rem;
}
.slider-item{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width:.96rem;
    padding-top:.4rem;
    margin:0 .16rem 0 .48rem;
}
.slider-item-img{
    height:.8rem;
    padding-bottom:.15rem
}
.slider-item-text{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(50,50,51,1);
    line-height:.34rem;
}
</style>
