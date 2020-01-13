<template>
    <div class="wrapper">
        <div class="header">
            <m-header headerText="物业管理" @back="goBack"/>
        </div>
        <div class="tab-bar">
            <div class="tab-item" v-for="(item,index) in dataList" :key="index" @click="handleTabClick(index)">
                <img class="item-img" :src="item.imgUrl"/>
                <p class="item-text">{{item.text}}</p>
                <img v-show="currentIndex==index" :src="require('../../../static/img/property_icon/marked.png')" class="marked"/>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import {otherPageMixin} from '../../common/js/mixin.js'
import {Dialog} from 'vant'

export default {
    mixins:[otherPageMixin],
    beforeRouteEnter(to,from,next){
        let name = from.name
        next(vm=>{
            if(name=='my'|| name=='company'||name=='park_supporting'){
                vm.fromName = name
            }
        })
    },
    data(){
        return {
            currentIndex:0,
            fromName:'my',
            dataList:[
                {
                    imgUrl:require('../../../static/img/property_icon/pay_record@2x.png'),
                    text:'缴费记录',
                    to:'payment_record'
                },
                {
                    imgUrl:require('../../../static/img/property_icon/arrearage@2x.png'),
                    text:'物业欠费',
                    to:'arrearage'
                },
                {
                    imgUrl:require('../../../static/img/property_icon/fix@2x.png'),
                    text:'物业报修',
                    to:'fix'
                }
            ]
        }
    },
    activated(){
        this.currentIndex=this.$route.name == 'payment_record'? 0 :this.$route.name == 'arrearage' ? 1 : 2 
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
            this.$router.push({name:this.fromName})
        },
        handleTabClick(index){
            if(this.currentIndex==index){
                return 
            }
            this.currentIndex = index
            this.$router.push({name:this.dataList[index].to})
        },
    }    
}
</script>

<style scoped>
.wrapper{
    height:13.36rem;
    width:7.5rem;
    background-color: #F7F8FA;
    overflow: hidden;
}
.tab-bar{
    height:2.13rem;
    width:7.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFF;
}
.tab-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:.36rem;
}
.item-img{
    z-index:2;
    height:.76rem;
    margin-bottom:.16rem;
}
.marked{
    z-index:1;
    position: absolute;
    top:1.7rem;
}
.item-text{
    font-size:.28rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.4rem;   
    padding-bottom:.26rem
}
</style>