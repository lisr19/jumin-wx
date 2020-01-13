<template>
    <div class="wrapper">
        <div class="header"><m-header headerText="安全检查" @back="goBack"/></div>
        <div class="content">
            <div class="add-item" @click="addClick">
                <img class="add-item-icon" :src="require('../../../static/img/property_icon/add.png')"/>
                <p class="add-item-title">安全检查申请</p>
            </div>
            <scroll class="scroll">
                <ul class="list">
                    <li class="list-item" v-for="(item,index) in dataList" :key="index">
                        <div class="left-text">
                            <p class="title">{{item.planName}}</p>
                            <p class="name">{{item.executePeople}}</p>
                        </div>
                        <div class="right-text" @click="showDetail(index)">
                            <p class="detail">详情</p>
                        </div>
                    </li>
                </ul>
            </scroll>
        </div>
        <safe-add class="add" v-show="showAddFlag" @confirm="confirm" @cancel="cancel"/>
        <safe-detail 
            :code="code"
            :planName="planName"
            :executePeople="executePeople"
            :planCheckTime="planCheckTime"
            :planExecuteFrequent="planExecuteFrequent"
            class="item-detail" 
            v-show="showDetailFlag" 
            @confirm="hideDetail"
        />
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'
import Header from '../../components/header/Header'
import {otherPageMixin} from '../../common/js/mixin.js'
import SafeAdd from '../../components/safe_add/SafeAdd'
import SafeDetail from '../../components/safe_detail/SafeDetail'
import {getSecure,addSecure} from '../../api/secure'
import {Dialog} from 'vant'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            showDetailFlag:false,
            showAddFlag:false,
            showRightText:true,
            code:'',
            planName:'',
            executePeople:'',
            planCheckTime:'2019-11-19',
            planExecuteFrequent:'安全进行中',
            dataList:[],
        }
    },
    components:{
        mHeader:Header,
        Scroll,
        SafeAdd,
        SafeDetail,
    },
    activated(){
        if(!localStorage.token){
            Dialog.alert({
                title:'提示',
                message:'请登录！'
            }).then(()=>{
                this.$router.push({path:'/my'})
            })
        }
    },
    mounted(){
        if(localStorage.token){
            getSecure().then(res=>{
                console.log(res.data)
                this.dataList = res.data.list
            })
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        addClick(){
            this.showAddFlag = true
        },
        confirm(form){
            this.showAddFlag = false;
            addSecure(form)
        },
        cancel(){
            this.showAddFlag = false;
            alert('canceled!')
        },
        showDetail(index){
            let item = this.dataList[index]
            this.code =  item.number
            this.planName = item.planName
            this.executePeople = item.executePeople
            this.planCheckTime = item.planCheckTime
            this.planExecuteFrequent = item.planExecuteFrequent
            this.showDetailFlag = true
        },
        hideDetail(){
            this.showDetailFlag = false
        }
    }
}
</script>

<style scoped>
.wrapper{
    height:13.36rem;
    width:7.5rem;
    background-color: #F7F8FA;
}
.content{
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
    width:7.26rem;
    height:10.6rem;
    overflow: hidden;
    margin-top:.2rem;
}
.list{
    width:7.26rem;
    display: flex;
    flex-direction: column;
}
.list-item{
    width:7.26rem;;
    height:1.56rem;
    background:rgba(255,255,255,1);
    border-radius:.12rem;   
    display: flex; 
    justify-content: space-between;
    margin-bottom:.2rem;
}
.left-text{
    height:1.56rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-left:.3rem;
}
.title{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.44rem;    
}
.name{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;    
}
.right-text{
    height:1.56rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:.8rem;
}
.detail{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(205,205,205,1);
    line-height:.34rem;
}
.add{
    z-index:999;
    position: absolute;
    top:0;
}
.item-detail{
    z-index:999;
    position: absolute;
    top:0;
}

</style>