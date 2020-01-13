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
        <div class="detail-content">
            <img class="detail-img" :src="detailImg"/>
            <div class="detail-text" v-html="detailText"></div>
        </div>
        <div class="footer" @click="handleFooterClick" v-if="showFooter">
            <p class="footer-text">政策申请</p>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
import {Dialog} from 'vant'


export default {
    beforeRouteEnter(to,from,next){
        if(from.name === null){
            next(vm=>{
                vm.confirmRefresh()
            })
        }
        next()
    },
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
        showFooter:{
            type:Boolean,
            default:false
        }

    },
    data(){
        return {
        }
    },
    components:{
        vIcon:Icon,
    },
    methods:{
        handleBack(){
            this.$emit('back')
        },
        confirmRefresh(){
            Dialog.alert({
                title:'提示',
                message:'刷新页面将会退回上一级'
            }).then(()=>{
                this.$router.go(-1)
            })
        },
        handleFooterClick(){
            this.$emit('footerClick',this.$route.params.id)
        }
    }
}
</script>

<style scoped>
.detail-wrapper{
    height:100vh;
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
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
.detail-content{
    display:flex;
    flex-direction: column;
    margin-left:.32rem;
}
.detail-img{
    max-width:6.86rem;
    margin-bottom:0.32rem;
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
.footer{
    position:fixed;
    bottom:0;
    width:7.5rem;
    height:1rem;
    background:rgba(255,152,0,1);
    text-align: center;
}
.footer-text{
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: .44rem;
    padding-top:.3rem;
    
}
</style>