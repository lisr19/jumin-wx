<template>
    <div class="wrapper">
        <m-header headerText="入驻企业" @back="goBack"/>
        <div class="scroll-wrapper">
            <scroll :data="dataList" ref="scroll" class="scroll">
                <v-cell-group>
                    <v-cell 
                        v-for="(item,index) in dataList"
                        :key="index"
                        :title="item.name"  
                        :label="item.addTime.slice(0,10)+' 入驻'"
                        is-link
                        title-class="item-title"
                        label-class	="item-label"
                        center
                        @click="selectItem(item,index)"
                    />
                </v-cell-group>
            </scroll>
        </div>
        <div class="button" @click="handleButtonClick">
            <p class="button-text">我也要入驻</p>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import Scroll from '../../base/Scroll'
import { Cell, CellGroup, Dialog } from 'vant'
import {otherPageMixin} from '../../common/js/mixin.js'
import {getCompanyList} from '../../api/settled_company'


export default {
    mixins:[otherPageMixin],
    data(){
        return {
            dataList:[],
        }
    },
    created(){
        this._getCompanyList()
    },
    components:{
        mHeader:Header,
        Scroll,
        vCell:Cell,
        vCellGroup:CellGroup,
    },
    methods:{
        goBack(){
            this.$router.push({name:'home'})
        },
        handleButtonClick(){
            if(!localStorage.token){
                Dialog.alert({
                    title:'提示',
                    message:'请登录！'
                }).then(()=>{
                    this.$router.push({name:'my'})
                })
            }
            this.$router.push({name:'entry_apply'})
        },
        _getCompanyList(){
            getCompanyList().then(res=>{
                console.log(res.data)
                this.dataList = res.data.list
            })
        },
        selectItem(item,index){
            this.$router.push(
                {
                    name:'settled_firm_detail',
                    params:{
                        id:index,
                        title:item.name,
                        content:item.shortDesc,
                        img:item.logoUrl,
                        date:item.addTime,
                    }
                }
            )
        }
    }
}
</script>

<style scoped>
.wrapper{
    background-color:#FFF;
}
.scroll-wrapper{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.scroll{
    width:7rem;
    height:81vh;
    overflow: hidden;
    margin-top:.3rem;
}
.item-title{
    font-size:.36rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.5rem;    
}
.item-label{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;
}
.button{
    position:fixed;
    bottom:0;
    width:7.5rem;
    height:1rem;
    background:rgba(255,152,0,1);
    text-align: center;
}
.button-text{
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: .44rem;
    padding-top:.3rem;
    
}
</style>