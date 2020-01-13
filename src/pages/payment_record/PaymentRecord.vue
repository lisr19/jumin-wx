<template>
    <div class="wrapper">
        <div class="content-wrapper">
            <div class="scroll-wrapper">
                <scroll :data="dataList" ref="scroll" class="scroll">
                    <ul class="list">
                        <li class="list-item" v-for="(item,index) in dataList" :key="index">
                            <p class="item-title">{{item.paymentMethod}}</p>
                            <p class="item-date">{{item.paymentTime}}</p>
                            <div class="item-number">-{{item.quantity}}</div>
                        </li>
                    </ul>
                </scroll>
            </div>
        </div>
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'
import {otherPageMixin} from '../../common/js/mixin.js'
import {getPaymentList} from '../../api/property'
import {Dialog} from 'vant'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            currentDate:'',
            dataList:[],
        }
    },
    created(){
        if(!localStorage.token){
            return 
        }
        this._getPaymentList(16,2019)
    },
    components:{
        Scroll,
    },
    methods:{
        _getPaymentList(id,year){
            getPaymentList(id,year).then(res=>{
                console.log(res.data,'payment')
                this.dataList = res.data.list
            })
        }
    }
}
</script>

<style scoped>
.date{
    width:3rem;
    height:.7rem;
    background:rgba(246,246,246,1);
    border-radius:.1rem;
    border:.02rem solid rgba(224,224,224,1);
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
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
    height:9rem;
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
}
.item-date{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;    
}
.item-number{
    position:absolute;
    right:.5rem;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size:.24rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(212, 42, 31, 1);
    line-height:.34rem;
    margin-top:.3rem;
}

</style>