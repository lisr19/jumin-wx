<template>
    <div class="wrapper">
        <m-header headerText="军民共享资源" @back="goBack"/>
        <div class="scroll-wrapper">
            <scroll :data="dataList" ref="scroll" class="scroll">
                <v-cell-group>
                    <v-cell 
                        v-for="(item,index) in dataList"
                        :key="index"
                        :title="item.productName"  
                        :label="'价格：'+item.price +'元'"
                        is-link
                        title-class="item-title"
                        label-class	="item-label"
                        center
                        @click="selectItem(item,index)"
                    />
                </v-cell-group>
            </scroll>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import Scroll from '../../base/Scroll'
import { Cell, CellGroup } from 'vant'
import {otherPageMixin} from '../../common/js/mixin.js'
import {getShareList,addShare} from '../../api/share'
import {Dialog} from 'vant'


export default {
    mixins:[otherPageMixin],
    data(){
        return {
            dataList:[],
        }
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
            this._getShareList()
        }
    },
    components:{
        mHeader:Header,
        Scroll,
        vCell:Cell,
        vCellGroup:CellGroup,
    },
    methods:{
        goBack(){
            this.$router.push({name:'company'})
        },
        _getShareList(){
            getShareList().then(res=>{
                console.log(res.data)
                this.dataList = res.data.list
            })
        },
        selectItem(item,index){
            this.$router.push(
                {
                    name:'share_detail',
                    params:{
                        id:index,
                        title:item.productName,
                        content:item.introduce,
                        img:item.imgUrl,
                        date:`价格：${item.price}元`,
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
    height:12rem;
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
</style>