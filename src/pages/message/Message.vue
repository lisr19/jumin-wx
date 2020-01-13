<template>
    <div class="requirement-wrapper">
        <div class="header">
            <m-header headerText="消息中心" @back="goBack"/>
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
        <router-view class="content"></router-view>
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
            tabList:['军需','合作','科研'],
            nameList:['military_product_message','cooperation_message','scientific_research_message']
        }
    },
    components:{
        mHeader:Header,
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
    created(){
        
    },
    methods:{
        goBack(){
            this.$router.push({name:'example_center'})
        },
        tabClick(index){
            if(this.currentIndex == index){
                return 
            }
            this.currentIndex = index
            this.$router.push({name:this.nameList[index]})
        },
    } 
}
</script>

<style scoped>
.tab{
    display: flex;
    align-items: center;
    width:7.5rem;
    height:1.4rem;  
    box-shadow:0rem .04rem .08rem 0rem rgba(0,0,0,0.09);
    background-color:#FFF;
}
.tab-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:.56rem;
    margin-left:.9rem;
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
</style>