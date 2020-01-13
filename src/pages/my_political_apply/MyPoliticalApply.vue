<template>
    <div class="wrapper">
        <div>
            <m-header headerText="政策服务"  @back="goBack"/>
        </div>
        <div class="content-wrapper">
            <div class="scroll-wrapper">
                <scroll :data="dataList" ref="scroll" class="scroll">
                    <ul class="list">
                        <li class="list-item" v-for="(item,index) in dataList" :key="index">
                            <p class="item-title">{{item.policyName}}</p>
                            <p class="item-date">{{item.applyTime.slice(0,10)}}</p>
                            <div class="item-status">已申请</div>
                        </li>
                    </ul>
                </scroll>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '../../components/header/Header'
import Scroll from '../../base/Scroll'
import {otherPageMixin} from '../../common/js/mixin.js'
import {getPolicyApply} from '../../api/policy'



export default {
    mixins:[otherPageMixin],
    data(){
        return {
            dataList:[],
        }
    },
    created(){
        this._getPolicyApply()
    },
    components:{
        mHeader:Header,
        Scroll,
    },
    methods:{
        goBack(){
            this.$router.push({name:'political_service'})
        },
        _getPolicyApply(){
            getPolicyApply(19).then(res=>{
                console.log(res.data,'apply-list')
                this.dataList = res.data.list
            })
        }
    }
}
</script>

<style scoped>
.wrapper{
    height:13.34rem;
    background-color:#FFF;
    display: flex;
    flex-direction: column;
    align-items:center;
}
.content-wrapper{
    margin-top:.24rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.scroll-wrapper{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.scroll{
    width:7rem;
    height:10.8rem;
    overflow: hidden;
    margin-top:.3rem;
}
.list-item{
    display: inline-flex;
    flex-direction: column;
    align-items:flex-start;
    width:6.6rem;
    height:1.2rem;
    margin-left:.2rem;
    border-bottom: .02rem solid #E4E4E4;
}
.item-title{
    font-size:.36rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.5rem;
    margin-bottom:.1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width:3.42rem;
    height:.5rem;
}
.item-date{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;    
}
.item-status{
    position:absolute;
    right:.5rem;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size:.24rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255, 152, 0, 1);
    line-height:.34rem;
}

</style>