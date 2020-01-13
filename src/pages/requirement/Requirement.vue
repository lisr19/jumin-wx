<template>
    <div class="message-wrapper">
        <div class="header">
            <m-header headerText="军民合作需求" @back="goBack"/>
        </div>
        <div class="tab">
            <div class="tab-item" v-for="(item,index) in tabList" :key="index" @click="tabClick(index)">
                <div 
                    class="item-text"
                    :class="{active:currentIndex==index?true:false}"
                >
                    {{item}}
                </div>
                <div class="item-border" v-show="currentIndex===index?true:false"></div>
            </div>
        </div>
        <keep-alive>
            <router-view class="content"></router-view>
        </keep-alive>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import {otherPageMixin} from '../../common/js/mixin.js'
import {Dialog} from 'vant'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            currentIndex:0,
            tabList:['军品采购','军企合作','科研对接'],
            nameList:['military_product','cooperation','scientific_research']
        }
    },
    activated(){
        if(!localStorage.token){
            Dialog.alert({
                title:'提示',
                message:'请登录！'
            }).then(()=>{
                this.$router.push({path:'/my'})
            })
        }
    },
    components:{
        mHeader:Header,
    },
    methods:{
        goBack(){
            this.$router.push({name:'company'})
        },
        tabClick(index){
            if(this.currentIndex == index){
                return 
            }
            this.currentIndex = index
            this.$router.push({name:this.nameList[index]})
        }
    }
}
</script>

<style scoped>
.message-wrapper{
    background-color: #FFF;
    display: flex;
    flex-direction: column;
}
.tab{
    display: flex;
    align-items: center;
    width:7.5rem;
    height:1.4rem;  
    box-shadow:0rem .04rem .08rem 0rem rgba(0,0,0,0.09);
}
.tab-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:.56rem;
    margin-left:.48rem;
}
.item-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(170,170,170,1);
    line-height:.44rem;  
    margin-bottom:.06rem;  
}
.item-border{
    width:.8rem;
    height:.3rem;
    background:rgba(255,152,0,1);
    border-radius:.12rem;
}
.active{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,152,0,1);
    line-height:.44rem;    
}
.content{
   height:10.86rem; 
   margin-top:.1rem;
   display: flex;
   flex-direction: column;
}
</style>
