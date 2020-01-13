<template>
    <div class="more-wrapper">
        <div>
            <m-header 
                headerText="" 
                :showRightIcon="showRightIcon"
                @back="back" 
                @rightIconClick="showMessage"
            />
        </div>
        <div class="more-content">
            <div class="content-title">成果转化中心</div>
            <div class="content-body-wrapper">
                <div v-for="(item,index) in dataList" :key="index" class="content-body-item" @click.stop="itemClick(item.to)">
                    <img :src="item.imgUrl" class="item-img"/>
                    <p class="item-text">{{item.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import {otherPageMixin} from '../../common/js/mixin.js'

export default {
    mixins:[otherPageMixin],
    beforeRouteEnter(to,from,next){
        let name = from.name
        next(vm=>{
            if((name=='company')||(name == 'my')){
                vm.fromName = name
            }
        })
    },
    data(){
        return{
            fromName:'company',
            showRightIcon:true,
            dataList:[
                {
                    imgUrl:require("../../../static/img/company_icon/political_service.png"),
                    text:"优秀企业"
                },
                {
                    imgUrl:require("../../../static/img/company_icon/book.png"),
                    text:"军民融合需求",
                    to:"requirement"
                },
                {
                    imgUrl:require("../../../static/img/company_icon/success.png"),
                    text:"成果案例",
                    to:"example"
                },
                {
                    imgUrl:require("../../../static/img/company_icon/share.png"),
                    text:"军民共享资源",
                    to:"share"
                },
                {
                    imgUrl:require("../../../static/img/company_icon/product.png"),
                    text:"产品展示",
                    to:"product_show"
                }
            ]
        }
    },
    components:{
        mHeader:Header,
    },
    methods:{
        showMessage(){
            this.$router.push({name:'message'})
        },
        itemClick(to){
            this.$router.push({name:to})
        },
        back(){
            this.$router.push({name:this.fromName})
        }
    }
}
</script>

<style scoped>
.more-wrapper{
    z-index:99;
    background-color: #F7F7F7;
    width:7.5rem;
    height:13.34rem;
    display: flex;
    flex-direction: column;
}
.more-content{
    width:7.26rem;
    height:4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left:.12rem;
    margin-top:.3rem;
    background-color: #FFF;
}
.content-body-wrapper{
    display: flex;
    flex-wrap: wrap;
}
.content-title{
    font-size:.36rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.5rem;   
    margin-left:.45rem; 
    margin-top:.32rem; 
    margin-bottom:.4rem;
}
.content-body-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:1.815rem;
    flex-shrink: 0;
    margin-bottom:.6rem;
}
.item-text{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(50,50,51,1);
    line-height:.34rem;   
}
.item-img{
    width:.48rem;
    height:.48rem;
    margin-bottom:.08rem;
}
</style>
