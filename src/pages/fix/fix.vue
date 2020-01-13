<template>
    <div class="wrapper">
        <div class="add-item" @click="showApply">
            <img class="add-item-icon" :src="require('../../../static/img/property_icon/add.png')"/>
            <p class="add-item-title">报修申请</p>
        </div>
        <scroll :data="dataList" ref="scroll" class="scroll">
            <ul class="list">
                <li class="list-item" v-for="(item,index) in dataList" :key="index">
                    <p class="item-title">{{item.repairContent}}</p>
                    <p class="item-date">{{item.reportRepairTime}}</p>
                    <div class="item-status">已提交</div>
                </li>
            </ul>
        </scroll>
        <fix-apply v-show="showApplyFlag" class="fix-apply" @back="hideApply" @submit="submit"/>
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'
import FixApply from '../../components/fix_apply/FixApply'
import {getFixList,addFixApply} from '../../api/property'

export default {
    data(){
        return {
            showApplyFlag:false,
            dataList:[]
        }
    },
    created(){
        if(!localStorage){
            return 
        }
        this._getFixList(76)
    },
    components:{
        Scroll,
        FixApply,
    },
    methods:{
        showApply(){
            this.showApplyFlag = true
        },
        hideApply(){
            this.showApplyFlag = false
        },
        submit(value){
            console.log(value)
            let form = {}
            form.enterpriseId = 76
            form.repairContent = value.title
            form.detailContet = value.detail
            addFixApply(form)
            this.showApplyFlag = false
        },
        _getFixList(id){
            getFixList(id).then(res=>{
                console.log(res.data,'fix-list')
                this.dataList=res.data.list
            })
        },
    }
}
</script>

<style scoped>
.wrapper{
    width:7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.add-item{
    width:6.88rem;
    height:1rem;
    background:rgba(255,255,255,1);
    box-shadow:0rem .04rem .08rem 0rem rgba(0,0,0,0.13);
    border-radius:.2rem;
    display: flex;
    justify-content: center;
    align-items: center;   
    margin-top:.3rem; 
}
.add-item-icon{
    width:.5rem;
    height:.5rem;
    margin-right:.36rem;
}
.add-item-title{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.44rem;
}
.scroll{
    width:7rem;
    height:8.5rem;
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
    margin-top:.2rem;
}
.fix-apply{
    z-index:99;
    position: absolute;
    top:0;
}
</style>