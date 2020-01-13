<template>
    <div class="wrapper">
        <p class="warning">
            说明：欠费需要及时缴纳，否则会产生相应的滞纳金。
        </p>
        <scroll class="scroll">
            <ul class="content">
                <li class="content-item" v-for="(item,index) in dataList" :key="index">
                    <div class="item-text">
                        <p class="title">{{item.typeName}}</p>
                        <p class="amount">-￥{{item.totalPrice}}</p>
                    </div>
                    <div class="button-wrapper">
                        <div class="button" @click="pay">
                            <p class="button-text">去缴费</p>
                        </div>
                    </div>
                </li>
            </ul>
        </scroll>
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'
import {getArrearageList} from '../../api/property'

export default {
    data(){
        return {
            dataList:[]
        }
    },
    created(){
        if(!localStorage.token){
            return 
        }
        this._getArrearageList(19)
    },
    components:{
        Scroll,
    },
    methods:{
        pay(){
            this.$router.push({name:'pay'})
        },
        _getArrearageList(id){
            getArrearageList(id).then(res=>{
                console.log(res.data,'arrearage-list')
                this.dataList = res.data.list
            })
        }
    }
}
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:7.5rem;
    height:13.36rem;
    background-color: #FFF;
}
.warning{
    width:6.88rem;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;    
}
.scroll{
    width:7.5rem;
    height:9.5rem;
    overflow: hidden;
}
.content{
    width:7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content-item{
    display: flex;
    width:6.88rem;
    height:2rem;
    background:rgba(255,255,255,1);
    box-shadow:0rem .04rem .08rem 0rem rgba(0,0,0,0.13);
    border-radius:.2rem; 
    margin-top:.36rem;
}
.item-text{
    width:4rem;
    height:2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.title{
    font-size:.28rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.4rem;
    margin:.32rem 0 .32rem .32rem    
}
.amount{
    font-size:.48rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(212,42,31,1);
    line-height:.66rem;  
    margin-left:.4rem;  
}
.button-wrapper{
    width:2.88rem;
    height:2rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.button{
    display: flex;
    justify-content: center;
    align-items: center;
    width:2.24rem;
    height:.66rem;
    background:rgba(255,152,0,1);
    border-radius:.34rem;
    margin-bottom:.34rem;
}
.button-text{
    font-size:.28rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:.4rem;    
}
</style>