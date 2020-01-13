<template>
    <div class="detail-wrapper">
        <div class="page-header">
            <v-icon name="arrow-left" size="0.44rem" class="header-icon" @click="handleBack"/>
            <p class="header-text">{{title}}</p>
        </div>
        <div class="detail-header-wrapper" v-if="showHeader">
            <p class="detail-header-content">{{detailTitle}}</p>
            <p class="detail-header-date">{{date}}</p>
        </div>
        <scroll :dataList="list" class="scroll">
            <div class="detail-content">
                <img class="detail-img" :src="detailImg"/>
                <div class="content-wrapper">
                    <div class="content-title"><p class="content-title-text">对接简介：</p></div>
                    <div class="detail-text" v-html="detailText"></div>
                </div>
                <div class="contact-wrapper">
                    <div class="contact-title">
                        <p class="contact-title-text">联系方式：</p>
                    </div>
                    <div class="contact-text">{{contact}}</div>
                </div>
                <div class="status-wrapper">
                    <div class="status-title">
                        <p class="status-title-text">对接状态：</p>
                    </div>
                    <div class="status-text">{{status}}</div>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
import { Icon } from 'vant';
import Scroll from '../../base/Scroll'

export default {
    props:{
        title:{
            type:String,
            default:'详情'
        },
        detailTitle:{
            type:String
        },
        date:{
            type:String,
        },
        detailImg:{
            type:String
        },
        detailText:{
            type:String
        },
        showHeader:{
            type:Boolean,
            default:true
        },
        contact:{
            type:String,
            default:''
        },
        status:{
            type:String,
            default:''
        }

    },
    data(){
        return {
            list:[]
        }
    },
    components:{
        vIcon:Icon,
        Scroll
    },
    methods:{
        handleBack(){
            this.$emit('back')
        },
        handleButtonClick(){
            this.$emit('contact')
        }
    }
}
</script>

<style scoped>
.detail-wrapper{
    width:100vh;
}
.page-header{
    height:.48rem;
    display: flex;
    padding:.36rem 0 0 0  
}
.header-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.44rem;
}
.header-icon{
    margin-left:.28rem;
    margin-right:.06rem;
}
.detail-header-wrapper{
    display: inline-flex;
    flex-direction: column;

    height:1.34rem;
    width:6.86rem;
    margin-bottom:.44rem;
    margin-left:.32rem;
    margin-right:.32rem;
}
.detail-header-content{
    font-size:.36rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:600;
    color:rgba(51,51,51,1);
    line-height:.5rem;
    white-space:normal;
    word-wrap: break-all;
    margin-bottom:.08rem;
}
.detail-header-date{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(154,154,154,1);
    line-height:.34rem;
}
.scroll{
    width:7.5rem;
    height:9rem;
    overflow: hidden;
}
.detail-content{
    display:flex;
    flex-direction: column;
    margin-left:.32rem;
}
.content-title{
    width:6.86rem;
    display: flex;
    justify-content: flex-start;
    margin-bottom:.2rem;
}
.content-title-text{
    font-size:.34rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:600;
    color:rgba(68,68,68,1);
    line-height:.44rem;   
}
.detail-img{
    width:6.86rem;
    height:3.24rem;
    margin-bottom:0.32rem;
}
.content-wrapper{
    width:6.86rem;
    display: flex;
    flex-direction: column;
}
.contact-wrapper{
    width:6.86rem;
    display: flex;
    flex-direction: column;
}
.contact-title{
    width:6.86rem;
    display: flex;
    justify-content: flex-start;
    margin-bottom:.2rem;
    margin-top:.2rem;
}
.contact-title-text{
    font-size:.34rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:600;
    color:rgba(68,68,68,1);
    line-height:.44rem;   
}
.contact-text{
    flex:1;
    width:6.86rem;
    word-wrap: break-all;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(68,68,68,1);
    line-height:.34rem;
    white-space: pre-line
}
.status-wrapper{
    width:6.86rem;
    display: flex;
    flex-direction: column;
}
.status-title{
    width:6.86rem;
    display: flex;
    justify-content: flex-start;
    margin-bottom:.2rem;
    margin-top:.2rem;
}
.status-title-text{
    font-size:.34rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:600;
    color:rgba(68,68,68,1);
    line-height:.44rem;   
}
.status-text{
    flex:1;
    width:6.86rem;
    word-wrap: break-all;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(68,68,68,1);
    line-height:.34rem;
    white-space: pre-line
}
.detail-text{
    flex:1;
    width:6.86rem;
    word-wrap: break-all;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(68,68,68,1);
    line-height:.34rem;
    white-space: pre-line
}
.button{
    width:7.5rem;
    height:1.4rem;
    background:rgba(255,152,0,1);
    text-align: center;
}
.button-text{
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: .44rem;
    padding-top:.3rem;
}
</style>