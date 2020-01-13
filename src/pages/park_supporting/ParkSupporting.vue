<template>
    <div class="wrapper" @click.stop.prevent='isLogin'>
        <div>
            <m-header headerText="园区配套" @back="goBack"/>
        </div> 
        <div class="content-body">
            <div class="item" @click="apply">
                <img class="item-img" :src="require('../../../static/img/supporting_img/apply.png')"/>
                <p class="item-text">入驻申请</p>
            </div>
            <div class="item" @click="property">
                <img class="item-img" :src="require('../../../static/img/supporting_img/property_management.png')"/>
                <p class="item-text">物业服务</p>
            </div>
            <div class="item" @click='business'>
                <img class="item-img" :src="require('../../../static/img/supporting_img/business.png')"/>
                <p class="item-text">商务服务</p>
            </div>
            <div class="item" @click='safe'>
                <img class="item-img" :src="require('../../../static/img/supporting_img/safe.png')"/>
                <p class="item-text">安全服务</p>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import {otherPageMixin} from '../../common/js/mixin.js'
import {Dialog} from 'vant'

export default {
    mixins:[otherPageMixin],
    components:{
        mHeader:Header,
    },
    methods:{
        isLogin(){
            if(!localStorage.token){
                Dialog.alert({
                    title:'提示',
                    message:'请登录！'
                }).then(()=>{
                    this.$router.push({path:'/my'})
                })
            }else{
                return 
            }
        },
        goBack(){
            this.$router.push({name:'home'})
        },
        apply(){
            this.$router.push({name:'entry_apply'})
        },
        property(){
            this.$router.push({name:'property_management'})
        },
        business(){
            this.$router.push({name:'business_service'})
        },
        safe(){
            this.$router.push({name:'safe_service'})
        }
    }
}
</script>

<style scoped>
.wrapper{
    height:13.34rem;
    width:7.5rem;
    background-color:#F7F8FA;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content-body{
    width:6.54rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top:.5rem;
}
.item{
    width:3.08rem;
    height:3.08rem;
    background:rgba(255,255,255,1);
    box-shadow:0rem .04rem .08rem 0rem rgba(166,166,166,0.32);
    border-radius:.3rem .3rem .96rem .3rem; 
    margin-bottom:.5rem;
    display:flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;  
}
.item-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.44rem;
    margin-top:.22rem;
}
</style>