<template>
    <div class="wrapper">
        <div>
            <m-header headerText="入驻指南" @back="goBack"/>
        </div>
        <div class="tab-bar">
            <div class="button" 
                v-for="(item,index) in tabList" 
                :key="index" 
                @click="tabClick(index)"
                :class="{activeButton:currentIndex==index?true:false}"
            >
                <p 
                    class="button-text" 
                    :class="{activeText:currentIndex==index?true:false}"
                >
                    {{item}}
                </p>
            </div>
            <div class="download" @click="handleDownloadClick">
                <img class="download-icon" :src="require('../../../static/img/common_icon/download.png')"/>
                <p class="download-text">下载资料</p>
            </div>
        </div>
        <router-view></router-view>
        <div class="footer" @click="footerClick">
            <p class="footer-text">立即入驻</p>
        </div>
    </div>    
</template>

<script>
import Header from '../../components/header/Header'
import {otherPageMixin} from '../../common/js/mixin.js'
import { Dialog } from 'vant'
import {getDoc} from '../../api/settled_company'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            currentIndex:0,
            tabList:['入驻流程','入驻条件'],
            nameList:['entry_step','entry_requirement']
        }
    },
    components:{
       mHeader:Header,
   },
   methods:{
       goBack(){
           this.$router.push({name:'home'})
       },
       tabClick(index){
           if(this.currentIndex == index){
               return 
           }
           this.currentIndex = index
           this.$router.push({name:this.nameList[index]})
       },
       footerClick(){
           if(!localStorage.token){
                Dialog.alert({
                    title:'提示',
                    message:'请登录！'
                }).then(()=>{
                    this.$router.push({path:'/my'})
                })
           }else{
                this.$router.push({name:'entry_apply'})
           }
       },
       handleDownloadClick(){
           Dialog.confirm({
               title:'文件下载',
               message:'请确认是否要下载该内容？'
           }).then(()=>{
                getDoc().then(res=>{
                    alert(res.data.list[0].docUrl+'已下载')
                })
           }).catch(()=>{
               alert('取消下载！')
           })
       }
   }
}
</script>

<style scoped>
.wrapper{
    width:7.5rem;
    height:13.34rem;
    background-color:#FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tab-bar{
    height:1.26rem;
    width:7.5rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.button{
    width:2.12rem;
    height:.7rem;
    background:rgba(242,243,244,1);
    border-radius:.36rem;   
    display:flex;
    justify-content: center;
    align-items: center;
}
.activeButton{
    width:2.12rem;
    height:.7rem;
    background:rgba(212,42,31,1);
    border-radius:.36rem;      
}
.button-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(172,172,172,1);
    line-height:.44rem;
}
.activeText{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:.44rem;    
}
.download{
    width:2rem;
    height:.7rem;
    display:flex;
    justify-content: center;
}
.download-icon{
    width:.36rem;
    height:.36rem;
    margin-top:.2rem;
    margin-right:.2rem
}
.download-text{
    font-size:.28rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(0,122,255,1);
    line-height:.4rem;    
    margin-top:.2rem;
}
.footer{
    position:fixed;
    bottom:0;
    display: flex;
    justify-content: center;
    align-items: center;
    width:7.5rem;
    height:1rem;
    background:rgba(255,152,0,1);
}
.footer-text{
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.44rem;    
}
</style>